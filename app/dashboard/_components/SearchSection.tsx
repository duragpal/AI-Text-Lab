import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className=" flex flex-col justify-center items-center p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-500">
      <h2 className="text-3xl font-bold text-white">Browse All Templates</h2>
      <p className="text-white">What would you like to create today?</p>
      <div className="flex w-full justify-center">
        <div className="flex gap-2 items-center border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-blue-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none"
            onChange={(e) => onSearchInput(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
