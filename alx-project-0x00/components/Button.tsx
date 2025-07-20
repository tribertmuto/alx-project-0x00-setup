// components/Button.tsx
import React from "react";
import classNames from "classnames";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles = "",
}) => {
  const sizeClass = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  }[size];

  return (
    <button
      className={classNames(
        "bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300",
        sizeClass,
        shape,
        styles
      )}
    >
      {title}
    </button>
  );
};

export default Button;
