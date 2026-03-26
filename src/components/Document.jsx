import React from "react";

export default function Document() {
  const isMobile = (/Mobi|Android/i.test(navigator.userAgent));
  const resume_element = isMobile
    ? (
      <p className="m-5">
        Resume not available for viewing on mobile,
        but you can download it{" "}
        <a href="/Resume_01_24_21.pdf" download className="underline text-[#1b1b1b]">
          here
        </a>
      </p>
    )
    : (
      <iframe
        className="mx-auto p-0 border-none block w-[95%] h-[680px] mb-[50px]"
        src="/Resume_01_24_21.pdf"
        title="Resume"
      />
    );

  return (
    <div className="w-full min-h-full h-auto flex flex-row max-[1300px]:flex-col">
      <div className="bg-white/80 rounded-[30px] text-center w-[45%] mx-auto my-[50px] shadow-[0_0_15px_#888888] border-t-[5px] border-[#50cbaf] max-[1300px]:w-[95%]">
        <h1 className="text-[#181818] mb-[10px]">Resume</h1>
        {resume_element}
      </div>
    </div>
  );
}
