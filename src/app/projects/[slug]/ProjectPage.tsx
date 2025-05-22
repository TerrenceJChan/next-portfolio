"use client";

import ReactMarkdown from "react-markdown";

type ProjectPageProps = {
  content: string;
};

const ProjectPage = ({ content }: ProjectPageProps) => {
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ProjectPage;
