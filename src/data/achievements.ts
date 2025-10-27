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
    id: "school-life",
    logo: bdImage,
    title: "School Life Achievements",
    description: "10th (2020) – 93% & 12th (2022) – 84% (CBSE), Hindustan Olympiad, 1st position in English Essay Competition, 2nd place in Quiz Competition, Mock Parliament participant, Jal House Volunteer activities",
    link: "https://drive.google.com/drive/folders/1MCfNfocrDAu2wn5L7ir0WfjlszRp7XSR",
    category: 'academic'
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
