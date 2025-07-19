"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  type: "image" | "video";
  src: string;
  headline: string;
  button?: {
    label: string;
    link: string;
  };
}

const slides: HeroSlide[] = [
  {
    type: "image",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farabcenterdc.org%2Fwp-content%2Fuploads%2F2023%2F07%2FSaudi-UAE-rivalry-MBS-MBZ-768x432.jpg&f=1&nofb=1&ipt=4436ae0b414e6f87c8ddfd39553416001b28ab8e49118e9ec8db762c1ae3d15b", // Replace with your image path
    headline:
      "We have a world-class, diversified portfolio through investments in attractive, long-term opportunities",
    button: { label: "Our Investments", link: "/investments" },
  },
  {
    type: "video",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farabcenterdc.org%2Fwp-content%2Fuploads%2F2023%2F07%2FSaudi-UAE-rivalry-MBS-MBZ-768x432.jpg&f=1&nofb=1&ipt=4436ae0b414e6f87c8ddfd39553416001b28ab8e49118e9ec8db762c1ae3d15b", // Replace with your image path
    headline:
      "Transforming landscapes with sustainable and innovative projects",
    button: { label: "Learn More", link: "/about" },
  },
  {
    type: "image",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farabcenterdc.org%2Fwp-content%2Fuploads%2F2023%2F07%2FSaudi-UAE-rivalry-MBS-MBZ-768x432.jpg&f=1&nofb=1&ipt=4436ae0b414e6f87c8ddfd39553416001b28ab8e49118e9ec8db762c1ae3d15b", // Replace with your image path
    headline: "Partnering for growth in key industries worldwide",
    button: { label: "Our Partners", link: "/partners" },
  },
  {
    type: "image",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farabcenterdc.org%2Fwp-content%2Fuploads%2F2023%2F07%2FSaudi-UAE-rivalry-MBS-MBZ-768x432.jpg&f=1&nofb=1&ipt=4436ae0b414e6f87c8ddfd39553416001b28ab8e49118e9ec8db762c1ae3d15b", // Replace with your image path
    headline: "Empowering communities with responsible investments",
    button: { label: "Our Impact", link: "/impact" },
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 6s
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const goToSlide = (idx: number) => setActive(idx);
  const goNext = () => setActive((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100 z-9" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== active}
        >
          {slide.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={`Slide ${i + 1}`}
              className="object-cover w-full h-full"
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Slide content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto drop-shadow-lg">
              {slide.headline}
            </h2>
            {slide.button && (
              <a
                href={slide.button.link}
                className="mt-8 px-6 py-4 bg-white/90 rounded-full font-medium text-gray-900 hover:bg-white shadow-lg transition"
              >
                {slide.button.label}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        aria-label="Previous Slide"
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white/100 p-2 rounded-full shadow transition hidden sm:inline-flex"
      >
        <ChevronLeft size={32} className="text-gray-700" />
      </button>
      <button
        aria-label="Next Slide"
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white/100 p-2 rounded-full shadow transition hidden sm:inline-flex"
      >
        <ChevronRight size={32} className="text-gray-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full ${
              idx === active ? "bg-white" : "bg-white/50"
            } border border-white`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
}
