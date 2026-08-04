import { Code, Brain, Database, Wrench, Trophy, Users } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Core",
    icon: <Code className="w-6 h-6" />,
    skills: ["C++", "Java", "Python", "JavaScript (ES6+)", "Data Structures & Algorithms"]
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "Agentic AI",
      "LLMs",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
      "PyTorch"
    ]
  },
  {
    id: "frameworks",
    title: "Frontend",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ]
  },
  {
    id: "data-tools",
    title: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    id: "problem-solving",
    title: "Cloud & Tools",
    icon: <Trophy className="w-6 h-6" />,
    skills: [
      "AWS",
      "CI/CD",
      "Microservices",
      "Git",
      "GitHub",
      "VS Code",
      "Figma"
    ]
  },
  {
    id: "soft-skills",
    title: "Databases",
    icon: <Users className="w-6 h-6" />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "SQL"
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" data-aos="zoom-in" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">💪 Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Core stack, AI/ML, cloud, and supporting tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="card-glow glass-effect p-6 rounded-xl hover-lift"
              data-aos="flip-up"
              data-aos-delay={`${index * 80}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-muted hover:bg-primary/20 border border-border hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card-glow glass-effect p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-4">Events & Hackathons</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              ET-AI Hackathon 2026
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              HackDays @ KIIT – Build w/ Gemini
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              Pandora Paradox Hackathon (E-Summit 2025)
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              Automatrix 2.0 (Agentic AI Workshop)
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              ThinkFest & National Online Quiz
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              UiPath Student Developer Community
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
