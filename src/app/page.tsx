import {
  ProductCardButton,
  ProductCardDetails,
  ProductMobileAccordion,
} from "@/components";
import TabSwitcher from "@/context/TabSwitcher";

export default function Home() {
  return (
    <main className="font-poppins mx-auto container px-3 md:px-0">
      <section className="py-10 lg:py-24">
        <div className="text-center flex flex-col gap-[14px] mb-10 lg:mb-[30px]">
          <h2 className="text-[28px] lg:text-3xl font-semibold leading-[33.6px] lg:leading-[48px]">
            Section title
          </h2>
          <h3 className="text-md lg:text-xl font-medium leading-[21.6px] lg:leading-[28.8px]">
            Section subtitle
          </h3>
        </div>
        <div className="hidden sm:block">
          <TabSwitcher defaultValue="tab1">
            <ProductCardButton />
            <ProductCardDetails />
          </TabSwitcher>
        </div>
        <div className="block sm:hidden">
          <ProductMobileAccordion />
        </div>
      </section>
    </main>
  );
}
