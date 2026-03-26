import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  const navLinkClass =
    "text-white flex items-center no-underline px-4 py-2 h-full " +
    "border-b-4 border-transparent hover:border-white transition-all duration-200 " +
    "max-[960px]:text-center max-[960px]:p-8 max-[960px]:w-full max-[960px]:table " +
    "max-[960px]:hover:bg-white max-[960px]:hover:text-[#242424] max-[960px]:hover:border-transparent";

  return (
    <nav className="bg-gradient-to-r from-[#1c1b1b] to-[#1a1717] h-20 flex justify-center items-center text-xl sticky top-0 z-[999]">
      <div className="flex justify-center items-center h-20 w-full">
        <Link
          to="/"
          className="text-white cursor-pointer no-underline text-3xl flex items-center"
          onClick={closeMobileMenu}
        >
          pechie.dev
        </Link>
        <div
          className="max-[960px]:block hidden absolute top-0 right-0 translate-x-[-100%] translate-y-[60%] text-[1.8rem] cursor-pointer"
          onClick={handleClick}
        >
          <i className={click ? "fas fa-times text-white text-[2rem]" : "fas fa-bars text-white"} />
        </div>
        <ul
          className={[
            "list-none text-center m-0 p-0",
            "min-[960px]:grid min-[960px]:grid-cols-4 min-[960px]:gap-[10px] min-[960px]:w-[60vw] min-[960px]:justify-end min-[960px]:mr-8",
            click
              ? "flex flex-col w-full h-[90vh] absolute top-20 left-0 bg-[#242222] z-[1] transition-all duration-500"
              : "max-[960px]:hidden",
          ].join(" ")}
        >
          <li className="min-[960px]:h-20">
            <Link to="/" className={navLinkClass} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="min-[960px]:h-20">
            <Link to="/experience" className={navLinkClass} onClick={closeMobileMenu}>
              Experience
            </Link>
          </li>
          <li className="min-[960px]:h-20">
            <Link to="/resume" className={navLinkClass} onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li className="min-[960px]:h-20">
            <Link
              to="/contact"
              className="hidden max-[960px]:block text-center my-8 rounded w-4/5 no-underline text-2xl bg-transparent text-white py-[14px] px-5 border border-white transition-all duration-300 hover:bg-white hover:text-[#242424] mx-auto"
              onClick={closeMobileMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Contact Me</Button>}
      </div>
    </nav>
  );
}
