import React from "react";
import bhanuGif from "../../assets/bhanu-animated.gif";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden card-glow glass-effect p-4">
              <img
                src={bhanuGif}
                alt="Bhanu Kumar Dev"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">Hi, I'm Bhanu Kumar Dev!</strong>
              </p>
              
              <p>
                I am a B.Tech Computer Science & Systems Engineering student at KIIT (Kalinga Institute of Industrial Technology),
                passionate about Artificial Intelligence, Machine Learning, and <strong className="text-primary">Robotic Process Automation (RPA)</strong>.
              </p>

              <p>
                <strong className="text-foreground">Recently selected as RPA & AI Domain Member at USC.KIIT (October 2025)</strong>, where I collaborate on
                cutting-edge automation and AI projects. I specialize in building intelligent solutions using Python, UiPath,
                Flask, and Streamlit.
              </p>

              <p>
                My key projects include <strong className="text-primary">Fraud Detection App</strong> (developed during E-Summit 2025 Hackathon),
                <strong className="text-primary"> UiPath RPA News Scrapper</strong>, <strong className="text-primary">Credit Scoring Model</strong>, and various AI-powered applications.
                I actively participate in hackathons including Adobe India Hackathon and KIIT E-Cell competitions.
              </p>

              <p>
                I am committed to continuous learning, leveraging emerging technologies like RPA and explainable AI to solve
                real-world problems and drive digital transformation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold">
                AI/ML Engineer
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold">
                RPA Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold">
                Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
