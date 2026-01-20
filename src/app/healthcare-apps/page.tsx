import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Healthcare Apps | Dabis Studio",
  description: "HIPAA-compliant healthcare software, telemedicine platforms, and patient portals.",
};

export default function HealthcareAppsPage() {
  const services = [
    {
      id: "1",
      title: "Telemedicine Platforms",
      description: "Secure video conferencing and remote patient monitoring systems.",
    },
    {
      id: "2",
      title: "EHR/EMR Integration",
      description: "Seamless data exchange with major electronic health record systems.",
    },
    {
      id: "3",
      title: "Patient Portals",
      description: "User-friendly interfaces for appointment scheduling and medical records.",
    },
    {
      id: "4",
      title: "Medical IoT",
      description: "Integration with wearable devices and medical sensors.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          <span className="text-secondary font-bold italic mr-3">HIPAA-Compliant</span>
          <br /> Healthcare Software
        </>
      }
      subtitle="Secure, scalable, and patient-centric solutions. We build digital health platforms that improve care delivery while ensuring full regulatory compliance."
      servicesTitle={
        <>
          <span>Technology that</span>
          <span>saves lives.</span>
        </>
      }
      services={services}
      videoSrc="https://ailcmdpnkzgwvwsnxlav.supabase.co/storage/v1/object/public/media/website_background_loop.mp4"
    />
  );
}
