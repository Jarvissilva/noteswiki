import Header from "components/header";
import Footer from "components/footer";
import NotesCard from "components/notes-card";
import Image from "next/image";
import Link from "next/link";
import { MdBookmarkBorder } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";

export default function Page() {
  return (
    <>
      <Header />
      <main className="m-auto w-full space-y-5 p-[clamp(1.25rem,5vw,2rem)] lg:w-[70%]">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex w-full items-center justify-center md:w-[35%]">
            <Image
              src="/demo.jpg"
              width={100}
              height={200}
              layout="responsive"
              className="rounded-md"
              alt="demo"
            />
          </div>
          <div className="flex w-full flex-col gap-4 md:w-[65%]">
            <div className="flex items-center justify-between">
              <p className="text-[clamp(1.5rem,5vw,1.7rem)] font-extrabold capitalize text-blue-600">
                Category
              </p>
              <button>
                <GoShareAndroid size={30} />
              </button>
            </div>
            <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-black capitalize">
              Mastering the mind by using the 4 principles of water
            </h1>

            <div className="space-y-5 text-[clamp(1rem,2.5vw,1.15rem)]">
              <p className="font-normal">
                <strong>Created By: </strong>Noteswiki
              </p>
              <p className="font-normal">
                <strong>PRICE: </strong>
                <span className="text-green-600">FREE</span>
              </p>
              <p className="font-normal">
                <strong>LANGUAGE: </strong> English
              </p>
              <p className="font-normal">
                <strong>Format: </strong> PDF
              </p>
              <p className="font-normal">
                <strong>PAGES: </strong>1902
              </p>
              <p className="font-normal">
                <strong>Published Date: </strong>24 January 2023
              </p>
            </div>
            <div className="flex justify-between gap-4">
              <Link
                href="/demo.pdf"
                target="_blank"
                download
                className="w-full rounded-md bg-blue-600 p-4 text-center font-bold text-white"
              >
                <button>Download</button>
              </Link>
              <button>
                <MdBookmarkBorder size={40} />
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-[clamp(1.7rem,5vw,2rem)] font-extrabold">
            Description
          </h2>
          <p className="text-[clamp(1.15rem,2.5vw,1.25rem)] font-normal">
            Welcome to our FREE Python Programming Course where you will learn
            python programming from scratch, You do not need to have any
            previous programming knowledge the only thing you need is a device
            to learn & code and the will to learn.
          </p>
          <h3 className="text-2xl font-bold">Table of contents:</h3>
          <ul className="list-disc space-y-3 pl-8 text-[clamp(1rem,5vw,1.2rem)] font-normal">
            <li className="text-[clamp(1rem,5vw,1.25rem)] font-normal">
              Demo 1
            </li>
            <li className="text-[clamp(1rem,5vw,1.25rem)] font-normal">
              Demo 1
            </li>
            <li className="text-[clamp(1rem,5vw,1.25rem)] font-normal">
              Demo 1
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[clamp(1.7rem,5vw,2rem)] font-extrabold">
            More Notes
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <NotesCard />
            <NotesCard />
            <NotesCard />
            <NotesCard />
            <NotesCard />
            <NotesCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
