import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex items-center bg-white px-3 py-1 rounded-full w-fit shadow">
      <FaSearch className="text-lg ml-3" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent p-2 px-4 focus:outline-none w-70"
      />
    </div>
  );
};

export default Search;
