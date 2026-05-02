import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "IoT Development | Dabis Studio",
  description: "IoT solutions, firmware development, cloud platforms, and edge computing.",
};

export default function IoTDevelopmentPage() {
  const services = [
    {
      id: "1",
      title: "Firmware Development",
      description: "Optimized low-level code for embedded systems and sensors.",
    },
    {
      id: "2",
      title: "IoT Cloud Platforms",
      description: "Scalable backend infrastructure for device management and data ingestion.",
    },
    {
      id: "3",
      title: "Mobile Control Apps",
      description: "Intuitive interfaces for monitoring and controlling connected devices.",
    },
    {
      id: "4",
      title: "Edge Computing",
      description: "Real-time data processing at the source for faster decision making.",
    },
  ];

  return (
    <ServicePage
      title={
        <>
          <span className="text-secondary font-bold italic mr-3">Connected</span>
          <br /> Devices (IoT)
        </>
      }
      subtitle="Bridge the physical and digital worlds. We build secure IoT ecosystems that collect data, control devices, and drive operational efficiency."
      servicesTitle={
        <>
          <span>Everything</span>
          <span>Connected.</span>
        </>
      }
      services={services}
      videoSrc="https://ailcmdpnkzgwvwsnxlav.supabase.co/storage/v1/object/public/media/website_background_loop.mp4"
    />
  );
}
