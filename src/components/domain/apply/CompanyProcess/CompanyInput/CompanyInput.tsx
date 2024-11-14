"use client";
import Image from "next/image";
import { CompanyInputProps } from "./companyInput.type";
import { useCompanyProcessStore } from "@/store/useCompanyProcessStore";

function CompanyInput(props: CompanyInputProps) {
  const { step, setStep } = props;
  const { company, setCompany } = useCompanyProcessStore();

  return (
    <div className="w-fit h-fit flex flex-col gap-[13px] justify-center items-center">
      <Image
        src="/ic-building.png"
        alt="회사 건물 아이콘"
        width={60}
        height={60}
      />
      <h2 className="font-bold text-3xl">지원할 기업</h2>
      <input
        type="text"
        className="w-[358px] h-[67px] outline-none border-b-2 border-green-700 text-center text-4xl"
        placeholder="회사명"
        onChange={(e) => {
          setCompany(e.currentTarget.value);
        }}
      />
      <button
        className={`w-[212px] h-12 mt-6 text-white text-lg font-bold rounded-[10px] ${company.length > 0 ? "bg-radial cursor-pointer" : "bg-gray-400"}`}
        onClick={() => {
          if (company) setStep(step + 1);
        }}
      >
        다음
      </button>
    </div>
  );
}

export default CompanyInput;
