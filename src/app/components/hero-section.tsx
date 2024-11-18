import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolio from "../../../public/images/portfolio.jpg";
import ThemeSettingsService from "@/shared/services/theme/theme.service";
import themeSettingsSvcContext from "@/shared/services/theme/theme.context";

const HeroSection = () => {
  const themeSvc = useContext<ThemeSettingsService>(themeSettingsSvcContext);
  const theme = themeSvc.getTheme();

  return (
    <section className="min-h-screen sm:py-0 py-28 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-950/30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center px-3 py-1 space-x-2 bg-blue-100/80 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Open to new opportunities
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  Software Engineer
                </h1>
                <div className="text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-semibold h-12">
                  <Typewriter
                    words={[
                      "Building scalable solutions",
                      "Crafting user experiences",
                      "Solving complex problems",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Hi, I&apos;m Ahmad Hassoun. I specialize in building robust and
                scalable web applications that solve real-world business
                challenges. With a focus on clean architecture and performance
                optimization.
              </p>

              {/* CTA Section */}
              <div className="flex flex-wrap items-center gap-6">
                <Link href="#contact">
                  <motion.button
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Let&apos;s Collaborate
                  </motion.button>
                </Link>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <SocialLink
                    href="https://github.com/ahmadhss366"
                    platform="GitHub"
                    icon={<FaGithub className="w-6 h-6" />}
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/ahmadhss/"
                    platform="LinkedIn"
                    icon={<FaLinkedin className="w-6 h-6" />}
                  />
                  <SocialLink
                    href="adh00002@students.aust.edu.lb"
                    platform="Email"
                    icon={<span className="material-icons">email</span>}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto flex items-center justify-center"
            >
              {/* Background Elements */}
              <div className="absolute inset-0 scale-[1.8] blur-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 scale-[1.4] blur-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full animate-pulse" />

              {/* Image Container */}
              <div className="relative z-10 w-[80%] h-[100%] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl">
                <Image
                  src={portfolio}
                  alt="Ahmad Hassoun"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />

                {/* Bottom Info Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm text-white/90 font-medium">
                        Available for Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Adjusted positioning */}
              <motion.div
                className="absolute -top-6 left-6 bg-blue-500 rounded-lg p-3 shadow-lg z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <FaCode className="text-white text-xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-6 bg-purple-500 rounded-lg p-3 shadow-lg z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              >
                <FaRocket className="text-white text-xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown className="w-6 h-6 text-blue-500 dark:text-blue-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  platform,
  icon,
}: {
  href: string;
  platform: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    title={platform}
  >
    {icon}
  </motion.a>
);

export default HeroSection;
