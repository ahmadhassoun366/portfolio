import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaServer,
  FaTools,
  FaLightbulb,
  FaRocket,
  FaCircle,
} from "react-icons/fa";

const AboutSection = () => (
  <section
    id="about"
    className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Timeline Dot */}
        <div className="relative text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="w-3 h-3 rounded-full bg-blue-500 ml-2"></div>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Transforming ideas into reality through code
            </p>
          </motion.div>
        </div>

        {/* Main Content with Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500 to-transparent"></div>

          {/* Journey Section */}
          <div className="space-y-12">
            {/* Professional Journey */}
            <TimelineItem position="left">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <FaRocket className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Professional Journey
                    </h3>
                    <p className="text-blue-500 dark:text-blue-400 font-medium">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed text-left">
                    With over 3 years of experience in web development, I&apos;ve been
                    crafting modern and responsive applications that deliver exceptional
                    user experiences. My journey spans both frontend and backend
                    technologies, allowing me to build complete solutions from the
                    ground up.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link href="/resume">
                    <motion.div
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium flex items-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Resume
                      <FaArrowRight size={14} />
                    </motion.div>
                  </Link>
                  <div className="text-blue-500 dark:text-blue-400 font-semibold">
                    3+ Years Experience
                  </div>
                </div>
              </div>
            </TimelineItem>

            {/* Skills Overview */}
            <TimelineItem position="right">
              <div className="space-y-6">
                {["Frontend", "Backend", "Tools"].map((domain, index) => (
                  <motion.div
                    key={domain}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 shadow-xl"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {domain} Development
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getSkills(domain).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-blue-400/10 dark:to-blue-500/10 border border-blue-500/20 rounded-xl text-blue-700 dark:text-blue-300 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TimelineItem>

            {/* Stats Section */}
            <TimelineItem position="left">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { number: "20+", label: "Projects", icon: FaCode },
                  { number: "15+", label: "Clients", icon: FaLightbulb },
                  { number: "5+", label: "Countries", icon: FaRocket },
                  { number: "100%", label: "Commitment", icon: FaTools },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="text-2xl mb-2 text-blue-100" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </TimelineItem>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TimelineItem = ({ 
  children, 
  position 
}: { 
  children: React.ReactNode;
  position: "left" | "right";
}) => (
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
    {position === "left" ? (
      <>
        <div className="md:text-right">{children}</div>
        <div className="hidden md:block"></div>
      </>
    ) : (
      <>
        <div className="hidden md:block"></div>
        <div>{children}</div>
      </>
    )}
    <TimelineDot />
  </div>
);

const TimelineDot = () => (
  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
    <div className="absolute w-8 h-8 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
  </div>
);

const getSkills = (domain: string) => {
  switch (domain) {
    case "Frontend":
      return ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"];
    case "Backend":
      return ["Node.js", "Express", "Python", "Django", "RESTful APIs"];
    case "Tools":
      return ["Git", "Docker", "CI/CD", "Jest", "Agile"];
    default:
      return [];
  }
};

export default AboutSection;
