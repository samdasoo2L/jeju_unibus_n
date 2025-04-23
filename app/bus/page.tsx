"use client";

import BusLocation from "./components/bus-location";
import BusSchedule from "./components/bus-schedule";
import { useBusLocationStore } from "../store/bus";
import { ALocation, ATimeLine, BLocation, BTimeLine, VTimeLine } from "../data";
import BusMap from "./components/bus-map";

export default function Bus() {
  const { nowALocation, nextA, nowBLocation, nextB } = useBusLocationStore();
  return (
    <div>
      <div>Bus</div>
      <BusLocation type="A" location={nowALocation} next={nextA} />
      <BusLocation type="B" location={nowBLocation} next={nextB} />
      <div>TimeTable</div>
      <BusSchedule
        type="A"
        location={ALocation}
        schedule={ATimeLine.slice(0, -1)}
      />
      <BusSchedule
        type="B"
        location={BLocation}
        schedule={BTimeLine.slice(0, -1)}
      />

      <div>Vaction</div>
      <BusSchedule
        type="V"
        location={ALocation}
        schedule={VTimeLine.slice(0, -1)}
      />
      <div>Map</div>
      <BusMap />
    </div>
  );
}
