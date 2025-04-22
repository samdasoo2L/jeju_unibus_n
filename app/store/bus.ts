import { ATimeLine, BTimeLine } from "../data";
import { useDetailTimeStore } from "./time";

interface IBusLocation {
  nowALocation: string;
  nextA: string | null;
  nowBLocation: string;
  nextB: string | null;
}

export const useBusLocationStore = (): IBusLocation => {
  const { loSecond, day } = useDetailTimeStore();
  let aNowStartTime = 0;
  let aNextStartTime = 485;
  let bNowStartTime = 0;
  let bNextStartTime = 490;
  let anow = "";
  let anext = "";
  let bnow = "";
  let bnext = "";

  if (String(day) == "토요일" || String(day) == "일요일") {
    return {
      nowALocation: "주말은 운행하지 않습니다.",
      nextA: null,
      nowBLocation: "주말은 운행하지 않습니다.",
      nextB: null,
    };
  } else if (440 > loSecond || loSecond > 1200) {
    return {
      nowALocation: "운영시간이 아닙니다.",
      nextA: null,
      nowBLocation: "운영시간이 아닙니다.",
      nextB: null,
    };
  } else {
    for (let i = 0; i < ATimeLine.length - 1; i++) {
      if (loSecond >= ATimeLine[i]) {
        aNowStartTime = ATimeLine[i];
        aNextStartTime = ATimeLine[i + 1];
      }
      if (loSecond >= BTimeLine[i]) {
        bNowStartTime = BTimeLine[i];
        bNextStartTime = BTimeLine[i + 1];
      }
    }

    if (aNowStartTime == 0) {
      anow = `첫차까지 ${aNextStartTime - loSecond}분 후 출발합니다.`;
      anext = "";
    } else if (ATimeLine[22] + 12 <= loSecond) {
      anow = `금일 운영 종료되었습니다.`;
      anext = "";
    } else if (loSecond - aNowStartTime < 12) {
      anow = `현재 ${ATimeLine[loSecond - aNowStartTime]}을 지나고 있습니다.`;
      anext = `${aNextStartTime - loSecond}`;
    } else {
      anow = `${aNextStartTime - loSecond}분 후 출발합니다.`;
      anext = "";
    }
    if (bNowStartTime == 0) {
      bnow = `첫차까지 ${bNextStartTime - loSecond}분 후 출발합니다.`;
      bnext = "";
    } else if (BTimeLine[22] + 12 <= loSecond) {
      bnow = `금일 운영 종료되었습니다.`;
      bnext = "";
    } else if (loSecond - bNowStartTime < 12) {
      bnow = `현재 ${BTimeLine[loSecond - bNowStartTime]}을 지나고 있습니다.`;
      bnext = `${bNextStartTime - loSecond}`;
    } else {
      bnow = `${bNextStartTime - loSecond}분 후 출발합니다.`;
      bnext = "";
    }

    return {
      nowALocation: anow,
      nextA: anext == "" ? null : anext,
      nowBLocation: bnow,
      nextB: bnext == "" ? null : bnext,
    };
  }
};
