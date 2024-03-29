import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ className = "", children }: CardProps) => {
  return <div className={className}>{children}</div>;
};
