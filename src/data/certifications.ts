export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  logo: string;
  skills: string[];
  credential: string;
}

import uscKiitLogo from "../../assets/usc-kiit-logo.png";
import adobeLogo from "../../assets/adobe-logo.png";
import kiitEcellLogo from "../../assets/kiit-ecell-logo.png";
import kitpd2s from "../../assets/kitpd2s-society.jpg";
import codealphaLogo from "../../assets/codealpha-logo.png";
import uipathLogo from "../../assets/uipath-student-developer-community.jpg";
import visionBharatLogo from "../../assets/vision-bharat-trust.jpg";
import pinnacleLogo from "../../assets/pinnacle-logo.png";
import internshipstudioLogo from "../../assets/internshipstudio-logo.png";
import viksitLogo from "../../assets/viksit.png";
import gdgKiitLogo from "../../assets/gdgkiit_logo.jpg";
import kiitLogo from "../../assets/kiit-logo.png";

export const certifications: Certification[] = [
  {
    id: "building-bad",
    title: "Certificate of Participation: Building Bad (GDG KIIT 2025)",
    issuer: "GDG KIIT",
    date: "Issued Nov 2025",
    logo: gdgKiitLogo,
    skills: ["Web Application Development", "Teamwork", "Innovation", "React", "TypeScript", "Problem Solving"],
    credential: "https://drive.google.com/file/d/18VqRHCPN7wtDsu7XRNcowSLy8uF9rUK0/view"
  },
  {
    id: "usc-automation",
    title: "Empowering Automation for Everyone",
    issuer: "USC.KIIT",
    date: "Issued Oct 2025",
  logo: uscKiitLogo,
    skills: ["UiPath Automation Tools", "Robotic Process Automation (RPA)", "Workflow Automation", "Team Collaboration"],
    credential: "https://drive.google.com/file/d/1rZAQ-bXxJpahNoQ9gBcINATWb2w5qnj0/view"
  },
  {
    id: "adobe-hackathon",
    title: "Certificate of Participation – Adobe India Hackathon (Round 1)",
    issuer: "Adobe",
    date: "Issued Sep 2025",
  logo: adobeLogo,
    skills: ["Event Participation", "Entrepreneurship", "Team Collaboration"],
    credential: "https://unstop.com/certificate-preview/3b96f546-c7dc-4508-9ab7-aac836dcf088"
  },
  {
    id: "esummit",
    title: "Certificate of Participation – E-Summit 2025",
    issuer: "KIIT E-CELL",
    date: "Issued Sep 2025",
  logo: kiitEcellLogo,
    skills: ["Event Participation", "Entrepreneurship", "Team Collaboration"],
    credential: "https://drive.google.com/file/d/1C0xAfyPkhZ0_O9dHunGT7IJcvL9x5EHH/view?usp=drivesdk"
  },
  {
    id: "smart-india-hackathon",
    title: "Smart India Hackathon 2025 (Internal Hackathon Participation)",
    issuer: "KIIT - Kalinga Institute of Industrial Technology",
    date: "Issued Sep 2025 • Credential ID: SIH25 / 2328162",
    logo: kiitLogo,
    skills: ["Innovation", "Problem Solving", "Teamwork", "Hackathon Participation"],
    credential: "https://drive.google.com/drive/u/1/folders/1SE2g4_NnQnEZSNAXab04CVy2UU_QTOVC"
  },
  {
    id: "thinkfest",
    title: "Certificate of Participation – ThinkFest 2025 Quiz",
    issuer: "KITPD2S Society",
    date: "Issued Sep 2025",
  logo: kitpd2s,
    skills: ["Knowledge Assessment", "Quiz Participation", "Problem Solving"],
    credential: "https://drive.google.com/file/d/1-KDArJDurv6tqtDXmC7fkY-2-flNuDml/view?usp=drive_link"
  },
  {
    id: "codealpha-ml",
    title: "Machine Learning Internship",
    issuer: "CodeAlpha",
    date: "Issued Sep 2025 • Credential ID: CA/JU1/3144",
  logo: codealphaLogo,
    skills: ["Python", "Machine Learning", "Data Analysis", "Scikit-Learn", "Logistic Regression", "Random Forest"],
    credential: "https://drive.google.com/drive/folders/1Xp9BVvLpssitb_EadU8aa-YHrkw3sAm3?usp=drive_link"
  },
  {
    id: "automatrix",
    title: "Certificate of Participation – Automatrix 2.0 (Agentic AI Workshop)",
    issuer: "UiPath Student Developer Community",
    date: "Issued Aug 2025",
  logo: uipathLogo,
    skills: ["Artificial Intelligence (AI)", "Agentic AI", "Workshop Participation", "Problem Solving"],
    credential: "https://drive.google.com/file/d/1sTyQqHE2ZURp0fNGrLEd1iXl41wXN2tx/view?usp=drive_link"
  },
  {
    id: "national-quiz",
    title: "Certificate of Participation – National Online Quiz",
    issuer: "Vision Bharat Trust",
    date: "Issued Aug 2025",
  logo: visionBharatLogo,
    skills: ["Analytical Thinking", "Knowledge Assessment", "Quiz Participation"],
    credential: "https://drive.google.com/file/d/1sk1ZCsDrNN3aq-LuqezXUP11PyHe5Wya/view?usp=sharing"
  },
  {
    id: "codesprint",
    title: "Certificate of Appreciation – UiPath Student Developer, CodeSprint 2.0",
    issuer: "USC.KIIT",
    date: "Issued Jul 2025",
  logo: uscKiitLogo,
    skills: ["Programming Fundamentals", "Problem Solving", "Competitive Coding", "Team Collaboration"],
    credential: "https://drive.google.com/file/d/1g7rhg43sna9X2-eFBWp7QKlJT-APvoZ6/view?usp=drivesdk"
  },
  {
    id: "pinnacle-ai",
    title: "Artificial Intelligence Internship",
    issuer: "Pinnacle Labs",
    date: "Issued Jun 2025 • Credential ID: PL/2025/MAYP9/218",
  logo: pinnacleLogo,
    skills: ["Python", "AI", "Machine Learning", "Deep Learning", "NLP", "Flask", "Streamlit"],
    credential: "https://drive.google.com/drive/folders/1XdjLjoRprX049f-aUZ8ku94CuJ-2BNJh?usp=drive_link"
  },
  {
    id: "internship-studio",
    title: "C++ & Data Structures Training and Internship",
    issuer: "Internship Studio",
    date: "Issued Jun 2024",
  logo: internshipstudioLogo,
    skills: ["C++", "Data Structures", "Algorithms"],
    credential: "https://drive.google.com/drive/folders/1Oq-xNoZIVdYgjvBa48z5MGI1CeJVnskO"
  },
  {
    id: "viksit-bharat",
    title: "Viksit Bharat @2047 Workshop Participation",
    issuer: "KIIT - Kalinga Institute of Industrial Technology",
    date: "Issued Apr 2024",
  logo: viksitLogo,
    skills: ["Teamwork"],
    credential: "https://drive.google.com/file/d/1eDkUurpZ2yh5aqJ8WONh613n7trXMP8z/view?usp=drive_link"
  }
];
