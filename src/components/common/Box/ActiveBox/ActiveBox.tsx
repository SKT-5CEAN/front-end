"use client";
import { useState } from "react";
import { ActiveBoxProps } from "./activeBox.type";
import { useRouter } from "next/navigation";
import Image from "next/image";

function ActiveBox(props: ActiveBoxProps) {
  const router = useRouter();
  const { boxText, activeLink, active } = props;
  const [btnActive, setBtnActive] = useState(active);

  return (
    <div
      onClick={
        btnActive
          ? () => {
              router.push(activeLink);
            }
          : () => {}
      }
      className={`group relative w-[455px] h-36 ${btnActive ? "bg-amber-200" : "bg-gray-200"} flex justify-center items-center`}
    >
      <button
        className={`absolute top-3 right-3 w-12 h-12 ${btnActive ? "bg-red-400" : "bg-lime-400"} rounded-2xl flex justify-center items-center hidden group-hover:flex`}
      >
        <Image
          className={`${btnActive ? "" : "rotate-45"}`}
          src={"/ic-plus.png"}
          alt="버튼 모양"
          width={16}
          height={15}
        />
      </button>
      <p className="text-3xl text-center">{boxText}</p>
    </div>
  );
}

export default ActiveBox;
