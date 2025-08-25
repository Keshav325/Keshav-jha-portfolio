"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextRevealCard } from "./ui/text-reveal-card"; // adjust path if needed

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent">
      <motion.div
        className="text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ✨ Text Reveal Effect for Name */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <TextRevealCard
            text="Hi, I'm Keshav Jha"
            revealText="Frontend Developer"
            className="w-full max-w-3xl"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg mb-8 max-w-lg mx-auto mt-8"
        >
          I craft modern, interactive, and user-focused web experiences. Let’s
          build something innovative together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4"
        >
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded-lg font-medium transition-all duration-300 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-105 hover:bg-blue-500/10 hover:text-white hover:shadow-md hover:shadow-blue-500/20"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
