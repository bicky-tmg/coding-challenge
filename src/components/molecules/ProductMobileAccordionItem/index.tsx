"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardBody,
  ProductDetailAccordion,
} from "@/components";
import Accordion, { useAccordion } from "@/context/Accordion";
import React from "react";

interface ProductDetailAccordionProps {
  tab: {
    title: string;
    value: string;
    icon: React.JSX.Element;
    description: string;
  };
  tabDetail: {
    title: string;
    value: string;
    description: string;
    accordion: {
      title: string;
      description: string;
      icon: React.JSX.Element;
      value: string;
    }[];
  };
}

export const ProductionMobileAccordionItem = ({
  tab,
  tabDetail,
}: ProductDetailAccordionProps) => {
  const { activeValue, toggleValue } = useAccordion();
  const isActive = activeValue === tabDetail.value;
  return (
    <AccordionItem
      key={tabDetail.value}
      className="mb-6"
      triggerElement={
        <div className="relative">
          <AccordionTrigger
            className={`py-6 px-8 relative bg-white flex gap-4 items-center cursor-pointer text-md leading-[25.2px] font-medium ${
              isActive
                ? "rounded-t-2xl"
                : "rounded-2xl after:absolute after:bg-primary-50 after:top-[10px] after:left-0 after:w-full after:h-full after:inline-block after:z-[-20] after:rounded-b-2xl"
            }`}
            title={tab.title}
            icon={tab.icon}
            handleClick={() => toggleValue(tab.value)}
          />
          <span className="absolute top-1/2 right-6 translate-y-[-50%]">+</span>
        </div>
      }
    >
      <AccordionContent className="mt-[-10px] relative" isActive={isActive}>
        <Card className="pt-8 px-8 pb-10 lg:py-12 lg:px-16 bg-primary-50 rounded-2xl lg:rounded-[40px]">
          <CardBody className="flex gap-10 lg:gap-16 flex-col lg:flex-row">
            <div className="flex flex-col gap-12 lg:w-1/2 w-full">
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl lg:text-4xl text- font-semibold leading-[57.6px]">
                  {tab.title}
                </h1>
                <p className="text-lg lg:text-xl font-normal leading-[31.2px]">
                  {tab.description}
                </p>
              </div>
              <div className="hidden lg:block">
                <Button type="cta">Discover product</Button>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:w-5/12 w-full">
              <Accordion>
                {tabDetail.accordion.map((accordion) => (
                  <ProductDetailAccordion
                    key={accordion.value}
                    title={accordion.title}
                    value={accordion.value}
                    icon={accordion.icon}
                    description={accordion.description}
                  />
                ))}
              </Accordion>
            </div>
            <div className="block lg:hidden">
              <Button type="cta">Discover product</Button>
            </div>
          </CardBody>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};