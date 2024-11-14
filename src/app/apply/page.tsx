"use client";
import ProgressBar from "@/components/common/Bar/ProgressBar/ProgressBar";
import CompanyList from "@/components/common/CompanyList/CompanyList";
import ApplyCompanyPage from "./[company]/page";
import Tab from "@/components/domain/apply/Tab/Tab";
import { ProgressDataType } from "@/components/common/Bar/ProgressBar/progressBar.type";
import { useState } from "react";
import Modal from "@/components/common/Modal/Modal";
import CompanyProcess from "@/components/domain/apply/CompanyProcess/CompanyProcess";

function ApplyPage({ params }: { params: { company: string } }) {
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
      triggerName: "기업 조사",
      contentNode: "",
    },
    {
      triggerName: "서류 준비",
      contentNode: "",
    },
    {
      triggerName: "면접 준비",
      contentNode: "",
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
    <div className="w-full h-full flex justify-between px-[120px] py-[124px] bg-neutral-100">
      {/* 왼쪽 기업 리스트 */}
      <section>
        <CompanyList selectedCompany={params.company} basePath="/apply" />
      </section>

      <section className="w-[1114px] min-h-[990px] h-full flex flex-col gap-[14px]">
        <ProgressBar processData={processList} basePath="/apply" />
        <div className="w-[1114px] min-h-[750px] border-4 flex justify-center rounded-2xl px-10 py-5 bg-white">
          <Tab tabList={tabList} />
        </div>
        {!companySelected && (
          <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center">
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="px-4 py-2 bg-green-500 text-white  text-lg rounded-lg hover:bg-green-600"
            >
              기업 추가하고 작성 시작하기
            </button>
            {/* <button
              // onclick 부분은 나중에 수정해야합니당
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              기업 추가
            </button> */}
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

export default ApplyPage;
