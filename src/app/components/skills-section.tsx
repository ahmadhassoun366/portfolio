import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDjango,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJest,
  SiGit,
  SiVercel,
  SiNetlify,
  SiGraphql,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
} from "react-icons/fa";

const ProcessNode = ({
  Icon,
  title,
  description,
  technologies,
  index,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
  technologies: { icon: React.ElementType; name: string }[];
  index: number;
}) => (
  <div className="flex items-start gap-8">
    {/* Process Number with Label */}
    <div className="flex-shrink-0 flex flex-col items-center w-20">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform -rotate-45">
        <span className="transform rotate-45">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>
      <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-transparent mt-4"></div>
    </div>

    <motion.div
      className="relative flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl flex-grow border-l-4 border-blue-500"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Content */}
      <div className="flex-shrink-0 w-full md:w-64">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <Icon size={24} className="text-blue-500 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900 p-3 rounded-lg border border-blue-100 dark:border-blue-800 transition-transform duration-200 hover:scale-105"
              whileHover={{ transition: { duration: 0.2 } }}
            >
              <tech.icon
                size={20}
                className="text-blue-500 dark:text-blue-400"
              />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const SkillsSection = () => (
  <motion.section
    className="py-20 bg-gray-50 dark:bg-gray-900"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills & Development Workflow
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            My comprehensive skill set applied through a structured development approach, 
            ensuring high-quality deliverables at every stage of the project lifecycle.
          </p>
          <div className="mt-4 text-sm text-blue-500 dark:text-blue-400 font-medium">
            Each step represents core competencies in my technology stack
          </div>
        </div>

        <div className="space-y-16">
          {/* Process Nodes */}
          <ProcessNode
            Icon={FaCode}
            title="Frontend Development"
            description="Building responsive and interactive user interfaces with modern frameworks"
            technologies={[
              { icon: SiReact, name: "React" },
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiAngular, name: "Angular" },
              { icon: SiTypescript, name: "TypeScript" },
              { icon: SiJavascript, name: "JavaScript" },
              { icon: SiTailwindcss, name: "Tailwind" },
            ]}
            index={0}
          />

          <ProcessNode
            Icon={FaServer}
            title="Backend Architecture"
            description="Developing robust server-side applications and APIs"
            technologies={[
              { icon: SiNodedotjs, name: "Node.js" },
              { icon: SiExpress, name: "Express" },
              { icon: SiNestjs, name: "NestJS" },
              { icon: SiPython, name: "Python" },
              { icon: SiDjango, name: "Django" },
            ]}
            index={1}
          />

          <ProcessNode
            Icon={FaDatabase}
            title="Database Design"
            description="Implementing efficient data storage and retrieval systems"
            technologies={[
              { icon: SiMongodb, name: "MongoDB" },
              { icon: SiPostgresql, name: "PostgreSQL" },
              { icon: SiMysql, name: "MySQL" },
            ]}
            index={2}
          />

          <ProcessNode
            Icon={SiGraphql}
            title="API Integration"
            description="Creating and consuming RESTful and GraphQL APIs"
            technologies={[
              { icon: SiGraphql, name: "GraphQL" },
              { icon: SiPostman, name: "Postman" },
              { icon: SiSwagger, name: "Swagger" },
            ]}
            index={3}
          />

          <ProcessNode
            Icon={FaTools}
            title="Testing & Deployment"
            description="Ensuring quality and reliable deployment pipelines"
            technologies={[
              { icon: SiJest, name: "Jest" },
              { icon: SiGit, name: "Git" },
              { icon: SiVercel, name: "Vercel" },
              { icon: SiNetlify, name: "Netlify" },
            ]}
            index={4}
          />
        </div>

        {/* Final Outcome Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Final Step Number with Label - matches the style of previous steps */}
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0 flex flex-col items-center w-20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform -rotate-45">
                <span className="transform rotate-45">✓</span>
              </div>
              <div className="h-12 w-0.5 bg-gradient-to-b from-blue-500 to-transparent mt-4"></div>
            </div>

            <motion.div
              className="relative flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl flex-grow border-l-4 border-blue-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-shrink-0 w-full md:w-64">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <FaTools size={24} className="text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Final Deliverables
                    </h3>
                    <span className="text-sm text-blue-500 dark:text-blue-400">
                      End Result
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Production-ready solutions that exceed expectations
                </p>
              </div>

              <div className="flex-grow">
                <div className="grid md:grid-cols-3 gap-4">
                  <motion.div
                    className="flex flex-col gap-2 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-lg w-fit">
                      <FaCode
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Scalable Architecture
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Enterprise-grade applications built with modern best
                      practices and patterns.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-2 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-lg w-fit">
                      <FaServer
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Optimized Performance
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Fast, responsive, and efficient applications across all
                      platforms.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-2 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-lg w-fit">
                      <FaTools
                        size={20}
                        className="text-blue-500 dark:text-blue-400"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Maintainable Code
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Clean, documented, and future-proof development practices.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default SkillsSection;
