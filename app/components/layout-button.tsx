import Link from "next/link";

interface ILayoutButton {
  location: string;
  to: string;
}

export default function LayoutButton({ location, to }: ILayoutButton) {
  return (
    <Link href={to}>
      <div className="bg-[#EFEEE6] flex items-center justify-center h-[55px] w-[55px] rounded-full">
        {location}
      </div>
    </Link>
  );
}
