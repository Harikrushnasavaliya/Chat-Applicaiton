// import React from "react";
import SearchInput from "./searchInput";
import Conversations from "./conversations";
import LogoutButton from "./logoutButton";

const Sidebar = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-r border-slate-400">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
    // </div>
  );
};

export default Sidebar;
