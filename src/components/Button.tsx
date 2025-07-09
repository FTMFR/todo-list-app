import React from "react";
import styles from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/getClasses";

interface ButtonProps {
  type?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

function Button({
  type,
  onClick,
  variant = "primary",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}

interface SelectButtonProps {
  children: React.ReactNode;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

function SelectButton({ children, id, ...rest }: SelectButtonProps) {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
