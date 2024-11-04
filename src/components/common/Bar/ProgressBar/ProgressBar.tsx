import { ProgressBarProps } from "./progressBar.type";

function ProgressBar(props: ProgressBarProps) {
  const { processData } = props;

  return (
    <div className="w-full h-[106px] bg-gray-200 rounded-xl flex justify-center items-center relative">
      <div className="w-[920px] h-[1px] bg-black absolute"></div>
      <div className="w-[970px] h-20 flex absolute justify-between">
        {processData.length > 0 &&
          processData.map((el, idx) => (
            <div
              key={idx}
              className="h-18 flex flex-col justify-end items-center relative"
            >
              <div
                className={`w-8 h-8 rounded-full ${el.status === "pass" && "bg-blue-600"} ${el.status === "fail" && "bg-red-600"} ${el.status === "pending" && "bg-gray-600"} bg-opacity-50 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2`}
              ></div>
              <div className="w-4 h-4 rounded-full bg-black absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div>{el.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProgressBar;
