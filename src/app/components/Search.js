import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="mt-10 flex justify-center ">
         <input
            type="text"
            placeholder="Search Anime"
            className="relative rounded-r-lg  rounded-tl-lg p-4 px-10 md:w-auto text-White text-md bg-Grey"
          />
        <IoSearchSharp className="absolute mr-60 mt-5 fill-Purple"/>
    </div>
  )
}

export default Search