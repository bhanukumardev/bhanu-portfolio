import React from "react";
import { motion } from "framer-motion";
import bhanuGif from "../../assets/bhanu-animated.gif";
import resumePdf from "../../assets/bhanu-kumar-dev-resume.pdf";

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="backdrop-blur bg-slate-900/30 rounded-full border border-slate-800/40 py-2 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3">
              <img
                src={bhanuGif}
                alt="Bhanu Kumar Dev"
                className="w-9 h-9 rounded-full ring-2 ring-cyan-400 object-cover"
              />
              <span className="hidden md:inline text-cyan-300 font-bold text-lg">Bhanu Kumar Dev</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-slate-300 hover:text-cyan-300 transition">About</a>
            <a href="#experience" className="text-slate-300 hover:text-cyan-300 transition">Experience</a>
            <a href="#education" className="text-slate-300 hover:text-cyan-300 transition">Education</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-300 transition">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-300 transition">Projects</a>
            <a href="#certifications" className="text-slate-300 hover:text-cyan-300 transition">Certifications</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-300 transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-md font-semibold shadow hover:brightness-95 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
