import { ResumeDataType, useResumeStore } from "@/store/useResumeStore";
import { useEffect, useState } from "react";
import ResumeItem from "../ResumeItem/ResumeItem";
import PlainButton from "@/components/common/Button/PlainButton/PlainButton";

function ResumeItemList({
  setIsModified,
}: {
  setIsModified: (isModified: boolean) => void;
}) {
  const { resumeData, setResumeData } = useResumeStore();
  const [inputResume, setInputResume] = useState([
    ...resumeData,
    { question: "", content: "" },
  ]);

  useEffect(
    function addEmptyForm() {
      setInputResume([...resumeData, { question: "", content: "" }]);
    },
    [resumeData]
  );

  const handleChange = (
    idx: number,
    field: keyof ResumeDataType,
    value: string
  ) => {
    setInputResume((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const saveResumeData = () => {
    const filteredData = inputResume.filter(
      (item) => item.question || item.content
    );
    setResumeData(filteredData);
    setIsModified(false);
  };

  const cancelEditing = () => {
    setInputResume([...resumeData, { question: "", content: "" }]); // 원래 데이터로 초기화
    setIsModified(false);
  };

  const addNewResumeItem = () => {
    setInputResume((prev) => [...prev, { question: "", content: "" }]);
  };

  return (
    <div className="w-full h-full">
      <div>
        <PlainButton
          text="작성 취소"
          textColor="text-white"
          bgColor="bg-red-200"
          handleClick={cancelEditing}
        />
        <PlainButton
          text="작성 완료"
          textColor="text-white"
          bgColor="bg-black"
          handleClick={saveResumeData}
        />
      </div>
      <div className="w-full h-5/6 overflow-y-scroll">
        {inputResume.map((el, idx) => (
          <ResumeItem
            key={idx}
            title={el.question}
            content={el.content}
            onChange={(field, value) => handleChange(idx, field, value)}
          />
        ))}
        <button
          className="w-16 h-16 border-none bg-lime-400 text-4xl text-white cursor-pointer"
          onClick={addNewResumeItem}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ResumeItemList;
