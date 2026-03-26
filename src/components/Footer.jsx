import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#242424] pt-16 pb-8 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] flex justify-center max-[820px]:pt-8">
        <div className="flex max-[820px]:flex-col">
          <div className="flex flex-col items-center m-4 text-center w-[300px] box-border">
            <h2 className="text-white mb-4">References</h2>
            <a
              href="https://github.com/pechie/profile"
              target="_blank"
              rel="noreferrer"
              className="text-white no-underline mb-2 hover:text-[#24718e] transition-all duration-300"
            >
              Source code
            </a>
            <a
              href="https://www.youtube.com/watch?v=-MKapbz0GIo"
              target="_blank"
              rel="noreferrer"
              className="text-white no-underline mb-2 hover:text-[#24718e] transition-all duration-300"
            >
              Background video
            </a>
            <a
              href="https://youtu.be/I2UBjN5ER4s"
              target="_blank"
              rel="noreferrer"
              className="text-white no-underline mb-2 hover:text-[#24718e] transition-all duration-300"
            >
              Tutorial that helped create this site
            </a>
          </div>
        </div>
      </div>
      <section className="max-w-[1000px] w-full">
        <div className="flex justify-between items-center w-[90%] max-w-[1000px] mt-10 mx-auto max-[820px]:flex-col">
          <div>
            <Link to="/" className="text-white ml-5 cursor-pointer no-underline text-3xl flex items-center mb-4">
              Nikolas Pechie
            </Link>
          </div>
          <small className="text-white mb-4 mx-auto">Updated 05/04/2021</small>
          <div className="flex justify-between items-center w-[240px]">
            <a
              className="text-white text-2xl"
              href="mailto:pechie717@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              className="text-white text-2xl"
              href="https://www.github.com/pechie"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="text-white text-2xl"
              href="https://www.linkedin.com/in/npechie/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
