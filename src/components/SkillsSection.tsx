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
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "Java", "C++", "C", "JavaScript", "Shell Scripting"]
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Fraud Detection Systems",
      "Data Analysis & Visualization",
      "Scikit-Learn",
      "Feature Engineering",
      "Robotic Process Automation (RPA)",
      "Workflow Automation",
      "UiPath Studio",
      "Agentic AI"
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "Flask",
      "Streamlit",
      "Pandas",
      "OpenAI API",
      "NI LabVIEW",
      "AutoCAD",
      "Xilinx Vivado"
    ]
  },
  {
    id: "data-tools",
    title: "Data & Tools",
    icon: <Database className="w-6 h-6" />,
    skills: [
      "SQL, PL/SQL",
      "Oracle Database",
      "DBMS",
      "Jupyter Notebook",
      "Linux (Ubuntu)",
      "Git"
    ]
  },
  {
    id: "problem-solving",
    title: "Coding & Problem Solving",
    icon: <Trophy className="w-6 h-6" />,
    skills: [
      "Competitive Coding (CodeSprint 2.0)",
      "Algorithm Implementation (DS Lab)",
      "Memory Management & Pointers (C)",
      "Data Structures & Algorithms"
    ]
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    skills: [
      "Teamwork & Collaboration",
      "Problem Solving",
      "Consistency & Time Management",
      "Technical Communication",
      "Analytical Thinking"
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
            Technical expertise and competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="card-glow glass-effect p-6 rounded-xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
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
