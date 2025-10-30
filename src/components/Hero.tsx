import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import bhanuGif from "../../assets/bhanu-animated.gif";
import resumePdf from "../../assets/bhanu-kumar-dev-resume.pdf";

// Professional avatar image (you'll need to add this to assets)
const avatarImage = bhanuGif; // Using existing gif for now - replace with professional photo

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut"
    }
  }
};

// Typing animation hook
const useTypingAnimation = (text: string, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayedText;
};

// Background particles component
const BackgroundParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  const typedText = useTypingAnimation("AI/ML Developer & Full-Stack Engineer", 80);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const goToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: update the hash so navigation still works if element isn't present yet
      window.location.hash = "#contact";
    }
  };

  const handleDownloadResume = () => {
    try {
      const a = document.createElement("a");
      a.href = resumePdf as unknown as string;
      a.download = "bhanu-kumar-dev-resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      // fallback: open in new tab
      window.open(resumePdf as unknown as string, "_blank");
    }
  };

  return (
  <section className="relative w-screen min-h-screen flex items-center justify-center overflow-visible pt-28">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/30" />
      
      {/* Animated geometric background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
  <div className="hidden md:block absolute top-1/4 left-1/4 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
  <div className="hidden md:block absolute top-3/4 right-1/4 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}} />
  <div className="hidden md:block absolute bottom-1/4 left-1/2 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      {/* Background Particles */}
      <BackgroundParticles />

  {/* Main Content */}
  <div className="relative z-10 w-screen px-4 sm:px-6 py-12 text-center">
        <motion.div
          className="space-y-6 w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Professional Avatar */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="float"
            >
              <div className="w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/20 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 backdrop-blur-sm">
                <img
                  src={avatarImage}
                  alt="Bhanu Kumar Dev"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-20 blur-md animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Name - Bold Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
          >
            Bhanu Kumar Dev
          </motion.h1>

          {/* Subtitle with Typing Effect */}
          <motion.div variants={itemVariants} className="h-16 flex items-center justify-center">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light">
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-prose mx-auto font-light"
          >
            Building intelligent solutions that bridge artificial intelligence with exceptional user experiences
          </motion.p>

          {/* CTA Buttons and Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            {/* Primary CTAs */}
            <div className="flex w-full flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                  onClick={goToContact}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Animated Social Icons */}
            <div className="flex items-center gap-4 ml-0 sm:ml-4">
              <motion.a
                href="https://github.com/bhanukumardev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <Github className="h-6 w-6 text-gray-300 hover:text-white" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/bhanu-kumar-dev-97b820313/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-blue-900/30 hover:bg-blue-800/50 border border-blue-800 hover:border-blue-600 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-blue-400 hover:text-blue-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Badges removed per request */}

          {/* Animated Scroll Down Arrow */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              animate={{
                y: [0, 10, 0],
              }}
              transition={
                {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }
            >
              <ChevronDown className="h-8 w-8 text-cyan-400" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
