import CaseStudyPage from "./CaseStudyPage";

const data = {
  title: "OWASP",
  subtitle: "Redesigning the global web security community's digital presence.",
  description:
    "OWASP (Open Worldwide Application Security Project) is the world's largest open-source security foundation. We redesigned and rebuilt their public-facing web presence to improve accessibility, discoverability, and community engagement.",
  tags: ["Web Design", "Development"],
  image: "/images/CaseStudies/owasp.jpg",
  challenge:
    "OWASP's existing site suffered from inconsistent design, poor navigation, and outdated tooling that made it difficult for developers and security professionals to find the resources they needed. The community needed a modern platform worthy of their global reach.",
  solution:
    "We delivered a ground-up redesign focused on information architecture, accessibility, and performance. A new component library was built to ensure visual consistency across the sprawling resource catalog, and a modern CMS integration enabled the community to manage content without developer support.",
  outcome:
    "The redesigned OWASP site launched to positive community reception, achieving a 58% improvement in page load speed, a 35% reduction in bounce rate, and a significant increase in resource downloads within the first month.",
};

export default function OwaspCaseStudy() {
  return <CaseStudyPage data={data} />;
}
