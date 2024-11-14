"use client";
import Image from "next/image";
import { TitleListProps } from "./titleList.type";
import { useRouter } from "next/navigation";
import { COMPANY_KEY } from "@/constants/companyKey";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CompanyProcess from "@/components/domain/apply/CompanyProcess/CompanyProcess";

function TitleList(props: TitleListProps) {
  const {
    title,
    list,
    listType,
    state: selected,
    setState: setSelected,
    queryParams,
    basePath,
  } = props;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-[274px] h-[402px] border-1 border-neutral-300 flex flex-col py-2 px-[10px] bg-white rounded-b-3xl">
      <div className="w-full h-[42px] flex gap-3 items-center px-1">
        <Image
          src={
            listType === COMPANY_KEY.inProgressCompany
              ? "/ic-docs.png"
              : "/ic-check.png"
          }
          alt="리스트 아이콘"
          width={18}
          height={18}
          style={{ width: "18px", height: "18px" }}
        />
        <h2 className="text-base">{title}</h2>
      </div>
      <hr className="mt-2" />
      {list.length > 0 && (
        <ul className="w-[246px] h-[280px] overflow-y-scroll py-2">
          {list.map((el, idx) => (
            <li
              key={idx}
              className={`w-full h-[38px] text-xl px-5 py-2 leading-[22px] text-neutral-600 ${el === selected ? "font-extrabold bg-plainYellow text-orange" : ""}`}
              onClick={() => {
                console.log(`Routing to: ${basePath}/${el}?${queryParams}`);
                setSelected(el);
                router.push(`${basePath}/${el}?${queryParams}`);
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
      {listType === COMPANY_KEY.inProgressCompany && (
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="absolute bottom-2 w-[246px] h-[27px] font-semibold text-neutral-600 rounded-[30px] bg-lightYellow cursor-pointer text-xs"
        >
          + 기업 추가
        </button>
      )}
      {isModalOpen && (
        <Modal title="" onClose={handleClose} content={<CompanyProcess />} />
      )}
    </div>
  );
}

export default TitleList;
