import React from "react";

interface CardHeadProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHead = ({ children, className = "" }: CardHeadProps) => {
  return <div className={className}>{children}</div>;
};
