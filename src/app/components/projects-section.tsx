import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectsSection = ({
  projects,
}: {
  projects: Project[];
}) => (
  <motion.section 
    className="py-20 bg-gray-50 dark:bg-gray-900"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header - Matching Skills Section Style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my technical expertise through real-world applications
            and innovative solutions.
          </p>
          <div className="mt-4 text-sm text-blue-500 dark:text-blue-400 font-medium">
            Each project demonstrates different aspects of my development capabilities
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border-l-4 border-blue-500 h-full hover:shadow-2xl transition-all duration-300"
            >
              <ProjectCard 
                {...project}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button - Styled like Skills Section */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/projects">
            <motion.div
              className="flex items-center gap-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaRocket className="text-xl" />
              <span className="font-semibold text-lg">
                Explore All Projects
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Project Categories */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-fit mb-4">
              <FaCode className="text-2xl text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Web Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Modern, responsive applications built with cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-fit mb-4">
              <FaLightbulb className="text-2xl text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Innovative Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Creative approaches to solving complex technical challenges.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-fit mb-4">
              <FaRocket className="text-2xl text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Scalable Architecture
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Robust and maintainable systems designed for growth.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default ProjectsSection;