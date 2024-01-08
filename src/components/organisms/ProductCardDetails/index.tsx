import {
  AccordionContent,
  AccordionItem,
  Button,
  Card,
  CardBody,
  ProductDetailAccordion,
  TabPane,
} from "@/components";
import { TAB_DETAILS_DATA } from "@/constant/tabSwitcherData";
import Accordion from "@/context/Accordion";
import React from "react";

export const ProductCardDetails = () => {
  return (
    <>
      {TAB_DETAILS_DATA.map((tab) => (
        <TabPane value={tab.value} className="mt-10" key={tab.value}>
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
                  {tab.accordion.map((accordion) => (
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
        </TabPane>
      ))}
    </>
  );
};
