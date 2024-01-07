import { ProductCardButton, ProductCardDetails } from "@/components";
import TabSwitcher from "@/context/TabSwitcher";

export default function Home() {
  return (
    <main className="font-poppins mx-auto container">
      <section className="py-24">
        <div className="text-center flex flex-col gap-[14px] mb-[30px]">
          <h2 className="text-2xl font-semibold leading-[48px]">
            Section title
          </h2>
          <h3 className="text-xl font-medium">Section subtitle</h3>
        </div>
        <TabSwitcher defaultValue="tab1">
          <ProductCardButton />
          <ProductCardDetails />
        </TabSwitcher>
      </section>
    </main>
  );
}
