"use client";
import { useTab } from "@/context/TabSwitcher";
import React from "react";

interface TabProps {
  value: string;
  children: React.ReactNode;
}

export const Tab = ({ value, children }: TabProps) => {
  const { setActiveTabValue } = useTab();
  return <div>{children}</div>;
};
