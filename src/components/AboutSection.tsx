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
              <p className="text-base leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                <strong className="text-foreground">Hi, I'm Bhanu Kumar Dev</strong> — a passionate 3rd Year B.Tech CSSE student at KIIT University, 
                Bhubaneswar, focused on AI/ML and Full-Stack Development.
              </p>

              <div data-aos="fade-up" data-aos-delay="260" className="space-y-2">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <span>🎯</span> What Drives Me
                </h3>
                <p className="text-sm leading-relaxed">
                  Building intelligent systems that think, learn, and evolve. Driven by curiosity and solving real-world problems through innovative tech.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="320" className="space-y-2">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <span>🚀</span> Current Focus
                </h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-fit">🤖 AI/ML:</span>
                    <span className="leading-relaxed">Predictive systems & LLM integration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-fit">🌐 Full-Stack:</span>
                    <span className="leading-relaxed">Production-ready web apps, concept to deployment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-fit">🏆 Hackathons:</span>
                    <span className="leading-relaxed">National-level challenges (SIH 2025 shortlisted)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-fit">🔧 RPA:</span>
                    <span className="leading-relaxed">UiPath Student Community @ KIIT</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-fit">☁️ Cloud:</span>
                    <span className="leading-relaxed">Vercel, Netlify, Railway deployments</span>
                  </div>
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
