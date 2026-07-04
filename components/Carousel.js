"use client";

import { useRef } from "react";

export default function Carousel({ children }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(":scope > *");
    const amount = card ? card.getBoundingClientRect().width + 24 : 300;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {children}
      </div>
      <button type="button" className="carousel-btn prev" aria-label="Previous dish" onClick={() => scroll(-1)}>
        <svg className="icon"><use href="#i-arrow" /></svg>
      </button>
      <button type="button" className="carousel-btn next" aria-label="Next dish" onClick={() => scroll(1)}>
        <svg className="icon"><use href="#i-arrow" /></svg>
      </button>
    </div>
  );
}
