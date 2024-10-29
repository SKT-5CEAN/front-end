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
    <div className="relative">
      <div className="absolute top-5 right-5">
        {!isModified && (
          <PlainButton
            text="수정하기"
            textColor="text-black"
            borderColor="border-black"
            bgColor="transparent"
            handleClick={() => {
              setIsModified(true);
            }}
          />
        )}
        {isModified && (
          <div className="flex gap-2">
            <PlainButton
              text="작성 취소"
              textColor="text-white"
              bgColor="bg-red-400"
              handleClick={() => {
                setIsModified(false);
              }}
            />
            <PlainButton
              text="작성 완료"
              textColor="text-white"
              bgColor="bg-black"
              handleClick={handleSubmit}
            />
          </div>
        )}
      </div>
      <div className="w-[940px] flex flex-col gap-5 absolute top-24 left-8">
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
