export interface Achievement {
  id: string;
  logo: string;
  title: string;
  description: string;
  link: string;
  category: 'award' | 'internship' | 'academic';
}

import paryavaran from "../../assets/paryavaran.png";
import sof from "../../assets/sof.png";
import bdImage from "../../assets/bd.png";
import pinnacleLogo from "../../assets/pinnacle-logo.png";
import codealphaLogo from "../../assets/codealpha-logo.png";
import internshipstudioLogo from "../../assets/internshipstudio-logo.png";
import aenexzLogo from "../../assets/Aenexz Tech Logo.jpg";
import etLogo from "../../assets/Economics Times Logo.jpeg";
import eurekaLogo from "../../assets/Eureka Event-Codefest'26.webp";
import kiitLogo from "../../assets/kiit-logo.png";
import kitpd2s from "../../assets/kitpd2s-society.jpg";
import uscKiitLogo from "../../assets/usc-kiit-logo.png";
import ghciLogo from "../../assets/AnitaB.org India.webp";
import kiitIqacLogo from "../../assets/kiit-iqac.jpg";

export const achievements: Achievement[] = [
  {
    id: "paryavaran-ratna",
    logo: paryavaran,
    title: "Paryavaran Ratna Award",
    description: "National-level recognition (1st Position in the Country, South Asia region) for environmental awareness by Indian Centre for Wildlife and Environmental Studies in South Asia Region",
    link: "https://drive.google.com/file/d/19VMfmZctYlmqZEODhOlYcQmn5_cTfNml/view?usp=drivesdk",
    category: 'award'
  },
  {
    id: "sof",
    logo: sof,
    title: "Science Olympiad Foundation",
    description: "Gold & Silver Medalist in National Science Olympiad (NSO) and International Mathematics Olympiad (IMO)",
    link: "https://drive.google.com/drive/folders/1MYLTR6SD_IA0gDxv_XOGd_1Z4wIkJ-Ah",
    category: 'award'
  },
  {
    id: "et-ai-hackathon-2026",
    logo: etLogo,
    title: "Semi-Finalist — ET-AI Hackathon 2026",
    description: "Advanced as a Semi-Finalist by building Money Mentor, an AI-driven financial mentor application deployed to Vercel. Designed to help users make smarter financial decisions using generative AI and practical product thinking.",
    link: "https://drive.google.com/file/d/1Mz2fLnESpnhMynxPtF5vo5XB_bf64Bzd/view?usp=drive_link",
    category: 'award'
  },
  {
    id: "eureka-codefest-2026",
    logo: eurekaLogo,
    title: "Certificate of Excellence — Eureka Event (Codefest'26)",
    description: "Awarded at IIT (BHU) Varanasi Codefest'26 for excellence in problem solving, competitive analysis, and technical assessment.",
    link: "https://drive.google.com/file/d/1m0GabqNY7k8DTWR_AArlFQ5SAXgNUfDg/view?usp=drive_link",
    category: 'award'
  },
  {
    id: "sih-2025",
    logo: kiitLogo,
    title: "University Finalist — Smart India Hackathon (SIH) 2025",
    description: "Advanced as a University Finalist in Smart India Hackathon 2025 (Internal Hackathon). Credential ID: SIH25 / 2328162.",
    link: "https://drive.google.com/drive/u/1/folders/1SE2g4_NnQnEZSNAXab04CVy2UU_QTOVC",
    category: 'award'
  },
  {
    id: "hackdays-kiit",
    logo: kitpd2s,
    title: "Organizing Committee & Event Management Member — HackDays @ KIIT",
    description: "Served on the organizing committee for HackDays @ KIIT – Build w/ Gemini (official MLH mini-hackathon). Managed event coordination, floor operations, and technical support. Awarded Certificate of Appreciation.",
    link: "https://drive.google.com/file/d/1bNBOL2rGgqNxseVwW6tUU6-1aVC2PAb-/view?usp=drive_link",
    category: 'award'
  },
  {
    id: "usc-rpa",
    logo: uscKiitLogo,
    title: "RPA & AI Domain Member — USC.KIIT",
    description: "Collaborating with engineering peers on Robotic Process Automation (RPA) and AI initiatives. Implementing automation workflows and driving technology-centric solutions within the student community.",
    link: "https://drive.google.com/file/d/1rZAQ-bXxJpahNoQ9gBcINATWb2w5qnj0/view",
    category: 'award'
  },
  {
    id: "ghci-2025",
    logo: ghciLogo,
    title: "GHCI 2025 Hackathon — 'Unbound with GenAI'",
    description: "Participated in the Grace Hopper Celebration of India (GHCI) 2025 Hackathon with Team 'Saathi', exploring cutting-edge GenAI applications and developing innovative tech solutions focused on real-world impact.",
    link: "https://www.verix.io/credential/83331756-eced-4d25-902d-e17dfdb901d9",
    category: 'award'
  },
  {
    id: "codesprint",
    logo: uscKiitLogo,
    title: "Participant — 45-Day Coding Challenge (CodeSprint 2.0)",
    description: "Participated in an intensive 45-day coding challenge focused on Data Structures and Algorithms, solving daily problems covering arrays, linked lists, trees, graphs, dynamic programming, and more.",
    link: "https://drive.google.com/file/d/1g7rhg43sna9X2-eFBWp7QKlJT-APvoZ6/view?usp=drivesdk",
    category: 'award'
  },
  {
    id: "viksit-bharat",
    logo: kiitIqacLogo,
    title: "Participant — Viksit Bharat @2047 Series Workshop",
    description: "Participated in the Viksit Bharat @2047 series workshop organized by IQAC, KIIT, exploring innovation, technology, sustainable development, and nation-building themes.",
    link: "https://drive.google.com/file/d/1eDkUurpZ2yh5aqJ8WONh613n7trXMP8z/view?usp=drive_link",
    category: 'award'
  },
  {
    id: "school-life",
    logo: bdImage,
    title: "School Life Achievements",
    description: "10th (2020) – 93% & 12th (2022) – 84% (CBSE), Hindustan Olympiad, 1st position in English Essay Competition, 2nd place in Quiz Competition, Mock Parliament participant, Jal House Volunteer activities",
    link: "https://drive.google.com/drive/folders/1MCfNfocrDAu2wn5L7ir0WfjlszRp7XSR",
    category: 'academic'
  },
{
    id: "aenexz-internship",
    logo: aenexzLogo,
    title: "Aenexz Tech AI & ML Internship",
    description: "April 5 - May 5, 2026",
    link: "#",
    category: 'internship'
  },
  {
    id: "pinnacle-internship",
    logo: pinnacleLogo,
    title: "Pinnacle Labs AI Internship",
    description: "May 21 - June 20, 2025",
    link: "#",
    category: 'internship'
  },
  {
    id: "codealpha-internship",
    logo: codealphaLogo,
    title: "CodeAlpha ML Internship",
    description: "May 25 - Aug 25, 2025",
    link: "#",
    category: 'internship'
  },
  {
    id: "internship-studio",
    logo: internshipstudioLogo,
    title: "Internship Studio C++ & DS",
    description: "June 6 - July 11, 2024",
    link: "#",
    category: 'internship'
  }
];
