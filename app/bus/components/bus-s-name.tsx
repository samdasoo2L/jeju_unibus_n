export default function BusScheduleLocation({
  location,
}: {
  location: string;
}) {
  return (
    <div className="w-20 flex-shrink-0 h-7 flex justify-center items-center text-[#0E3F18] bg-amber-500 rounded-md m-1 text-sm">
      {location}
    </div>
  );
}
