"use client";

import { useEffect } from "react";

export default function ScrollColorHandler() {
  useEffect(() => {
    const triggerPoint = 1; // px

    const handleScroll = () => {
      console.log(`Scroll position: ${window.scrollY}`);

      const elements = document.querySelectorAll<HTMLElement>(".color-change");
      const graytext = document.querySelectorAll<HTMLElement>(".graytext");
      const inputbox = document.querySelectorAll<HTMLElement>(".inputbox");
      if (window.scrollY >= triggerPoint) {
        elements.forEach((el) => {
          el.classList.remove("bg-white", "text-black");
          el.classList.add("bg-black", "text-white");
        });
        graytext.forEach((el) => {
          el.classList.remove("text-black/80");
          el.classList.add("text-white/60");
        });
        inputbox.forEach((el) => {
          el.classList.remove("bg-brushed-gold/30");
          el.classList.add("bg-off-white");
        });
        document.body.classList.remove("bg-white");
        document.body.classList.add("bg-black");
      } else {
        elements.forEach((el) => {
          el.classList.remove("bg-black", "text-white");
          el.classList.add("bg-white", "text-black");
        });
        graytext.forEach((el) => {
          el.classList.add("text-black/80");
          el.classList.remove("text-white/60");
        });
        inputbox.forEach((el) => {
          el.classList.add("bg-brushed-gold/30");
          el.classList.remove("bg-off-white");
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
