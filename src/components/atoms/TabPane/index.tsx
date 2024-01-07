"use client";
import { useTab } from "@/context/TabSwitcher";
import React from "react";

interface TabPaneProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabPane = ({ value, children, className }: TabPaneProps) => {
  const { activeTabValue } = useTab();
  return (
    <>
      {activeTabValue === value ? (
        <div className={className}>{children}</div>
      ) : null}
    </>
  );
};
