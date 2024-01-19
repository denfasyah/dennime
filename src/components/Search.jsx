"use client";
import { IoSearchSharp } from "react-icons/io5";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const Search = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative mt-10 flex justify-center ">
      <input
        type="text"
        placeholder="Search Anime"
        className=" rounded-r-lg  rounded-tl-lg p-4 px-10 md:w-auto text-White text-md bg-Grey"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-4 ml-52 mt-0.5" onClick={handleSearch}>
        <IoSearchSharp className="fill-Purple" size={20} />
      </button>
    </div>
  );
};

export default Search;
