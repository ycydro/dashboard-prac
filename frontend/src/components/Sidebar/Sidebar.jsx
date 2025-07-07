import React from "react";
import Company from "./Company";
import NavItems from "./NavItems";
import shai from "../../../public/IMG_6061.png";

const company = {
  name: "Shai Sotto",
  logo: shai,
};

const Sidebar = () => {
  return (
    <aside className="sticky bg-gray-50 rounded-lg shadow h-full">
      <div className="mb-5">
        <Company company={company} />
      </div>
      <NavItems />
    </aside>
  );
};

export default Sidebar;
