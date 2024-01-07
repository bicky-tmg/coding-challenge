import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "px-4 py-6 font-medium bg-tertiary",
  variants: {
    font: {
      filled: "text-base",
      cta: "text-lg font-semibold leading-6",
    },
    border: {
      filled: "rounded-tr-[32px] rounded-bl-lg",
      cta: "rounded-full border border-solid",
    },
    active: {
      filled:
        "bg-primary-100 relative bottom-1.5 after:absolute after:left-0 after:top-[6px] after:inline-block after:bg-shadow after:w-[calc(100%_+_8px)] after:h-full after:z-[-10] after:rounded-tr-[32px] after:rounded-bl-lg",
    },
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: React.ComponentProps<"button">["onClick"];
}

export const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <button className={button(rest)} onClick={onClick}>
      {children}
    </button>
  );
};
