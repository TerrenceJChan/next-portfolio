import { getAllProjects } from "@/helpers/getAllProjects";
import { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Terrence J Chan",
  description: "See Terrence's web development and design portfolio.",
};

const Projects = () => {
  const projects = getAllProjects();
  return <ProjectsPage projects={projects} />;
};

export default Projects;
