"use client";
import { useState } from "react";
import { ActiveBoxProps } from "./activeBox.type";
import { useRouter } from "next/navigation";

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
      className={`w-[455px] h-36 ${btnActive ? "bg-amber-200" : "bg-gray-300"}`}
    >
      <button></button>
      <p>{boxText}</p>
    </div>
  );
}

export default ActiveBox;
