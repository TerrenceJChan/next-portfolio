import { getProjectBySlug } from "@/helpers/getAllProjects";
import { Metadata } from "next";
import { MDXRemoteProps } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
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

  const mdxSource = await serialize(project.content);

  return (
    <ProjectPage
      content={mdxSource as MDXRemoteProps}
      frontmatter={project.frontmatter}
    />
  );
};

export default Project;
