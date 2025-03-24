import ProjectCard from "@/components/ui/project-card";
import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";

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

  return (
    <div className="dabisstudio-container py-20">
      <SectionHeader title="All projects" count={35} />

      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-4">
        <button className="px-3 py-1 border border-zinc-800 rounded-full text-sm hover:bg-zinc-800 transition-colors">
          Type
        </button>
        <button className="px-3 py-1 border border-zinc-800 rounded-full text-sm hover:bg-zinc-800 transition-colors">
          Client
        </button>
        <button className="px-3 py-1 border border-zinc-800 rounded-full text-sm hover:bg-zinc-800 transition-colors">
          Year
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            client={project.client}
            image={project.image}
            slug={project.slug}
            categories={project.categories}
          />
        ))}
      </div>

      {/* Awards */}
      <div className="mt-20 text-center">
        <p className="mb-4">Discover all the honors of our projects</p>
        <Link href="/awards" className="inline-flex items-center border-b border-white pb-1">
          <span className="mr-2">All Awards</span>
          <img
            src="https://ext.same-assets.com/3955289247/2518507755.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </Link>
      </div>
    </div>
  );
}
