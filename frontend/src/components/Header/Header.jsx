import React from "react";
import Search from "../Search";
import AccountToggle from "./AccountToggle";

const Header = () => {
  return (
    <div className="bg-gray-50 rounded-lg w-full p-5 flex items-center justify-between">
      <Search />
      <AccountToggle />
    </div>
  );
};

export default Header;
