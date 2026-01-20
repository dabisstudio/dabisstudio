"use client";

import React from "react";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  description?: string;
}

interface ServicePageProps {
  title: React.ReactNode;
  subtitle: string;
  servicesTitle: React.ReactNode;
  services: ServiceItem[];
  videoSrc?: string;
  poster?: string;
}

export default function ServicePage({
  title,
  subtitle,
  servicesTitle,
  services,
  videoSrc,
  poster,
}: ServicePageProps) {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {videoSrc ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="absolute inset-0 w-full h-full opacity-100"
              poster={poster}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 20%, rgba(2,2,2,0.7) 35%, rgba(2,2,2,0.9) 50%, rgba(2,2,2,0.98) 60%, #020202 65%)",
              }}
            ></div>
            <div
              className="absolute inset-x-0 bottom-0 h-[70vh] pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(2,2,2,0) 0%, rgba(2,2,2,0.7) 25%, rgba(2,2,2,0.95) 50%, #020202 75%)",
              }}
            ></div>
          </>
        ) : (
          /* Default Dark Premium Background */
          <div className="absolute inset-0 bg-background pointer-events-none">
             {/* You could add a subtle pattern or gradient here if needed for non-video pages,
               but based on other pages, simple dark background might be enough or
               we might want to add particles/etc later. For now, matching the requested dark theme. */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background opacity-40"></div>
          </div>
        )}
      </div>

      <div className="relative z-10">
        <div className="w-main mx-auto pt-32 mobile:pt-52 md:pt-60 mb-40 sm:mb-60">
          <ScrollReveal>
            <div className="flex flex-col gap-40 sm:gap-80">
              <div className="overflow-x-hidden">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold uppercase leading-tight">
                  {title}
                </h1>
                <div className="pt-10 flex gap-6 flex-wrap items-center">
                  <Link href="#all-services">
                    <Button>
                      <span className="px-5 lg:px-10">Read more</span>
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-end">
                  <p className="mt-20 lg:text-xl xl:text-2xl w-full max-w-xl xl:max-w-2xl tracking-wide text-foreground/80">
                    {subtitle}
                  </p>
                </div>
              </div>

              <div id="all-services" className="scroll-mt-32">
                 <h2 className="text-xl lg:text-2xl xl:text-3xl font-extralight uppercase lg:tracking-wide flex gap-3 flex-wrap md:justify-between text-foreground/90">
                  {servicesTitle}
                </h2>
                <div className="mt-14 lg:mt-32">
                  {services.map((service, index) => (
                    <ScrollReveal key={service.id} delay={index * 0.1}>
                      <div className="border-y border-foreground/20 h-auto md:h-40 xl:h-60 flex gap-5 justify-between md:items-center flex-col md:flex-row py-8 group hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 rounded-lg">
                        <h3 className="text-2xl lg:text-4xl xl:text-6xl uppercase font-bold flex gap-4 items-start text-foreground">
                          <span className="text-base lg:text-xl font-light text-accent pt-1 lg:pt-2">
                            0{index + 1}
                          </span>
                          <span>{service.title}</span>
                        </h3>
                        {service.description && (
                           <p className="md:max-w-lg text-foreground/60 group-hover:text-foreground/80 transition-colors">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
