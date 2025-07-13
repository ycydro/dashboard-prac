import React from "react";
import shai from "../../../public/IMG_6061.png";

const AccountToggle = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={shai} alt="" className="h-10 w-10 rounded-full" />
      <div>
        <p className="text-sm text-black">Shai Sotto</p>
        <p className="text-xs text-gray-500">shai@sotto.com</p>
      </div>
    </div>
  );
};

export default AccountToggle;
