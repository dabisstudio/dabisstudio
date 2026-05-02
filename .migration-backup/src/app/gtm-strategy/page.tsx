import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "GTM Strategy | Dabis Studio",
  description: "Go-to-Market strategy, positioning, and demand generation.",
};

export default function GtmStrategyPage() {
  const services = [
    {
      id: "1",
      title: "ICP & Segmentation",
      description: "Identifying your ideal customer profile and market segments for targeted growth.",
    },
    {
      id: "2",
      title: "Positioning, Narrative & Messaging",
      description: "Crafting a compelling story that differentiates your brand in the market.",
    },
    {
      id: "3",
      title: "Pricing & Packaging",
      description: "Optimizing your pricing model to maximize value capture and adoption.",
    },
    {
      id: "4",
      title: "Demand Gen & Content Engine",
      description: "Creating a sustainable flow of qualified leads through strategic content.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          <span className="text-secondary font-bold italic mr-3">Drive Conversions,</span> <br />
          Not Useless Traffic
        </>
      }
      subtitle="From strategy to execution, we craft marketing campaigns that resonate across all platforms. Every piece of content is designed with purpose, ensuring maximum impact and engagement. Here, every interaction matters."
      servicesTitle={
        <>
          <span>Campaigns people connect with.</span>
        </>
      }
      services={services}
      videoSrc="https://ailcmdpnkzgwvwsnxlav.supabase.co/storage/v1/object/public/media/website_background_loop.mp4"
    />
  );
}
