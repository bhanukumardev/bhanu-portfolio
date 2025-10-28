import { GraduationCap } from "lucide-react";
import kiitLogo from "../../assets/kiit-logo.png";
import bdImage from "../../assets/bd.png";

interface Education {
  id: string;
  logo: string;
  school: string;
  degree: string;
  duration: string;
  grade: string;
  activities: string[];
  description: string[];
  skills: string[];
}

const education: Education[] = [
  {
    id: "kiit",
    logo: kiitLogo,
    school: "KIIT - Kalinga Institute of Industrial Technology",
    degree: "B.Tech, Computer Science & Systems Engineering",
    duration: "Aug 2023 – Aug 2027",
    grade: "8.08",
    activities: [
      "UiPath Student Developer Community",
      "Viksit Bharat @2047 Workshop",
      "Technical Workshops & Hackathons",
      "AI/ML · Coding · Robotics Clubs"
    ],
    description: [
      "Participated in the Viksit Bharat @2047 workshop organized by KIIT as part of the nationwide initiative to envision and contribute towards making India a developed nation by 2047. Engaged in discussions, brainstorming sessions, and activities focused on inclusive economic growth, sustainable development, technological innovation, and good governance. Collaborated with peers and faculty to generate ideas and solutions aligned with the vision of Viksit Bharat, emphasizing the role of youth in nation-building and the importance of strategic planning for India's future.",
      "Engaged in a comprehensive curriculum focused on programming, artificial intelligence and machine learning, systems engineering, and data structures. Completed practical projects and labs in machine learning (Python, scikit-learn), digital design (Vivado, Verilog), industrial automation (NI LabVIEW), OS fundamentals (Ubuntu), and advanced data structures (C)."
    ],
    skills: [
      "AI",
      "Machine Learning",
      "Java",
      "C++",
      "DBMS",
      "Oracle",
      "Linux",
      "AutoCAD",
      "Xilinx Vivado",
      "Digital Systems Design",
      "Teamwork"
    ]
  },
  {
    id: "bd-12th",
  logo: bdImage,
    school: "B.D. Academy, Amarpur, Banka, Bihar",
    degree: "Higher Secondary (12th), Science",
    duration: "2020 – 2022",
    grade: "84%",
    activities: ["School Events"],
    description: [
      "Completed 12th (Science) under CBSE with 84%.",
      "Education is a once in a lifetime opportunity to open children's hearts and minds to the unbelievable wonder of the universe."
    ],
    skills: []
  },
  {
    id: "bd-10th",
  logo: bdImage,
    school: "B.D. Academy, Amarpur, Banka, Bihar",
    degree: "Secondary (10th), General",
    duration: "2018 – 2020",
    grade: "93%",
    activities: [
      "SOF Olympiads",
      "Essay Competition (1st)",
      "Quiz (2nd)",
      "Mock Parliament",
      "Community Service",
      "Paryavaran Ratna Award"
    ],
    description: [
      "Completed 10th under CBSE with 93%. Recognized for environmental awareness and academic excellence.",
      "Education is a once in a lifetime opportunity to open children's hearts and minds to the unbelievable wonder of the universe."
    ],
    skills: []
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">🎓 Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="card-glow glass-effect p-6 md:p-8 rounded-xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{edu.school}</h3>
                    <p className="text-primary font-semibold">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.duration} | Grade: {edu.grade}
                    </p>
                  </div>

                  {edu.activities.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Activities and Societies:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.map((activity, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {edu.description.map((desc, i) => (
                      <p key={i} className="text-sm text-muted-foreground italic">
                        {desc}
                      </p>
                    ))}
                  </div>

                  {edu.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent-foreground border border-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
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
