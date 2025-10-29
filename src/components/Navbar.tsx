import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bhanuGif from "../../assets/bhanu-animated.gif";
import resumePdf from "../../assets/bhanu-kumar-dev-resume.pdf";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed top-4 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="backdrop-blur bg-slate-900/30 rounded-full border border-slate-800/40 py-2 px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/bhanu-portfolio/" className="flex items-center gap-3">
                <img
                  src={bhanuGif}
                  alt="Bhanu Kumar Dev"
                  className="w-9 h-9 rounded-full ring-2 ring-cyan-400 object-cover"
                />
                <span className="hidden md:inline text-cyan-300 font-bold text-lg">
                  Bhanu Kumar Dev
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-cyan-300 transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-1.5 rounded-full font-medium transition"
              >
                Resume
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-cyan-300 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-cyan-300 my-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-cyan-300 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden"
          >
            {/* Make the mobile menu span full width so it overlays the viewport on small devices */}
            <div className="w-full px-4">
              <div className="backdrop-blur bg-slate-900/95 rounded-2xl border border-slate-800/40 py-4 px-4 shadow-xl">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="text-slate-300 hover:text-cyan-300 transition py-2 px-4 rounded-lg hover:bg-slate-800/50"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-2 rounded-full font-medium transition text-center"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
