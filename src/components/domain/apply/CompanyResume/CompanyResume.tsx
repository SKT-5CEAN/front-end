"use client";
import Accordion from "@/components/common/Accordion/Accordion";
import { AccordionProps } from "@/components/common/Accordion/accordion.type";
import { ResumeStoreType, useResumeStore } from "@/store/useResumeStore";
import { useState } from "react";
import ResumeItemList from "../ResumeItemList/ResumeItemList";
import PlainButton from "@/components/common/Button/PlainButton/PlainButton";
import Image from "next/image";

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
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <div className="absolute top-6 right-2">
            <PlainButton
              text="수정하기"
              textColor="text-blue-500"
              borderColor="border-blue-500"
              bgColor="transparent"
              iconImg="/ic-pencil.png"
              handleClick={() => {
                setIsModified(true);
              }}
            />
          </div>
          <div className="absolute flex flex-col justify-center items-center top-72">
            <Image
              src="/ic-hard-drive.png"
              alt="하드 드라이브 아이콘"
              width={48}
              height={48}
            />
            <p className="whitespace-pre text-xl text-gray-500 text-center mt-2">{`저장된 자기소개서가 없습니다.`}</p>
          </div>
        </div>
      )}
      {!isModified && resumeData.length > 0 && (
        <div className="w-full h-full">
          <div className="w-full h-16 bg-white flex justify-end p-4 mt-2">
            <PlainButton
              text="수정하기"
              textColor="text-blue-500"
              borderColor="border-blue-500"
              bgColor="transparent"
              iconImg="/ic-pencil.png"
              handleClick={() => {
                setIsModified(true);
              }}
            />
          </div>
          <p className="text-lime-500 text-3xl ml-6 mt-5">자기소개서</p>
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
