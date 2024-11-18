"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import ThemeSettingsService from "@/shared/services/theme/theme.service";
import themeSettingsSvcContext from "@/shared/services/theme/theme.context";
import logo from "../../../public/images/mylogo.jpg";
import Image from "next/image";

const Header = () => {
  const themeSvc = useContext<ThemeSettingsService>(themeSettingsSvcContext);
  const [theme, setTheme] = useState(themeSvc.getTheme());
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    themeSvc.toggleTheme();
    setTheme(themeSvc.getTheme());
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 bg-white/80 dark:bg-gray-900/80 md:backdrop-blur-lg shadow-lg"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="relative z-10">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-blue-500 rounded-xl -rotate-6 opacity-20"></div>
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={48}
                      height={48}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Ahmad Hassoun
                  </h1>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Software Engineer
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                        pathname === item.path
                          ? "text-white dark:text-white"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </span>
                    {pathname === item.path && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === "dark" ? (
                    <FaSun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-blue-500" />
                  )}
                </motion.button>

                <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

                <motion.a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="w-4 h-4" />
                  <span>Contact</span>
                </motion.a>
              </div>
            </nav>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10 p-2 md:hidden"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="h-0.5 w-full bg-gray-600 dark:bg-gray-300"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.1 }}
                  className="h-0.5 w-full bg-gray-600 dark:bg-gray-300"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="h-0.5 w-full bg-gray-600 dark:bg-gray-300"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-24"
          >
            <div className="container mx-auto px-6">
              <nav className="flex flex-col items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-medium ${
                        pathname === item.path
                          ? "text-blue-500"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-4 mt-8"
                >
                  <motion.button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800"
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === "dark" ? (
                      <FaSun className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <FaMoon className="w-6 h-6 text-blue-500" />
                    )}
                  </motion.button>

                  <motion.a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="w-5 h-5" />
                    <span>Get in Touch</span>
                  </motion.a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
