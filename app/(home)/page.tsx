"use client";

import BusLocation from "../components/bus-location";
import { useBusLocationStore } from "../store/bus";
import { useDetailTimeStore } from "../store/time";

export default function Home() {
  const { hour, minute, second, day } = useDetailTimeStore();
  const { nowALocation, nextA, nowBLocation, nextB } = useBusLocationStore();

  return (
    <div>
      <div>
        🕒 {hour}시 {minute}분 {second}초 {day}
      </div>
      <div>BUS</div>
      <BusLocation type="A" location={nowALocation} next={nextA} />
      <BusLocation type="B" location={nowBLocation} next={nextB} />
      <div>FOOD</div>
    </div>
  );
}
