import React from "react";
import { FiSearch } from "react-icons/fi";

const searchInput = () => {
  return (
    <form className="flex items-center gap-10">
      <input
        type="text"
        placeholder="search...."
        className="input input-bordered rounded-full"
      ></input>
      <button className="btn btn-circle">
        <FiSearch className="w-6 h-6 outline-none"/>
      </button>
    </form>
  );
};

export default searchInput;
