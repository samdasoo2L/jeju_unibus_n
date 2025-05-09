// "use client";

import { useDayStore } from "../store/time";
import { fetchBackFood } from "../api/food";

async function getData() {
  const res: any = fetchBackFood("2025-04-25");
  console.log(`res:${res}`);
}

export default async function Food() {
  //   const { date, setNextDay, setPrevDay } = useDayStore();

  //   const formattedDate = `${date.getFullYear()}-${String(
  //     date.getMonth() + 1
  //   ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  getData();

  return (
    <div>
      {/* <button onClick={setPrevDay}>down</button> */}
      {/* <div>현재 날짜: {formattedDate}</div> */}
      {/* <button onClick={setNextDay}>up</button> */}
      <div>🙄</div>
    </div>
  );
}
