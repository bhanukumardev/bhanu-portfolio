import resumeparser from "../../assets/resumeparser.gif";
import translator from "../../assets/translator.gif";
import creditscore from "../../assets/creditscore.gif";
import teachable from "../../assets/teachablemachine.png";
import health from "../../assets/health-predictor.gif";
import fraud from "../../assets/fraud-detection.gif";
import sih from "../../assets/sih2025-logo.png";
import newsscrapper from "../../assets/news-scrapper.gif";

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
    title: "GenAI Resume Parser",
    description: "AI-powered resume parser using Python, Flask, OpenAI, and Ollama. Parse resumes instantly with AI. Try the live demo or view the code.",
    tags: ["NLP", "LLM", "PDF Parsing", "FastAPI"],
  image: resumeparser,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_pinnaclelabs-genai-ai-activity-7334604534679302144-WLN8",
    github: "https://github.com/bhanukumardev/GenAI_Resume_Parser"
  },
  {
    title: "AI Translator App",
    description: "Real-time multi-language translation app using Python and Streamlit. Translate languages in real-time. Try the demo or see the code.",
    tags: ["Streamlit", "Deep Translator", "UI/UX"],
  image: translator,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_pinnaclelabs-ai-python-activity-7340036639034929152-Telc",
    github: "https://github.com/bhanukumardev/TranslatorApp"
  },
  {
    title: "Credit Scoring Model",
    description: "Machine learning model for credit risk analysis using scikit-learn. Predict credit risk with ML. Try the demo or view code.",
    tags: ["ML", "Random Forest", "Data Analysis"],
  image: creditscore,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_machinelearning-creditscoring-datascience-activity-7335941965395492865-vW-f",
    github: "https://github.com/bhanukumardev/CodeAlpha_CreditScoringModel"
  },
  {
    title: "Teachable Machine Project",
    description: "Custom image classifier using Google's Teachable Machine. Classify images with a no-code ML tool. Try or view code.",
    tags: ["No-code ML", "Image Classification"],
  image: teachable,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_ai-teachablemachine-pinnaclelabs-activity-7340379191940448257-LFl3",
    github: "https://github.com/bhanukumardev/TeachableMachineProject"
  },
  {
    title: "Health Symptom Predictor",
    description: "AI-powered health prediction app with React, FastAPI, PostgreSQL, ML models, and Groq LLM chatbot. Full-stack AI health prediction with ML disease models and intelligent chatbot. Deployed on Vercel.",
    tags: ["React", "FastAPI", "PostgreSQL", "ML", "Groq LLM"],
  image: health,
    demo: "https://health-symptom-predictor-vbrf.vercel.app/",
    github: "https://github.com/bhanukumardev/health-symptom-predictor"
  },
  {
    title: "Fraud Detection App",
    description: "AI/ML-based fraud detection for financial transactions. Created for Pandora Paradox @ KIIT E-Summit 2025. Real-time financial fraud detection system. Competition project by Team Binary Brains.",
    tags: ["Python", "Streamlit", "ML", "Anomaly Detection"],
  image: fraud,
    demo: "https://fraud-detection-app-rxiwn9wo9sfcg3m7icga2b.streamlit.app/",
    github: "https://github.com/bhanukumardev/fraud-detection-app"
  },
  {
    title: "SIH SurakshaSaathi",
    description: "Real-time disaster management training platform with AI/ML integration, analytics, and gamified drills. Smart India Hackathon project for disaster management training with real-time alerts and gamification.",
    tags: ["TypeScript", "AI/ML", "Full-Stack", "SIH"],
  image: sih,
    demo: "https://suraksha-saathi.vercel.app/",
    github: "https://github.com/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training"
  },
  {
    title: "News Headline Scrapper",
    description: "Automated news aggregation with UiPath bot that scrapes top 5 headlines from BBC and Times of India. Automated bot for real-time news headline extraction from major news sources.",
    tags: ["Python", "UiPath", "Web Scraping", "Automation"],
  image: newsscrapper,
    demo: "https://www.linkedin.com/posts/bhanu-kumar-dev-97b820313_uipath-uipathstudentcommunity-usckiit-activity-7386007620220006400-fzt5",
    github: "https://github.com/bhanukumardev/MinorProject_NewsHeadlineScrapper"
  }
];
