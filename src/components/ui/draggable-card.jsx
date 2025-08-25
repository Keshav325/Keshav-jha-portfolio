"use client";
import { cn } from "../../lib/utils";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  animate,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({ className, children, constraintsRef }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), springConfig);
  const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), springConfig);
  const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? { width: 0, height: 0, left: 0, top: 0 };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraintsRef}        // 👈 constrain to the viewport wrapper you pass in
      dragElastic={0.15}
      dragMomentum={false}                     // 👈 no sliding past the edge
      onDragStart={() => (document.body.style.cursor = "grabbing")}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: { type: "spring", ...springConfig },
        });

        // optional bounce feel
        const vx = velocityX.get();
        const vy = velocityY.get();
        const v = Math.sqrt(vx * vx + vy * vy);
        const bounce = Math.min(0.8, v / 1000);

        animate(info.point.x, info.point.x + vx * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + vy * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      style={{ rotateX, rotateY, opacity, willChange: "transform" }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-96 w-80 overflow-hidden rounded-md p-6 shadow-2xl transform-3d",
        // keep your own bg classes per usage; leave transparent by default
        className
      )}
    >
      {children}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white/10 select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return <div className={cn("[perspective:3000px] grid gap-6", className)}>{children}</div>;
};
