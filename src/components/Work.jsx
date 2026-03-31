import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

function JobCard({ logo, alt, company, role, location, dates, bullets, reveal }) {
  return (
    <div
      ref={reveal.ref}
      className={[
        "bg-[#1c1c1e] border border-white/[0.08] rounded-xl p-6 transition-all duration-500",
        reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      ].join(" ")}
    >
      <div className="flex flex-row items-start gap-4 mb-4 max-[500px]:flex-col max-[500px]:items-center max-[500px]:text-center">
        <img
          src={logo}
          alt={alt}
          className="w-16 h-16 rounded-xl object-contain shrink-0 bg-white p-1"
        />
        <div>
          <h3 className="text-[#f5f5f7] text-xl font-semibold mb-1">{company}</h3>
          <p className="text-[#6e6e73] text-sm">{role}</p>
          <p className="text-[#6e6e73] text-sm">{location}</p>
          <p className="text-[#6e6e73] text-sm">{dates}</p>
        </div>
      </div>
      <ul className="text-[#f5f5f7] text-base leading-relaxed ml-4 space-y-2 list-disc">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

function VideoModal({ url, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm flex items-center gap-1"
        >
          ✕ Close
        </button>
        <video
          src={url}
          controls
          autoPlay
          className="w-full rounded-xl"
        />
      </div>
    </div>,
    document.body
  );
}

function ProjectCard({ title, description, media, reveal, repoUrl, demoUrl }) {
  const [showDemo, setShowDemo] = useState(false);
  return (
    <div
      ref={reveal.ref}
      className={[
        "bg-[#1c1c1e] border border-white/[0.08] rounded-xl p-6 flex flex-row gap-6 transition-all duration-500 max-[1300px]:flex-col max-[1300px]:items-center",
        reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      ].join(" ")}
    >
      <div className="flex-1 max-[1300px]:text-center flex flex-col">
        <h3 className="text-[#f5f5f7] text-xl font-semibold mb-4">{title}</h3>
        <div className="text-[#f5f5f7] text-base leading-relaxed mb-6">{description}</div>
        <div className="mt-auto flex items-center gap-4">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#0071e3] text-sm hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {demoUrl && (
            <>
              <button
                onClick={() => setShowDemo(true)}
                className="inline-flex items-center gap-2 text-[#0071e3] text-sm hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
              {showDemo && <VideoModal url={demoUrl} onClose={() => setShowDemo(false)} />}
            </>
          )}
        </div>
      </div>
      {media && (
        <div className="w-[320px] h-[320px] shrink-0 rounded-xl overflow-hidden max-[500px]:w-full max-[500px]:h-auto">
          {media}
        </div>
      )}
    </div>
  );
}

export default function Work() {
  const headingReveal = useScrollReveal();
  const chewyReveal = useScrollReveal();
  const projectsHeadingReveal = useScrollReveal();
  const websiteReveal = useScrollReveal();
  const nbaReveal = useScrollReveal();

  return (
    <div className="px-6 py-16 bg-[#0a0a0a]">
      <div className="max-w-[980px] mx-auto">

        {/* Work Experience heading */}
        <div
          ref={headingReveal.ref}
          className={[
            "mb-12 transition-all duration-500",
            headingReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          ].join(" ")}
        >
          <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em]">Work Experience</h1>
        </div>

        {/* Job cards */}
        <div className="flex flex-col gap-4 mb-20">
          <JobCard
            reveal={chewyReveal}
            logo="/images/chewy-logo.png"
            alt="Chewy Logo"
            company="Chewy Inc"
            role="Software Engineer"
            location="Boston, MA"
            dates="July 2021 - Present"
            bullets={[
              "Led the technical design and implementation of a full migration to PayPal's Braintree payment processor, replacing the existing billing solution for subscription management and payment processing. Built new API endpoints to onboard new customer accounts to Braintree, executed a zero-downtime migration of all existing accounts, and mirrored legacy behavior to ensure no customer impact.",
              "Architected and led the Couchbase-to-GCP Memorystore (Valkey) migration as part of a large-scale initiative to replace self-hosted infrastructure with managed GCP equivalents. Designed a custom wrapper around Spring Data Redis' CacheManager implementing a dual-write, feature-toggle-controlled read strategy, enabling safe production validation via custom Datadog metrics and dashboards. The pattern was adopted for all other system migrations on the team.",
              "Designed and deployed a modular microservice that evaluates order compliance against a set of business rules stored in a SQL database, integrating it into the core order flow. Eliminated hardcoded rule logic from the backend, making rules fully auditable and updatable without production deployments.",
              "Built a dynamic content-fetching system that allows product partners to update live webpage text in real time, removing the need for engineering involvement in routine legal copy updates.",
              "Won the company-wide hackathon with an AI-powered bug auto-triage system. Built a Chrome extension (TypeScript) that captures screen recordings and HAR files, an intake service that creates ServiceNow and Jira tickets, and a backend AI agent that performs root cause analysis, classifies bugs vs. intended behavior, and drafts pull requests for engineer review. Project has been added to the team roadmap for productionization.",
            ]}
          />
        </div>

        {/* Projects heading */}
        <div
          ref={projectsHeadingReveal.ref}
          className={[
            "mb-12 transition-all duration-500",
            projectsHeadingReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          ].join(" ")}
        >
          <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em]">Projects</h1>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-4">
          <ProjectCard
            reveal={websiteReveal}
            repoUrl="https://github.com/pechie/profile"
            title="Personal Website"
            description={
              <p>
                Designed and built a personal portfolio site deployed to GitHub Pages at pechie.dev. Built with React, TypeScript, Vite, and Tailwind CSS. Features a multi-section
                single-page layout with smooth scroll navigation, a resume PDF viewer, and a
                contact form.
              </p>
            }
            media={<img src="/images/website.png" alt="Personal Website" className="w-full h-full object-cover" />}
          />
          <ProjectCard
            reveal={nbaReveal}
            repoUrl="https://github.com/pechie/nba-highlights"
            demoUrl="/videos/nba-highlights-demo.mp4"
            title="NBA Highlight Reel Generator"
            description={
              <p>
                Built a full-stack locally-run web application that compiles custom NBA highlight
                reels. Users select a game, player, and stat categories through a step-by-step
                wizard UI. The FastAPI backend fetches play-by-play data and video clip URLs via
                nba_api, downloads and concatenates clips using ffmpeg, and streams the compiled
                MP4 directly to the browser. Built with React, TypeScript, Python, and FastAPI.
              </p>
            }
            media={<img src="/images/nba-highlights.png" alt="NBA Highlight Reel Generator" className="w-full h-full object-cover" />}
          />
        </div>
      </div>
    </div>
  );
}
