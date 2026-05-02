import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Voice Agents | Dabis Studio",
  description: "AI Voice Agents, Call Centers, and Receptionists powered by OpenAI Realtime API and Hume EVI.",
};

export default function VoiceAgentsPage() {
  const services = [
    {
      id: "1",
      title: "AI Call Centers & Receptionists",
      description: "Intelligent phone systems powered by OpenAI, Hume, and ElevenLabs. Handle customer calls, schedule appointments, answer FAQs, and route inquiries 24/7 with human-like empathy.",
    },
    {
      id: "2",
      title: "Multi-Provider Integration",
      description: "Flexible implementation across OpenAI Realtime API, Hume EVI, Vapi, Bland AI, and more. We select the best provider for your use case—whether it's emotional intelligence, latency, or cost.",
    },
    {
      id: "3",
      title: "Custom Training & Knowledge Base",
      description: "Train your voice agent on your company's content, documentation, and workflows. From website scraping to CRM integration, your agent becomes an expert on your business.",
    },
    {
      id: "4",
      title: "Appointment Scheduling & Automation",
      description: "Seamless calendar integration with Google Calendar, Calendly, and booking systems. Your AI agent can schedule, reschedule, and send reminders—no human intervention needed.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          Voice Agents that <br />
          <span className="text-secondary font-bold italic mr-3">just work</span>
        </>
      }
      subtitle="From concept to conversational AI, we build voice agents powered by OpenAI's Realtime API, Hume EVI, and other leading providers. Trained on your content, seamlessly integrated, and ready to engage your customers 24/7."
      servicesTitle={
        <>
          <span>Natural conversations,</span>
          <span>powered by AI.</span>
        </>
      }
      services={services}
    />
  );
}
