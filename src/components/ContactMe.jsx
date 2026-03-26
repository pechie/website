import React from "react";

export default function ContactMe() {
  return (
    <div className="bg-white flex flex-col min-h-[91.7vh] w-auto h-auto items-center">
      <div className="w-4/5 min-h-[200px] h-[30%] text-center font-sans">
        <h1 className="mt-[100px] text-[55px] text-[#181818]">Contact Me</h1>
      </div>
      <div className="w-4/5 min-h-[600px] h-auto flex flex-row items-center justify-center">
        <div className="min-h-[400px] h-[60%] min-w-[400px] w-[30%] m-10 text-center rounded-[25px] shadow-[0_0_8px_#888888] border-t-[5px] border-[#50cbaf] justify-center max-[500px]:min-w-[300px] max-[500px]:w-auto">
          <h1 className="m-[50px] text-[#292929]">Email</h1>
          <p className="text-lg text-[#3b3b3b] mx-[50px]">
            Feel free to reach out with any questions you may have, you can
            either use the link below, or send me an email at
            pechie717@gmail.com, and I will respond as soon as I can.
          </p>
          <a href="mailto:pechie717@gmail.com" target="_blank" rel="noreferrer">
            <button
              className="text-xl h-[50px] w-[190px] mx-auto mt-10 mb-5 bg-white text-[#50cbaf] border-2 border-[#50cbaf] rounded-[20px] shadow-[0_0_8px_#888888] outline-none cursor-pointer hover:bg-[#50cbaf] hover:text-white block transition-colors"
              type="button"
            >
              Send me an Email
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
