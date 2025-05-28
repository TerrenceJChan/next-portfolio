"use client";

import CollectionsCard from "@/components/CollectionsCard";
import { motion } from "framer-motion";

interface ProjectsPageProps {
  projects: {
    frontmatter: {
      title: string;
      slug: string;
      description: string;
      image: string;
    };
  }[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>Check out some of my projects below:</p>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.frontmatter.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CollectionsCard
              title={project.frontmatter.title}
              slug={project.frontmatter.slug}
              description={project.frontmatter.description}
              image={project.frontmatter.image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
