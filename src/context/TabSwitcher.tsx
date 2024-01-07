"use client";
import { createContext, useContext, useState } from "react";

interface TabContextProps {
  defaultValue: string;
  children: React.ReactNode;
}

interface TabContextType {
  activeTabValue: string;
  setActiveTabValue: React.Dispatch<React.SetStateAction<string>>;
}

const TabContext = createContext<TabContextType>({} as TabContextType);

const TabSwitcher = ({ defaultValue = "", children }: TabContextProps) => {
  const [activeTabValue, setActiveTabValue] = useState(defaultValue);
  return (
    <TabContext.Provider
      value={{
        activeTabValue,
        setActiveTabValue,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export default TabSwitcher;

export const useTab = () => {
  const ctx = useContext(TabContext);

  if (!ctx) {
    throw new Error(
      "Tab components must be rendered within the TabSwitcher component"
    );
  }

  return ctx;
};
