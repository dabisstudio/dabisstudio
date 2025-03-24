import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="dabisstudio-container py-20">
      <h1 className="text-4xl md:text-6xl font-medium mb-16">
        Tell us about<br />your dreams
      </h1>

      <section className="py-12">
        <h2 className="text-2xl mb-6">Keep in touch</h2>

        <p className="text-lg max-w-2xl mb-6 opacity-80">
          Do you have a project in mind? Contact dabisstudio and start working to make it
          real and beyond expectations. It is just as easy as writing an email:
        </p>

        <Link href="mailto:info@dabisstudio.com" className="inline-flex items-center border-b border-white pb-1">
          <span className="mr-2">info@dabisstudio.com</span>
          <img
            src="https://ext.same-assets.com/1247681252/325142101.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </Link>
      </section>

      <section className="py-12">
        <h2 className="text-sm uppercase mb-8 opacity-70">LETS MEET HERE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-sm uppercase mb-2 opacity-70">HEADQUARTER</h2>
            <h3 className="text-2xl mb-4">Perugia</h3>
            <p className="mb-6">
              Via Camillo Bozza, 14<br />
              06073 - Corciano (Perugia)
            </p>
            <p className="mb-4">+39 075 79 21 621</p>
            <Link href="mailto:info@dabisstudio.com" className="text-sm underline">
              Write us
            </Link>
          </div>

          <div>
            <h2 className="text-sm uppercase mb-2 opacity-70">GUSTO IDS GMBH</h2>
            <h3 className="text-2xl mb-4">Munich</h3>
            <p className="mb-6">
              Landsberger Strasse, 318d<br />
              80687 - Munich Germany
            </p>
            <p className="mb-4">+49 89 411422250</p>
            <Link href="mailto:info@dabisstudio.com" className="text-sm underline">
              Write us
            </Link>
          </div>

          <div>
            <h2 className="text-sm uppercase mb-2 opacity-70">MEETING ROOM</h2>
            <h3 className="text-2xl mb-4">Milano</h3>
            <p className="mb-6">
              Piazza Vetra, 21<br />
              20123 Milano
            </p>
            <Link href="mailto:info@dabisstudio.com" className="text-sm underline">
              Write us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <p className="text-lg max-w-2xl mb-6 opacity-80">
          Do you want to expand your and our creative potential? We are
          always happy to meet new people and to be surprised. Email
          us at
        </p>

        <Link href="mailto:jobs@dabisstudio.com" className="inline-flex items-center border-b border-white pb-1 mb-12">
          <span className="mr-2">jobs@dabisstudio.com</span>
          <img
            src="https://ext.same-assets.com/1247681252/325142101.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </Link>

        <div className="text-center mt-8">
          <Link href="mailto:info@dabisstudio.com" className="inline-flex items-center border-b border-white pb-1">
            <span className="mr-2">Contact us</span>
            <img
              src="https://ext.same-assets.com/1247681252/325142101.svg"
              alt="Arrow"
              className="w-4 h-4"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
