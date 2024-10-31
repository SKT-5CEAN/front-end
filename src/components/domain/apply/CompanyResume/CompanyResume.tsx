"use client";
import Accordion from "@/components/common/Accordion/Accordion";

function CompanyResume() {
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
    <div>
      <Accordion {...sample} />
    </div>
  );
}

export default CompanyResume;
