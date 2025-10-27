import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About/Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Bhanu Kumar Dev</h3>
            <p className="text-muted-foreground mb-4">
              AI/ML enthusiast and full-stack developer passionate about creating innovative solutions
              and pushing the boundaries of technology.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                React
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                TypeScript
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Three.js
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Achievements", "Certifications", "Contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {section}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/bhanukumardev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover-lift"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhanu-kumar-dev-97b820313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kumarbhanu818@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover-lift"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 text-center space-y-2">
          <p className="text-muted-foreground">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-primary font-semibold">Bhanu Kumar Dev</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved. | Last updated: October 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
