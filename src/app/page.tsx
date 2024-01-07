import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHead,
  Tab,
  TabPane,
} from "@/components";
import TabSwitcher from "@/context/TabSwitcher";
import { CardIconOne, DownArrow } from "@/icons/icons";

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
            <Card className="border border-solid border-gray rounded-lg cursor-pointer">
              <CardHead className="mt-6 mx-6 mb-4">
                <h4 className="text-lg leading-6 font-semibold">Card Title</h4>
                <CardIconOne />
              </CardHead>
              <CardBody className="mx-6 mb-4">
                <p className="text-base font-medium leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
              <CardFooter>
                <Button type="filled" active="filled">
                  <span className="flex items-center gap-4">
                    Discover <DownArrow />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </Tab>
          <TabPane value="tab1" className="mt-10">
            <Card className=" py-12 px-16 bg-primary-50 rounded-[40px]">
              <CardBody className="flex gap-16">
                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-6">
                    <h1 className="text-3xl font-semibold leading-[57.6px]">
                      Product title
                    </h1>
                    <p className="text-xl font-normal leading-[31.2px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent scelerisque risus id ante maximus blandit.
                    </p>
                  </div>
                  <div>
                    <Button type="cta">Discover product</Button>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-normal leading-[31.2px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent scelerisque risus id ante maximus blandit.
                  </p>
                </div>
              </CardBody>
            </Card>
          </TabPane>
        </TabSwitcher>
      </section>
    </main>
  );
}
