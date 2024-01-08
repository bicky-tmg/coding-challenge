import {
  AccordionIconOne,
  AccordionIconThree,
  AccordionIconTwo,
  CardIconFour,
  CardIconOne,
  CardIconThree,
  CardIconTwo,
} from "@/icons/icons";

const ACCORDION_DATA = [
  {
    title: "Accordion title 1",
    description:
      "Ut dapibus ullamcorper fermentum. Sed nulla felis, consectetur eu justo eget, semper placerat ex. Morbi quis viverra ipsum. Sed finibus massa augue, ut viverra purus faucibus ut.",
    icon: <AccordionIconOne />,
    value: "accordion1",
  },
  {
    title: "Accordion title 2",
    description:
      "Ut dapibus ullamcorper fermentum. Sed nulla felis, consectetur eu justo eget, semper placerat ex. Morbi quis viverra ipsum. Sed finibus massa augue, ut viverra purus faucibus ut.",
    icon: <AccordionIconTwo />,
    value: "accordion2",
  },
  {
    title: "Accordion title 3",
    description:
      "Ut dapibus ullamcorper fermentum. Sed nulla felis, consectetur eu justo eget, semper placerat ex. Morbi quis viverra ipsum. Sed finibus massa augue, ut viverra purus faucibus ut.",
    icon: <AccordionIconThree />,
    value: "accordion3",
  },
  {
    title: "Accordion title 4",
    description:
      "Ut dapibus ullamcorper fermentum. Sed nulla felis, consectetur eu justo eget, semper placerat ex. Morbi quis viverra ipsum. Sed finibus massa augue, ut viverra purus faucibus ut.",
    icon: <AccordionIconOne />,
    value: "accordion4",
  },
  {
    title: "Accordion title 5",
    description:
      "Ut dapibus ullamcorper fermentum. Sed nulla felis, consectetur eu justo eget, semper placerat ex. Morbi quis viverra ipsum. Sed finibus massa augue, ut viverra purus faucibus ut.",
    icon: <AccordionIconTwo />,
    value: "accordion5",
  },
];

type AccordionType = typeof ACCORDION_DATA;

const createNextAccordion = (accordionData: AccordionType) => {
  return accordionData.map((accordion, _, array) => {
    const baseArray = accordion.title.split(" ");
    const lastEl = baseArray[baseArray.length - 1];
    const newValue = "accordion" + (+lastEl + array.length);
    const newTitle = "Accordion title " + (+lastEl + array.length);
    return {
      ...accordion,
      title: newTitle,
      value: newValue,
    };
  });
};

const ACCORDION_DATA_TWO = createNextAccordion(ACCORDION_DATA);
const ACCORDION_DATA_THREE = createNextAccordion(ACCORDION_DATA_TWO);
const ACCORDION_DATA_FOUR = createNextAccordion(ACCORDION_DATA_THREE);

export const TAB_BUTTON_DATA = [
  {
    title: "Card Title",
    value: "tab1",
    icon: <CardIconOne />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card title that goes 2 lines",
    value: "tab2",
    icon: <CardIconTwo />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card Title",
    value: "tab3",
    icon: <CardIconThree />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card title that goes 2 lines",
    value: "tab4",
    icon: <CardIconFour />,
    description: "Lorem ipsum dolor sit amet",
  },
];

export const TAB_DETAILS_DATA = [
  {
    title: "Product title",
    value: "tab1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.",
    accordion: ACCORDION_DATA,
  },
  {
    title: "Product title 2",
    value: "tab2",
    description:
      "Vivamus eget fringilla dolor, eu congue lectus. Mauris nibh ipsum, pretium ultrices bibendum quis, rutrum at sapien. Donec non ipsum erat. Integer vel quam ullamcorper, cursus lacus id, convallis quam.",
    accordion: ACCORDION_DATA_TWO,
  },
  {
    title: "Product title 3",
    value: "tab3",
    description:
      "Morbi dignissim pharetra arcu at convallis. Integer ligula tortor, luctus id massa sit amet, accumsan auctor lacus. Nunc sed leo sollicitudin, vulputate tortor sed, sodales nisi.",
    accordion: ACCORDION_DATA_THREE,
  },
  {
    title: "Product title 4",
    value: "tab4",
    description:
      "Vestibulum convallis elementum finibus. Cras aliquet maximus est, vel hendrerit orci. Vestibulum elementum ligula et sapien blandit, vitae maximus diam cursus. Aenean consectetur ex sem.",
    accordion: ACCORDION_DATA_FOUR,
  },
];

export const MOBILE_ACCORDION_DATA = [
  {
    title: "Card Title",
    value: "tab1",
    icon: <CardIconOne />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: {
      title: "Product title",
      value: "tab1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.",
      accordion: ACCORDION_DATA,
    },
  },
  {
    title: "Card title that goes 2 lines",
    value: "tab2",
    icon: <CardIconTwo />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: {
      title: "Product title 2",
      value: "tab2",
      description:
        "Vivamus eget fringilla dolor, eu congue lectus. Mauris nibh ipsum, pretium ultrices bibendum quis, rutrum at sapien. Donec non ipsum erat. Integer vel quam ullamcorper, cursus lacus id, convallis quam.",
      accordion: ACCORDION_DATA_TWO,
    },
  },
  {
    title: "Card Title",
    value: "tab3",
    icon: <CardIconThree />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: {
      title: "Product title 3",
      value: "tab3",
      description:
        "Morbi dignissim pharetra arcu at convallis. Integer ligula tortor, luctus id massa sit amet, accumsan auctor lacus. Nunc sed leo sollicitudin, vulputate tortor sed, sodales nisi.",
      accordion: ACCORDION_DATA_THREE,
    },
  },
  {
    title: "Card title that goes 2 lines",
    value: "tab4",
    icon: <CardIconFour />,
    description: "Lorem ipsum dolor sit amet",
    content: {
      title: "Product title 4",
      value: "tab4",
      description:
        "Vestibulum convallis elementum finibus. Cras aliquet maximus est, vel hendrerit orci. Vestibulum elementum ligula et sapien blandit, vitae maximus diam cursus. Aenean consectetur ex sem.",
      accordion: ACCORDION_DATA_FOUR,
    },
  },
];
