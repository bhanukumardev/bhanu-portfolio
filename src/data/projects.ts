import resumeparser from "../../assets/resumeparser.gif";
import translator from "../../assets/translator.gif";
import creditscore from "../../assets/creditscore.gif";
import teachable from "../../assets/teachablemachine.png";
import health from "../../assets/health-predictor.gif";
import fraud from "../../assets/fraud-detection.gif";
import sih from "../../assets/sih2025-logo.png";
import newsscrapper from "../../assets/news-scrapper.gif";
import fooddelivery from "../../assets/food-delivery.gif";
import emotionRecognition from "../../assets/EmotionRecognition-EEG_Signal.jpg";
import moneyMentor from "../../assets/Money Mentor.gif";
import faqBot from "../../assets/E-Commerce FAQ Bot.png";
import ashaLogo from "../../assets/asha.jpeg";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Asha - AI Companion for Senior Wellness",
    description: "AI-powered wellness companion for senior citizens with voice support, guided exercises, health tracking, and PWA capabilities.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PWA", "AI", "Voice"],
    image: ashaLogo,
    demo: "https://kinetic-asha-avatar.vercel.app/",
    github: "https://github.com/bhanukumardev/kinetic-asha-avatar"
  },
  {
    title: "Agentic AI E-Commerce FAQ Bot",
    description: "Autonomous Agentic AI capstone with intelligent FAQ bot using advanced LLM workflows for rapid query resolution.",
    tags: ["Python", "LangGraph", "ChromaDB", "Streamlit"],
    image: faqBot,
    demo: "https://e-commerce-faq-bot.streamlit.app/",
    github: "https://github.com/bhanukumardev/Agentic-AI-Capstone-Project"
  },
  {
    title: "Money Mentor – AI Financial Advisor",
    description: "Full-stack AI-driven financial mentor for Economic Times GenAI Hackathon 2026 (Semi-Finalist). Smart financial planning and independence.",
    tags: ["Generative AI", "Full-Stack Development", "Vercel"],
    image: moneyMentor,
    demo: "https://money-mentor-zeta.vercel.app/",
    github: "https://github.com/bhanukumardev/Money-Mentor"
  },
  {
    title: "Health Symptom Predictor",
    description: "AI health prediction with React, FastAPI, PostgreSQL, ML models, and Groq LLM chatbot. Full-stack AI health diagnosis.",
    tags: ["React", "FastAPI", "PostgreSQL", "ML", "Groq LLM"],
    image: health,
    demo: "https://health-symptom-predictor.vercel.app/",
    github: "https://github.com/bhanukumardev/health-symptom-predictor"
  },
  {
    title: "Emotion Recognition using EEG Signals",
    description: "ML/deep learning algorithms extracting EEG brainwave features to classify emotional states. Academic affective computing project.",
    tags: ["Python", "Machine Learning", "Deep Learning"],
    image: emotionRecognition,
    github: "https://github.com/bhanukumardev/EmotionRecognition-EEG_Signal"
  },
  {
    title: "SIH SurakshaSaathi",
    description: "Real-time disaster management training with AI/ML analytics and gamified drills. Smart India Hackathon project.",
    tags: ["TypeScript", "AI/ML", "Full-Stack", "SIH"],
    image: sih,
    demo: "https://suraksha-saathi.vercel.app/",
    github: "https://github.com/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training"
  },
  {
    title: "QuickBite Food Delivery",
    description: "Modern food delivery PWA with React, TypeScript & Framer Motion. Interactive modals, real-time tracking, smart location services.",
    tags: ["React", "TypeScript", "Framer Motion", "PWA", "Tailwind CSS"],
    image: fooddelivery,
    demo: "https://quickbite-motion-delight.vercel.app/",
    github: "https://github.com/bhanukumardev/food-delivery-quickbite"
  },
  {
    title: "Fraud Detection App",
    description: "AI/ML fraud detection for financial transactions. Pandora Paradox @ KIIT E-Summit 2025. Real-time anomaly detection.",
    tags: ["Python", "Streamlit", "ML", "Anomaly Detection"],
    image: fraud,
    demo: "https://fraud-detection-app-rxiwn9wo9sfcg3m7icga2b.streamlit.app/",
    github: "https://github.com/bhanukumardev/fraud-detection-app"
  },
  {
    title: "News Headline Scrapper",
    description: "Automated news aggregation with UiPath bot scraping top headlines from BBC and Times of India.",
    tags: ["Python", "UiPath", "Web Scraping", "Automation"],
    image: newsscrapper,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_uipath-uipathstudentcommunity-usckiit-activity-7386007620220006400-fzt5",
    github: "https://github.com/bhanukumardev/MinorProject_NewsHeadlineScrapper"
  },
  {
    title: "Credit Scoring Model",
    description: "Machine learning model for credit risk analysis using scikit-learn. Predict credit risk with ML.",
    tags: ["ML", "Random Forest", "Data Analysis"],
    image: creditscore,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_machinelearning-creditscoring-datascience-activity-7335941965395492865-vW-f",
    github: "https://github.com/bhanukumardev/CodeAlpha_CreditScoringModel"
  },
  {
    title: "GenAI Resume Parser",
    description: "AI-powered resume parser using Python, Flask, OpenAI, and Ollama. Parse resumes instantly with AI.",
    tags: ["NLP", "LLM", "PDF Parsing", "FastAPI"],
    image: resumeparser,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_pinnaclelabs-genai-ai-activity-7334604534679302144-WLN8",
    github: "https://github.com/bhanukumardev/GenAI_Resume_Parser"
  },
  {
    title: "AI Translator App",
    description: "Real-time multi-language translation app using Python and Streamlit. Translate languages instantly.",
    tags: ["Streamlit", "Deep Translator", "UI/UX"],
    image: translator,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_pinnaclelabs-ai-python-activity-7340036639034929152-Telc",
    github: "https://github.com/bhanukumardev/TranslatorApp"
  },
  {
    title: "Teachable Machine Project",
    description: "Custom image classifier using Google's Teachable Machine. Classify images with no-code ML.",
    tags: ["No-code ML", "Image Classification"],
    image: teachable,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_ai-teachablemachine-pinnaclelabs-activity-7340379191940448257-LFl3",
    github: "https://github.com/bhanukumardev/TeachableMachineProject"
  }
];
