import React from "react";

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter = ({ className = "", children }: CardFooterProps) => {
  return <div className={className}>{children}</div>;
};
