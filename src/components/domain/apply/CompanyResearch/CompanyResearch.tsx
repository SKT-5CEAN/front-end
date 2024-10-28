"use client";
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

  return (
    <div>
      <div className="flex flex-col gap-5">
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
