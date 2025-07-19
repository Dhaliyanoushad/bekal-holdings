"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    src: "/images/1.jpg",
    headline:
      "We have a world-class, diversified portfolio through investments in attractive, long-term opportunities",
    button: { label: "Our Investments", link: "/investments" },
  },
  {
    type: "image",
    src: "/images/2.jpg",
    headline: "Partnering for growth in key industries worldwide",
    button: { label: "Our Partners", link: "/partners" },
  },
  {
    type: "image",
    src: "/images/3.jpg",
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

  // const goToSlide = (idx: number) => setActive(idx);
  // const goNext = () => setActive((prev) => (prev + 1) % slides.length);
  // const goPrev = () =>
  //   setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-black/80" />
          {/* Slide content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Bekal International Holding Company
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  A leading diversified business group with operations across
                  Kingdom of Saudi Arabia, United Arab Emirates, and India since
                  1981.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#companies"
                    className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300 flex items-center"
                  >
                    Our Companies <ArrowRight size={16} className="ml-2" />
                  </a>
                  <a
                    href="#contact"
                    className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition duration-300"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                  <div className="bg-blue-100 rounded-full px-6 py-3">
                    <span className="font-bold text-3xl">400+</span>
                    <p className="text-sm">Clients</p>
                  </div>
                  <div className="bg-blue-100 rounded-full px-6 py-3">
                    <span className="font-bold text-3xl">80+</span>
                    <p className="text-sm">Team Members</p>
                  </div>
                  <div className="bg-blue-100 rounded-full px-6 py-3">
                    <span className="font-bold text-3xl">3</span>
                    <p className="text-sm">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      {/* <button
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
      </button> */}

      {/* Dots */}
      {/* <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
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
      </div> */}
    </section>
  );
}
