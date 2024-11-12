"use client";
import { useEffect, useState } from "react";
import { ProgressBarProps, ProgressDataType } from "./progressBar.type";
import { STATUS_LABEL } from "@/constants/companyStatus";
import { usePathname } from "next/navigation";

function ProgressBar({ processData, basePath }: ProgressBarProps & { basePath: string }) {
  const pathname = usePathname();
  const [clickedProcess, setClickedProcess] = useState<
    "" | ProgressDataType["name"]
  >("");
  const [inputProcessData, setInputProcessData] = useState(processData);
  const [companyName, setCompanyName] = useState("");

  useEffect(function setCompany() {
    setCompanyName(extractSegment(pathname, basePath));
  }, [pathname, basePath]);

  /** 클릭 시에 상태 버튼 보여주고, 재클릭 시에 상태 버튼 가려주는 함수 */
  const handleClick = (name: string) => {
    if (clickedProcess === name) {
      setClickedProcess("");
      return;
    }

    if (clickedProcess !== name) {
      setClickedProcess(name);
      return;
    }
  };

  /** 해당 요소의 상태 외에 2가지 상태 버튼을 보여주는 함수 */
  // 예시: 요소가 '불합격' 상태이면, 클릭 시에 '합격', '대기중' 버튼이 나타남
  const getStatusOptions = (currentStatus: ProgressDataType["status"]) => {
    const options = Object.keys(STATUS_LABEL).filter(
      (status) => status !== currentStatus
    ) as ProgressDataType["status"][];
    return options;
  };

  /** 선택한 상태로 업데이트 하고, 상태 버튼 가려주는 함수 */
  const updateStatus = (name: string, status: ProgressDataType["status"]) => {
    setInputProcessData((prevData) =>
      prevData.map((item) => (item.name === name ? { ...item, status } : item))
    );
    setClickedProcess("");
  };

  /** 경로에서 기업명 가져오는 함수 */
  const extractSegment = (url: string, basePath: string): string => {
    const regex = new RegExp(`${basePath}/([^/]+)`);
    const match = url.match(regex);
    return match ? match[1] : "";
  };

  return (
    <div className="relative w-full h-[183px] bg-[url('/progress-gradient.png')] bg-cover rounded-xl flex items-center p-10 justify-between drop-shadow-md border border-neutral-200">
      <p className="absolute font-bold text-4xl">{companyName}</p>
      <div className="w-[800px] h-[72px] absolute right-10 flex justify-center items-center">
        <div className="w-[700px] h-[1px] bg-black absolute"></div>
        <div className="w-[750px] h-20 flex justify-between absolute">
          {inputProcessData.length > 0 &&
            inputProcessData.map((el, idx) => (
              <div
                key={idx}
                className="h-18 flex flex-col justify-end items-center relative"
              >
                <button
                  className="cu-progress-btn"
                  onClick={() => handleClick(el.name)}
                >
                  {idx + 1}
                </button>
                <p>{el.name}</p>
                {clickedProcess === el.name && (
                  <div className="absolute w-24 h-16 p-2 bg-white top-14 rounded-xl flex flex-col border border-black">
                    {getStatusOptions(el.status).map((option) => (
                      <button
                        key={option}
                        className="cursor-pointer"
                        onClick={() => updateStatus(el.name, option)}
                      >
                        {STATUS_LABEL[option]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
