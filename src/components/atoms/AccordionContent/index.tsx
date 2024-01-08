import React from "react";

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionContent = ({
  children,
  className,
}: AccordionContentProps) => {
  return <div className={className}>{children}</div>;
};
