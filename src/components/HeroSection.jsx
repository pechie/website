import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Button } from "./Button";

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#0a0a0a]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(0,113,227,0.08) 0%, transparent 70%), #0a0a0a",
      }}
    >
      <div
        ref={ref}
        className={[
          "flex flex-col items-center text-center max-w-[680px] transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        ].join(" ")}
      >
        <img
          src="/images/headshot_2.jpg"
          alt="Nikolas Pechie"
          className="mb-8 w-[160px] h-[160px] rounded-full object-cover ring-1 ring-white/10"
        />
        <h1 className="text-[#f5f5f7] font-bold tracking-[-0.03em] text-[clamp(40px,_6vw,_72px)] leading-tight mb-4">
          Nikolas Pechie
        </h1>
        <p className="text-[#6e6e73] text-[19px] mb-8">
          Software Engineer — Boston, MA
        </p>
        <Button buttonStyle="btn--primary" buttonSize="btn--large" to="/contact">
          Get in touch
        </Button>
      </div>
    </div>
  );
}
