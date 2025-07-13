import React from "react";

const Button = ({ children, type }) => {
  return (
    <button
      className={`rounded-full px-10 py-2 cursor-pointer transition-all duration-300 ${
        type === "primary"
          ? "text-white bg-gradient-to-br from-green-900 via-green-600 to-green-400 "
          : "bg-transparent text-black border-1 border-gray-900 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-2 text-lg">{children}</div>
    </button>
  );
};

export default Button;
