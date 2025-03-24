import SectionHeader from "@/components/ui/section-header";

export default function StudioPage() {
  return (
    <div className="dabisstudio-container py-20">
      <SectionHeader title="About dabisstudio" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl mb-6">Our Philosophy</h2>
          <p className="text-lg opacity-80 mb-4">
            dabisstudio is the result of the connections of a diverse team with diverse ways of thinking: a
            dynamic and always evolving asset that allowed a small agency to grow its dream and thrive for the
            last 20 years, becoming an internationally acclaimed reality.
          </p>
          <p className="text-lg opacity-80">
            The name Gusto Italian Design Studio derives from the Italian word "Gusto" which means
            "taste". In Italy, having "gusto" means having good taste, an aesthetic sense, an
            appreciation for beauty and elegance. We bring this sensibility to all our projects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl mb-6">Our Approach</h2>
          <p className="text-lg opacity-80 mb-4">
            As a core, dabisstudio built a solid expertise in the Made In Italy luxury and international excellence: a
            passion that brought the brand to become a leader in the offer of strategic consulting and
            communication services to clients heading towards a world-wide market.
          </p>
          <p className="text-lg opacity-80">
            Our multidisciplinary team works across branding, digital experiences, content creation,
            and strategic communications, always with an eye for detail and a commitment to excellence.
          </p>
        </div>
      </div>

      <div className="aspect-video relative bg-zinc-900 overflow-hidden mb-20">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://ext.same-assets.com/3227154752/4192648206.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-medium">Our Team</h2>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl mb-6">Get in touch</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 opacity-80">
          Want to work with us? We'd love to hear from you.
        </p>
        <a href="/contact" className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
}
