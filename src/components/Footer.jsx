import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SpaceFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-black via-[#0a0016] to-transparent py-12 border-t border-purple-500/40">
      {/* Starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Nebula glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
        >
          Stay Connected Across the Galaxy 🚀
        </motion.h2>

        {/* Social icons */}
        <div className="flex space-x-6">
          {[
            { icon: <MdEmail />, link: "mailto:keshav122006@gmail.com" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/feed/" },
            { icon: <FaGithub />, link: "https://github.com/Keshav325" },
            { icon: <FaWhatsapp />, link: "https://wa.me/918900395434" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 rounded-full border border-purple-500/50 bg-black/40 backdrop-blur-md 
                         shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] 
                         text-2xl text-white transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2025 Keshav Jha · Crafted with 🚀✨
        </p>
      </div>
    </footer>
  );
}
