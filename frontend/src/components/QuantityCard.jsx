import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const QuantityCard = ({ title, quantity, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between rounded-lg p-7 shadow-lg cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-gradient-to-br from-green-950 via-green-700 to-green-600 text-white"
          : "bg-white"
      }`}
    >
      <div className="flex w-full items-center">
        <div className="flex w-full justify-center flex-col gap-2">
          <div className="w-full flex items-center justify-between gap-2 text-lg">
            <p>{title}</p>
            <BsArrowUpRightCircle className="text-3xl" />
          </div>
          <p className="text-4xl">{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default QuantityCard;
