"use client";
import React, { useState } from 'react';
import MainCalendar from "@/components/domain/calendar/Calendar/MainCalendar";
import SupporterButton from "@/components/domain/calendar/Supporter/SupporterButton";
import SupporterModal from "@/components/domain/calendar/Supporter/SupporterModal";
import Modal from '@/components/common/Modal/Modal';

function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectingDeficiencies, setIsSelectingDeficiencies] = useState(false);
  const [selectedDeficiencies, setSelectedDeficiencies] = useState<string[]>([]);

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
      setSelectedDeficiencies(selectedDeficiencies.filter((item) => item !== deficiency));
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
          <p className="font-semibold">ex: "결핍을 채워주는" 나를 위한 서포터</p>
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
        {["결핍을 채워주는", "걱정이 많은", "끈기가 부족한", "자신감이 부족한", "집중력이 부족한", "시간 관리가 서투른"].map((deficiency) => (
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
        isButtonEnabled ? "bg-gray-800 text-white hover:bg-gray-900" : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
    <div className="flex p-20">
      <div className="flex-1 pr-10">
        <MainCalendar />
      </div>

      <div className="w-80">
        <div className="mb-4">
          <SupporterButton handleClick={handleSupporterButtonClick} />
        </div>
        
        {/* 더미 데이터 */}
        <div className="mt-4 p-4 border border-yellow-300 rounded-lg bg-yellow-50">
          <h3 className="text-xl font-semibold mb-4">9월 예정 일정</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>SKT</span>
              <span className="text-green-600">서류</span>
              <span className="text-gray-500">코딩테스트</span>
            </li>
            <li className="flex justify-between">
              <span>신한은행</span>
              <span className="text-green-600">코딩테스트</span>
              <span className="text-red-600">면접</span>
            </li>
            <li className="flex justify-between">
              <span>네이버</span>
              <span className="text-green-600">서류</span>
            </li>
            <li className="flex justify-between">
              <span>LG CNS</span>
              <span className="text-red-600">면접</span>
            </li>
            <li className="flex justify-between">
              <span>AWS</span>
              <span className="text-green-600">서류</span>
              <span className="text-blue-600">인적성검사</span>
              <span className="text-gray-500">코딩테스트</span>
            </li>
          </ul>
        </div>

        {isModalOpen && (
          <Modal
            onClose={handleCloseModal}
            title="나만의 서포터 만들기"
            content={isSelectingDeficiencies ? selectionContent : initialContent}
            footer={footer}
          />
        )}
        {/* 모달
        {isModalOpen && <SupporterModal onClose={handleCloseModal} />} */}
      </div>
    </div>
  );
}

export default CalendarPage;
