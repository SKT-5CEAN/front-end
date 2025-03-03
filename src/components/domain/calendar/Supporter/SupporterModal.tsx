"use client";
import { useState } from "react";
import { SupporterModalProps } from "./supporterModal.type";

function SupporterModal(props: SupporterModalProps) {
  const { onClose } = props;
  const [isSelectingDeficiencies, setIsSelectingDeficiencies] = useState(false);
  const [selectedDeficiencies, setSelectedDeficiencies] = useState<string[]>([]);

  const handleSelectDeficiencies = () => {
    setIsSelectingDeficiencies(true);
  };

  const handleDeficiencyClick = (deficiency: string) => {
    if (selectedDeficiencies.includes(deficiency)) {
      setSelectedDeficiencies(selectedDeficiencies.filter((item) => item !== deficiency));
    } else if (selectedDeficiencies.length < 3) {
      setSelectedDeficiencies([...selectedDeficiencies, deficiency]);
    }
  };

  const isButtonEnabled = selectedDeficiencies.length === 3;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        
        {isSelectingDeficiencies ? (
          <div className="flex flex-col items-center">
            <div className="bg-green-300 rounded-full w-16 h-16 mb-4"></div>
            <h2 className="text-2xl font-semibold mb-2">나만의 서포터 만들기</h2>
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
            <button
              onClick={onClose}
              disabled={!isButtonEnabled}
              className={`px-4 py-2 rounded-lg transition ${
                isButtonEnabled
                  ? "bg-gray-800 text-white hover:bg-gray-900"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              서포터 만들기
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="bg-green-300 rounded-full w-16 h-16 mb-4"></div>
            <h2 className="text-2xl font-semibold mb-2">나만의 서포터 만들기</h2>
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
            <button
              onClick={handleSelectDeficiencies}
              className="bg-green-200 text-green-800 px-4 py-2 rounded-lg hover:bg-green-300 transition"
            >
              부족한 점 고르기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupporterModal;
