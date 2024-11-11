"use client";
import { SupporterButtonProps } from "./supporter.type";

function SupporterButton(props: SupporterButtonProps) {
  const { handleClick } = props;
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      취준 생활 지원해줄 나만의 서포터 만들기
    </button>
  );
}

export default SupporterButton;
