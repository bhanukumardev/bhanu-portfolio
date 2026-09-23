import { useState } from "react";
import { X } from "lucide-react";

export const ResumeModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-1.5 rounded-full font-medium transition"
      >
        Resume
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 bg-red-500 hover:bg-red-400 text-white rounded-full p-2 shadow-lg transition touch-manipulation"
              aria-label="Close resume"
            >
              <X size={24} />
            </button>
            <iframe
              src="/bhanu-portfolio/bhanu-kumar-dev-resume.pdf"
              title="Resume"
              className="w-full h-[80vh] border-none"
              style={{ width: "100%", height: "80vh", border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
};
