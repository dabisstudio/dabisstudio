'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import styled from '@emotion/styled';

interface ProjectCardProps {
  title: string;
  client: string;
  image: string;
  slug: string;
  categories?: string[];
  viewMode?: 'Grid' | 'List';
}

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .project-info {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const ProjectCard: FC<ProjectCardProps> = ({ title, client, image, slug, categories, viewMode = 'Grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, []);

  if (viewMode === 'List') {
    return (
      <div ref={cardRef} className="project-card">
        <Link href={`/project/${slug}`} className="block border-t border-zinc-800 py-6 hover:bg-zinc-900 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-sm opacity-80">{client}</p>
            </div>
            <div className="flex items-center">
              {categories && categories.length > 0 && (
                <p className="text-xs opacity-60 mr-6">{categories.join(' / ')}</p>
              )}
              <span className="text-sm opacity-80">View Project →</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="project-card block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/project/${slug}`}>
        <ProjectImage className="relative aspect-square overflow-hidden border border-zinc-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <ProjectInfo className="project-info">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm opacity-80">{client}</p>
            {categories && categories.length > 0 && (
              <p className="text-xs opacity-60 mt-1">{categories.join(' / ')}</p>
            )}
          </ProjectInfo>

          {isHovered && (
            <>
              <NavigationArrow className="left">←</NavigationArrow>
              <NavigationArrow className="right">→</NavigationArrow>
            </>
          )}
        </ProjectImage>
      </Link>
    </div>
  );
};

export default ProjectCard;
