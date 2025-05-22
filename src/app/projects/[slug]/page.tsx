import { getProjectBySlug } from "@/helpers/getAllProjects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "./ProjectPage";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.frontmatter.title} | Terrence J Chan`,
    description: project.frontmatter.description,
  };
}

const Project = ({ params }: Props) => {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage content={project.content} data={project.frontmatter} />;
};

export default Project;
