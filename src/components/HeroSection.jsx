import React from "react";
import { Button } from "./Button";

export default function HeroSection() {
  function isMobile() { return ('ontouchstart' in document.documentElement); }
  const video_src = (window.innerWidth < 800 && isMobile())
    ? "/videos/background-video-720p-crop.mp4"
    : "/videos/background-video.mp4";

  return (
    <div className="min-h-[60vh] h-auto w-full flex flex-row justify-center items-center [box-shadow:inset_0_0_0_1000px_rgba(0,0,0,0.2)] overflow-hidden max-[900px]:flex-col">
      <video
        src={video_src}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover min-w-full min-h-full w-screen h-screen fixed z-[-10] top-0 left-0"
      />
      <div className="w-1/2 h-full flex flex-col justify-center items-center max-[900px]:w-4/5 max-[900px]:mt-[50px]">
        <h1 className="text-white text-[100px] mt-0 text-center max-[1300px]:text-[50px]">
          Nikolas Pechie
        </h1>
        <p className="mt-2 text-white text-[32px] font-trebuchet text-center max-[1300px]:text-[24px]">
          Software Engineer - Boston, MA
        </p>
        <p className="mt-2 text-white text-[32px] font-trebuchet text-center max-[1300px]:text-[24px]">
          Northeastern University Class of 2021
        </p>
        <div className="mt-8">
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-[60vh] flex justify-center items-center max-[900px]:hidden">
        <img
          src="/images/headshot_2.jpg"
          alt="Headshot"
          className="min-h-[300px] h-[300px] min-w-[240px] w-[240px] border-[5px] border-white rounded-[35px]"
        />
      </div>
    </div>
  );
}
