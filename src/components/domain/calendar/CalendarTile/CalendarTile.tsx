import { useDrop } from "react-dnd";
import { CalendarTileProps } from "./calendarTile.type";
import { useRef } from "react";
import { colorMap } from "@/constants/processColor";

function CalendarTile(props: CalendarTileProps) {
  const { date, droppedItems, onDrop } = props;
  const divRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, dropRef] = useDrop({
    accept: "PROCESS_CHIP",
    drop: (item: { company: string; process: string }) => {
      onDrop(date, item.company, item.process);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const itemsForDate = droppedItems.filter(
    (item) => item.date.toDateString() === date.toDateString()
  );

  dropRef(divRef);

  return (
    <div ref={divRef} className="w-full h-full">
      {itemsForDate.map((item, index) => {
        const colorClass = colorMap[item.process] || "bg-gray-200";

        return (
          <div key={index} className="flex gap-1 font-pre pt-1">
            <p
              className={`w-[20px] h-[20px] text-[12px] text-center text-gray-500 rounded-full ${colorClass}`}
            >
              {item.process.slice(0, 1)}
            </p>
            <p className="max-w-20 text-[14px] text-center">{item.company}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CalendarTile;
