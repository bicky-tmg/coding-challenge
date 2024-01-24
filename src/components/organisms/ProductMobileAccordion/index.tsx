import { ProductionMobileAccordionItem } from "@/components";
import { MOBILE_ACCORDION_DATA } from "@/constant/tabSwitcherData";
import Accordion from "@/context/Accordion";
import React from "react";

export const ProductMobileAccordion = () => {
  return (
    <Accordion defaultValue="tab1">
      {MOBILE_ACCORDION_DATA.map((accordionData) => {
        const tab = {
          value: accordionData.value,
          title: accordionData.title,
          description: accordionData.description,
          icon: accordionData.icon,
        };
        return (
          <ProductionMobileAccordionItem
            key={tab.value}
            tab={tab}
            tabDetail={accordionData.content}
          />
        );
      })}
    </Accordion>
  );
};
