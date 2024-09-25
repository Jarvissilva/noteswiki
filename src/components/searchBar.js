"use client";
import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="relative">
        <form
          className={`flex gap-2 border border-gray-300 p-4 ${searchQuery ? "rounded-t-2xl" : "rounded-full"}`}
        >
          <IoSearchOutline size={30} />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search for notes"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        {searchQuery.length > 0 ? (
          <div className="absolute max-h-72 min-h-52 w-full overflow-auto rounded-b-2xl border border-t-0 border-gray-300 bg-white shadow-lg">
            <ul className="text-left">
              <li className="hover:bg-slate-100">
                <Link href="/content" className="flex items-center gap-4 p-4">
                  <FiExternalLink size={25} className="text-gray-700" />
                  Python notes pdf
                </Link>
              </li>
              <li className="hover:bg-slate-100">
                <Link href="/content" className="flex items-center gap-4 p-4">
                  <FiExternalLink size={25} className="text-gray-700" />
                  Python notes pdf
                </Link>
              </li>
              <li className="hover:bg-slate-100">
                <Link href="/content" className="flex items-center gap-4 p-4">
                  <FiExternalLink size={25} className="text-gray-700" />
                  Python notes pdf
                </Link>
              </li>
              <li className="hover:bg-slate-100">
                <Link href="/content" className="flex items-center gap-4 p-4">
                  <FiExternalLink size={25} className="text-gray-700" />
                  Python notes pdf
                </Link>
              </li>
              <li className="hover:bg-slate-100">
                <Link href="/content" className="flex items-center gap-4 p-4">
                  <FiExternalLink size={25} className="text-gray-700" />
                  Python notes pdf
                </Link>
              </li>
              <li className="hover:bg-slate-100">
                <Link href="/content" className="flex items-center gap-4 p-4">
                  <FiExternalLink size={25} className="text-gray-700" />
                  Python notes pdf
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
