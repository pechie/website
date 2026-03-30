import React from "react";

export default function Navbar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="sticky top-0 z-[999] h-12 flex items-center bg-black/[0.72] backdrop-blur-xl saturate-150 border-b border-white/[0.08]">
      <div className="flex items-center w-full max-w-[980px] mx-auto px-6">
        <button
          onClick={scrollToTop}
          className="text-[#f5f5f7] text-[17px] font-semibold bg-transparent border-none cursor-pointer p-0"
        >
          Nikolas Pechie
        </button>
      </div>
    </nav>
  );
}
