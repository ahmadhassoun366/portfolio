"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/yourusername" },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Dribbble",
      icon: FaDribbble,
      url: "https://dribbble.com/yourusername",
    },
  ];

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Blog", url: "/blog" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Skills",
      links: [
        {
          name: "Full Stack Development",
          url: "/skills#full-stack-development",
        },
        { name: "AI Engineering", url: "/skills#ai-engineering" },
        { name: "Web Development", url: "/skills#web-development" },
        { name: "Machine Learning", url: "/skills#machine-learning" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-4"
            >
              Ahmad Hassoun
            </motion.h2>
            <p className="mb-4">
              Blending full-stack development skills with advanced machine
              learning expertise, I specialize in crafting AI solutions as a
              Software Engineering Specialist in ML.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="text-lg font-semibold mb-4"
              >
                {section.title}
              </motion.h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                    className="mb-2"
                  >
                    <Link
                      href={link.url}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400"
        >
          <p>&copy; {currentYear} Ahmad Hassoun. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
