import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SKILLS = [
  "NodeJS",
  "AWS",
  "Git",
  "React",
  "Jira",
  "Jenkins",
  "TeamCity",
];

export default function About() {
  const bioReveal = useScrollReveal();
  const skillsReveal = useScrollReveal();

  return (
    <section className="py-24 px-6 max-w-[980px] mx-auto">
      {/* Bio */}
      <div
        ref={bioReveal.ref}
        className={[
          "mb-20 transition-all duration-500",
          bioReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        ].join(" ")}
      >
        <p className="text-[#6e6e73] text-xs uppercase tracking-[0.08em] mb-3">About</p>
        <h2 className="text-[#f5f5f7] text-[40px] font-semibold tracking-[-0.02em] mb-6">
          About me
        </h2>
        <p className="text-[#f5f5f7] text-[17px] leading-relaxed max-w-[640px]">
          Hi, I'm Nick. I am currently a Senior at Northeastern University, and
          I will be graduating in May of 2021 with a B.S. in Computer
          Engineering and a minor in Computer Science. Throughout my time at
          college, I completed three internships in software engineering which
          gave me a total of 2 years of working experience. I am seeking full
          time employment upon graduation, ideally doing back end development
          using Javascript or Java, but I am open to any and all opportunities.
          Outside of software engineering, I am an avid basketball and soccer
          fan, and I enjoy music, reading, cooking, and just about anything else
          that will keep me off of Twitter. Please feel free to reach out to
          learn more about me!
        </p>
      </div>

      {/* Skills */}
      <div
        ref={skillsReveal.ref}
        className={[
          "transition-all duration-500",
          skillsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        ].join(" ")}
      >
        <p className="text-[#6e6e73] text-xs uppercase tracking-[0.08em] mb-3">Skills</p>
        <h2 className="text-[#f5f5f7] text-[40px] font-semibold tracking-[-0.02em] mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="text-[#f5f5f7] text-[14px] px-[14px] py-[6px] rounded-[980px] bg-[#1c1c1e] border border-white/[0.08]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
