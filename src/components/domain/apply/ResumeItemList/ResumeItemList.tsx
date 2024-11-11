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
  /** 사용자가 입력하는 resume 데이터 */
  // 실제 DB에 있는 resume과 차이가 있을 수 있으므로 별개의 상태로 관리
  // '작성 완료'를 눌러야지만 이 데이터가 서버로 반영되도록 처리
  const [inputResume, setInputResume] = useState([...resumeData]);

  /** ResumeItem에서 자소서 문항 '제목'과 '내용'을 업데이트 할 수 있게 하려고 만든 함수 */
  const handleChange = (
    idx: number,
    field: keyof ResumeDataType,
    value: string
  ) => {
    setInputResume((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  /** ResumeItem에서 문항 삭제 시, inputResume에서 해당 데이터 제거 */
  const handleDelete = (idx: number) => {
    setInputResume((prev) => prev.filter((_, i) => i !== idx));
  };

  /** '작성 완료' 눌렀을 때 데이터 저장 */
  // 추후 api 연결 예정
  const saveResumeData = () => {
    const filteredData = inputResume.filter(
      (item) => item.question || item.content
    );
    setResumeData(filteredData);
    setIsModified(false);
  };

  /** '작성 취소' 눌렀을 때 데이터 초기화 */
  const cancelEditing = () => {
    setInputResume([...resumeData, { question: "", content: "" }]); // 원래 데이터로 초기화
    setIsModified(false);
  };

  /** '+' 버튼 눌렀을 때, 새로운 문항 입력 받는 폼 추가 */
  const addNewResumeItem = () => {
    setInputResume((prev) => [...prev, { question: "", content: "" }]);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-16 bg-white flex justify-end gap-2 p-4">
        <PlainButton
          text="취소"
          textColor="text-blue-500"
          handleClick={cancelEditing}
        />
        <PlainButton
          text="저장하기"
          textColor="text-blue-800"
          bgColor="bg-blue-100"
          handleClick={saveResumeData}
        />
      </div>
      <div className="w-full h-5/6 overflow-y-scroll flex flex-col justify-center mt-5">
        <p className="text-lime-500 text-3xl ml-6">자기소개서</p>
        {inputResume.map((el, idx) => (
          <ResumeItem
            key={idx}
            title={el.question}
            content={el.content}
            onChange={(field, value) => handleChange(idx, field, value)}
            onDelete={() => handleDelete(idx)} // 삭제 핸들러 추가
          />
        ))}
        <button
          className="w-[1004px] h-16 px-5 rounded-lg border-none text-xl text-left bg-slate-50 mx-auto border-slate-200 text-gray-800 cursor-pointer mt-4"
          onClick={addNewResumeItem}
        >
          +&nbsp;&nbsp;&nbsp;&nbsp;자기소개서 문항 추가하기
        </button>
      </div>
    </div>
  );
}

export default ResumeItemList;
