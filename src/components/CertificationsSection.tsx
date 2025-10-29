import { certifications } from "@/data/certifications";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "./ui/button";

export const CertificationsSection = () => {
  return (
    <section id="certifications" data-aos="zoom-in" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">🎓 Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional development and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="p-4 rounded-xl hover-lift bg-slate-800/40 border border-slate-700/30"
              data-aos="zoom-in"
              data-aos-delay={`${index * 80}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-12 h-12 object-contain rounded-md bg-slate-900 p-1"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <Award className="w-12 h-12 text-primary hidden" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer} • {cert.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-wrap gap-2 flex-1">
                  {cert.skills.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-1 rounded-full bg-slate-700/40 text-slate-200 border border-slate-700/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="text-xs px-3 py-1 border-primary/30 hover:bg-primary/10 hover:border-primary"
                >
                  <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    Credential <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
