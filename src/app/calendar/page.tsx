"use client";
import React, { useState } from "react";
import MainCalendar from "@/components/domain/calendar/Calendar/MainCalendar";
import SupporterButton from "@/components/domain/calendar/Supporter/SupporterButton";
import SupporterModal from "@/components/domain/calendar/Supporter/SupporterModal";
import { COMPANY_AND_PROCESS } from "@/constants/dummy/calendar/process";
import ProcessChip from "@/components/domain/calendar/ProcessChip/ProcessChip";
import Modal from "@/components/common/Modal/Modal";

function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectingDeficiencies, setIsSelectingDeficiencies] = useState(false);
  const [selectedDeficiencies, setSelectedDeficiencies] = useState<string[]>(
    []
  );

  const handleSupporterButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSelectingDeficiencies(false);
    setSelectedDeficiencies([]);
  };

  const handleDeficiencyClick = (deficiency: string) => {
    if (selectedDeficiencies.includes(deficiency)) {
      setSelectedDeficiencies(
        selectedDeficiencies.filter((item) => item !== deficiency)
      );
    } else if (selectedDeficiencies.length < 3) {
      setSelectedDeficiencies([...selectedDeficiencies, deficiency]);
    }
  };

  const isButtonEnabled = selectedDeficiencies.length === 3;

  const initialContent = (
    <>
      <p className="text-center text-gray-700 mb-6">
        부족한 점을 보완해주는 나만의 서포터가 내 취준을 도와줘요!
      </p>
      <div className="flex gap-4 mb-6">
        <div className="border p-4 rounded-lg text-gray-700 text-center">
          <p className="font-semibold">
            ex: "결핍을 채워주는" 나를 위한 서포터
          </p>
          <p>D-2 서류 완료 6시까지</p>
          <p>SKT 서류 마감일이에요.</p>
          <p>여유 있게 지금 작성 시작해요!</p>
        </div>
        <div className="border p-4 rounded-lg text-gray-700 text-center">
          <p className="font-semibold">ex: "걱정이 많은" 나를 위한 서포터</p>
          <p>SKT 면접까지 하루 남았어요.</p>
          <p>긴장이 된다면?</p>
          <p>30초만 스트레칭 해볼까요?</p>
        </div>
      </div>
    </>
  );

  const selectionContent = (
    <>
      <p className="text-center text-gray-700 mb-6">
        서포터가 도와줬으면 하는 나의 부족한 점 3가지를 골라주세요!
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          "결핍을 채워주는",
          "걱정이 많은",
          "끈기가 부족한",
          "자신감이 부족한",
          "집중력이 부족한",
          "시간 관리가 서투른",
        ].map((deficiency) => (
          <button
            key={deficiency}
            className={`border p-2 rounded-lg text-gray-700 ${
              selectedDeficiencies.includes(deficiency) ? "bg-green-200" : ""
            }`}
            onClick={() => handleDeficiencyClick(deficiency)}
          >
            {deficiency}
          </button>
        ))}
      </div>
    </>
  );

  const footer = isSelectingDeficiencies ? (
    <button
      onClick={handleCloseModal}
      disabled={!isButtonEnabled}
      className={`px-4 py-2 rounded-lg transition ${
        isButtonEnabled
          ? "bg-gray-800 text-white hover:bg-gray-900"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      서포터 만들기
    </button>
  ) : (
    <button
      onClick={() => setIsSelectingDeficiencies(true)}
      className="bg-green-200 text-green-800 px-4 py-2 rounded-lg hover:bg-green-300 transition"
    >
      부족한 점 고르기
    </button>
  );

  return (
    <div className="w-full h-full flex justify-between px-[66px] py-[124px]">
      <div>
        <MainCalendar />
      </div>

      <div>
        <div className="mb-4">
          <SupporterButton handleClick={handleSupporterButtonClick} />
        </div>

        <div className="flex flex-col items-center mt-6">
          <h3 className="text-[32px] font-medium text-zinc-600">
            9월 예정 일정
          </h3>
          <div className="relative w-[484px] h-[615px] mt-4 px-[38px] py-[30px] rounded-lg bg-yellow-50 border-dashed border-[3px] border-yellow border-spacing-3 flex flex-col items-center">
            <ul className="w-[408px] h-[384px] overflow-y-scroll space-y-2">
              {COMPANY_AND_PROCESS.map((el, idx) => (
                <li className="w-full" key={idx}>
                  <ProcessChip company={el.company} process={el.process} />
                </li>
              ))}
            </ul>
            <button className="absolute bottom-[30px] w-[380px] h-16 bg-lightYellow font-medium text-[22px] text-neutral-600 rounded-[30px] cursor-pointer">
              예정 일정 추가
            </button>
          </div>
        </div>

        {/* {isModalOpen && (
          <Modal
            onClose={handleCloseModal}
            title="나만의 서포터 만들기"
            content={
              isSelectingDeficiencies ? selectionContent : initialContent
            }
            footer={footer}
          />
        )} */}
        {isModalOpen && <SupporterModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default CalendarPage;
