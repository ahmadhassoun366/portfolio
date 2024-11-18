import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

const getProjectPlaceholder = (title: string) => {
  const getColor = (str: string) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-indigo-500 to-indigo-600",
      "from-violet-500 to-violet-600",
      "from-purple-500 to-purple-600",
      "from-cyan-500 to-cyan-600",
    ];
    return colors[
      Math.abs(
        str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
      ) % colors.length
    ];
  };

  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${getColor(
        title
      )} flex items-center justify-center`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-3 gap-2 p-4">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-white/20 rounded-md"></div>
            ))}
        </div>
      </div>
      <div className="text-white text-5xl font-bold opacity-20">
        {title.charAt(0)}
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  slug,
}: ProjectCardProps) => {
  const router = useRouter();
  const DEFAULT_IMAGE = "/images/default-project-image.jpg"; // Default image path

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    router.push(`/projects/${slug}`);
  };

  return (
    <div
      className="flex flex-col h-full cursor-pointer group relative"
      onClick={handleCardClick}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
        {!image || image === DEFAULT_IMAGE ? (
          getProjectPlaceholder(title)
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Project Links - Positioned at top */}
        <div className="absolute top-4 right-4 flex gap-3 z-10">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-white text-lg" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-white text-lg" />
            </motion.a>
          )}
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-blue-100 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/20"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium text-blue-100">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Description and Details */}
      <div className="flex-grow flex flex-col px-1">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* View Details Link */}
        <motion.div
          className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-medium text-sm group/link"
          whileHover={{ x: 5 }}
        >
          View Project Details
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
