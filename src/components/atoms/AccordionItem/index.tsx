import React from "react";
import { AccordionDownIcon } from "@/icons/icons";

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  triggerElement: React.ReactNode;
}

export const AccordionItem = ({
  children,
  className,
  triggerElement,
}: AccordionItemProps) => {
  return (
    <div className={className}>
      {triggerElement}
      {children}
    </div>
  );
};
