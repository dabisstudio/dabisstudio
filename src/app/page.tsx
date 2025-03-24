import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";
import SectionHeader from "@/components/ui/section-header";

export default function Home() {
  // Featured projects data
  const featuredProjects = [
    {
      title: "New Superyacht Generation",
      client: "Rossinavi",
      image: "https://ext.same-assets.com/1247681252/2951207992.jpeg",
      slug: "new-superyacht-generation",
      categories: ["Art Direction", "Web", "Brand Identity"],
    },
    {
      title: "Credits De Papel",
      client: "Netflix",
      image: "https://ext.same-assets.com/1247681252/3099271766.jpeg",
      slug: "credits-de-papel",
      categories: ["Web"],
    },
    {
      title: "The taste of your authentic selves",
      client: "Misura",
      image: "https://ext.same-assets.com/3227154752/3984007652.jpeg",
      slug: "taste-of-your-authentic-selves",
      categories: [
        "Art Direction",
        "Web",
        "Social Media Management",
        "Production",
      ],
    },
    {
      title: "Experience the beauty of timeless design",
      client: "Henge",
      image: "https://ext.same-assets.com/1247681252/2339644197.jpeg",
      slug: "experience-the-beauty-of-timeless-design",
      categories: ["Art Direction", "Web", "Production"],
    },
    {
      title: "The spirit of Umbria",
      client: "Brunello Cucinelli",
      image: "https://ext.same-assets.com/3227154752/1194287678.jpeg",
      slug: "the-spirit-of-umbria",
      categories: ["Production"],
    },
    {
      title: "Movement, community and science",
      client: "Asics",
      image: "https://ext.same-assets.com/3227154752/1620769536.jpeg",
      slug: "movement-community-and-science",
      categories: ["Web"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://ext.same-assets.com/3227154752/1975673834.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="dabisstudio-container">
            <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-3xl mb-6">
              dabisstudio
            </h1>
            <p className="text-lg md:text-xl max-w-xl opacity-80">
              An agency with a story of stories. dabisstudio is a team creating
              all round communication projects and boutique experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="dabisstudio-container py-20">
        <SectionHeader title="branding Digital beauty" />

        <div className="mb-12">
          <p className="text-lg max-w-2xl opacity-80">
            dabisstudio is the result of the connections of a diverse team with
            diverse ways of thinking: a dynamic and always evolving asset that
            allowed a small agency to grow its dream and thrive for the last 20
            years, becoming an internationally acclaimed reality.
          </p>
          <p className="text-lg max-w-2xl mt-6 opacity-80">
            As a core, dabisstudio built a solid expertise in the Made In Italy
            luxury and international excellence: a passion that brought the
            brand to become a leader in the offer of strategic consulting and
            communication services to clients heading towards a world-wide
            market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
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

        <div className="mt-12 text-center">
          <Link
            href="/works"
            className="inline-flex items-center border-b border-white pb-1"
          >
            <span className="mr-2">All Works</span>
            <img
              src="https://ext.same-assets.com/1247681252/2174089030.svg"
              alt="Arrow"
              className="w-4 h-4"
            />
          </Link>
        </div>
      </section>

      {/* Journal Section */}
      <section className="dabisstudio-container py-20">
        <h2 className="text-3xl mb-12">SGjournal</h2>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-zinc-900 p-6 md:p-10">
            <h3 className="text-2xl mb-4">Peptone chooses dabisstudio</h3>
            <p className="opacity-80 mb-4">
              They call it a startup, yet Peptones vision and commercial
              traction are those of a far more mature venture. Peptones success
              stems from more than 30 years...
            </p>
            <Link href="/news/peptone-chooses-dabisstudio">Read more</Link>
          </div>

          <div className="bg-zinc-900 p-6 md:p-10">
            <h3 className="text-2xl mb-4">
              A journey of two: the power of co-branding for Indel B and Fiamma
            </h3>
            <p className="opacity-80 mb-4">
              Thinking creatively does not only mean to find a unique, distant
              and never travelled before road for everyone. It also means to see
              what parts of the journey...
            </p>
            <Link href="/news/a-journey-of-two-the-power-of-co-branding-for-indel-b-and-fiamma">
              Read more
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4">
            Stay up to date with the latest news: the blog SGJournal includes
            articles, in-depth studies, extras and stories about the
            collaborations and bonds between dabisstudio and its clients.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center border-b border-white pb-1"
          >
            <span className="mr-2">All Articles</span>
            <img
              src="https://ext.same-assets.com/1247681252/2174089030.svg"
              alt="Arrow"
              className="w-4 h-4"
            />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="dabisstudio-container py-20">
        <h2 className="text-3xl mb-6">Keep in touch</h2>

        <p className="text-lg max-w-2xl mb-6 opacity-80">
          Do you have a project in mind? Contact dabisstudio and start working
          to make it real and beyond expectations. It is just as easy as writing
          an email:
        </p>

        <Link
          href="mailto:info@dabisstudio.com"
          className="inline-flex items-center border-b border-white pb-1"
        >
          <span className="mr-2">info@dabisstudio.com</span>
          <img
            src="https://ext.same-assets.com/1247681252/2174089030.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </Link>
      </section>
    </div>
  );
}
