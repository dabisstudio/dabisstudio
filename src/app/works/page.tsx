'use client';

import { useState, useEffect } from 'react';
import ProjectCard from "@/components/ui/project-card";
import AnimatedSection from "@/components/ui/animated-section";
import { gsap } from 'gsap';

export default function WorksPage() {
  // Projects data
  const projects = [
    {
      title: "Heineken Beer Matchmaking",
      client: "Heineken",
      image: "https://ext.same-assets.com/3227154752/1279071491.jpeg",
      slug: "heineken-matchmaking",
      categories: ["Art Direction", "Web"]
    },
    {
      title: "A website started with a piece",
      client: "Digital Mosaik",
      image: "https://ext.same-assets.com/3227154752/164820249.jpeg",
      slug: "a-website-started-with-a-piece",
      categories: ["Web"]
    },
    {
      title: "A digital experience in luxury real estate",
      client: "Invenio Homes",
      image: "https://ext.same-assets.com/3227154752/3871359723.jpeg",
      slug: "digital-experience-luxury-real-estate",
      categories: ["Brand Identity", "Web"]
    },
    {
      title: "Report on Sustainability",
      client: "Farchioni",
      image: "https://ext.same-assets.com/3227154752/542610569.jpeg",
      slug: "farchioni-report-on-sustainability",
      categories: ["Art Direction", "Editorial Design"]
    },
    {
      title: "Bio Wine Labes",
      client: "Farchioni",
      image: "https://ext.same-assets.com/3227154752/2172868773.jpeg",
      slug: "bio-wine-labels",
      categories: ["Art Direction", "Editorial Design"]
    },
    {
      title: "Design Stories",
      client: "Interni",
      image: "https://ext.same-assets.com/3227154752/2241692161.jpeg",
      slug: "interni-furniture",
      categories: ["Art Direction", "Production", "Social Media Management", "Web"]
    },
    {
      title: "New Superyacht Generation",
      client: "Rossinavi",
      image: "https://ext.same-assets.com/1247681252/2951207992.jpeg",
      slug: "new-superyacht-generation",
      categories: ["Art Direction", "Web", "Brand Identity"]
    },
    {
      title: "Credits De Papel",
      client: "Netflix",
      image: "https://ext.same-assets.com/1247681252/3099271766.jpeg",
      slug: "credits-de-papel",
      categories: ["Web"]
    },
    {
      title: "The taste of your authentic selves",
      client: "Misura",
      image: "https://ext.same-assets.com/3227154752/3984007652.jpeg",
      slug: "taste-of-your-authentic-selves",
      categories: ["Art Direction", "Web", "Social Media Management", "Production"]
    },
    {
      title: "Experience the beauty of timeless design",
      client: "Henge",
      image: "https://ext.same-assets.com/1247681252/2339644197.jpeg",
      slug: "experience-the-beauty-of-timeless-design",
      categories: ["Art Direction", "Web", "Production"]
    },
    {
      title: "The spirit of Umbria",
      client: "Brunello Cucinelli",
      image: "https://ext.same-assets.com/3227154752/1194287678.jpeg",
      slug: "the-spirit-of-umbria",
      categories: ["Production"]
    },
    {
      title: "Movement, community and science",
      client: "Asics",
      image: "https://ext.same-assets.com/3227154752/1620769536.jpeg",
      slug: "movement-community-and-science",
      categories: ["Web"]
    },
  ];

  // State for active filter and view mode
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('Grid');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get all unique categories
  const allCategories = ['All', ...new Set(projects.flatMap(project => project.categories || []))];

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.categories && project.categories.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }

    // Animate the filtered projects
    gsap.fromTo('.project-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
    );
  }, [activeFilter]);

  return (
    <div className="dabisstudio-container py-20">
      <AnimatedSection animation="fadeIn">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl md:text-6xl font-medium">
            All projects <span className="text-sm align-top ml-2 opacity-60">{projects.length}</span>
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={0.2}>
        <div className="mb-12 border-t border-b border-zinc-800 py-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-sm uppercase mb-2 opacity-70">CHANGE VIEW</h2>
              <div className="flex space-x-4">
                <button
                  className={`text-sm ${viewMode === 'Grid' ? 'opacity-100 font-medium' : 'opacity-60'}`}
                  onClick={() => setViewMode('Grid')}
                >
                  Grid
                </button>
                <button
                  className={`text-sm ${viewMode === 'List' ? 'opacity-100 font-medium' : 'opacity-60'}`}
                  onClick={() => setViewMode('List')}
                >
                  List
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-sm uppercase mb-2 opacity-70">TYPE</h2>
              <div className="flex flex-wrap gap-4">
                {allCategories.map(category => (
                  <button
                    key={category}
                    className={`text-sm ${activeFilter === category ? 'opacity-100 font-medium' : 'opacity-60'}`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={0.4}>
        <div className={`grid ${viewMode === 'Grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              client={project.client}
              image={project.image}
              slug={project.slug}
              categories={project.categories}
              viewMode={viewMode}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
