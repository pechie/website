import React, { useState, useEffect } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState("home");
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const visibilityMap = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio;
        });
        const best = Object.entries(visibilityMap).reduce(
          (acc, [id, ratio]) => (ratio > acc.ratio ? { id, ratio } : acc),
          { id: "home", ratio: 0 }
        );
        setActiveId(best.id);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId(null)}
          className="relative flex items-center justify-end"
          aria-label={label}
        >
          {/* Label — slides in from right on hover */}
          <span
            className={[
              "mr-3 text-xs text-[#f5f5f7] bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap transition-all duration-200",
              hoveredId === id
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-2 pointer-events-none",
            ].join(" ")}
          >
            {label}
          </span>
          {/* Dot */}
          <div
            className={[
              "w-2.5 h-2.5 rounded-full transition-all duration-200",
              activeId === id
                ? "bg-white scale-110"
                : "bg-white/30 hover:bg-white/60",
            ].join(" ")}
          />
        </button>
      ))}
    </div>
  );
}
