import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();

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

  const linkClass = (path) =>
    "text-[14px] no-underline transition-colors duration-200 px-2 py-1 " +
    (location.pathname === path
      ? "text-[#0071e3]"
      : "text-[#f5f5f7] hover:text-[#0071e3]");

  return (
    <nav className="sticky top-0 z-[999] h-12 flex items-center bg-black/[0.72] backdrop-blur-xl saturate-150 border-b border-white/[0.08]">
      <div className="flex justify-between items-center w-full max-w-[980px] mx-auto px-6">
        <Link
          to="/"
          className="text-[#f5f5f7] text-[17px] font-semibold no-underline"
          onClick={closeMobileMenu}
        >
          Nikolas Pechie
        </Link>

        {/* Mobile hamburger */}
        <div
          className="max-[960px]:block hidden text-[#f5f5f7] text-xl cursor-pointer"
          onClick={handleClick}
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* Desktop nav links */}
        <ul className="list-none m-0 p-0 gap-2 items-center max-[960px]:hidden flex">
          <li>
            <Link to="/" className={linkClass("/")} onClick={closeMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="/experience" className={linkClass("/experience")} onClick={closeMobileMenu}>Experience</Link>
          </li>
          <li>
            <Link to="/resume" className={linkClass("/resume")} onClick={closeMobileMenu}>Resume</Link>
          </li>
          {button && (
            <li className="ml-2">
              <Button buttonStyle="btn--outline" to="/contact">Contact</Button>
            </li>
          )}
        </ul>

        {/* Mobile dropdown menu */}
        {click && (
          <ul className="list-none m-0 p-0 flex flex-col w-full absolute top-12 left-0 bg-black/[0.95] backdrop-blur-xl py-6 border-b border-white/[0.08] z-[1] items-center gap-5">
            <li>
              <Link to="/" className={linkClass("/")} onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="/experience" className={linkClass("/experience")} onClick={closeMobileMenu}>Experience</Link>
            </li>
            <li>
              <Link to="/resume" className={linkClass("/resume")} onClick={closeMobileMenu}>Resume</Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[#f5f5f7] text-sm no-underline py-2 px-6 rounded-[980px] border border-white/40 hover:border-white transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
