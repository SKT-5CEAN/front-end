"use client";
import { useState } from "react";
import { ProgressBarProps, ProgressDataType } from "./progressBar.type";
import { STATUS_LABEL } from "@/constants/companyStatus";

function ProgressBar(props: ProgressBarProps) {
  const { processData } = props;
  const [clickedProcess, setClickedProcess] = useState<
    "" | ProgressDataType["name"]
  >("");
  const [inputProcessData, setInputProcessData] = useState(processData);
  // 그리고 화면 나갈 때 trigger 줘서 api 전송

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

  const getStatusOptions = (currentStatus: ProgressDataType["status"]) => {
    const options = Object.keys(STATUS_LABEL).filter(
      (status) => status !== currentStatus
    ) as ProgressDataType["status"][];
    return options;
  };

  const updateStatus = (name: string, status: ProgressDataType["status"]) => {
    setInputProcessData((prevData) =>
      prevData.map((item) => (item.name === name ? { ...item, status } : item))
    );
    setClickedProcess("");
  };

  return (
    <div className="w-full h-[106px] bg-gray-200 rounded-xl flex justify-center items-center relative">
      <div className="w-[920px] h-[1px] bg-black absolute"></div>
      <div className="w-[970px] h-20 flex absolute justify-between">
        {inputProcessData.length > 0 &&
          inputProcessData.map((el, idx) => (
            <div
              key={idx}
              className="h-18 flex flex-col justify-end items-center relative"
            >
              <div
                onClick={() => handleClick(el.name)}
                className={`w-8 h-8 rounded-full ${el.status === "pass" && "bg-blue-600"} ${el.status === "fail" && "bg-red-600"} ${el.status === "pending" && "bg-gray-600"} bg-opacity-50 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2`}
              ></div>
              <div
                onClick={() => handleClick(el.name)}
                className="w-4 h-4 rounded-full bg-black absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>
              <div>{el.name}</div>
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
  );
}

export default ProgressBar;
