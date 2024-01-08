import React from "react";

interface AccordionContentProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

export const AccordionContent = ({
  children,
  className,
  isActive,
}: AccordionContentProps) => {
  return <div className={className}>{children}</div>;
};
