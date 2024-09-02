"use client";
import { useRouter, useParams } from "next/navigation";

const projects = [
  {
    title: "PWR Labs Explorer",
    slug: "pwr-labs-explorer",
    description:
      "Explore the latest innovations and projects at PWR Labs. Ready to power your idea? We're on the lookout for groundbreaking ideas that spark transformation.",
    details:
      "PWR Labs Explorer is a platform designed to showcase the latest projects and innovations at PWR Labs. It provides a comprehensive overview of ongoing and completed projects, highlighting their impact and potential.",
    tags: ["Innovation", "Technology", "Transformation"],
    technologies: ["React", "Next.js", "Tailwind CSS"],
    productionUrl: "https://explorer.pwrlabs.io/",
    githubUrl: "https://github.com/pwrlabs/explorer",
  },
  {
    title: "PWR Labs Community",
    slug: "pwr-labs-community",
    description:
      "Join the PWR Labs community to collaborate and share ideas. Have something in mind? Let's make it happen together.",
    details:
      "PWR Labs Community is a collaborative platform where members can share ideas, work on projects together, and foster innovation. It aims to build a strong community of like-minded individuals.",
    tags: ["Community", "Collaboration", "Ideas"],
    technologies: ["React", "Next.js", "Firebase"],
    productionUrl: "https://community.pwrlabs.io/",
    githubUrl: "https://github.com/pwrlabs/community",
  },
  {
    title: "AI-Powered Image Recognition",
    slug: "ai-powered-image-recognition",
    description:
      "Developed a state-of-the-art deep learning model for real-time object detection in images and video streams, achieving 98% accuracy.",
    details:
      "This project involves creating a deep learning model capable of real-time object detection in images and video streams. The model achieves high accuracy and can be used in various applications such as surveillance and autonomous vehicles.",
    tags: ["Computer Vision", "Deep Learning", "Object Detection"],
    technologies: ["Python", "TensorFlow", "OpenCV"],
    productionUrl: "",
    githubUrl: "https://github.com/pwrlabs/ai-image-recognition",
  },
  {
    title: "Advanced NLP System",
    slug: "advanced-nlp-system",
    description:
      "Created a cutting-edge NLP system capable of sentiment analysis and entity recognition, processing over 1 million customer feedback entries daily.",
    details:
      "The Advanced NLP System is designed to process large volumes of text data, performing tasks such as sentiment analysis and entity recognition. It is highly efficient and can handle over a million entries daily.",
    tags: ["Natural Language Processing", "Sentiment Analysis", "Big Data"],
    technologies: ["Python", "NLTK", "SpaCy"],
    productionUrl: "",
    githubUrl: "https://github.com/pwrlabs/nlp-system",
  },
  {
    title: "Predictive Maintenance AI",
    slug: "predictive-maintenance-ai",
    description:
      "Implemented a machine learning solution for predicting equipment failures in industrial settings, reducing downtime by 35%.",
    details:
      "This project focuses on using machine learning to predict equipment failures in industrial environments. By analyzing time series data, the system can forecast potential issues and reduce downtime significantly.",
    tags: ["Machine Learning", "Time Series Analysis", "IoT"],
    technologies: ["Python", "scikit-learn", "Pandas"],
    productionUrl: "",
    githubUrl: "https://github.com/pwrlabs/predictive-maintenance-ai",
  },
  {
    title: "Autonomous Drone Navigation",
    slug: "autonomous-drone-navigation",
    description:
      "Designed and trained a reinforcement learning model for autonomous drone navigation in complex environments, surpassing human pilot performance by 20%.",
    details:
      "This project involves developing a reinforcement learning model that enables drones to navigate autonomously in complex environments. The model outperforms human pilots and can be used in various applications such as search and rescue.",
    tags: ["Reinforcement Learning", "Robotics", "Computer Vision"],
    technologies: ["Python", "TensorFlow", "ROS"],
    productionUrl: "",
    githubUrl: "https://github.com/pwrlabs/drone-navigation",
  },
];

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = useParams(); // Use useParams to get the id
  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-gray-900 dark:text-white">Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <section className="relative bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">{project.title}</h1>
          <p className="text-lg">{project.description}</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Project Details</h2>
          <p className="text-md mb-6">{project.details}</p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-200 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Links</h2>
          {project.productionUrl && (
            <a
              href={project.productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 block mb-4"
            >
              Visit Production
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 block mb-4"
            >
              View on GitHub
            </a>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;