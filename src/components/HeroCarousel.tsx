"use client";

import { useState, useRef, useEffect } from "react";

interface HeroSlide {
  src: string;
}

const slides: HeroSlide[] = [
  { src: "/images/1.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/3.jpg" },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== active}
        >
          <img
            src={slide.src}
            alt={`Slide ${i + 1}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl w-full mx-auto text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Bekal International Holding Company
              </h1>
              <p className="text-sm sm:text-xl mb-8 text-white/90">
                Since 1981, we have shaped industries across the UAE, Saudi
                Arabia, and India by building a world-class, diversified
                portfolio grounded in integrity, innovation, and excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                <div className="bg-white/10 border border-white/20 p-4 rounded-lg min-w-[140px]">
                  <p className="text-3xl font-bold text-white">400+</p>
                  <p className="text-sm text-white">Clients</p>
                </div>
                <div className="bg-white/10 border border-white/20 p-4 rounded-lg min-w-[140px]">
                  <p className="text-3xl font-bold text-white">80+</p>
                  <p className="text-sm text-white">Team Members</p>
                </div>
                <div className="bg-white/10 border border-white/20 p-4 rounded-lg min-w-[140px]">
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="text-sm text-white">Countries</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5 my-8">
                <a
                  href="#companies"
                  className="bg-white text-[#181b22] px-6 py-3 rounded-md font-semibold hover:bg-[#f0e8db] transition duration-300 shadow"
                >
                  Explore Companies
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
