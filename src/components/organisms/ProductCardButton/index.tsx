"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHead,
  Tab,
} from "@/components";
import { TAB_BUTTON_DATA } from "@/constant/tabSwitcherData";
import { useTab } from "@/context/TabSwitcher";
import { DownArrow } from "@/icons/icons";
import React from "react";

export const ProductCardButton = () => {
  const { activeTabValue } = useTab();
  return (
    <div className="overflow-x-auto">
      <div className="grid gap-x-[13px] grid-cols-[repeat(4,_minmax(300px,_1fr))]">
        {TAB_BUTTON_DATA.map((tab) => (
          <Tab
            value={tab.value}
            key={tab.value}
            className="border border-solid border-gray rounded-lg relative overflow-hidden hover:after:absolute hover:after:top-0 hover:after:left-[-150%] hover:after:w-full hover:after:h-full hover:after:bg-gradient-to-r hover:after:from-[rgba(255,_255,_255,_0.2)] hover:after:from-0% hover:after:via-[rgba(255,_255,_255,_0.8)] hover:after:via-50% hover:after:to-[rgba(255,_255,_255,_0.2)] hover:after:to-100% hover:after:-skew-x-[45] hover:after:animate-shine"
          >
            <Card className="cursor-pointer flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <CardHead className="mt-6 mx-6 flex justify-between">
                  <h4 className="text-lg leading-6 font-semibold w-3/4">
                    {tab.title}
                  </h4>
                  {tab.icon}
                </CardHead>
                <CardBody className="mx-6 mb-4">
                  <p className="text-base font-medium leading-normal">
                    {tab.description}
                  </p>
                </CardBody>
              </div>
              <CardFooter>
                <Button
                  type="filled"
                  active={activeTabValue === tab.value ? "filled" : undefined}
                >
                  <span className="flex items-center gap-4">
                    Discover <DownArrow />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </Tab>
        ))}
      </div>
    </div>
  );
};
