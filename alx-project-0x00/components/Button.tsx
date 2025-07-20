// components/Button.tsx
import React from "react";
import classNames from "classnames";

type ButtonProps = {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
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
        className
      )}
    >
      {title}
    </button>
  );
};
