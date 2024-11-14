import { useDrop } from "react-dnd";
import { CalendarTileProps } from "./calendarTile.type";
import { useRef } from "react";

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
      {itemsForDate.map((item, index) => (
        <div key={index} style={{ fontSize: "0.8rem", color: "darkred" }}>
          {item.company} - {item.process}
        </div>
      ))}
    </div>
  );
}

export default CalendarTile;
