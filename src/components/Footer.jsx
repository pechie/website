import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/[0.72] backdrop-blur-xl border-t border-white/[0.08] py-8 px-6">
      <div className="max-w-[980px] mx-auto flex flex-col items-center gap-5">
        <div className="flex items-center gap-8">
          <a
            href="mailto:pechie717@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="flex items-center gap-2 text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-200 no-underline text-sm"
          >
            <i className="fas fa-envelope text-base" />
            <span>Email</span>
          </a>
          <a
            href="https://www.github.com/pechie"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
            className="flex items-center gap-2 text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-200 no-underline text-sm"
          >
            <i className="fab fa-github text-base" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/npechie/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-200 no-underline text-sm"
          >
            <i className="fab fa-linkedin text-base" />
            <span>LinkedIn</span>
          </a>
        </div>
        <small className="text-[#6e6e73] text-xs">
          © {new Date().getFullYear()} Nikolas Pechie
        </small>
      </div>
    </footer>
  );
}
