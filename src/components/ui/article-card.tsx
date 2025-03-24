import Link from "next/link";
import { FC } from "react";

interface ArticleCardProps {
  title: string;
  slug: string;
  image: string;
  backgroundColor?: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  slug,
  image,
  backgroundColor = 'bg-zinc-100'
}) => {
  return (
    <Link href={`/news/${slug}`} className="block group">
      <div className={`aspect-square relative overflow-hidden ${backgroundColor}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center hover:bg-black/20 transition-colors">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
