import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const ProjectsSection = ({
  projects,
}: {
  projects: { slug: string; title: string; description: string; tags: string[] }[];
}) => (
  <main className="bg-white dark:bg-gray-900">
    <section className="container mx-auto px-4 py-20 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured AI & Software Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, 4).map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`} legacyBehavior>
            <a>
              <ProjectCard {...project} />
            </a>
          </Link>
        ))}
      </div>
      <motion.div
        className="text-center mt-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/projects">
          <motion.a
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-300 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </Link>
      </motion.div>
    </section>
  </main>
);

export default ProjectsSection;