"use client";

import Modal from "@/components/common/Modal/Modal";
import ReviewSummary from "./ReviewSummary";
import { useCompanyReviewStore } from "@/store/useCompanyReviewStore";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const stages: string[] = ["서류", "필기", "AI 면접", "1차 면접", "2차 면접", "최종 합격"];

function MyReview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [preparationAnswer, setPreparationAnswer] = useState<string | null>(null);
  const [difficultyAnswer, setDifficultyAnswer] = useState<string | null>(null);
  const [strengthAnswer, setStrengthAnswer] = useState<string | null>(null);
  const [weaknessAnswer, setWeaknessAnswer] = useState<string | null>(null);
  const [isSummaryView, setIsSummaryView] = useState(false);
  const [currentStage, setCurrentStage] = useState<string | null>(null);

  const params = useSearchParams();
  const companyId = params.get("company") || ""; // URL에서 companyId를 가져옴

  const { addReviewData, getCompanyReviews } = useCompanyReviewStore();
  const reviewData = getCompanyReviews(companyId);


  const openModal = (stageName: string) => {
    setIsModalOpen(true);
    setCurrentStep(1);
    setPreparationAnswer(null);
    setDifficultyAnswer(null);
    setStrengthAnswer(null);
    setWeaknessAnswer(null);
    setCurrentStage(stageName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setPreparationAnswer(null);
    setDifficultyAnswer(null);
    setStrengthAnswer(null);
    setWeaknessAnswer(null);
    setCurrentStage(null);
  };

  const handleAnswerSelect = (answer: string) => {
    switch (currentStep) {
      case 1:
        setPreparationAnswer(answer);
        break;
      case 2:
        setDifficultyAnswer(answer);
        break;
      case 3:
        setStrengthAnswer(answer);
        break;
      case 4:
        setWeaknessAnswer(answer);
        break;
      default:
        break;
    }
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      saveReviewData();
      closeModal();
    }
  };

  const saveReviewData = () => {
    const data = {
      stageName: currentStage || "서류",
      preparation: preparationAnswer || "",
      difficulty: difficultyAnswer || "",
      strength: strengthAnswer || "",
      weakness: weaknessAnswer || "",
    };
    addReviewData(companyId, data);
  };

  const showSummaryView = () => {
    setIsSummaryView(true);
  };

  const modalContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <p className="text-center text-gray-700 mb-6">
              준비 과정은 얼마나 소요되었나요?
            </p>
            <div className="flex gap-4">
              {["충분했다", "적당했다", "촉박했다"].map((answer) => (
                <button
                  key={answer}
                  className={`border p-2 rounded-lg ${
                    preparationAnswer === answer ? "bg-green-200" : "text-gray-700"
                  }`}
                  onClick={() => handleAnswerSelect(answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <p className="text-center text-gray-700 mb-6">
              난이도는 어땠나요?
            </p>
            <div className="flex gap-4">
              {["쉬웠다", "적당했다", "어려웠다"].map((answer) => (
                <button
                  key={answer}
                  className={`border p-2 rounded-lg ${
                    difficultyAnswer === answer ? "bg-green-200" : "text-gray-700"
                  }`}
                  onClick={() => handleAnswerSelect(answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <p className="text-center text-gray-700 mb-6">
              전형 동안 잘한 점이 있다면 무엇이었나요?
            </p>
            <textarea
              className="border w-full p-2 rounded-lg"
              placeholder="내용을 입력하세요"
              value={strengthAnswer || ""}
              onChange={(e) => setStrengthAnswer(e.target.value)}
            />
          </>
        );
      case 4:
        return (
          <>
            <p className="text-center text-gray-700 mb-6">
              전형 동안 부족한 점이 있다면 무엇이었나요?
            </p>
            <textarea
              className="border w-full p-2 rounded-lg"
              placeholder="내용을 입력하세요"
              value={weaknessAnswer || ""}
              onChange={(e) => setWeaknessAnswer(e.target.value)}
            />
          </>
        )
      default:
        return null;
    }
  };

  return (
    <div className="p-20">
      <h2 className="text-2xl font-semibold mb-6">회고 / 복기 - {companyId}</h2>
      <div className="flex gap-4">
        {stages.map((stage, idx) => (
          <button
            key={idx}
            onClick={() => openModal(stage)}
            className={`px-4 py-2 rounded-lg ${
              reviewData.find((data) => data.stageName === stage)
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {reviewData.find((data) => data.stageName === stage)
              ? `${stage} 회고 완료`
              : `${stage} 회고 시작하기`}
          </button>
        ))}
      </div>

      <button
        onClick={showSummaryView}
        className="mt-4 px-4 py-2 rounded-lg bg-green-200 text-green-800 hover:bg-green-300"
      >
        모아보기
      </button>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title={`[${currentStage}] 회고`}
          content={modalContent()}
          footer={
            <div className="flex gap-4">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  이전
                </button>
              )}
              <button
                onClick={handleNextStep}
                disabled={
                  !(
                    (currentStep === 1 && preparationAnswer) ||
                    (currentStep === 2 && difficultyAnswer) ||
                    (currentStep === 3 && strengthAnswer) ||
                    (currentStep === 4 && weaknessAnswer)
                  )
                }
                className={`px-4 py-2 rounded-lg ${
                  (currentStep === 1 && preparationAnswer) ||
                  (currentStep === 2 && difficultyAnswer) ||
                  (currentStep === 3 && strengthAnswer) ||
                  (currentStep === 4 && weaknessAnswer)
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {currentStep < 4 ? "다음" : "완료"}
              </button>
            </div>
          }
        />
      )}

      {isSummaryView && <ReviewSummary data={reviewData} />}
    </div>
  );
}

export default MyReview;
