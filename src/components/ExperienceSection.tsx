import { Briefcase, ExternalLink } from "lucide-react";
import uscKiitLogo from "../../assets/usc-kiit-logo.png";
import kiitEcellLogo from "../../assets/kiit-ecell-logo.png";
import adobeLogo from "../../assets/adobe-logo.png";
import codealphaLogo from "../../assets/codealpha-logo.png";
import internshipstudioLogo from "../../assets/internshipstudio-logo.png";
import pinnacleLogo from "../../assets/pinnacle-logo.png";
import kiitLogo from "../../assets/kiit-logo.png";
import gdgKiitLogo from "../../assets/gdgkiit_logo.jpg";
import kiitIqacLogo from "../../assets/kiit-iqac.jpg";
import aenexzLogo from "../../assets/Aenexz Tech Logo.jpg";
import etLogo from "../../assets/Economics Times Logo.jpeg";
import ghciLogo from "../../assets/AnitaB.org India.webp";
import kitpd2s from "../../assets/kitpd2s-society.jpg";

interface Experience {
  id: string;
  logo: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  credentialLink?: string;
  links?: { demo?: string; github?: string };
}

const experiences: Experience[] = [
  {
    id: "aenexz-ai-ml-intern",
    logo: aenexzLogo,
    title: "AI & ML Intern",
    company: "Aenexz Tech Private Limited",
    duration: "Mar 2026 - May 2026",
    location: "Remote",
    description: [
      "Developed and implemented AI/ML solutions.",
      "Gained hands-on experience in data processing, algorithmic optimization, and deploying practical AI applications.",
      "Earned dual certifications for program completion and excellence."
    ],
    skills: ["Machine Learning", "Problem Solving", "Innovation", "AI Development"],
    credentialLink: "https://drive.google.com/drive/folders/158l0z_52_rPjHEjrwttIPToPq2ZsZiRN?usp=drive_link"
  },
  {
    id: "codealpha",
  logo: codealphaLogo,
    title: "Machine Learning Intern",
    company: "CodeAlpha",
    duration: "May 2025 - Aug 2025",
    location: "Remote",
    description: [
      "Developed a Credit Scoring Model using the UCI German Credit dataset.",
      "Implemented logistic regression and random forest algorithms to enhance model building and evaluation skills."
    ],
    skills: ["Python", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Scikit-learn", "Model Evaluation"],
    links: {
      github: "https://github.com/bhanukumardev/CodeAlpha_CreditScoringModel"
    }
  },
  {
    id: "pinnacle",
  logo: pinnacleLogo,
    title: "Artificial Intelligence Intern",
    company: "Pinnacle Labs",
    duration: "May 2025 - Jun 2025",
    location: "Remote",
    description: [
      "Developed an AI Translator App, a GenAI Resume Parser, and a Teachable Machine Project.",
      "Enhanced skills in machine learning and web app deployment."
    ],
    skills: ["Python", "AI", "Streamlit", "Flask", "OpenAI", "ollama", "Teachable Machine"]
  },
  {
    id: "internship-studio",
  logo: internshipstudioLogo,
    title: "C++ & Data Structures Intern",
    company: "Internship Studio",
    duration: "Jun 2024 - Jul 2024",
    location: "Remote",
    description: [
      "Implemented core data structures in C++ and solved algorithmic problems with a focus on time/space complexity optimization."
    ],
    skills: ["C++", "Data Structures", "Algorithms", "Problem Solving", "Object-Oriented Programming"]
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
    id: "usc-rpa",
    logo: uscKiitLogo,
    title: "RPA & AI Domain Member",
    company: "USC.KIIT",
    duration: "Oct 2025 - Present",
    location: "Bhubaneswar, Odisha, India",
    description: [
      "Collaborating with engineering peers on Robotic Process Automation (RPA) and AI initiatives.",
      "Implementing automation workflows and driving technology-centric solutions within the student community."
    ],
    skills: ["UiPath Studio", "RPA", "Automation", "AI Integration", "Workflow Design"]
  },
  {
    id: "hackdays-kiit",
    logo: kitpd2s,
    title: "Organizing Committee & Event Management Member (Volunteering)",
    company: "KITPD2S Society",
    duration: "Sep 2025 - Present",
    location: "Bhubaneswar, Odisha, India",
    description: [
      "Served on the organizing committee for HackDays @ KIIT – Build w/ Gemini (official MLH mini-hackathon).",
      "Managed event coordination, floor operations, and technical support.",
      "Awarded Certificate of Appreciation."
    ],
    skills: ["Leadership", "Event Management", "Team Coordination", "Community Building"],
    credentialLink: "https://drive.google.com/file/d/1bNBOL2rGgqNxseVwW6tUU6-1aVC2PAb-/view?usp=drive_link"
  },
  {
    id: "et-ai-hackathon-2026",
  logo: etLogo,
    title: "Semi-Finalist - ET-AI Hackathon 2026",
    company: "The Economic Times",
    duration: "Aug 2026",
    location: "Vercel · Remote",
    description: [
      "Advanced as a Semi-Finalist by building Money Mentor, an AI-driven financial mentor application deployed to Vercel.",
      "Designed the solution to help users make smarter financial decisions using generative AI and practical product thinking."
    ],
    skills: ["Generative AI", "Problem Solving", "Competitive Analysis", "Technical Assessment"],
    credentialLink: "https://drive.google.com/file/d/1Mz2fLnESpnhMynxPtF5vo5XB_bf64Bzd/view?usp=drive_link"
  },
  {
    id: "ghci-2025",
  logo: ghciLogo,
    title: "GHCI 2025 Hackathon - 'Unbound with GenAI'",
    company: "AnitaB.org India",
    duration: "Dec 2025",
    location: "India",
    description: [
      "Participated in the Grace Hopper Celebration of India (GHCI) 2025 Hackathon.",
      "Collaborated with Team 'Saathi' to explore cutting-edge GenAI applications and develop innovative tech solutions focused on real-world impact."
    ],
    skills: ["Generative AI", "Team Collaboration", "Rapid Prototyping"]
  },
  {
    id: "viksit-bharat",
  logo: kiitIqacLogo,
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
              data-aos="fade-up"
              data-aos-delay={`${index * 120}`}
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
                      <li key={i} className="text-sm text-muted-foreground flex gap-2" data-aos="fade-left" data-aos-delay={`${i * 80}`}>
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

                  {(exp.credentialLink || exp.links) && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {exp.credentialLink && (
                        <a
                          href={exp.credentialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm"
                        >
                          Credential <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {exp.links?.demo && (
                        <a
                          href={exp.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm"
                        >
                          View Demo <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {exp.links?.github && (
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
