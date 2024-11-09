"use client";
import React, { useState } from 'react';
import MainCalendar from "@/components/domain/calendar/Calendar/MainCalendar";
import SupporterButton from "@/components/domain/calendar/Supporter/SupporterButton";
import SupporterModal from "@/components/domain/calendar/Supporter/SupporterModal";

function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSupporterButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

        {/* 모달 */}
        {isModalOpen && <SupporterModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default CalendarPage;
