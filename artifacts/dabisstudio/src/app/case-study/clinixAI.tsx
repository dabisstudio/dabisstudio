import CaseStudyPage from "./CaseStudyPage";

const data = {
  title: "Clinix AI",
  subtitle: "Ambient clinical note generation, ICD/CPT automation, and EHR integration.",
  description:
    "Clinix AI is an intelligent clinical documentation platform that listens to patient-provider conversations and automatically generates structured clinical notes, reducing physician burnout and administrative overhead.",
  tags: ["Web Design", "App Design", "AI Development", "GTM"],
  image: "/images/CaseStudies/clinix/clinixai.jpg",
  challenge:
    "Healthcare providers spend an average of two hours per day on clinical documentation. Physicians needed a solution that could seamlessly integrate into existing EHR workflows without disrupting patient care.",
  solution:
    "We built an ambient AI system that captures, transcribes, and structures clinical conversations in real time. The platform automatically generates SOAP notes, maps diagnoses to ICD codes, and syncs directly with major EHR systems including Epic and Cerner.",
  outcome:
    "Clinix AI reduced documentation time by 72% across pilot sites, improved note accuracy scores, and received a Net Promoter Score of 87 from participating physicians within the first 90 days of deployment.",
};

export default function ClinixAICaseStudy() {
  return <CaseStudyPage data={data} />;
}
