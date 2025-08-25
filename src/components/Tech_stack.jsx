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
    <div className="relative w-full overflow-hidden py-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          🚀 My Tech Stack
        </h2>
        <p className="mt-3 text-gray-400">
          Technologies I explore across my coding galaxy
        </p>
      </motion.div>

      {/* Floating icons marquee */}
      <motion.div
        className="flex gap-20 text-7xl relative"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center min-w-[160px] group relative"
          >
            {/* Aura glow */}
            <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/30 via-cyan-400/30 to-pink-500/30 blur-3xl opacity-50 group-hover:opacity-90 transition duration-300" />

            {/* Icon */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative group-hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.9)]"
            >
              {tech.icon}
            </motion.div>

            {/* Label */}
            <span className="mt-3 text-sm text-gray-300 group-hover:text-white">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
