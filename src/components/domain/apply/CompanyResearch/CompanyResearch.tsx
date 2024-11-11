"use client";
import PlainButton from "@/components/common/Button/PlainButton/PlainButton";
import ShortForm from "@/components/common/Form/ShortForm/ShortForm";
import { useResearchStore } from "@/store/useResearchStore";
import { useState } from "react";

function CompanyResearch() {
  const [isModified, setIsModified] = useState(false);
  const {
    talent,
    setTalent,
    product,
    setProduct,
    news,
    setNews,
    other,
    setOther,
  } = useResearchStore();

  const handleSubmit = () => {
    // 일단 제출 로직 x (임시로 콘솔 출력만)
    console.log(talent);
    console.log(product);
    console.log(news);
    console.log(other);
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full min-h-[52px] mt-6">
        {!isModified && (
          <div className="absolute top-0 right-4">
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
        )}
        {isModified && (
          <div className="w-fit h-[52px] flex gap-2 absolute top-0 right-2 mt-0">
            <PlainButton
              text="취소"
              textColor="text-blue-500"
              handleClick={() => {
                setIsModified(false);
              }}
            />
            <PlainButton
              text="저장하기"
              textColor="text-blue-800"
              bgColor="bg-blue-100"
              handleClick={handleSubmit}
            />
          </div>
        )}
      </div>
      <div
        className={`w-[940px] h-full flex flex-col ${isModified ? "gap-16" : "gap-12"} mt-[50px]`}
      >
        <ShortForm
          name="talent"
          title="인재상"
          trigger={isModified}
          placeholder="기업의 '인재상'을 적어주세요."
          content={talent}
          setContent={setTalent}
        />
        <ShortForm
          name="product"
          title="기업 제품"
          trigger={isModified}
          placeholder="기업이 다루고 있는 '제품'을 적어주세요."
          content={product}
          setContent={setProduct}
        />
        <ShortForm
          name="news"
          title="최신 뉴스"
          trigger={isModified}
          placeholder="기업의 '최신 소식'을 적어주세요."
          content={news}
          setContent={setNews}
        />
        <ShortForm
          name="other"
          title="기타"
          trigger={isModified}
          placeholder="기업의 '기타 정보'를 적어주세요."
          content={other}
          setContent={setOther}
        />
      </div>
    </div>
  );
}

export default CompanyResearch;
