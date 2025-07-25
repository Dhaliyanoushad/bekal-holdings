"use client";

import { useState, useRef, useEffect } from "react";

interface HeroSlide {
  src: string;
}

const slides: HeroSlide[] = [
  { src: "/images/3.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/5.jpeg" },
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
    <section className="relative h-[100vh] w-full overflow-hidden " id="home">
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
            <div className="max-w-4xl w-full m-auto text-white">
              <h1 className="text-3xl min-[500px]:text-heading min-[976px]:text-5xl font-bold mb-4 leading-tight mt-20">
                Bekal International Holding Company
              </h1>
              <p className="text-small min-[692px]:text-description min-[976px]:text-xl xs:mb-8 text-white/90">
                Since 1981, we have shaped industries across the UAE, Saudi
                Arabia, and India by building a world-class, diversified
                portfolio grounded in integrity, innovation, and excellence.
              </p>
              <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-6 mt-4 ">
                {[
                  { value: "400+", label: "Clients" },
                  { value: "80+", label: "Team Members" },
                  { value: "3", label: "Countries" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/20 p-3 sm:p-4 rounded-lg sm:min-w-[140px] min-w-[150px]"
                  >
                    <p className="xs:text-xl sm:text-2xl min-[976px]:text-3xl min-[692px]:text-2xl font-bold text-white">
                      {item.value}
                    </p>
                    <p className="text-small text-white">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5 my-8">
                <a
                  href="#companies"
                  className="bg-white text-deep-navy px-6 py-3 rounded-md font-semibold hover:bg-cream-beige transition duration-300 shadow text-small min-[976px]:text-description"
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
