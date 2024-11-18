"use client";
import { useRouter } from "next/navigation";
import ProjectCard from "../components/ProjectCard";
import { projects } from "@/static/project";

const AllProjectsPage = () => {
  const router = useRouter();

  const handleProjectClick = (projectSlug: string) => {
    router.push(`/projects/${projectSlug}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white overflow-x-hidden">
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my latest work and collaborations
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project.slug)}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AllProjectsPage;
