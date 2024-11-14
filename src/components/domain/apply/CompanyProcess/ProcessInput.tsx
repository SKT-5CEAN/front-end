"use client";
import { PROCESS_KIND_ARRAY } from "@/constants/processKind";
import {
  ProcessKind,
  useCompanyProcessStore,
} from "@/store/useCompanyProcessStore";
import Image from "next/image";

function ProcessInput() {
  const { company, processes, setProcesses } = useCompanyProcessStore();

  const handleClick = (el: ProcessKind) => {
    // el이 processes에 없으면 추가, 있으면 제거
    if (processes.includes(el)) {
      setProcesses(processes.filter((process) => process !== el));
    } else {
      setProcesses([...processes, el]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/ic-building.png"
        alt="회사 건물 아이콘"
        width={60}
        height={60}
      />
      <h2 className="font-bold text-3xl">{company}의 채용 절차는</h2>
      <div id="total-process" className="relative flex gap-3">
        <div id="dynamic-process" className="relative flex gap-3">
          {processes.map((el, idx) => (
            <div
              key={idx}
              id="process-el"
              className="relative custom-after min-w-[70px] flex flex-col justify-center items-center"
            >
              <div className="w-5 h-5 rounded-full border border-green-600 bg-lime-300"></div>
              <p>{el}</p>
            </div>
          ))}
        </div>
        <div id="fixed-process" className="relative flex gap-3">
          <div className="relative custom-after min-w-[70px] flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full border border-dashed border-gray-400"></div>
            <p>미선택</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-black"></div>
            <p>최종 발표</p>
          </div>
        </div>
      </div>
      <div
        id="process-btn-container"
        className="w-[775px] h-[107px] flex px-[30px] py-[10px] gap-2 flex-wrap mt-4"
      >
        {PROCESS_KIND_ARRAY.map((el, idx) => (
          <button
            key={idx}
            className={`w-[90px] h-[30px] text-sm rounded-[10px] border border-gray-300 p-2 flex justify-center items-center ${processes.includes(el as ProcessKind) ? "bg-lime-300 border-green-600" : ""}`}
            onClick={() => {
              handleClick(el as ProcessKind);
            }}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProcessInput;
