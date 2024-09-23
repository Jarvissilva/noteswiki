import { Redressed } from "next/font/google";
import Link from "next/link";
import SearchBar from "./searchBar";
import { TbCategory2, TbBookmark, TbBookmarks } from "react-icons/tb";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Header({
  styles,
  hideSearchBar,
  hideCategoryMenuOpenBtn,
}) {
  return (
    <>
      <header
        className={`flex w-full items-center justify-between gap-16 border-b px-[clamp(1rem,5vw,5rem)] py-6 ${styles}`}
      >
        <div>
          <Link
            href="/"
            className={`text-[clamp(2.5rem,5vw,3rem)] capitalize ${redressed.className} font-black leading-none`}
          >
            Notes<span className="text-blue-600">Wiki</span>
          </Link>
        </div>
        {!hideSearchBar ? (
          <div className="grow max-md:hidden">
            <SearchBar />
          </div>
        ) : null}
        <div className="flex items-center justify-center gap-4">
          {!hideCategoryMenuOpenBtn ? (
            <button className="hover:scale-105">
              <TbCategory2 size={35} />
            </button>
          ) : null}
          <button className="relative rounded-full hover:scale-105">
            <TbBookmarks size={35} />
            {/* <span className="absolute right-[1px] top-[-5px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              0
            </span> */}
          </button>
        </div>
      </header>
    </>
  );
}
