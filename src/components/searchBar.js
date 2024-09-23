import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <form className="flex gap-2 rounded-full border border-gray-300 p-4">
      <IoSearchOutline size={30} />
      <input
        className="w-full outline-none"
        type="text"
        placeholder="Search for notes"
      />
    </form>
  );
}
