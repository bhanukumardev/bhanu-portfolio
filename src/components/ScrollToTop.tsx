import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const RADIUS = 18;
const CIRC = 2 * Math.PI * RADIUS;

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      setProgress(pct);
      setVisible(scrollTop > 160);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeOffset = CIRC * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.32 }}
          onClick={handleClick}
          aria-label="Scroll to top"
          title="Back to top"
          className="fixed right-5 bottom-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-400 shadow-xl flex items-center justify-center ring-0 hover:scale-105 active:scale-95 focus:outline-none"
        >
          <div className="relative w-full h-full flex items-center justify-center rounded-full">
            {/* SVG progress ring */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
              <defs />
              <circle
                cx="24"
                cy="24"
                r={RADIUS}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="3"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r={RADIUS}
                stroke="#052b2f"
                strokeWidth="3"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={CIRC}
                strokeDashoffset={strokeOffset}
                style={{ transition: "stroke-dashoffset 200ms linear" }}
              />
            </svg>

            <motion.span whileTap={{ scale: 0.92 }} className="relative z-10 text-slate-900">
              <ArrowUp className="w-5 h-5 text-slate-900/90" />
            </motion.span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
