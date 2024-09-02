import { motion } from "framer-motion";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiKeras,
  SiJavascript,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiExpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const SkillIcon = ({ Icon, name }: { Icon: React.ElementType; name: string }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(0, 123, 255, 0.5)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon size={50} className="text-blue-500 mb-2" />
    <span className="text-sm dark:text-gray-300 text-black">{name}</span>
  </motion.div>
);

const SkillsSection = () => (
  <motion.section
    className="py-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        <SkillIcon Icon={SiPython} name="Python" />
        <SkillIcon Icon={SiPytorch} name="PyTorch" />
        <SkillIcon Icon={SiTensorflow} name="TensorFlow" />
        <SkillIcon Icon={SiScikitlearn} name="Scikit-learn" />
        <SkillIcon Icon={SiPandas} name="Pandas" />
        <SkillIcon Icon={SiNumpy} name="NumPy" />
        <SkillIcon Icon={SiKeras} name="Keras" />
        <SkillIcon Icon={SiJavascript} name="JavaScript" />
        <SkillIcon Icon={SiReact} name="React" />
        <SkillIcon Icon={SiDocker} name="Docker" />
        <SkillIcon Icon={SiKubernetes} name="Kubernetes" />
        <SkillIcon Icon={FaAws} name="AWS" />
        <SkillIcon Icon={SiTypescript} name="TypeScript" />
        <SkillIcon Icon={SiNextdotjs} name="Next.js" />
        <SkillIcon Icon={SiDjango} name="Django" />
        <SkillIcon Icon={SiExpress} name="Express.js" />
      </div>
    </div>
  </motion.section>
);

export default SkillsSection;