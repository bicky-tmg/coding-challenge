import { Card, CardBody, CardHead, Tab } from "@/components";
import TabSwitcher from "@/context/TabSwitcher";
import { CardIconOne } from "@/icons/icons";

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
          <Tab value="tab1">
            <Card className="border border-solid border-gray rounded-lg">
              <CardHead className="mt-6 mx-6 mb-4">
                <h4 className="text-lg leading-6 font-semibold">Card Title</h4>
                <CardIconOne />
              </CardHead>
              <CardBody className="mx-6 mb-[10px]">
                <p className="text-base font-medium leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
            </Card>
          </Tab>
        </TabSwitcher>
      </section>
    </main>
  );
}
