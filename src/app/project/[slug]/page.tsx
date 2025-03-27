import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/wordpress';
import AnimatedSection from '@/components/ui/animated-section';
import HeroSection from '@/components/ui/hero-section';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found - Studio Gusto',
    };
  }

  return {
    title: `${project.title.rendered} - Studio Gusto`,
    description: `Case study for ${project.title.rendered} by Studio Gusto`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <HeroSection
        title={project.title.rendered}
        backgroundType="image"
        backgroundSrc={project.acf.featured_image}
        overlayText="studiogusto"
        height="80vh"
      />

      <section className="dabisstudio-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-sm uppercase mb-2 opacity-70">CLIENT</h2>
              <p className="font-semibold mb-6">{project.acf.client}</p>

              {project.acf.role && project.acf.role.length > 0 && (
                <>
                  <h2 className="text-sm uppercase mb-2 opacity-70">Role</h2>
                  {project.acf.role.map((role: string, index: number) => (
                    <p key={index} className="mb-1">{role}</p>
                  ))}
                  <div className="mb-6"></div>
                </>
              )}

              {project.acf.honors && project.acf.honors.length > 0 && (
                <>
                  <h2 className="text-sm uppercase mb-2 opacity-70">Honors</h2>
                  {project.acf.honors.map((honor: string, index: number) => (
                    <p key={index} className="mb-1">{honor}</p>
                  ))}
                </>
              )}
            </AnimatedSection>
          </div>

          <div className="md:col-span-3">
            <AnimatedSection animation="slideUp" delay={0.2}>
              <div dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
            </AnimatedSection>
          </div>
        </div>

        {project.acf.gallery && project.acf.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.acf.gallery.map((image: string, index: number) => (
                <AnimatedSection key={index} animation="fadeIn" delay={index * 0.1}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title.rendered} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/works"
            className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
