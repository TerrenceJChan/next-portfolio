"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";

type ProjectPageProps = {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    slug: string;
  };
};

const ProjectPage = ({ content, frontmatter }: ProjectPageProps) => {
  console.log(frontmatter.image);
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      {frontmatter.image && (
        <Image
          src={frontmatter.image}
          alt={frontmatter.imageAlt || ""}
          width={1000}
          height={600}
        />
      )}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ProjectPage;
