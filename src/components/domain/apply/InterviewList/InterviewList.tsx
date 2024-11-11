"use client";
import { INTERVIEW_KIND } from "@/constants/interviewKind";
import { InterviewListProps } from "./interviewList.type";
import Image from "next/image";
import PlainButton from "@/components/common/Button/PlainButton/PlainButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Accordion from "@/components/common/Accordion/Accordion";
import {
  InterviewDataType,
  InterviewStoreType,
  useInterviewStore,
} from "@/store/useInterviewStore";
import { AccordionProps } from "@/components/common/Accordion/accordion.type";
import ResumeItem from "../ResumeItem/ResumeItem";

function InterviewList(props: InterviewListProps) {
  // kind로 질문 불러오는 api 호출부 필요
  // 일단 useState로 임시 생성
  const [isModified, setIsModified] = useState(false);
  const { interviewData, setInterviewData } = useInterviewStore();
  const [inputInterview, setInputInterview] = useState([...interviewData]);
  const { kind } = props;
  const router = useRouter();

  const matchingInterviewKind = INTERVIEW_KIND.find((el) => el.kind === kind);

  function transformInterviewDataToAccordionItems(
    interviewData: InterviewStoreType["interviewData"]
  ): AccordionProps["items"] {
    return interviewData.map((data) => ({
      title: data.question,
      content: data.content,
      disabled: false,
    }));
  }

  const handleChange = (
    idx: number,
    field: keyof InterviewDataType,
    value: string
  ) => {
    setInputInterview((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const handleDelete = (idx: number) => {
    setInputInterview((prev) => prev.filter((_, i) => i !== idx));
  };

  const saveInterviewData = () => {
    const filteredData = inputInterview.filter(
      (item) => item.question || item.content
    );
    setInterviewData(filteredData);
    setIsModified(false);
  };

  const cancelEditing = () => {
    setInputInterview([...interviewData]);
    setIsModified(false);
  };

  const addNewInterviewItem = () => {
    setInputInterview((prev) => [...prev, { question: "", content: "" }]);
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
            {matchingInterviewKind && matchingInterviewKind.text}
          </p>
        </div>
        <div id="btn-list" className="flex gap-[18px] mr-4">
          {!isModified && (
            <>
              {kind === "resume" && (
                <PlainButton
                  text="AI질문생성"
                  iconImg="/ic-sparkles.png"
                  textColor="text-teal-400"
                  bgColor="bg-teal-100"
                  handleClick={() => {
                    // AI 질문 생성하는 api 호출
                  }}
                />
              )}
              <PlainButton
                text="수정하기"
                iconImg="/ic-pencil.png"
                textColor="text-blue-800"
                borderColor="border-blue-800"
                handleClick={() => {
                  setIsModified(true);
                }}
              />
            </>
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
                handleClick={saveInterviewData}
              />
            </>
          )}
        </div>
      </div>
      {!isModified && inputInterview.length === 0 && (
        <div className="flex flex-col justify-center items-center mt-48">
          <Image
            src="/ic-hard-drive.png"
            alt="하드 드라이브 아이콘"
            width={48}
            height={48}
          />
          <p className="whitespace-pre text-xl text-gray-500 text-center mt-2">
            예상질문 리스트가 없습니다.
          </p>
        </div>
      )}
      {!isModified && inputInterview.length > 0 && (
        <Accordion
          items={transformInterviewDataToAccordionItems(interviewData)}
          triggerFontSize="lg"
        />
      )}
      {isModified && (
        <>
          {inputInterview.length > 0 ? (
            inputInterview.map((el, idx) => (
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
            onClick={addNewInterviewItem}
          >
            +&nbsp;&nbsp;&nbsp;&nbsp;예상 질문 추가하기
          </button>
        </>
      )}
    </div>
  );
}

export default InterviewList;
