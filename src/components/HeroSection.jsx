import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Button } from "./Button";

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(0,113,227,0.08) 0%, transparent 70%), #0a0a0a",
      }}
    >
      <div
        ref={ref}
        className={[
          "flex flex-col md:flex-row items-center w-full px-6 gap-6 md:px-20 md:gap-20 transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        ].join(" ")}
      >
        {/* Left: photo + name + subtitle + button */}
        <div className="flex flex-col items-center text-center flex-1">
          <div className="mb-8 w-[420px] max-w-full h-[420px] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img
              src="/images/header_photo.jpg"
              alt="Nikolas Pechie"
              className="w-full h-full object-cover object-[center_65%] scale-125"
            />
          </div>
          <h1 className="text-[#f5f5f7] font-bold tracking-[-0.03em] text-[clamp(40px,_6vw,_72px)] leading-tight mb-4">
            Nikolas Pechie
          </h1>
          <p className="text-[#6e6e73] text-[19px] mb-8">
            Software Engineer — Boston, MA
          </p>
          <Button buttonStyle="btn--primary" buttonSize="btn--large" to="#contact">
            Get in touch
          </Button>
        </div>

        {/* Right: about me */}
        <div className="flex-1 flex justify-center">
          <div className="max-w-[50%]">
            <h2 className="text-[#f5f5f7] text-[40px] font-semibold tracking-[-0.02em] mb-6">
              About me
            </h2>
            <p className="text-[#f5f5f7] text-[17px] leading-relaxed">
              Hi, I'm Nick. I am a Software Engineer located in the Boston area with 5 years of
              professional experience. I graduated from Northeastern University with a degree in
              Computer Engineering and a minor in Computer Science. I specialize in backend
              development using Java and Kotlin, and I've worked across the full stack on everything
              from payment processor migrations and microservice design to AI-powered tooling and
              cloud infrastructure. Outside of engineering, I'm an avid basketball fan, and I enjoy
              reading, video games, and birdwatching. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
