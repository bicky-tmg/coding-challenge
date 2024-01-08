"use client";
import { createContext, useContext, useState } from "react";

interface AccordionContextProps {
  defaultValue?: string;
  children: React.ReactNode;
}

interface AccordionContextType {
  activeValue: string;
  toggleValue: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType>(
  {} as AccordionContextType
);

const Accordion = ({ defaultValue = "", children }: AccordionContextProps) => {
  const [activeValue, setActiveValue] = useState(defaultValue);

  const toggleValue = (value: string) => {
    setActiveValue((prevValue) => {
      if (prevValue === value) {
        return "";
      }
      return value;
    });
  };
  return (
    <AccordionContext.Provider
      value={{
        activeValue,
        toggleValue,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;

export const useAccordion = () => {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion components must be rendered within the Accordion component"
    );
  }

  return ctx;
};
