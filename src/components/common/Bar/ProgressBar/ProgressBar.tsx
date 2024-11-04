import { ProgressBarProps } from "./progressBar.type";

function ProgressBar(props: ProgressBarProps) {
  const { processData } = props;

  return (
    <div className="w-full h-[106px] bg-gray-200 rounded-xl flex">
      <div></div>
      {processData.length > 0 &&
        processData.map((el, idx) => <div key={idx}>{el.name}</div>)}
    </div>
  );
}

export default ProgressBar;
