"use client";
import { useCompanyProcessStore } from "@/store/useCompanyProcessStore";
import Image from "next/image";

function ProcessInput() {
  const { company, processes, setProcesses } = useCompanyProcessStore();

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/ic-building.png"
        alt="회사 건물 아이콘"
        width={60}
        height={60}
      />
      <h2 className="font-bold text-3xl">{company}의 채용 절차는</h2>
      <div id="total-process" className="flex">
        <div id="dynamic-process" className="flex"></div>
        <div id="fixed-process" className="relative flex gap-11">
          <div className="relative custom-after flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full border border-dashed border-gray-400"></div>
            <p>미선택</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-black"></div>
            <p>최종 발표</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessInput;
