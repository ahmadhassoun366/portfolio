
"use client";
import { projects } from "@/static/project";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.slug === id);

  const defaultImage = "images\mylogo.jpg";
  const projectImage = project?.image || defaultImage;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-900 dark:text-white">
        Project not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Project Hero Image and Title */}
      <section className="relative">
        <Image
          src={projectImage}
          alt={project.title}
          width={320}
          height={320}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4 py-6">
          <h1 className="text-4xl font-extrabold mb-3">{project.title}</h1>
          <p className="text-lg max-w-2xl">{project.description}</p>
        </div>
      </section>

      {/* Project Details Card */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-10 grid md:grid-cols-2 gap-8">
          
          {/* Project Overview and Description */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links and Actions */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h2>
            <ul className="space-y-4 mb-6">
              {project.liveUrl && (
                <li>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
                  >
                    Visit Production Site
                  </a>
                </li>
              )}
              {project.githubUrl && (
                <li>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
                  >
                    View on GitHub
                  </a>
                </li>
              )}
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition">
                Explore More
              </button>
              <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;

