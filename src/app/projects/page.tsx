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
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <section className="container mx-auto px-4 py-20">
        <section className="relative my-4 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-10">
          <div className="container mx-auto px-4 text-center flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl font-extrabold mb-4">All Projects</h1>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} onClick={() => handleProjectClick(project.slug)}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AllProjectsPage;
