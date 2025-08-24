import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";
import { MdApi } from "react-icons/md";

const techStack = [
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiPostgresql className="text-blue-400" />, name: "PostgreSQL" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <MdApi className="text-pink-400" />, name: "REST API" },
  { icon: <SiCplusplus className="text-indigo-400" />, name: "C++" },
];

export default function Tech() {
  return (
    <div className="relative w-full overflow-hidden py-16">
      {/* Subtle glowing gradient background strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-40 pointer-events-none" />

      {/* Tilted container with glass effect */}
      <div className="rotate-[-3deg]">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-xl mx-4" />

        <motion.div
          className="flex gap-16 text-7xl relative"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex flex-col items-center justify-center min-w-[150px] group"
            >
              {/* Icon with glow pulse */}
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="transition-transform duration-300 group-hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.9)]"
              >
                {tech.icon}
              </motion.div>
              <span className="mt-3 text-sm text-gray-300 group-hover:text-white tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
