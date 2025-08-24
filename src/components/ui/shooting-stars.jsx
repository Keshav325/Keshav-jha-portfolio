"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

// instead of only edges, spawn anywhere inside the screen
const getRandomStartPoint = () => {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    angle: Math.random() * 360, // random direction
  };
};

export const ShootingStars = ({
  minSpeed = 1,       // slower min speed
  maxSpeed = 5,       // slower max speed
  minDelay = 500,     // spawn rate (slower)
  maxDelay = 2000,
  starColor = "#9E00FF",   // purple
  trailColor = "#2EB9DF",  // cyan
  starWidth = 25,     // medium-long
  starHeight = 3,     // medium thickness
  maxStars = 50,      // allow more meteors
  className,
}) => {
  const [stars, setStars] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
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

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();
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
            const newScale = 1 + newDistance / 200; // grows slower

            let newOpacity = star.opacity;

            if (
              newX < -100 ||
              newX > window.innerWidth + 100 ||
              newY < -100 ||
              newY > window.innerHeight + 100
            ) {
              return null; // off screen
            }

            // fade out gradually
            if (newDistance > 400) {
              newOpacity = Math.max(0, star.opacity - 0.01);
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
