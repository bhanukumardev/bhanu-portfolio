import React from "react";

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
              <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
                <strong className="text-foreground">Hi, I'm Bhanu Kumar Dev</strong> — a passionate 3rd Year B.Tech Computer Science & Systems Engineering (CSSE) 
                student at KIIT University, Bhubaneswar, with a strong focus on Artificial Intelligence, Machine Learning, and Full-Stack Development.
              </p>

              <div data-aos="fade-up" data-aos-delay="260">
                <h3 className="text-lg font-semibold text-foreground mb-2">🎯 What Drives Me</h3>
                <p>
                  I believe in building intelligent systems that think, learn, and evolve. My journey in tech is fueled by curiosity and a 
                  commitment to solving real-world problems through innovative technology solutions.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="320">
                <h3 className="text-lg font-semibold text-foreground mb-3">🚀 Current Focus</h3>
                <ul className="space-y-3">
                  <li>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="text-primary font-semibold whitespace-nowrap">🤖 AI/ML Development:</span>
                      <span>Crafting intelligent systems with predictive capabilities and LLM integration</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="text-primary font-semibold whitespace-nowrap">🌐 Full-Stack Engineering:</span>
                      <span>Building production-ready web applications from concept to deployment</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="text-primary font-semibold whitespace-nowrap">🏆 Hackathon Participation:</span>
                      <span>Actively competing and getting shortlisted in national-level tech challenges (Smart India Hackathon 2025)</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="text-primary font-semibold whitespace-nowrap">🔧 RPA & Automation:</span>
                      <span>Domain member at UiPath Student Community @ KIIT, working on automation projects</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="text-primary font-semibold whitespace-nowrap">☁️ Cloud Deployment:</span>
                      <span>Deploying scalable solutions on Vercel, Netlify, and Railway</span>
                    </div>
                  </li>
                </ul>
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
