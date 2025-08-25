"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

// get random spawn point anywhere in the viewport
const getRandomStartPoint = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    angle: Math.random() * 360, // random direction
  };
};

export const ShootingStars = ({
  minSpeed = 2,
  maxSpeed = 6,
  minDelay = 100,    // faster spawn rate
  maxDelay = 800,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 25,
  starHeight = 3,
  maxStars = 80,     // allow more meteors
  className,
}) => {
  const [stars, setStars] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    let spawnTimeout;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now() + Math.random(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
        opacity: 1,
      };

      setStars((prevStars) => {
        if (prevStars.length > maxStars) return [...prevStars.slice(1), newStar];
        return [...prevStars, newStar];
      });

      // schedule next star spawn
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      spawnTimeout = setTimeout(createStar, randomDelay);
    };

    createStar(); // start loop

    return () => clearTimeout(spawnTimeout);
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX =
              star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY =
              star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 200;

            let newOpacity = star.opacity;
            if (
              newX < -200 ||
              newX > window.innerWidth + 200 ||
              newY < -200 ||
              newY > window.innerHeight + 200
            ) {
              return null; // remove when off screen
            }

            if (newDistance > 500) {
              newOpacity = Math.max(0, star.opacity - 0.02);
            }

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
              opacity: newOpacity,
            };
          })
          .filter((s) => s && s.opacity > 0)
      );

      requestAnimationFrame(moveStars);
    };

    moveStars();
  }, []);

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0", className)}>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          opacity={star.opacity}
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
