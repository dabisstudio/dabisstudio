import { useRef } from "react";

interface LogoItem {
  name: string;
  logo?: string;
}

const rowA: LogoItem[] = [
  { name: "AWS", logo: "/images/aws.svg" },
  { name: "Microsoft", logo: "/images/microsoft.svg" },
  { name: "IBM", logo: "/images/ibm.svg" },
  { name: "Google Cloud", logo: "/images/google-cloud.svg" },
  { name: "Cognigy", logo: "/images/cognigy.svg" },
  { name: "Intercom", logo: "/images/intercom.svg" },
  { name: "Moveworks", logo: "/images/moveworks.svg" },
  { name: "ServiceNow", logo: "/images/servicenow.svg" },
];

const rowB: LogoItem[] = [
  { name: "Kore AI", logo: "/images/kore-ai.svg" },
  { name: "Sierra", logo: "/images/sierra.svg" },
  { name: "Zendesk", logo: "/images/zendesk.svg" },
  { name: "Toyota" },
  { name: "OWASP" },
  { name: "Lowe's" },
  { name: "Cognizant" },
  { name: "AWS", logo: "/images/aws.svg" },
  { name: "Microsoft", logo: "/images/microsoft.svg" },
];

function LogoItem({ item }: { item: LogoItem }) {
  return (
    <div className="flex items-center justify-center mx-10 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 group">
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.name}
          className="h-7 md:h-9 w-auto object-contain max-w-[120px] brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
          draggable={false}
        />
      ) : (
        <span className="text-sm md:text-base font-semibold tracking-widest uppercase text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
          {item.name}
        </span>
      )}
    </div>
  );
}

interface TrackProps {
  items: LogoItem[];
  reverse?: boolean;
  duration?: number;
}

function Track({ items, reverse = false, duration = 38 }: TrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max"
        style={{
          animation: `${reverse ? "marqueeReverse" : "marquee"} ${duration}s linear infinite`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {doubled.map((item, i) => (
          <LogoItem key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Track items={rowA} duration={36} />
      <Track items={rowB} reverse duration={42} />
    </div>
  );
}
