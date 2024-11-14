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
  const [inputTalent, setInputTalent] = useState(talent);
  const [inputProduct, setInputProduct] = useState(product);
  const [inputNews, setInputNews] = useState(news);
  const [inputOther, setInputOther] = useState(other);

  const handleCancel = () => {
    setInputTalent(talent);
    setInputProduct(product);
    setInputNews(news);
    setInputOther(other);

    setIsModified(false);
  };

  const handleSubmit = () => {
    setTalent(inputTalent);
    setProduct(inputProduct);
    setNews(inputNews);
    setOther(inputOther);

    setIsModified(false);
  };

  return (
    <div className="w-full h-full flex flex-wrap gap-x-12 gap-y-10 mx-5 my-5">
      <div className="">
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
          <div className="w-fit h-[52px] flex gap-2 absolute top-0 right-4 mt-0">
            <PlainButton
              text="취소"
              textColor="text-blue-500"
              handleClick={handleCancel}
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
          setContent={setInputTalent}
        />
        <ShortForm
          name="product"
          title="기업 제품"
          trigger={isModified}
          placeholder="기업이 다루고 있는 '제품'을 적어주세요."
          content={product}
          setContent={setInputProduct}
        />
        <ShortForm
          name="news"
          title="최신 뉴스"
          trigger={isModified}
          placeholder="기업의 '최신 소식'을 적어주세요."
          content={news}
          setContent={setInputNews}
        />
        <ShortForm
          name="other"
          title="기타"
          trigger={isModified}
          placeholder="기업의 '기타 정보'를 적어주세요."
          content={other}
          setContent={setInputOther}
        />
      </div>
    </div>
  );
}

export default CompanyResearch;
