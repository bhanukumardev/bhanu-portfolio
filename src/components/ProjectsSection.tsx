import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">🚀 Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-glow glass-effect rounded-xl overflow-hidden hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x225?text=" + encodeURIComponent(project.title);
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex gap-2">
                  {project.demo && (
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="flex-1 bg-gradient-primary"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        GitHub <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
