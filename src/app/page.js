import Link from "next/link";
import Header from "components/header";
import Footer from "components/footer";
import SearchBar from "components/search-bar";

export default function Page() {
  return (
    <>
      <Header
        hideSearchBar={true}
        hideCategoryMenuOpenBtn={true}
        styles="border-none"
      />
      <main className="flex min-h-[80vh] w-full flex-col items-center justify-start">
        <section className="grow space-y-5 px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2.5rem,8vw,4rem)] text-center md:px-[clamp(1.5rem,15vw,15rem)] lg:w-[55%] lg:px-0">
          <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-black capitalize">
            Find the best study notes
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-normal">
            Looking for notes to study? You are at the right place start
            browsing
          </p>
          <SearchBar />
          <div className="flex flex-wrap items-center justify-center gap-4 lg:px-4">
            <Link href="/category" className="rounded-full border px-4 py-2">
              💻 Coding
            </Link>
            <Link href="/category" className="rounded-full border px-4 py-2">
              🕸️ Web
            </Link>
            <Link href="/category" className="rounded-full border px-4 py-2">
              ➕ Maths
            </Link>
            <Link href="/category" className="rounded-full border px-4 py-2">
              💊 Bio
            </Link>
            <Link href="/category" className="rounded-full border px-4 py-2">
              🧠 Science
            </Link>
            <Link href="/category" className="rounded-full border px-4 py-2">
              🕸️ Web
            </Link>
            <Link href="/category" className="rounded-full border px-4 py-2">
              🪨 Geography
            </Link>
            <Link href="/category" className="rounded-full border px-4 py-2">
              💊 Bio
            </Link>
          </div>
        </section>
      </main>
      <Footer styles="border-none pb-5 py-0" />
    </>
  );
}
