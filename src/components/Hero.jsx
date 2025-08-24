import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    // 1. Made background immersive by using min-h-screen
    <BackgroundBeamsWithCollision className="min-h-screen">
      <motion.div
        className="text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight 
                     text-shadow shadow-black/30" // 2. Added subtle text-shadow for readability
        >
          Hi, I'm Keshav Jha
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg mb-8 max-w-lg mx-auto text-shadow-sm shadow-black/50" // 2. Enhanced readability here too
        >
          I craft modern, interactive, and user-focused web experiences. Let’s
          build something innovative together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4"
        >
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40" // 3. Improved button interactions
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded-lg font-medium transition-all duration-300 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-105 hover:bg-blue-500/10 hover:text-white hover:shadow-md hover:shadow-blue-500/20" // 3. Improved button interactions
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
}