import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaBrain, FaRobot, FaChartLine } from "react-icons/fa";

const FeatureCard = ({
  Icon,
  title,
  description,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-blue-500 dark:text-blue-300 text-4xl mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-blue-200">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-200">{description}</p>
  </motion.div>
);

const AboutSection = () => (
  <section
    id="about"
    className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900"
  >
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-200">
            AI Engineer & Machine Learning Specialist
          </h3>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            With over 5 years of experience in AI and machine learning,
            I&apos;ve been at the forefront of developing innovative solutions
            that push the boundaries of what&apos;s possible with artificial
            intelligence.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-6">
            My expertise spans across various domains of AI, including computer
            vision, natural language processing, and reinforcement learning.
            I&apos;m passionate about creating AI systems that not only solve
            complex problems but also drive meaningful impact in the real world.
          </p>
          <motion.div
            className="flex items-center text-blue-500 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-200 transition-colors duration-300 cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <Link href="/resume" className="flex items-center w-44">
              <span className="mr-2">View My Resume</span>
              <FaArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FeatureCard
            Icon={FaBrain}
            title="Deep Learning Expert"
            description="Specialized in designing and implementing state-of-the-art neural network architectures for complex AI challenges."
          />
          <FeatureCard
            Icon={FaRobot}
            title="AI System Architect"
            description="Experienced in designing scalable AI systems that integrate seamlessly with existing infrastructure."
          />
          <FeatureCard
            Icon={FaChartLine}
            title="Data-Driven Innovator"
            description="Skilled at leveraging big data to extract actionable insights and drive decision-making processes."
          />
          <motion.div
            className="bg-blue-600 dark:bg-blue-500 p-6 rounded-lg shadow-lg flex items-center justify-center text-white dark:text-gray-900 font-bold text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            10+ AI Projects Delivered
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
