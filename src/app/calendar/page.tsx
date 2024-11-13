"use client";
import React, { useState } from "react";
import MainCalendar from "@/components/domain/calendar/Calendar/MainCalendar";
import SupporterButton from "@/components/domain/calendar/Supporter/SupporterButton";
import SupporterModal from "@/components/domain/calendar/Supporter/SupporterModal";
import { COMPANY_AND_PROCESS } from "@/constants/dummy/calendar/process";
import ProcessChip from "@/components/domain/calendar/ProcessChip/ProcessChip";

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

        <div className="mt-4 p-4 border border-yellow-300 rounded-lg bg-yellow-50">
          <h3 className="text-xl font-semibold mb-4">9월 예정 일정</h3>
          <ul className="space-y-2">
            {COMPANY_AND_PROCESS.map((el, idx) => (
              <li className="w-full" key={idx}>
                <ProcessChip company={el.company} process={el.process} />
              </li>
            ))}
          </ul>
        </div>

        {/* 모달 */}
        {isModalOpen && <SupporterModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default CalendarPage;
