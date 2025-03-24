import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
  title: string;
  client: string;
  image: string;
  slug: string;
  categories?: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({ title, client, image, slug, categories }) => {
  return (
    <Link href={`/project/${slug}`} className="project-card block">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="project-info">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm opacity-80">{client}</p>
          {categories && categories.length > 0 && (
            <p className="text-xs opacity-60 mt-1">{categories.join(' / ')}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
