import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Design Agency | Dabis Studio",
  description: "Product Design, UI/UX, and Design Systems.",
};

export default function DesignAgencyPage() {
  const services = [
    {
      id: "1",
      title: "User Research & Strategy",
      description: "Deep dive into user needs and market positioning to build products that matter.",
    },
    {
      id: "2",
      title: "UX Flows & Wireframes",
      description: "Mapping out the user journey to ensure intuitive and seamless experiences.",
    },
    {
      id: "3",
      title: "UI Systems & Prototypes",
      description: "High-fidelity designs and interactive prototypes that bring your vision to life.",
    },
    {
      id: "4",
      title: "Design Ops & Dev Handoff",
      description: "Streamlining the design-to-development process for pixel-perfect implementation.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          You think it. <br /> We <span className="text-secondary font-bold italic pr-6 h-full inline-block">DESIGN</span> it.
        </>
      }
      subtitle="From initial sketches to prototypes fully custom apps, we're your design partner. With a modern approach and cutting-edge tools, we shape every pixel with precision because every detail matters."
      servicesTitle={
        <>
          <span>Human creativity.</span>
          <span>AI-enhanced speed.</span>
          <span>Designs that think ahead.</span>
        </>
      }
      services={services}
      videoSrc="https://ailcmdpnkzgwvwsnxlav.supabase.co/storage/v1/object/public/media/website_background_loop.mp4"
      // poster="/images/Antimatter-astronaut-fallback.webp" // Missing asset
    />
  );
}
