import { useDrag } from "react-dnd";
import { ProcessChipProps } from "./processChip.type";
import { useRef } from "react";

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

  // process 값에 따라 색상을 매핑하는 객체
  const colorMap: { [key: string]: string } = {
    서류: "bg-lime-100",
    코딩테스트: "bg-purple-200",
    면접: "bg-rose-200",
    인적성검사: "bg-cyan-200",
  };

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
