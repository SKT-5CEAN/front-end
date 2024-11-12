import { ProcessChipProps } from "./processChip.type";

function ProcessChip(props: ProcessChipProps) {
  const { company, process } = props;

  // process 값에 따라 색상을 매핑하는 객체
  const colorMap: { [key: string]: string } = {
    서류: "bg-lime-100",
    코딩테스트: "bg-purple-200",
    면접: "bg-rose-200",
    인적성검사: "bg-cyan-200",
  };

  // process에 맞는 색상을 가져오기, 기본값은 'bg-gray-200'
  const colorClass = colorMap[process] || "bg-gray-200";

  return (
    <div className="w-full h-[60px] px-[16px] py-[13px] flex justify-between border border-gray-200 rounded">
      <p>{company}</p>
      <div className={`${colorClass} p-2 rounded`}>{process}</div>
    </div>
  );
}

export default ProcessChip;
