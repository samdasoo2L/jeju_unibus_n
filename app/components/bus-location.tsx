"use client";

import { useState } from "react";
import { ALocation, BLocation } from "../data";

interface IBusLocation {
  type: string;
  location: string;
  next: string | null;
}

export default function BusLocation({ type, location, next }: IBusLocation) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible((prev) => !prev);
  };

  let currentLocation = 0;
  if (type != "B") {
    if (location == "현재 정문을 지나고 있습니다.") {
      currentLocation = 1;
    } else if (location == "현재 약학대학을 지나고 있습니다.") {
      currentLocation = 2;
    } else if (location == "현재 해대 1호관을 지나고 있습니다.") {
      currentLocation = 3;
    } else if (location == "현재 본관을 지나고 있습니다.") {
      currentLocation = 4;
    } else if (location == "현재 학생회관을 지나고 있습니다.") {
      currentLocation = 5;
    } else if (location == "현재 인문대 서쪽을 지나고 있습니다.") {
      currentLocation = 6;
    } else if (location == "현재 학생생활관을 지나고 있습니다.") {
      currentLocation = 7;
    } else if (location == "현재 인문대 동쪽을 지나고 있습니다.") {
      currentLocation = 8;
    } else if (location == "현재 중앙도서관을 지나고 있습니다.") {
      currentLocation = 9;
    } else if (location == "현재 의과대학을 지나고 있습니다.") {
      currentLocation = 10;
    } else if (location == "현재 공대 4호관을 지나고 있습니다.") {
      currentLocation = 11;
    } else if (location == "현재 교양동을 지나고 있습니다.") {
      currentLocation = 12;
    } else {
      currentLocation = 0;
    }
  } else {
    if (location == "현재 정문을 지나고 있습니다.") {
      currentLocation = 1;
    } else if (location == "현재 약학대학을 지나고 있습니다.") {
      currentLocation = 2;
    } else if (location == "현재 해대 1호관을 지나고 있습니다.") {
      currentLocation = 3;
    } else if (location == "현재 교양동을 지나고 있습니다.") {
      currentLocation = 4;
    } else if (location == "현재 공대 4호관을 지나고 있습니다.") {
      currentLocation = 5;
    } else if (location == "현재 의과대학을 지나고 있습니다.") {
      currentLocation = 6;
    } else if (location == "현재 중앙도서관을 지나고 있습니다.") {
      currentLocation = 7;
    } else if (location == "현재 인문대 동쪽을 지나고 있습니다.") {
      currentLocation = 8;
    } else if (location == "현재 학생생활관을 지나고 있습니다.") {
      currentLocation = 9;
    } else if (location == "현재 인문대 서쪽을 지나고 있습니다.") {
      currentLocation = 10;
    } else if (location == "현재 학생회관을 지나고 있습니다.") {
      currentLocation = 11;
    } else if (location == "현재 본관을 지나고 있습니다.") {
      currentLocation = 12;
    } else {
      currentLocation = 0;
    }
  }

  return (
    <div>
      <div
        onClick={toggleDiv}
        className="cursor-pointer flex h-11 items-center bg-[#0E3F18] w-full rounded-md relative mt-5"
      >
        <div className="mx-1 flex justify-center items-center h-9 w-9 rounded-md bg-[#EFEEE6] text-[#0E3F18]">
          {type}
        </div>
        <div className="text-[#EFEEE6] mx-1">{location}</div>
        {next ? (
          <div className="text-center absolute right-0 -top-3 w-30 h-6 bg-[#EFEEE6] rounded-md">
            {`다음🚌 : ${next}m`}
          </div>
        ) : null}
      </div>
      <div
        className={`flex flex-col items-center ${
          isVisible
            ? `text-black h-145 visible`
            : `text-transparent h-0 invisible`
        } transition-all duration-500 bg-[#385A42] -mt-11 p-5 rounded-md`}
      >
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 mt-4 justify-center items-center rounded-md ${
            currentLocation == 1 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[0] : ALocation[0]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0  justify-center items-center rounded-md ${
            currentLocation == 2 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[1] : ALocation[1]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 3 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[2] : ALocation[2]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 4 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[3] : ALocation[3]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 5 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[4] : ALocation[4]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 6 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[5] : ALocation[5]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 7 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[6] : ALocation[6]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 8 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[7] : ALocation[7]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 9 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[8] : ALocation[8]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 10 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[9] : ALocation[9]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 11 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[10] : ALocation[10]}
        </div>
        <div className="text-sm text-amber-50">|</div>
        <div
          className={`flex w-30 my-0 justify-center items-center rounded-md ${
            currentLocation == 12 ? "bg-amber-600" : "bg-amber-50"
          }`}
        >
          {type == "B" ? BLocation[11] : ALocation[11]}
        </div>
      </div>
    </div>
  );
}
