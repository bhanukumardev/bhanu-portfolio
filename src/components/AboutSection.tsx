import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="zoom-in" data-aos-delay="80">
            <div className="aspect-square rounded-2xl overflow-hidden card-glow glass-effect p-4">
              <img
                src="/bhanu-profile.jpg"
                alt="Bhanu Kumar Dev"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold" data-aos="fade-right" data-aos-delay="140">
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
                <strong className="text-foreground">Hi, I'm Bhanu Kumar Dev!</strong>
              </p>

              <p data-aos="fade-up" data-aos-delay="260">
                My portfolio features AI and ML projects, including deep learning, NLP, and data-driven solutions, demonstrating my skills in
                building intelligent applications and solving complex problems.
              </p>

              <p data-aos="fade-up" data-aos-delay="320">
                I build full-stack web applications and deploy ML models to production using modern tools like React, TypeScript, Python,
                Flask, and Streamlit. I enjoy collaborating in hackathons and building practical solutions that make an impact.
              </p>

              <p data-aos="fade-up" data-aos-delay="380">
                Recently selected as an RPA & AI Domain Member at USC.KIIT (Oct 2025). I focus on practical AI, explainability, and
                automation to solve real-world problems.
              </p>
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
