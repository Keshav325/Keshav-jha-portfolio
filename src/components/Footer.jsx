import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* 🌌 Star Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:3px_3px] opacity-30 animate-pulse"></div>
      </div>

      {/* 🚀 Gradient Overlay */}
      <div className="relative z-10 w-full py-10 bg-gradient-to-t from-black via-purple-950/70 to-black text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 flex justify-center items-center gap-2">
          Stay Connected Across the Galaxy 🚀
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-6">
          <a href="mailto:keshav122006@gmail.com" target="_blank" rel="noreferrer"
            className="p-3 rounded-full border border-purple-500/40 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/40">
            <MdEmail className="text-2xl text-white hover:text-cyan-400" />
          </a>

          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"
            className="p-3 rounded-full border border-purple-500/40 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/40">
            <FaLinkedin className="text-2xl text-white hover:text-cyan-400" />
          </a>

          <a href="https://github.com/Keshav325" target="_blank" rel="noreferrer"
            className="p-3 rounded-full border border-purple-500/40 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/40">
            <FaGithub className="text-2xl text-white hover:text-cyan-400" />
          </a>

          <a href="https://wa.me/918900395434" target="_blank" rel="noreferrer"
            className="p-3 rounded-full border border-purple-500/40 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/40">
            <FaWhatsapp className="text-2xl text-white hover:text-cyan-400" />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="mt-6 text-gray-400 text-sm">
          © 2025 Keshav Jha · Crafted with 🚀✨
        </p>
      </div>
    </footer>
  );
}
