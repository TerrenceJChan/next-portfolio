import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

interface CollectionsCardProps {
  title: string;
  slug: string;
  description: string;
  image: string;
}

const CollectionsCard = ({
  title,
  slug,
  description,
  image,
}: CollectionsCardProps) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group border-0.5 grid grid-cols-1 shadow transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <ViewTransition name={slug}>
        <img src={image} alt={title} className="object-contain" />
      </ViewTransition>
      <div className="p-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CollectionsCard;
