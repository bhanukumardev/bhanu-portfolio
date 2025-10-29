import { ContactForm } from "./ContactForm";
import { Mail, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" data-aos="fade-up" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">📬 Get in Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:kumarbhanu818@gmail.com"
            className="card-glow glass-effect p-6 rounded-xl hover-lift text-center"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">kumarbhanu818@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/bhanu-kumar-dev-97b820313"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow glass-effect p-6 rounded-xl hover-lift text-center"
          >
            <Linkedin className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>

          <a
            href="https://github.com/bhanukumardev"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow glass-effect p-6 rounded-xl hover-lift text-center"
          >
            <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground">View my work</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="card-glow glass-effect p-8 md:p-12 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Send a Direct Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
