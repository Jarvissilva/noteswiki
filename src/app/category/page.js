import Footer from "components/footer";
import Header from "components/header";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] space-y-6 px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1.5rem,8vw,2rem)] lg:px-[clamp(1.5rem,16vw,20rem)]">
        <div className="space-y-2 text-center">
          <h1 className="text-[clamp(2.2rem,5vw,3rem)] font-black">
            Coding Notes
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)]">
            Find the best notes on coding
          </p>
        </div>
        <section className="flex flex-wrap items-center justify-between gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
      <Footer />
    </>
  );
}

const Card = () => {
  return (
    <Link
      href="/content"
      className="flex w-[46%] flex-col justify-start gap-1 transition-all hover:scale-105 sm:w-[25%] md:w-[20%] lg:w-[18%]"
    >
      <Image
        src="/demo.jpg"
        width={200}
        height={200}
        layout="responsive"
        alt="demo"
        className="rounded-md"
      />
      <h2 className="text-base font-medium leading-snug">
        Java notes pdf download now at dance
      </h2>
      <div className="flex items-start justify-between gap-2 text-sm">
        <p className="text-green-600">FREE</p>
      </div>
    </Link>
  );
};
