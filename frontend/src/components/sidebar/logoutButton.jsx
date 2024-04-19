import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="absolute bottom-5">
      <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
    </div>
  );
};

export default LogoutButton;
