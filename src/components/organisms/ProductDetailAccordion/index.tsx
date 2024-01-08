"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { useAccordion } from "@/context/Accordion";
import { AccordionDownIcon } from "@/icons/icons";
import React from "react";

interface ProductDetailAccordionProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
}

export const ProductDetailAccordion = ({
  title,
  value,
  description,
  icon,
}: ProductDetailAccordionProps) => {
  const { activeValue, toggleValue } = useAccordion();
  const isActive = activeValue === value;
  return (
    <AccordionItem
      className="pb-6 border-b border-solid overflow-hidden"
      triggerElement={
        <div className="relative">
          <AccordionTrigger
            className="flex gap-4 items-center cursor-pointer text-md leading-[25.2px] font-medium"
            title={title}
            icon={icon}
            handleClick={() => toggleValue(value)}
          />
          <span
            className={`absolute top-1/2 right-0 translate-y-[-50%] transform origin-center transition duration-200 ease-out ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          >
            <AccordionDownIcon />
          </span>
        </div>
      }
    >
      <AccordionContent
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isActive
            ? "grid-rows-[1fr] opacity-100 mt-6"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
        isActive={isActive}
      >
        <div className="overflow-hidden">{description}</div>
      </AccordionContent>
    </AccordionItem>
  );
};
