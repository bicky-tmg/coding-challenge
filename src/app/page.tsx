import Image from "next/image";

export default function Home() {
  return (
    <main className="font-poppins mx-auto container">
      <section className="py-24">
        <div className="text-center flex flex-col gap-[14px]">
          <h2 className="text-2xl font-semibold leading-[48px]">
            Section title
          </h2>
          <h3 className="text-xl font-medium">Section subtitle</h3>
        </div>
      </section>
    </main>
  );
}
