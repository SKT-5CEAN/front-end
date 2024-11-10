"use client";
import { useEffect } from "react";
import { ActiveBoxProps } from "./activeBox.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ActiveBox(props: ActiveBoxProps) {
  const router = useRouter();
  const { boxText, kind } = props;
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
      className={`group relative w-[455px] h-36 bg-amber-200 flex justify-center items-center cursor-pointer`}
    >
      <p className="text-3xl text-center">{boxText}</p>
    </div>
  );
}

export default ActiveBox;
