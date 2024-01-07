import React from "react";

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody = ({ className, children }: CardBodyProps) => {
  return <div className={className}>{children}</div>;
};
