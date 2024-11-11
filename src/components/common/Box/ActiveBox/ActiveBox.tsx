"use client";
import PlainButton from "../../Button/PlainButton/PlainButton";
import { ActiveBoxProps } from "./activeBox.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function ActiveBox(props: ActiveBoxProps) {
  const router = useRouter();
  const { boxText, boxDesc, kind } = props;
  const pathname = usePathname();
  const params = useSearchParams();

  const handleClick = () => {
    const updatedParams = new URLSearchParams(params.toString());
    updatedParams.set("interview_kind", kind);
    router.push(`${pathname}?${updatedParams.toString()}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative w-[480px] h-[170px] rounded-xl border border-gray-200 border-t-4 border-t-blue-500 flex flex-col justify-between cursor-pointer p-5`}
    >
      <div className="flex gap-2">
        <p className="text-lg font-bold">{boxText}</p>
        {kind === "resume" && (
          <div
            id="chip"
            className="w-[133px] h-7 p-3 font-medium rounded-full flex justify-between items-center bg-teal-100 text-teal-800 text-xs"
          >
            <Image
              src="/x-diamond-fill.png"
              alt="AI 질문 생성 아이콘"
              width={12}
              height={12}
            />
            <p>AI로 질문 생성 가능</p>
          </div>
        )}
      </div>
      <p className="text-gray-500">{boxDesc}</p>
      <PlainButton
        text="대비하기&nbsp;&nbsp;&nbsp;>"
        textColor="text-blue-500"
        handleClick={handleClick}
      />
    </div>
  );
}

export default ActiveBox;
