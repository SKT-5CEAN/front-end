"use client";
import { ActiveBoxProps } from "./activeBox.type";
import { useRouter } from "next/navigation";

function ActiveBox(props: ActiveBoxProps) {
  const router = useRouter();
  const { boxText, link } = props;

  return (
    <div
      onClick={() => {
        router.push(link);
      }}
      className={`group relative w-[455px] h-36 bg-amber-200 flex justify-center items-center cursor-pointer`}
    >
      <p className="text-3xl text-center">{boxText}</p>
    </div>
  );
}

export default ActiveBox;
