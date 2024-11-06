"use client";
import Accordion from "@/components/common/Accordion/Accordion";
import { AccordionProps } from "@/components/common/Accordion/accordion.type";
import { ResumeStoreType, useResumeStore } from "@/store/useResumeStore";
import { useState } from "react";
import ResumeItemList from "../ResumeItemList/ResumeItemList";
import PlainButton from "@/components/common/Button/PlainButton/PlainButton";

function CompanyResume() {
  const [isModified, setIsModified] = useState(false);
  const { resumeData } = useResumeStore();

  function transformResumeDataToAccordionItems(
    resumeData: ResumeStoreType["resumeData"]
  ): AccordionProps["items"] {
    return resumeData.map((data) => ({
      title: data.question,
      content: data.content,
      disabled: false,
    }));
  }

  const sample = {
    items: [
      {
        title: "제목1",
        content: "내용1",
        disabled: false,
      },
      {
        title: "제목2",
        content: "내용2",
        disabled: false,
      },
      {
        title: "제목3",
        content: "내용3",
        disabled: false,
      },
    ],
    triggerFontSize: "2xl",
  };

  return (
    <div className="w-full h-full">
      {!isModified && resumeData.length === 0 && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="whitespace-pre text-3xl text-gray-500 text-center">{`아직 추가된 문항이 없습니다.\n해당 기업의 서류 문항을 추가해 주세요.`}</p>
          <button
            className="bg-lime-400 px-4 py-2 text-white cursor-pointer"
            onClick={() => {
              setIsModified(true);
            }}
          >
            자소서 문항 추가하기
          </button>
        </div>
      )}
      {!isModified && resumeData.length > 0 && (
        <div className="w-full h-full">
          <div className="w-full h-16 bg-white flex justify-end p-4">
            <PlainButton
              text="수정하기"
              textColor="text-black"
              borderColor="border-black"
              handleClick={() => {
                setIsModified(true);
              }}
            />
          </div>
          <Accordion
            items={transformResumeDataToAccordionItems(resumeData)}
            triggerFontSize="1.625rem"
          />
        </div>
      )}
      {isModified && <ResumeItemList setIsModified={setIsModified} />}
    </div>
  );
}

export default CompanyResume;
