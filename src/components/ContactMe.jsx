import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ContactMe() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="px-6 py-16 bg-[#0a0a0a] flex flex-col items-center">
      <div
        ref={ref}
        className={[
          "w-full max-w-[980px] transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        ].join(" ")}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Resume */}
          <div className="flex-1 flex flex-col bg-[#1c1c1e] border border-white/[0.08] rounded-xl p-8">
            <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em] mb-8">
              Resume
            </h1>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              Download a copy of my resume to learn more about my experience and skills.
            </p>
            <a
              href="/resume.pdf"
              download
              className="mt-auto inline-block bg-[#0071e3] text-white text-sm font-medium py-3 px-6 rounded-[980px] no-underline hover:bg-[#0077ed] transition-colors duration-200 w-fit"
            >
              Download Resume
            </a>
          </div>

          {/* Get in touch */}
          <div className="flex-1 flex flex-col bg-[#1c1c1e] border border-white/[0.08] rounded-xl p-8">
            <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em] mb-8">
              Get in touch
            </h1>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              Feel free to reach out with any questions you may have, you can
              either use the link below, or send me an email at
              pechie717@gmail.com, and I will respond as soon as I can.
            </p>
            <a
              href="mailto:pechie717@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-block bg-[#0071e3] text-white text-sm font-medium py-3 px-6 rounded-[980px] no-underline hover:bg-[#0077ed] transition-colors duration-200 w-fit"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
