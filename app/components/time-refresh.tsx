"use client";

import { useEffect } from "react";
import { useTimeStore } from "../store/time";

export default function TimeRefresh() {
  const updateTime = useTimeStore((state) => state.updateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateTime]);
  return null;
}
