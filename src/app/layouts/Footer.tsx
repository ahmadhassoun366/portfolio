"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

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
    { name: "Email", icon: FaEnvelope, url: "mailto:your.email@example.com" },
  ];

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/#about" },
        { name: "Projects", url: "/#projects" },
        { name: "Blog", url: "/blog" },
        { name: "Contact", url: "/#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", url: "/faq" },
        { name: "Documentation", url: "/documentation" },
        { name: "Support", url: "/support" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and About Section */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Ahmad Hassoun
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs text-center md:text-left">
              Full Stack Developer specializing in building impactful and
              scalable web solutions.
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
                  aria-label={link.name}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <Link
                      href={link.url}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-500"
        >
          &copy; {currentYear} Ahmad Hassoun. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
