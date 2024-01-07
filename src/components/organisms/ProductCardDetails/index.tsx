import { Button, Card, CardBody, TabPane } from "@/components";
import { TAB_DETAILS_DATA } from "@/constant/tabSwitcherData";
import React from "react";

export const ProductCardDetails = () => {
  return (
    <>
      {TAB_DETAILS_DATA.map((tab) => (
        <TabPane value={tab.value} className="mt-10" key={tab.value}>
          <Card className=" py-12 px-16 bg-primary-50 rounded-[40px]">
            <CardBody className="flex gap-16">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl font-semibold leading-[57.6px]">
                    {tab.title}
                  </h1>
                  <p className="text-xl font-normal leading-[31.2px]">
                    {tab.description}
                  </p>
                </div>
                <div>
                  <Button type="cta">Discover product</Button>
                </div>
              </div>
              <div>
                <p className="text-xl font-normal leading-[31.2px]">
                  {tab.description}
                </p>
              </div>
            </CardBody>
          </Card>
        </TabPane>
      ))}
    </>
  );
};