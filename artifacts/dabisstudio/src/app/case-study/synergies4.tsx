import CaseStudyPage from "./CaseStudyPage";

const data = {
  title: "Synergies4",
  subtitle: "AI-powered enterprise knowledge management and team collaboration.",
  description:
    "Synergies4 is an enterprise platform that uses AI to surface institutional knowledge, streamline cross-team collaboration, and accelerate decision-making across distributed organizations.",
  tags: ["App Design", "AI Development"],
  image: "/images/CaseStudies/synergies4.jpg",
  challenge:
    "Enterprise teams were losing critical institutional knowledge to siloed communication tools and undocumented tribal knowledge. Information retrieval was slow and inconsistent, costing teams hours each week.",
  solution:
    "We designed and built an AI-native knowledge hub that indexes conversations, documents, and decisions across the organization. A conversational search interface lets team members instantly surface relevant context, past decisions, and subject matter experts.",
  outcome:
    "Synergies4 cut average knowledge retrieval time from 45 minutes to under 2 minutes, and reduced onboarding time for new employees by 40% in the first quarter after deployment.",
};

export default function Synergies4CaseStudy() {
  return <CaseStudyPage data={data} />;
}
