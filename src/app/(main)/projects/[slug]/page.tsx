import { getProjectBySlug } from "@/helpers/getAllProjects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "./ProjectPage";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
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

const Project = async (props: Props) => {
  const params = await props.params;
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectPage content={project.content} frontmatter={project.frontmatter} />
  );
};

export default Project;
