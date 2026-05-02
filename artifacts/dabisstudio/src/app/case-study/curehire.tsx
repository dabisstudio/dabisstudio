import CaseStudyPage from "./CaseStudyPage";

const data = {
  title: "Curehire",
  subtitle: "Intelligent healthcare talent acquisition and credentialing platform.",
  description:
    "Curehire is a specialized hiring platform for healthcare organizations that automates credentialing, streamlines candidate screening, and accelerates time-to-hire for clinical roles.",
  tags: ["Web Design", "Development"],
  image: "/images/CaseStudies/curehire.jpg",
  challenge:
    "Healthcare organizations faced chronic staffing shortages, slow credentialing processes, and compliance risks from manual verification workflows. Traditional hiring platforms lacked the domain-specific tooling required for clinical roles.",
  solution:
    "We built a purpose-built healthcare talent platform with automated primary source verification, AI-powered candidate matching, and integrated compliance tracking. The system connects hospitals directly with pre-credentialed clinical talent.",
  outcome:
    "Curehire reduced average time-to-hire for clinical roles from 47 days to 11 days, improved credential verification accuracy by 94%, and achieved a 3x increase in successful placement rates for partner hospitals.",
};

export default function CurehireCaseStudy() {
  return <CaseStudyPage data={data} />;
}
