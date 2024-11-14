import { useDrag } from "react-dnd";
import { ProcessChipProps } from "./processChip.type";
import { useRef } from "react";
import { colorMap } from "@/constants/processColor";

function ProcessChip(props: ProcessChipProps) {
  const { company, process } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [{ isDragging }, dragRef] = useDrag({
    type: "PROCESS_CHIP",
    item: { company, process },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // 디폴트 값 부여
  const colorClass = colorMap[process] || "bg-gray-200";

  dragRef(divRef);

  return (
    <div
      ref={divRef}
      className="w-full h-[60px] px-[16px] py-[13px] flex justify-between border border-gray-200 rounded text-center items-center"
    >
      <p className="font-medium text-xl text-zinc-600">{company}</p>
      <div
        className={`${colorClass} px-[15px] py-[5px] rounded font-medium text-lg text-gray-400`}
      >
        {process}
      </div>
    </div>
  );
}

export default ProcessChip;
