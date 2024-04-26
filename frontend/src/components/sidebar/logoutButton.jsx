import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login"; // Redirect to the login page after logout
  };

  return (
    <div className="absolute bottom-5">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={handleLogout} // Call handleLogout function on click
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
