import React from "react";

type ButtonProps = {
  title: string;
  styles?: string;
};

const Button: React.FC<ButtonProps> = ({ title, styles }) => (
  <button className={styles}>{title}</button>
);

export default Button;
