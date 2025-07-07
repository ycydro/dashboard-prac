import React from "react";

const Company = ({ company }) => {
  return (
    <div className="flex items-center justify-center space-x-3 border-stone-300 p-4 bg-slate rounded-t-lg">
      <img
        src={company.logo || "https://api.dicebear.com/9.x/shapes/svg"}
        alt="avatar"
        className="size-12 h-12 border-stone-300"
      />
      <p className="text-lg flex justify-center items-center">{company.name}</p>
    </div>
  );
};
export default Company;
