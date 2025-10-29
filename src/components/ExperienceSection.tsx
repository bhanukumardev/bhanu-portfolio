import { Briefcase, ExternalLink } from "lucide-react";
import uscKiitLogo from "../../assets/usc-kiit-logo.png";
import kiitEcellLogo from "../../assets/kiit-ecell-logo.png";
import adobeLogo from "../../assets/adobe-logo.png";
import codealphaLogo from "../../assets/codealpha-logo.png";
import internshipstudioLogo from "../../assets/internshipstudio-logo.png";
import pinnacleLogo from "../../assets/pinnacle-logo.png";
import kiitLogo from "../../assets/kiit-logo.png";

interface Experience {
  id: string;
  logo: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  links?: { demo?: string; github?: string };
}

const experiences: Experience[] = [
  {
    id: "usc-rpa",
    logo: uscKiitLogo,
    title: "RPA & AI Domain Member",
    company: "USC.KIIT",
    duration: "Oct 2025 - Present",
    location: "Bhubaneswar, Odisha, India",
    description: [
      "Selected as a member in the RPA & AI domain of the University Students' Council, KIIT.",
      "Collaborating with talented peers on Robotic Process Automation and Artificial Intelligence projects.",
      "Engaged in workshops, hackathons, and tech-driven initiatives at KIIT University.",
      "Contributing to the council's mission of driving innovation and technology-centric solutions for the campus community."
    ],
    skills: ["UiPath Studio", "RPA", "Automation", "AI Integration", "Workflow Design"]
  },
  {
    id: "pandora",
  logo: kiitEcellLogo,
    title: "Hackathon Participant – Pandora Paradox (E-Summit 2025)",
    company: "KIIT E-CELL",
    duration: "Sep 2025",
    location: "Bhubaneswar, Odisha, India",
    description: [
      "Participated in the Pandora Paradox hackathon during KIIT E-Summit 2025 as part of Team Binary Brains.",
      "Developed a Fraud Detection App, an AI/ML-powered Streamlit web application designed to detect anomalous and fraudulent transactions.",
      "Focused on model building, real-time prediction, explainable AI, and rapid iteration under competitive constraints.",
      "Collaborated with a multidisciplinary team and learned from expert mentors on financial AI and model deployment."
    ],
    skills: ["Python", "Streamlit", "Machine Learning", "Fraud Detection", "Anomaly Detection", "Explainable AI"],
    links: {
      demo: "https://fraud-detection-app-rxiwn9wo9sfcg3m7icga2b.streamlit.app/",
      github: "https://github.com/bhanukumardev/fraud-detection-app"
    }
  },
  {
    id: "adobe",
  logo: adobeLogo,
    title: "Team Member – Adobe India Hackathon (Round 1)",
    company: "Adobe",
    duration: "Sep 2025",
    location: "Remote",
    description: [
      "Competed as part of Team BAG representing KIIT Bhubaneswar in the Adobe India Hackathon organized by Adobe and Unstop.",
      "Tackled challenging online MCQ assessments and coding rounds, collaborating closely with team members to solve problems under pressure.",
      "Enhanced skills in teamwork, coding, and technical problem-solving during a competitive, fast-paced event."
    ],
    skills: ["Competitive Programming", "Problem Solving", "Teamwork", "Algorithm Design"]
  },
  {
    id: "codealpha",
  logo: codealphaLogo,
    title: "Machine Learning Intern",
    company: "CodeAlpha",
    duration: "May 2025 - Aug 2025",
    location: "Remote",
    description: [
      "Selected as a Machine Learning Intern at CodeAlpha.",
      "Developed a Credit Scoring Model using the UCI German Credit dataset and implemented logistic regression and random forest algorithms.",
      "Performed feature engineering, model evaluation (Precision, Recall, F1-score, ROC-AUC), and presented results via Jupyter Notebook and slides.",
      "Enhanced skills in model building, evaluation, teamwork, and adaptability."
    ],
    skills: ["Python", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Scikit-learn", "Model Evaluation"],
    links: {
      github: "https://github.com/bhanukumardev/CodeAlpha_CreditScoringModel"
    }
  },
  {
    id: "codesprint",
  logo: uscKiitLogo,
    title: "Participant – 45-Day Coding Challenge (CodeSprint 2.0)",
    company: "USC.KIIT",
    duration: "Jun 2024 - Jul 2024",
    location: "Bhubaneswar, Odisha, India",
    description: [
      "Participated in an intensive 45-day coding challenge focused on Data Structures and Algorithms.",
      "Solved daily coding problems covering arrays, linked lists, trees, graphs, dynamic programming, and more.",
      "Enhanced problem-solving skills and competitive programming abilities.",
      "Built consistency and discipline in daily coding practice."
    ],
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming", "C++", "Java"]
  },
  {
    id: "internship-studio",
  logo: internshipstudioLogo,
    title: "C++ & Data Structures Intern",
    company: "Internship Studio",
    duration: "Apr 2024 - Jun 2024",
    location: "Remote",
    description: [
      "Worked on C++ programming fundamentals and advanced data structures implementation.",
      "Implemented sorting algorithms, searching techniques, and complex data structures.",
      "Enhanced skills in algorithmic problem-solving and efficient coding practices.",
      "Received positive feedback from mentor: 'He has shown strong C++ and Data Structures skills during the internship.'"
    ],
    skills: ["C++", "Data Structures", "Algorithms", "Problem Solving", "Object-Oriented Programming"]
  },
  {
    id: "pinnacle",
  logo: pinnacleLogo,
    title: "Artificial Intelligence Intern",
    company: "Pinnacle Labs",
    duration: "May 2024 - Jun 2024",
    location: "Remote",
    description: [
      "Developed and deployed three AI-powered projects during the internship.",
      "AI Translator App: Real-time multi-language translation web app (Python, Flask, OpenAI API).",
      "GenAI Resume Parser: AI-powered PDF resume parser using LLMs (Python, Flask, OpenAI GPT-4).",
      "Teachable Machine Project: Custom image classification using Google's Teachable Machine.",
      "Enhanced skills in machine learning, web app development, and practical AI deployment."
    ],
    skills: ["Python", "AI", "Streamlit", "Flask", "OpenAI", "ollama", "Teachable Machine"]
  },
  {
    id: "viksit-bharat",
  logo: kiitLogo,
    title: "Participant – Viksit Bharat @2047 Series Workshop",
    company: "KIIT - Kalinga Institute of Industrial Technology",
    duration: "Apr 2024",
    location: "Bhubaneswar, Odisha, India",
    description: [
      "Participated in the Viksit Bharat @2047 series workshop organized by IQAC, KIIT.",
      "Engaged in discussions and activities focused on India's development vision for 2047.",
      "Explored innovation, technology, and nation-building themes.",
      "Gained insights into sustainable development and future-ready skills."
    ],
    skills: ["Leadership", "Innovation", "Sustainable Development", "Event Participation"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" data-aos="fade-right" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">💼 Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="card-glow glass-effect p-6 md:p-8 rounded-xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.duration} · {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <Briefcase className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {exp.links && (
                    <div className="flex gap-4 pt-2">
                      {exp.links.demo && (
                        <a
                          href={exp.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm"
                        >
                          View Demo <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {exp.links.github && (
                        <a
                          href={exp.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm"
                        >
                          GitHub <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
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
