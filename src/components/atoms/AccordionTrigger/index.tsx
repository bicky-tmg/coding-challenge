import React from "react";

interface AccordionTriggerProps {
  title: string;
  handleClick: () => void;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const AccordionTrigger = ({
  title,
  handleClick,
  className,
  icon,
  children,
}: AccordionTriggerProps) => {
  return (
    <div className={className} onClick={handleClick}>
      <span>{icon}</span>
      <p>{title}</p>
      {children}
    </div>
  );
};
