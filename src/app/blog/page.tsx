import ArticleCard from "@/components/ui/article-card";
import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";

export default function BlogPage() {
  // Blog posts data
  const articles = [
    {
      title: "Rossinavi at the Monaco Yacht Show 2024: An Immersive Web Experience by dabisstudio",
      slug: "rossinavi-mys-2024",
      image: "https://ext.same-assets.com/1247681252/864386195.png",
      backgroundColor: "bg-zinc-900"
    },
    {
      title: "World Childrens Day 2024",
      slug: "gmb24",
      image: "https://ext.same-assets.com/1247681252/2131166563.jpeg",
      backgroundColor: "bg-emerald-200"
    },
    {
      title: "Design in Dialogue: the Creative Harmony between Interni and dabisstudio in the Narration of Italian Excellence",
      slug: "interni-milano",
      image: "https://ext.same-assets.com/1247681252/1261625696.jpeg",
      backgroundColor: "bg-yellow-100"
    },
    {
      title: "FWAWWWARD: so good, so lucky.",
      slug: "dabisstudio-fwawwward",
      image: "https://ext.same-assets.com/1247681252/1140164723.jpeg",
      backgroundColor: "bg-pink-300"
    },
    {
      title: "Misura and dabisstudio: 6 years of collaboration and trust",
      slug: "misura-and-dabisstudio-six-years-of-collaboration",
      image: "https://ext.same-assets.com/1247681252/1999326435.jpeg",
      backgroundColor: "bg-yellow-100"
    },
    {
      title: "Sailing for a new route: the digital experience as a game-changer for Rossinavi",
      slug: "sailing-for-a-new-route-the-digital-experience-as-a-game-changer-for-Rossinavi",
      image: "https://ext.same-assets.com/1247681252/1727677310.jpeg",
      backgroundColor: "bg-blue-200"
    },
    {
      title: "A journey of two: the power of co-branding for Indel B and Fiamma",
      slug: "a-journey-of-two-the-power-of-co-branding-for-indel-b-and-fiamma",
      image: "https://ext.same-assets.com/1247681252/2926418856.jpeg",
      backgroundColor: "bg-green-200"
    },
    {
      title: "Peptone chooses dabisstudio",
      slug: "peptone-chooses-dabisstudio",
      image: "https://ext.same-assets.com/1247681252/4111527420.jpeg",
      backgroundColor: "bg-purple-200"
    },
  ];

  return (
    <div className="dabisstudio-container py-20">
      <SectionHeader title="All articles" count={8} />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            slug={article.slug}
            image={article.image}
            backgroundColor={article.backgroundColor}
          />
        ))}
      </div>

      {/* Invitation */}
      <div className="mt-20 text-center">
        <p className="mb-4">Now that you've seen what dabisstudio achieved, get to know us better.</p>
        <Link href="/works" className="inline-flex items-center border-b border-white pb-1">
          <span className="mr-2">All Projects</span>
          <img
            src="https://ext.same-assets.com/1247681252/4094201864.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </Link>
      </div>
    </div>
  );
}
