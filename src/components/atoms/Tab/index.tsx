"use client";
import { useTab } from "@/context/TabSwitcher";
import React from "react";

interface TabProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const Tab = ({ value, children, className }: TabProps) => {
  const { setActiveTabValue } = useTab();
  return (
    <div
      className={className}
      onClick={() => {
        setActiveTabValue(value);
      }}
    >
      {children}
    </div>
  );
};
