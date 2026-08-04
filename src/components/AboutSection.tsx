import React from "react";

const whatIDo = [
  "Build advanced AI/ML models and Agentic AI workflows for practical applications (Health Prediction, Financial Mentorship, Fraud Detection).",
  "Develop scalable, full-stack web applications using React, Node.js, and FastAPI.",
  "Architect cloud solutions utilizing AWS, microservices, and robust CI/CD pipelines.",
  "Create responsive, user-centric interfaces with a strict focus on performance and accessibility.",
  "Integrate modern databases (PostgreSQL, Supabase, MongoDB) and deploy across platforms (Vercel, AWS, Streamlit)."
];

const techStack = [
  { label: "Core", value: "C++, Java, Python, JavaScript (ES6+), Data Structures & Algorithms" },
  { label: "Frontend", value: "React.js, HTML5, CSS3, Tailwind CSS" },
  { label: "Backend", value: "Node.js, Express.js, FastAPI, REST APIs" },
  { label: "AI/ML", value: "Agentic AI, LLMs, TensorFlow, Scikit-learn, NLP, PyTorch" },
  { label: "Cloud & Tools", value: "AWS, CI/CD, Microservices, Git, GitHub, VS Code, Figma" },
  { label: "Databases", value: "PostgreSQL, MongoDB, Supabase, SQL" }
];

export const AboutSection = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="zoom-in" data-aos-delay="80">
            <div className="aspect-square rounded-2xl overflow-hidden card-glow glass-effect p-4">
              <img
                src="/bhanu-portfolio/bhanu-profile.jpg"
                alt="Bhanu Kumar Dev"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold" data-aos="fade-right" data-aos-delay="140">
              <span className="text-gradient">📖 About Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                <strong className="text-foreground">Hi, I'm Bhanu Kumar Dev</strong> — a 4th-year (7th-semester) B.Tech Computer Science & Systems Engineering student at KIIT University. I am deeply passionate about architecting impactful technology solutions, blending modern software engineering with advanced artificial intelligence to solve real-world problems.
              </p>

              <div data-aos="fade-up" data-aos-delay="260" className="space-y-2">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <span>🎯</span> What I Do
                </h3>
                <div className="space-y-2 text-sm leading-relaxed">
                  {whatIDo.map((item) => (
                    <p key={item} className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="320" className="space-y-2">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <span>🚀</span> Tech Stack (Grouped)
                </h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {techStack.map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <span className="text-primary font-medium min-w-fit">{item.label}:</span>
                      <span className="leading-relaxed">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold" data-aos="flip-up" data-aos-delay="520">
                AI/ML Engineer
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold" data-aos="flip-up" data-aos-delay="600">
                RPA Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold" data-aos="flip-up" data-aos-delay="680">
                Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
