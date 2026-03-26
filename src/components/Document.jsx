import React from "react";

export default function Document() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const resumeContent = isMobile ? (
    <p className="text-[#6e6e73] text-base">
      Resume not available for viewing on mobile, but you can download it{" "}
      <a href="/Resume_01_24_21.pdf" download className="text-[#0071e3] hover:underline">
        here
      </a>
    </p>
  ) : (
    <iframe
      className="w-full border-none block"
      style={{ height: "680px" }}
      src="/Resume_01_24_21.pdf"
      title="Resume"
    />
  );

  return (
    <div className="min-h-screen flex flex-col items-start justify-start px-6 py-16 bg-[#0a0a0a]">
      <div className="w-full max-w-[860px] mx-auto">
        <p className="text-[#6e6e73] text-xs uppercase tracking-[0.08em] mb-3">Resume</p>
        <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em] mb-8">
          Resume
        </h1>
        {resumeContent}
      </div>
    </div>
  );
}
