import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "AI Development | Dabis Studio",
  description: "Custom AI solutions, Machine Learning, NLP, and Computer Vision.",
};

export default function AIDevelopmentPage() {
  const services = [
    {
      id: "1",
      title: "Machine Learning",
      description: "Predictive analytics and custom model training for business insights.",
    },
    {
      id: "2",
      title: "NLP & Chatbots",
      description: "Intelligent conversational interfaces and text analysis systems.",
    },
    {
      id: "3",
      title: "Computer Vision",
      description: "Image recognition and video analysis for automated inspection.",
    },
    {
      id: "4",
      title: "Process Automation",
      description: "Smart workflows that reduce manual effort and error rates.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          <span className="text-secondary font-bold italic mr-3">Custom AI</span>
          <br /> Solutions
        </>
      }
      subtitle="Transform your business with intelligent algorithms. From machine learning models to natural language processing, we build AI that drives real value."
      servicesTitle={
        <>
          <span>Intelligence</span>
          <span>at Scale.</span>
        </>
      }
      services={services}
      videoSrc="https://ailcmdpnkzgwvwsnxlav.supabase.co/storage/v1/object/public/media/website_background_loop.mp4"
    />
  );
}
