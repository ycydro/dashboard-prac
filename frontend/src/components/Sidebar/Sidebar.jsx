import React from "react";
import Company from "./Company";
import NavItems from "./NavItems";
import okc from "../../../public/okc.png";

const company = {
  name: "OKC Thunder",
  logo: okc,
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
