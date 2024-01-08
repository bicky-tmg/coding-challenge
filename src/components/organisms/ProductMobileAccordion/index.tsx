import { ProductionMobileAccordionItem } from "@/components";
import { MOBILE_ACCORDION_DATA } from "@/constant/tabSwitcherData";
import Accordion from "@/context/Accordion";
import React from "react";

export const ProductMobileAccordion = () => {
  return (
    <Accordion defaultValue="tab1">
      {MOBILE_ACCORDION_DATA.map((accordionData) => {
        const tab = {
          title: accordionData.title,
          value: accordionData.value,
          icon: accordionData.icon,
          description: accordionData.description,
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
