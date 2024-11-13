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

        {/* 모달 */}
        {isModalOpen && <SupporterModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default CalendarPage;
