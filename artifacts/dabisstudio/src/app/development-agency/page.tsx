import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Development Agency | Dabis Studio",
  description: "Full-stack development: Frontend, Backend, Mobile, and DevOps.",
};

export default function DevelopmentAgencyPage() {
  const services = [
    {
      id: "1",
      title: "Frontend Platforms (React / Next)",
      description: "Building responsive, high-performance user interfaces with modern frameworks.",
    },
    {
      id: "2",
      title: "Backend APIs & Microservices (Node)",
      description: "Scalable and secure server-side logic to power your applications.",
    },
    {
      id: "3",
      title: "Mobile & Cross-platform (Flutter)",
      description: "Native-quality mobile apps for iOS and Android from a single codebase.",
    },
    {
      id: "4",
      title: "CI/CD & Cloud Ops (Docker)",
      description: "Automated deployment pipelines and robust cloud infrastructure management.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          Software Developers <br /> you can <span className="text-secondary font-bold italic mr-3">count on.</span>
        </>
      }
      subtitle="From concept to digital reality, we build across all devices, languages, and platforms. Every line of code is crafted with care, ensuring seamless functionality and exceptional performance. Here, every detail matters."
      servicesTitle={
        <>
          <span>We make tech that</span>
          <span>just makes sense.</span>
        </>
      }
      services={services}
      videoSrc="https://ailcmdpnkzgwvwsnxlav.supabase.co/storage/v1/object/public/media/website_background_loop.mp4"
    />
  );
}
