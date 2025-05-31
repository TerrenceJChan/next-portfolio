"use client";

import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import ReactMarkdown from "react-markdown";

type ProjectPageProps = {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };
};

const ProjectPage = ({ content, frontmatter }: ProjectPageProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <ViewTransition name={frontmatter.slug}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frontmatter.image}
          alt={frontmatter.imageAlt}
          className="object-contain"
        />
      </ViewTransition>
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
      <Link href="/projects">← Back to projects</Link>
    </div>
  );
};

export default ProjectPage;
