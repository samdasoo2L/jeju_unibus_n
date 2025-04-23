export default function BusScheduleCount({ schedule }: { schedule: number[] }) {
  return (
    <div className="-mt-1">
      {schedule.map((time, index) => (
        <div
          key={index}
          className="flex justify-center items-center shrink-0 text-[#0E3F18] bg-amber-500 h-7 w-7 my-2 mr-2 rounded-md"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
