import React from "react";

interface AccordionTriggerProps {
  title: string;
  handleClick: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const AccordionTrigger = ({
  title,
  handleClick,
  className,
  icon,
}: AccordionTriggerProps) => {
  return (
    <div className={className} onClick={handleClick}>
      {icon}
      <p>{title}</p>
    </div>
  );
};
