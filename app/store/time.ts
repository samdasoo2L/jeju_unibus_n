import { create } from "zustand";
import { week } from "../data";

interface TimeState {
  currentTime: Date;
  updateTime: () => void;
}

export const useTimeStore = create<TimeState>((set) => ({
  currentTime: new Date(),
  updateTime: () => set({ currentTime: new Date() }),
}));

interface DetailTime {
  hour: string;
  minute: string;
  second: string;
  day: string;
  loSecond: number;
}

export const useDetailTimeStore = (): DetailTime => {
  const currentTime = useTimeStore((state) => state.currentTime);

  return {
    hour: String(currentTime.getHours()).padStart(2, "0"),
    minute: String(currentTime.getMinutes()).padStart(2, "0"),
    second: String(currentTime.getSeconds()).padStart(2, "0"),
    day: week[currentTime.getDay()],
    loSecond: currentTime.getHours() * 60 + currentTime.getMinutes(),
  };
};

interface DayState {
  date: Date;
  setNextDay: () => void;
  setPrevDay: () => void;
}

export const useDayStore = create<DayState>((set) => ({
  date: new Date(),

  setNextDay: () =>
    set((state) => ({
      date: new Date(state.date.getTime() + 24 * 60 * 60 * 1000),
    })),

  setPrevDay: () =>
    set((state) => ({
      date: new Date(state.date.getTime() - 24 * 60 * 60 * 1000),
    })),
}));
