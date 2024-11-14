"use client";
import Image from "next/image";
import PlainButton from "@/components/common/Button/PlainButton/PlainButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Accordion from "@/components/common/Accordion/Accordion";
import { AccordionProps } from "@/components/common/Accordion/accordion.type";
import { RecapDataType, RecapStoreType, useCompanyRecapStore } from "@/store/useCompanyRecapStore";
import { RecapListProps } from "./recapList.type";
import { RECAP_LIST } from "@/constants/recapList";
import ResumeItem from "../../apply/ResumeItem/ResumeItem";

function RecapList(props: RecapListProps) {
  // kind로 질문 불러오는 api 호출부 필요
  // 일단 useState로 임시 생성
  const [isModified, setIsModified] = useState(false);
  const { recapData, setRecapData } = useCompanyRecapStore();
  const [inputRecap, setInputRecap] = useState([...recapData]);
  const { kind } = props;
  const router = useRouter();

  const matchingRecapList = RECAP_LIST.find((el) => el.kind === kind);

  function transformRecapDataToAccordionItems(
    recapData: RecapStoreType["recapData"]
  ): AccordionProps["items"] {
    return recapData.map((data) => ({
      
      title: data.question,
      content: data.content,
      disabled: false,
    }));
  }

  const handleChange = (
    idx: number,
    field: keyof RecapDataType,
    value: string
  ) => {
    setInputRecap((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const handleDelete = (idx: number) => {
    setInputRecap((prev) => prev.filter((_, i) => i !== idx));
  };

  const saveRecapData = () => {
    const filteredData = inputRecap.filter(
      (item) => item.question || item.content
    );
    setRecapData(filteredData);
    setIsModified(false);
  };

  const cancelEditing = () => {
    setInputRecap([...recapData]);
    setIsModified(false);
  };

  const addNewRecapItem = () => {
    setInputRecap((prev) => [...prev, { stageName: "", question: "", content: "" }]);
  };

  return (
    <div className="w-[98%]">
      <div id="top-bar" className="w-full flex justify-between">
        <div id="back-and-title" className="flex gap-5 items-center">
          <Image
            className="rotate-[90deg]"
            src="/ic-arrow.png"
            alt="뒤로 가기 버튼"
            width={28}
            height={28}
            onClick={() => {
              router.back();
            }}
          />
          <p className="font-semibold text-3xl text-lime-500">
            {matchingRecapList && matchingRecapList.text}
          </p>
        </div>
        <div id="btn-list" className="flex gap-[18px] mr-4">
          {!isModified && (
            <PlainButton
              text="수정하기"
              iconImg="/ic-pencil.png"
              textColor="text-blue-800"
              borderColor="border-blue-800"
              handleClick={() => {
                setIsModified(true);
              }}
            />
          )}
          {isModified && (
            <>
              <PlainButton
                text="취소"
                textColor="text-blue-500"
                handleClick={cancelEditing}
              />
              <PlainButton
                text="저장하기"
                textColor="text-blue-800"
                bgColor="bg-blue-100"
                handleClick={saveRecapData}
              />
            </>
          )}
        </div>
      </div>
      {!isModified && inputRecap.length === 0 && (
        <div className="flex flex-col justify-center items-center mt-48">
          <Image
            src="/ic-hard-drive.png"
            alt="하드 드라이브 아이콘"
            width={48}
            height={48}
          />
          <p className="whitespace-pre text-xl text-gray-500 text-center mt-2">
            저장된 복기 리스트가 없습니다.
          </p>
        </div>
      )}
      {!isModified && inputRecap.length > 0 && (
        <Accordion
          items={transformRecapDataToAccordionItems(recapData)}
          triggerFontSize="lg"
        />
      )}
      {isModified && (
        <>
          {inputRecap.length > 0 ? (
            inputRecap.map((el, idx) => (
              <ResumeItem
                key={idx}
                title={el.question}
                content={el.content}
                onChange={(field, value) => handleChange(idx, field, value)}
                onDelete={() => handleDelete(idx)}
              />
            ))
          ) : (
            <></>
          )}
          <button
            className="w-[1004px] h-16 px-5 rounded-lg border-none text-xl text-left bg-slate-50 mx-auto border-slate-200 text-gray-800 cursor-pointer mt-4"
            onClick={addNewRecapItem}
          >
            +&nbsp;&nbsp;&nbsp;&nbsp;복기 문항 추가하기
          </button>
        </>
      )}
    </div>
  );
}

export default RecapList;
