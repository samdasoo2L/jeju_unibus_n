export default function BusScheduleTime({ schedule }: { schedule: number[] }) {
  return (
    <div className="flex">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className="flex flex-col">
          {schedule.map((time, index) => (
            <div
              key={`${i}-${index}`}
              className="w-20 flex-shrink-0 h-7 m-1 text-[#0E3F18] bg-amber-400 rounded-md flex justify-center items-center"
            >
              {`${String(Math.floor((time + i) / 60)).padStart(
                2,
                "0"
              )}:${String((time + i) % 60).padStart(2, "0")}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
