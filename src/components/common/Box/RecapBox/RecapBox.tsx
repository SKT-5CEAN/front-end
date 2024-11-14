"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RecapBoxProps } from "./recapBox.type";
import { useCompanyRecapStore } from "@/store/useCompanyRecapStore";

function RecapBox(props: RecapBoxProps) {
  const router = useRouter();
  const { boxText, boxDesc, kind } = props;
  const pathname = usePathname();
  const params = useSearchParams();
  const { recapData } = useCompanyRecapStore();


  const handleClick = () => {
    const updatedParams = new URLSearchParams(params.toString());
    updatedParams.set("recap_kind", kind);
    router.push(`${pathname}?${updatedParams.toString()}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative w-[480px] h-[170px] rounded-xl border border-gray-200 border-t-4 border-t-blue-500 flex flex-col justify-between cursor-pointer p-5`}
    >
      <div className="flex gap-2">
        <p className="text-lg font-bold">{boxText}</p>
      </div>
      <p className="text-gray-500">{boxDesc}</p>
      <button
        key={boxText}
        onClick={handleClick}
        className={`px-4 py-2 rounded-lg ${
          recapData.find((data) => data.stageName === boxText)
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white"
        }`}
      >
        {recapData.find((data) => data.stageName === boxText)
          ? `${boxText} 복기 완료`
          : `${boxText} 복기 시작하기`}
      </button>
    </div>
  );
}

export default RecapBox;
