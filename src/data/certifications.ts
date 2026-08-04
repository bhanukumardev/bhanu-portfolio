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
import techIcon from "../../assets/tech-icon.svg";
import ghciLogo from "../../assets/AnitaB.org India.webp";
import courseraLogo from "../../assets/Coursera Logo.png";
import eurekaLogo from "../../assets/Eureka Event-Codefest'26.webp";
import excelrLogo from "../../assets/Excelr Logo.jpg";
import awsLogo from "../../assets/AWS logo.svg";

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
    id: "agentic-ai-training",
    title: "Agentic AI - 70 Hours Professional Training",
    issuer: "ExcelR & KIIT University",
    date: "Issued Aug 2026",
    logo: excelrLogo,
    skills: ["Agentic AI", "LLMs", "Generative AI", "Problem Solving"],
    credential: "https://drive.google.com/file/d/1KBkgT6GPJFAL2uKTSBMwf7e7hKHZiDnw/view?usp=drive_link"
  },
  {
    id: "aws-academy-graduate",
    title: "AWS Academy Graduate - Microservices and CI/CD Pipeline Builder",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Aug 2026",
    logo: awsLogo,
    skills: ["AWS", "Microservices", "CI/CD", "Cloud Computing"],
    credential: "https://www.credly.com/badges/f7ba31c7-6366-46a9-879f-430bf41e06e6"
  },
  {
    id: "codefest-eureka-2026",
    title: "Certificate of Excellence - Eureka Event (Codefest'26)",
    issuer: "IIT (BHU) Varanasi",
    date: "Issued Aug 2026",
    logo: eurekaLogo,
    skills: ["Problem Solving", "Competitive Analysis", "Technical Assessment"],
    credential: "https://drive.google.com/file/d/1m0GabqNY7k8DTWR_AArlFQ5SAXgNUfDg/view?usp=drive_link"
  },
  {
    id: "business-for-good",
    title: "Business for Good: Fundamentals of Corporate Responsibility",
    issuer: "London Business School (via Coursera)",
    date: "Issued Feb 2026",
    logo: courseraLogo,
    skills: ["Corporate Responsibility", "Business Ethics", "Sustainability"],
    credential: "https://www.coursera.org/account/accomplishments/verify/3R046I2QZGC8?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    id: "corporate-governance",
    title: "Corporate Governance",
    issuer: "Coursera",
    date: "Issued Feb 2026",
    logo: courseraLogo,
    skills: ["Governance", "Compliance", "Corporate Ethics"],
    credential: "https://www.coursera.org/account/accomplishments/verify/AS8ZLD09W3EZ?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    id: "ethical-decision-making",
    title: "Ethical Decision Making for Success in the Tech Industry",
    issuer: "University of Colorado Boulder (via Coursera)",
    date: "Issued Feb 2026",
    logo: courseraLogo,
    skills: ["Ethical Decision Making", "Professional Responsibility", "Technology Ethics"],
    credential: "https://www.coursera.org/account/accomplishments/verify/NMDGMDTTGRF0?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
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
    id: "ghci-2025",
    title: "GHCI 2025 Hackathon - 'Unbound with GenAI'",
    issuer: "AnitaB.org India",
    date: "Issued Dec 2025",
  logo: ghciLogo,
    skills: ["Generative AI", "Team Collaboration", "Rapid Prototyping"],
    credential: "https://www.verix.io/credential/83331756-eced-4d25-902d-e17dfdb901d9"
  },
  {
    id: "hackdays-kiit",
    title: "Organizing Committee Member - HackDays @ KIIT (Build w/ Gemini)",
    issuer: "KITPD2S Society & MLH (Major League Hacking)",
    date: "Issued Dec 2025",
  logo: kitpd2s,
    skills: ["Leadership", "Event Management", "Team Coordination", "Community Building"],
    credential: "https://drive.google.com/file/d/1bNBOL2rGgqNxseVwW6tUU6-1aVC2PAb-/view?usp=drive_link"
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
