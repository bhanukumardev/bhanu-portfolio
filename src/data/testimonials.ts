export interface Testimonial {
  id: string;
  logo: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}
import pinnacleLogo from "../../assets/pinnacle-logo.png";
import codealphaLogo from "../../assets/codealpha-logo.png";
import internshipstudioLogo from "../../assets/internshipstudio-logo.png";

export const testimonials: Testimonial[] = [
  {
    id: "pinnacle",
    logo: pinnacleLogo,
    quote: "Bhanu has demonstrated exceptional dedication and skill during the Artificial Intelligence internship at Pinnacle Labs, impressing us with valuable contributions to tasks and projects.",
    author: "Pinnacle Labs",
    position: "CEO & Founder",
    company: "Pinnacle Labs"
  },
  {
    id: "codealpha",
    logo: codealphaLogo,
    quote: "Congratulations! We are delighted to have Bhanu as a Machine Learning Intern at CodeAlpha. We look forward to a worthwhile and fruitful association and wish him the most enjoyable and truly meaningful internship experience.",
    author: "Swati Srivastava",
    position: "Founder & CEO",
    company: "CodeAlpha"
  },
  {
    id: "internship-studio",
    logo: internshipstudioLogo,
    quote: "We wish Bhanu all the best for his future endeavours. He has shown strong C++ and Data Structures skills during the internship.",
    author: "Aman Malhotra",
    position: "Internship Mentor",
    company: "Internship Studio"
  }
];
