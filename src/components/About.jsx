import React from "react";
import Cards from "./Cards";

export default function About() {
  return (
    <div className="p-16 bg-gradient-to-b from-white to-transparent flex flex-row max-[1200px]:flex-col max-[1200px]:p-5">
      <div className="flex flex-col bg-[#082d3b] rounded-[30px] w-2/5 text-center mx-auto max-[1200px]:w-4/5 max-[1200px]:mb-5 max-[800px]:w-[90%] max-[500px]:w-full max-[500px]:mx-0 max-[500px]:rounded-none">
        <h1 className="text-white mt-5">About me</h1>
        <p className="text-white mx-5 mt-[50px] mb-5 leading-relaxed text-[22px] font-trebuchet max-[500px]:text-base max-[500px]:mx-[10px]">
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
      <div className="flex flex-col bg-[#082d3b] rounded-[30px] w-2/5 text-center mx-auto min-h-[450px] max-[1200px]:w-4/5 max-[800px]:w-[90%] max-[500px]:w-full max-[500px]:mx-0 max-[500px]:rounded-none">
        <h1 className="text-white mt-5">Skills</h1>
        <Cards />
      </div>
    </div>
  );
}
