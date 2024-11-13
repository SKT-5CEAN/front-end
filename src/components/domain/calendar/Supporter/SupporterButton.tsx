"use client";
import { SupporterButtonProps } from "./supporter.type";
import Image from "next/image";

function SupporterButton(props: SupporterButtonProps) {
  const { handleClick } = props;
  return (
    <button
      className="w-[499px] h-16 flex gap-2 items-center bg-lime-300 hover:bg-lime-400 py-2 px-4 rounded-xl"
      onClick={handleClick}
    >
      <Image
        src="/ic-supporter.png"
        alt="서포터 아이콘"
        width={40}
        height={40}
      />
      <p className="text-stone-500 font-bold text-[22px]">
        취준 생활 지원해줄 나만의 서포터 만들기
      </p>
    </button>
  );
}

export default SupporterButton;
