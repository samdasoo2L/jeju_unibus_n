"use client";

import { useState } from "react";

export default function BusMap() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div>
      <div
        onClick={toggleDiv}
        className="cursor-pointer flex h-11 items-center bg-[#0E3F18] w-full rounded-md relative mt-5"
      >
        <div className="mx-1 flex justify-center items-center h-9 w-9 rounded-md bg-[#EFEEE6] text-[#0E3F18]">
          M
        </div>
        <div className="text-[#EFEEE6] mx-1">지도</div>
      </div>
      <div
        className={`flex flex-col overflow-auto ${
          isVisible
            ? `text-black h-145 visible`
            : `text-transparent h-0 invisible`
        } transition-all duration-500 bg-[#385A42] -mt-11 p-5 rounded-md no-scrollbar`}
      >
        a
      </div>
    </div>
  );
}
