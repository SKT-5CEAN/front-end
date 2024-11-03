import { useResumeStore } from "@/store/useResumeStore";
import { useState } from "react";
import ResumeItem from "../ResumeItem/ResumeItem";

function ResumeItemList() {
  const { resumeData } = useResumeStore();
  const [inputResume, setInputResume] = useState(resumeData);

  return (
    <div>
      {inputResume &&
        inputResume.length > 0 &&
        inputResume.map((el, idx) => (
          <ResumeItem key={idx} title={el.question} content={el.content} />
        ))}
      <ResumeItem />
    </div>
  );
}

export default ResumeItemList;
