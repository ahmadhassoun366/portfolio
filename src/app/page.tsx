"use client";

import { useContext, useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/Contact-section";
import ThemeService from "@/shared/services/theme/theme.service";
import ThemeSvcContext from "@/shared/services/theme/theme.context";

export default function Home() {
  const controls = useAnimation();
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);
  const theme = themeSvc.getTheme;
  console.log("from page.tsx", theme);
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const projects = [
    {
      slug: "ai-powered-image-recognition",
      title: "AI-Powered Image Recognition",
      description:
        "Developed a state-of-the-art deep learning model for real-time object detection in images and video streams, achieving 98% accuracy.",
      tags: ["Computer Vision", "Deep Learning", "Object Detection"],
    },
    {
      slug: "advanced-nlp-system",
      title: "Advanced NLP System",
      description:
        "Created a cutting-edge NLP system capable of sentiment analysis and entity recognition, processing over 1 million customer feedback entries daily.",
      tags: ["Natural Language Processing", "Sentiment Analysis", "Big Data"],
    },
    {
      slug: "predictive-maintenance-ai",
      title: "Predictive Maintenance AI",
      description:
        "Implemented a machine learning solution for predicting equipment failures in industrial settings, reducing downtime by 35%.",
      tags: ["Machine Learning", "Time Series Analysis", "IoT"],
    },
    {
      slug: "autonomous-drone-navigation",
      title: "Autonomous Drone Navigation",
      description:
        "Designed and trained a reinforcement learning model for autonomous drone navigation in complex environments, surpassing human pilot performance by 20%.",
      tags: ["Reinforcement Learning", "Robotics", "Computer Vision"],
    },
    {
      slug: "pwr-labs-explorer",
      title: "PWR Labs Explorer",
      description:
        "Explore the latest innovations and projects at PWR Labs. Ready to power your idea? We're on the lookout for groundbreaking ideas that spark transformation.",
      tags: ["Innovation", "Technology", "Transformation"],
      link: "https://explorer.pwrlabs.io/",
    },
    {
      slug: "pwr-labs-community",
      title: "PWR Labs Community",
      description:
        "Join the PWR Labs community to collaborate and share ideas. Have something in mind? Let's make it happen together.",
      tags: ["Community", "Collaboration", "Ideas"],
      link: "https://community.pwrlabs.io/",
    },  
  ];

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
