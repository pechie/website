import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SKILLS = [
  "Java",
  "Kotlin",
  "SQL",
  "JavaScript",
  "Golang",
  "Python",
  "AWS",
  "GCP",
  "Datadog",
  "Kubernetes",
  "Terraform",
  "Docker",
  "Jenkins",
  "Splunk",
  "Dynatrace",
  "Git",
];

export default function About() {
  const skillsReveal = useScrollReveal();

  return (
    <section className="py-24 px-6 max-w-[980px] mx-auto">
      {/* Skills */}
      <div
        ref={skillsReveal.ref}
        className={[
          "transition-all duration-500",
          skillsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        ].join(" ")}
      >
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
