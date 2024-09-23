"use client"
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  const [searchQuery,setSearchQuery] = useState("")

  return (
    <>
      <div className="relative">
        <form className={`flex gap-2 p-4 border border-gray-300 ${searchQuery ? "rounded-t-2xl":"rounded-full"}`}>
          <IoSearchOutline size={30} />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search for notes"
            onChange={(e)=> setSearchQuery(e.target.value)}
          />
        </form>
        {searchQuery.length > 0 ? <div className="absolute overflow-auto bg-white border border-t-0 w-full min-h-52 rounded-b-2xl"></div>:null}
      </div>
    </>
  );
}
