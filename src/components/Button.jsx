import React from "react";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  onClick,
  buttonStyle,
  buttonSize,
  to = "#contact",
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const styleClass =
    checkButtonStyle === "btn--outline"
      ? "bg-transparent text-[#f5f5f7] border border-white/30 hover:border-white/80 hover:text-white"
      : "bg-[#0071e3] text-white border border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]";

  const sizeClass =
    checkButtonSize === "btn--large"
      ? "py-3 px-8 text-base"
      : "py-2 px-5 text-sm";

  return (
    <a
      href={to}
      onClick={onClick}
      className={`no-underline inline-block rounded-[980px] font-medium outline-none cursor-pointer transition-all duration-200 ${styleClass} ${sizeClass}`}
    >
      {children}
    </a>
  );
};
