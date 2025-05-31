"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

type ProjectPageProps = {
  content: MDXRemoteProps;
  frontmatter: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    link?: string;
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
      <hr className="opacity-25" />
      <MDXRemote components={{ Link }} {...content} />

      {frontmatter.link && (
        <Link
          href={frontmatter.link}
          aria-label={`Open ${frontmatter.title} in a new tab`}
          target="_blank"
          className="underline decoration-dotted transition-all hover:text-green-700"
        >
          Visit {frontmatter.title} →
        </Link>
      )}

      <Link
        href="/projects"
        className="underline decoration-dotted transition-all hover:text-green-700"
      >
        ← Back to projects
      </Link>
    </div>
  );
};

export default ProjectPage;
