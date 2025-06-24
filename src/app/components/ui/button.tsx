import ButtonProps from "@/app/models/button.interface";
import React from "react";

export function Button({
  children,
  classAttributes,
  onClick,
  type = "button",
}: ButtonProps) {
  const classMain =
    "xl:bg-blue-500 xl:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <button
      className={`${classAttributes} ${classMain} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
