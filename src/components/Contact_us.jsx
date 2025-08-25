"use client";
import React, { useRef } from "react";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";

const ContactUs = () => {
  // 👇 this ref defines the draggable boundary (the whole screen area of this section)
  const viewportRef = useRef(null);

  return (
    <section
      ref={viewportRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center gap-10 text-white overflow-hidden"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Get in Touch 🚀
      </h1>

      <DraggableCardContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Contact Form */}
        <DraggableCardBody
          constraintsRef={viewportRef}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
        >
          <h2 className="text-xl font-semibold mb-3">Contact Form</h2>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="px-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="px-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium"
            >
              Send
            </button>
          </form>
        </DraggableCardBody>

        {/* LinkedIn */}
        <DraggableCardBody
          constraintsRef={viewportRef}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center justify-center text-center"
        >
          <a
            href="https://www.linkedin.com/in/keshav-jha2006"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-12 h-12 mb-3"
            />
            <h2 className="text-xl font-semibold">LinkedIn</h2>
            <p className="text-sm opacity-70">/in/keshav-jha2006</p>
          </a>
        </DraggableCardBody>

        {/* GitHub */}
        <DraggableCardBody
          constraintsRef={viewportRef}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center justify-center text-center"
        >
          <a
            href="https://github.com/Keshav325"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-12 h-12 mb-3"
            />
            <h2 className="text-xl font-semibold">GitHub</h2>
            <p className="text-sm opacity-70">/Keshav325</p>
          </a>
        </DraggableCardBody>

        {/* WhatsApp */}
        <DraggableCardBody
          constraintsRef={viewportRef}
          className="bg-green-500/20 border border-green-400/40 backdrop-blur-md rounded-xl flex flex-col items-center justify-center text-center"
        >
          <a
            href="https://wa.me/918900395434"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-12 h-12 mb-3"
            />
            <h2 className="text-xl font-semibold">WhatsApp</h2>
            <p className="text-sm opacity-80">+91 8900395434</p>
          </a>
        </DraggableCardBody>
      </DraggableCardContainer>
    </section>
  );
};

export default ContactUs;
