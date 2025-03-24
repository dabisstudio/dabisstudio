import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";

export default function NewSuperyachtGeneration() {
  return (
    <div>
      {/* Hero Section */}
      <section className="dabisstudio-container py-12">
        <h1 className="text-4xl md:text-6xl font-medium mb-12">
          New Superyacht Generation
        </h1>

        {/* Project Video/Image */}
        <div className="aspect-video w-full overflow-hidden mb-12">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://ext.same-assets.com/3227154752/27469304.jpeg"
          >
            <source src="https://ext.same-assets.com/3227154752/3120916716.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-sm uppercase mb-2 opacity-70">CLIENT</h2>
            <p className="font-semibold mb-6">Rossinavi</p>

            <h2 className="text-sm uppercase mb-2 opacity-70">Role</h2>
            <p className="mb-1">Art Direction</p>
            <p className="mb-1">Web</p>
            <p className="mb-6">Brand Identity</p>

            <h2 className="text-sm uppercase mb-2 opacity-70">Honors</h2>
            <p className="mb-1">DDAW - Digital Design Award</p>
            <p className="mb-1">WOTD - CSS Design Awards</p>
            <p className="mb-1">FOTD - Fwa</p>
            <p className="mb-1">SOTD - Awwwards</p>
            <p>DEV - Awwwards</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xl mb-6">
              Seacat is the first catamaran of Rossinavi shipyards fully
              integrating the vision and technology of the new BLUe
              platform, the hybrid and sustainable concept leading the Brand's future.
            </p>
            <p className="mb-6">
              Designed by Fulvio de Simoni, it fully expresses the
              Brands signature style and the ambition of a
              revolutionary project for this market segment.
            </p>

            <Link
              href="https://seacat.rossinavi.it"
              target="_blank"
              className="inline-flex items-center border-b border-white pb-1"
            >
              <span className="mr-2">Visit website</span>
              <img
                src="https://ext.same-assets.com/3955289247/3802948357.svg"
                alt="Arrow"
                className="w-4 h-4"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Design Thinking Section */}
      <section className="dabisstudio-container py-12">
        <h2 className="text-sm uppercase mb-4 opacity-70">Design thinking</h2>
        <h3 className="text-2xl md:text-3xl mb-8">
          We outlined a whole experience around the
          Innovation and Design of a great builder.
        </h3>

        <p className="max-w-4xl mb-12">
          The most important challenge has been conceiving the technological structure of
          the project; for any other product we would have surely suggested the use of 3D
          web native solutions (e.g. Three.js/WebGL). In this case, the complexity of the model (137'7" superyacht) and the quantity of
          polygons prevented the use of this method, for obvious reasons linked to the final
          output and, most of all, for the management/modification and updating
          difficulties during the process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="aspect-video bg-zinc-900 overflow-hidden">
            <img
              src="https://ext.same-assets.com/3227154752/3021899279.jpeg"
              alt="Project Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video bg-zinc-900 overflow-hidden">
            <img
              src="https://ext.same-assets.com/3227154752/2405711717.jpeg"
              alt="Project Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-sm uppercase mb-4 opacity-70">Digital Mood</h2>
        <h3 className="text-2xl md:text-3xl mb-8">
          Big problem, small solution.
        </h3>

        <p className="max-w-4xl mb-12">
          We tried to imagine the digitalization of the yacht in a way that could visually
          convey its innovation and the great effort in terms of research, development
          and testing carried out by Rossinavis engineers in the 12 months preceding
          the launch. The main driver to set the tone of voice for this innovative vision of
          the Brand is colour, together with the use of 3D illustration and Motion. The
          assets become dreamlike representations describing the values of Rossinavis
          path, with a futuristic twist.
        </p>

        <div className="aspect-video bg-zinc-900 overflow-hidden p-8 mb-16">
          <div className="bg-amber-200 w-full h-full flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/1247681252/2201973195.jpeg"
              alt="Interface Example"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h2 className="text-sm uppercase mb-4 opacity-70">The Interface</h2>
        <h3 className="text-2xl md:text-3xl mb-8">
          A very detailed UI keeps a strong balance
          between content and interface.
        </h3>

        <p className="max-w-4xl mb-12">
          The menu conveys the idea of sustainable innovation and takes the user into a
          hi-tech naval dashboard. Some call it carousel! And thats what it is, technically.
          This grants usability and, at the same time, focusses on the content; the use of
          didactic video content enhances the reading experience of the infographics.
        </p>

        <h2 className="text-sm uppercase mb-4 opacity-70">The Interactions</h2>
        <h3 className="text-2xl md:text-3xl mb-8">
          Interaction is guaranteed by the small
          details making the users discovery path
          immersive.
        </h3>
      </section>

      {/* More Projects */}
      <section className="dabisstudio-container py-12">
        <h2 className="text-2xl mb-8">More Projects</h2>
        <p className="mb-4">
          Discover all the projects and meet all the clients
          who chose dabisstudio to reach their goals.
        </p>

        <Link
          href="/works"
          className="inline-flex items-center border-b border-white pb-1 mb-12"
        >
          <span className="mr-2">All Projects</span>
          <img
            src="https://ext.same-assets.com/3955289247/3802948357.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Credits De Papel"
            client="Netflix"
            image="https://ext.same-assets.com/1247681252/3099271766.jpeg"
            slug="credits-de-papel"
          />
          <ProjectCard
            title="The taste of your authentic selves"
            client="Misura"
            image="https://ext.same-assets.com/3227154752/3984007652.jpeg"
            slug="taste-of-your-authentic-selves"
          />
        </div>
      </section>
    </div>
  );
}
