import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiKeras,
} from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter';
import portfolio from "../../../public/images/portfolio.jpg";
import ThemeSettingsService from "@/shared/services/theme/theme.service";
import themeSettingsSvcContext from "@/shared/services/theme/theme.context";

const HeroSection = () => {
  const themeSvc = useContext<ThemeSettingsService>(themeSettingsSvcContext);
  const theme = themeSvc.getTheme();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-white dark:bg-gray-900">
      <BackgroundAnimation />
      <Content />
      <ScrollIndicator />
    </section>
  );
};

const BackgroundAnimation = () => (
  <motion.div
    className="absolute inset-0 z-0"
    initial={{ scale: 1.2, rotate: -5 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <div className="w-full h-full bg-gradient-to-br from-gray-100 via-blue-100 to-white opacity-50 dark:from-gray-900 dark:via-blue-900 dark:to-black" />
  </motion.div>
);

const Content = () => (
  <div className="container mx-auto px-4 py-20 z-10">
    <div className="flex flex-col items-center text-center">
      <ProfileImage />
      <TitleAndTypewriter />
      <Description />
      <TechStack />
      <SocialLinks />
      <ContactButton />
    </div>
  </div>
);

const ProfileImage = () => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-300 shadow-lg overflow-hidden">
      <Image
        src={portfolio}
        alt="Ahmad Hassoun"
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
        priority
      />
    </div>
  </motion.div>
);

const TitleAndTypewriter = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-gray-900 dark:text-white"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
      Ahmad Hassoun
    </h1>
    <div className="relative h-12 md:h-16 mb-6">
      <span className="text-2xl md:text-3xl text-blue-500 dark:text-blue-300">
        <Typewriter
          words={["AI Engineer", "Software Developer", "Machine Learning Specialist", "Full Stack Developer"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  </motion.div>
);

const Description = () => (
  <motion.p
    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    Combining a robust foundation in full-stack development with
    cutting-edge expertise in machine learning. As a Software
    Engineering Specialist in ML, I am driven to create innovative AI
    solutions that address complex challenges.
  </motion.p>
);

const TechStack = () => (
  <motion.div
    className="flex justify-center space-x-8 mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <FloatingIcon Icon={SiPytorch} delay={0.3} />
    <FloatingIcon Icon={SiTensorflow} delay={0.4} />
    <FloatingIcon Icon={SiScikitlearn} delay={0.5} />
    <FloatingIcon Icon={SiPandas} delay={0.6} />
    <FloatingIcon Icon={SiNumpy} delay={0.7} />
    <FloatingIcon Icon={SiKeras} delay={0.8} />
  </motion.div>
);

const FloatingIcon = ({
  Icon,
  delay,
}: {
  Icon: React.ElementType;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Icon size={40} className="text-blue-500 dark:text-blue-400" />
  </motion.div>
);

const SocialLinks = () => (
  <motion.div
    className="flex justify-center space-x-6 mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <SocialLink href="https://github.com/yourusername" Icon={FaGithub} />
    <SocialLink href="https://linkedin.com/in/yourusername" Icon={FaLinkedin} />
    <SocialLink href="https://twitter.com/yourusername" Icon={FaTwitter} />
  </motion.div>
);

const SocialLink = ({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ElementType;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={28} />
  </motion.a>
);

const ContactButton = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1 }}
  >
    <Link href="#contact" passHref>
      <p className="px-8 py-3 rounded-full transition-colors text-lg font-semibold bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400">
        Let&apos;s Innovate Together
      </p>
    </Link>
  </motion.div>
);

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    onClick={() => {
      const aboutSection = document.getElementById("about");
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <FaChevronDown size={24} className="text-gray-900 dark:text-white" />
  </motion.div>
);

export default HeroSection;
