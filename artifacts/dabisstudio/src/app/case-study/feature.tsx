import CaseStudyPage from "./CaseStudyPage";

const data = {
  title: "Feature",
  subtitle: "AI-powered feature flagging and product experimentation platform.",
  description:
    "Feature is a developer-first platform that enables product teams to safely ship code, run A/B experiments, and gradually roll out features — all without engineering bottlenecks.",
  tags: ["App Design", "GTM"],
  image: "/images/CaseStudies/feature.jpg",
  challenge:
    "Engineering teams were spending excessive time building and maintaining internal feature flag systems. Product teams lacked the tools to run experiments independently, creating friction between engineering and growth goals.",
  solution:
    "We designed a self-serve experimentation platform with an intuitive dashboard for creating and managing feature flags, audience targeting rules, and real-time experiment analytics. The GTM strategy included developer community positioning and a freemium adoption funnel.",
  outcome:
    "Feature launched to a waitlist of 2,400 developers within 6 weeks of the GTM campaign. The platform achieved $180K ARR in its first quarter, with a 68% free-to-paid conversion rate among teams that ran their first experiment.",
};

export default function FeatureCaseStudy() {
  return <CaseStudyPage data={data} />;
}
