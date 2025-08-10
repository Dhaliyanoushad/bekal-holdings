"use client";

import { useEffect } from "react";

export default function ScrollColorHandler() {
  useEffect(() => {
    const triggerPoint = 4200; // px
    const handleScroll = () => {
      console.log(`Scroll position: ${window.scrollY}`);

      const elements = document.querySelectorAll<HTMLElement>(".color-change");
      if (window.scrollY >= triggerPoint) {
        elements.forEach((el) => {
          el.classList.remove("bg-white", "text-black");
          el.classList.add("bg-black", "text-white");
        });
        document.body.classList.remove("bg-white");
        document.body.classList.add("bg-black");
      } else {
        elements.forEach((el) => {
          el.classList.remove("bg-black", "text-white");
          el.classList.add("bg-white", "text-black");
        });
        document.body.classList.remove("bg-black");
        document.body.classList.add("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
