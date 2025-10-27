import React from "react";
import { motion } from "framer-motion";
import bhanuGif from "../../assets/bhanu-animated.gif";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Soft animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#08202b_0%,_transparent_30%),radial-gradient(ellipse_at_bottom_left,_#06202b_0%,_transparent_20%)] opacity-60 pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left - Text */}
          <div className="flex flex-col items-start text-left">
            <motion.h1 variants={item} className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-cyan-300">
              Bhanu Kumar
              <span className="block">Dev</span>
            </motion.h1>

            <motion.h2 variants={item} className="mt-3 text-lg sm:text-xl md:text-2xl text-cyan-200 font-medium">
              B.Tech CS & SE @ KIIT
            </motion.h2>

            <motion.p variants={item} className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-xl">
              RPA & AI Domain Member @ USC.KIIT — Building real-world AI & automation projects.
            </motion.p>

            <motion.div variants={item} className="mt-4 text-sm sm:text-base text-cyan-300 flex flex-wrap gap-x-3 gap-y-2">
              <a href="#projects" className="underline hover:text-cyan-100">Fraud Detection App</a>
              <span className="opacity-60">•</span>
              <a href="#projects" className="underline hover:text-cyan-100">UiPath RPA Bot</a>
              <span className="opacity-60">•</span>
              <a href="#projects" className="underline hover:text-cyan-100">Credit Scoring Model</a>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-cyan-400 text-slate-900 hover:scale-[1.02] transition-transform py-2 px-4 rounded-md shadow-md">
                <a href="#projects">See My Projects</a>
              </Button>

              <Button asChild variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 py-2 px-4 rounded-md">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex items-center gap-3">
              <a
                href="mailto:kumarbhanu818@gmail.com"
                className="w-10 h-10 rounded-full bg-slate-800/60 flex items-center justify-center hover:bg-slate-700/80 transition"
                aria-label="email"
              >
                <Mail className="w-5 h-5 text-cyan-300" />
              </a>
              <a
                href="https://github.com/bhanukumardev"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/60 flex items-center justify-center hover:bg-slate-700/80 transition"
                aria-label="github"
              >
                <Github className="w-5 h-5 text-cyan-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhanu-kumar-dev-97b820313"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/60 flex items-center justify-center hover:bg-slate-700/80 transition"
                aria-label="linkedin"
              >
                <Linkedin className="w-5 h-5 text-cyan-300" />
              </a>
            </motion.div>
          </div>

          {/* Right - Profile image with glowing animated border */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              className="relative rounded-full p-1"
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Glowing ring */}
              <motion.div
                className="rounded-full p-1"
                style={{ boxShadow: "0 0 40px 6px rgba(20, 220, 230, 0.12)" }}
                animate={{ rotate: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
              >
                <div className="bg-gradient-to-tr from-cyan-400 to-sky-400 rounded-full p-1">
                  <div className="rounded-full overflow-hidden bg-slate-800">
                    <img
                      src={bhanuGif}
                      alt="Bhanu Kumar Dev"
                      className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-60 lg:h-60 object-cover rounded-full border-4 border-slate-900"
                    />
                  </div>
                </div>
              </motion.div>
              {/* subtle pulse */}
              <div className="absolute inset-0 rounded-full -z-10">
                <div className="w-full h-full rounded-full animate-pulse-slow" style={{ boxShadow: "0 0 80px 18px rgba(6,182,212,0.06)" }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-8 h-12 border-2 border-cyan-500 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
