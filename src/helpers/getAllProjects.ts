import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  slug: string;
  // Add any other frontmatter fields you need
};

export function getAllProjects() {
  const projectsDirectory = path.join(
    process.cwd(),
    "src",
    "content",
    "projects",
  );
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        frontmatter: {
          ...data,
          slug: fileName.replace(/\.mdx$/, ""),
        } as ProjectFrontmatter,
        content,
      };
    });

  // Sort projects by date if you have a date field
  // projects.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));

  return projects;
}

export function getProjectBySlug(slug: string) {
  const projects = getAllProjects();
  return projects.find((project) => project.frontmatter.slug === slug);
}
