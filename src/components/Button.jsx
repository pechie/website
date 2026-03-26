import React from "react";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to = "/contact",
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const baseClass = "py-2 px-5 rounded-sm outline-none border-none cursor-pointer text-xl transition-all duration-300";

  const styleClass =
    checkButtonStyle === "btn--outline"
      ? "bg-transparent text-white border-[3px] border-white hover:bg-white hover:text-[#242424]"
      : "bg-white text-[#242424] border border-white hover:bg-white hover:text-[#242424]";

  const sizeClass =
    checkButtonSize === "btn--large"
      ? "py-3 px-[26px]"
      : "py-2 px-5";

  return (
    <Link to={to} className="no-underline max-[900px]:block max-[900px]:w-full">
      <button
        className={`${baseClass} ${styleClass} ${sizeClass} max-[900px]:w-full`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
