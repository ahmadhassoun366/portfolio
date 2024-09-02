"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons from react-icons
import ThemeSettingsService from "@/shared/services/theme/theme.service";
import themeSettingsSvcContext from "@/shared/services/theme/theme.context";
import logo from "../../../public/images/mylogo.jpg";
import Image from "next/image";
import { projects } from "@/static/project";

const Header = () => {
  const themeSvc = useContext<ThemeSettingsService>(themeSettingsSvcContext);
  const [theme, setTheme] = useState(themeSvc.getTheme());
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const pathname = usePathname();
  // current theme
  console.log("theeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem", theme);

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
    console.log("click");
    console.log(themeSvc.getTheme());
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isResumeSearch = searchQuery.toLowerCase() === "resume" || searchQuery.toLowerCase() === "cv";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/70 shadow-lg dark:bg-gray-800"
          : "bg-transparent md:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Image
              src={logo}
              alt="Logo"
              width={44}
              height={44}
              className="rounded-full"
            />

            <Link
              href="/"
              className={`text-2xl font-bold transition-colors hover:text-blue-500 ${
                isScrolled
                  ? "text-gray-800 dark:text-white"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              Ahmad Hassoun
            </Link>
          </motion.div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className={`transition-colors hover:text-blue-500 ${
                    isScrolled
                      ? "text-gray-800 dark:text-white"
                      : "text-gray-800 dark:text-white"
                  } ${pathname === item.path ? "font-bold" : ""}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4 relative"
          >
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {(searchQuery && (filteredProjects.length > 0 || isResumeSearch)) && (
              <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10">
                {isResumeSearch && (
                  <Link
                    href="/resume"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
                  >
                    Resume
                  </Link>
                )}
                {filteredProjects.map((project) => (
                  <Link
                    key={project.title}
                    href={`/projects/${project.slug}`}
                    className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            )}
            <button onClick={toggleTheme} className="focus:outline-none">
              {theme === "dark" ? (
                <FaSun className="h-6 w-6 text-yellow-500" />
              ) : (
                <FaMoon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none ${
                isScrolled
                  ? "text-gray-800 dark:text-white"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-2 transition-colors hover:text-blue-500 ${
                  isScrolled
                    ? "text-gray-800 dark:text-white"
                    : "text-gray-800 dark:text-white"
                } ${pathname === item.path ? "font-bold" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              className="mt-4 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {(searchQuery && (filteredProjects.length > 0 || isResumeSearch)) && (
              <div className="mt-2 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10">
                {isResumeSearch && (
                  <Link
                    href="/resume"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
                  >
                    Resume
                  </Link>
                )}
                {filteredProjects.map((project) => (
                  <Link
                    key={project.title}
                    href={`/projects/${project.slug}`}
                    className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            )}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={toggleTheme}
              className="mt-4 focus:outline-none w-full flex justify-center"
            >
              {theme === "dark" ? (
                <FaSun className="h-6 w-6 text-yellow-500" />
              ) : (
                <FaMoon className="h-6 w-6 text-gray-800" />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;