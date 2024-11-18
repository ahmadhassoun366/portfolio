"use client";

import { useContext, useEffect } from "react";
import { useAnimation } from "framer-motion";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/Contact-section";
import ThemeService from "@/shared/services/theme/theme.service";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import { projects } from "@/static/project";
import ChatIcon from "@/app/models/chat.modals"; 

export default function Home() {
  const controls = useAnimation();
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);
  const theme = themeSvc.getTheme;
  console.log("from page.tsx", theme);
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      
      {/* Add the Chat Icon */}
      <ChatIcon />
    </main>
  );
}
