"use client";
import ProgressBar from "@/components/common/Bar/ProgressBar/ProgressBar";
import { ProgressDataType } from "@/components/common/Bar/ProgressBar/progressBar.type";
import CompanyList from "@/components/common/CompanyList/CompanyList";
import Modal from "@/components/common/Modal/Modal";
import CompanyProcess from "@/components/domain/apply/CompanyProcess/CompanyProcess";
import Tab from "@/components/domain/apply/Tab/Tab";
import BookMark from "@/components/domain/reviewrecap/BookMark/BookMark";
import MyRecap from "@/components/domain/reviewrecap/MyRecap/MyRecap";
import MyReview from "@/components/domain/reviewrecap/MyReview/MyReview";
import { useState } from "react";

function ReviewRecapPage({ params }: { params: { company: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companySelected, setCompanySelected] = useState(
    Boolean(params.company)
  );

  const handleClose = () => {
    setCompanySelected(true);
    setIsModalOpen(false);
  };

  const tabList = [
    {
      triggerName: "나의 회고",
      contentNode: <MyReview />,
    },
    {
      triggerName: "나의 복기",
      contentNode: <MyRecap />,
    },
    {
      triggerName: "북마크",
      contentNode: <BookMark />,
    },
  ];

  const processList: Array<ProgressDataType> = [
    {
      name: "서류 전형",
      status: "pass",
    },
    {
      name: "인적성 검사",
      status: "pass",
    },
    {
      name: "1차 면접",
      status: "pending",
    },
    {
      name: "2차 면접",
      status: "pending",
    },
    {
      name: "결과 발표",
      status: "pending",
    },
  ];

  return (
    <div className="pt-32 pb-4 px-11 flex justify-between bg-neutral-100">
      <section>
        <CompanyList selectedCompany={params.company} basePath="/reviewrecap" />
      </section>
      <section className="min-h-[990px] h-full flex flex-col gap-[14px]">
        <ProgressBar processData={processList} basePath="/reviewrecap" />
        <div className="w-[1114px] min-h-[750px] border-4 flex justify-center rounded-2xl px-10 py-5 bg-white">
          <Tab tabList={tabList} />
        </div>
        {!companySelected && (
          <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md flex flex-col justify-center items-center">
            <p className="text-3xl text-center text-gray-700 mb-4">
              기업 추가하고 작성 시작하기
            </p>
            <button
              // onclick 부분은 나중에 수정해야합니당
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              기업 추가
            </button>
          </div>
        )}
      </section>
      {isModalOpen && (
        <Modal
          title=""
          onClose={handleClose}
          content={<CompanyProcess onClose={handleClose} />}
        />
      )}
    </div>
  );
}

export default ReviewRecapPage;
