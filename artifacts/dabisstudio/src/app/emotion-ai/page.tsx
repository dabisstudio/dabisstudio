import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Sentiment AI | Dabis Studio",
  description: "Transform emotional data into business intelligence. Analyze customer calls and employee feedback.",
};

export default function EmotionAIPage() {
  const services = [
    {
      id: "1",
      title: "Customer Sentiment Dashboards",
      description: "Real-time sentiment analysis of customer calls, support tickets, and feedback. Track satisfaction trends, identify at-risk accounts, and optimize customer experience with actionable insights.",
    },
    {
      id: "2",
      title: "Employee Engagement Metrics",
      description: "Monitor team sentiment through meeting analysis, feedback surveys, and communication patterns. Detect burnout risks, measure engagement levels, and improve workplace culture with data-driven insights.",
    },
    {
      id: "3",
      title: "Predictive Analytics",
      description: "Leverage emotional data to predict customer churn, employee turnover, and business outcomes. Our AI models identify patterns and trends before they become problems, enabling proactive decision-making.",
    },
    {
      id: "4",
      title: "ROI Measurement & Reporting",
      description: "Quantify the impact of emotional intelligence on your business. Track conversion rates, retention metrics, and revenue impact with comprehensive reporting and analytics dashboards.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          Sentiment AI for <br />
          <span className="text-secondary font-bold italic mr-3">data-driven decisions</span>
        </>
      }
      subtitle="Transform emotional data into business intelligence. Analyze customer calls, employee feedback, and user interactions to make informed decisions that drive growth and retention."
      servicesTitle={
        <>
          <span>Emotion as a</span>
          <span>business metric.</span>
        </>
      }
      services={services}
    />
  );
}
