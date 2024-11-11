"use client";
import ActiveBox from "@/components/common/Box/ActiveBox/ActiveBox";
import { INTERVIEW_KIND } from "@/constants/interviewKind";
import { useSearchParams } from "next/navigation";
import InterviewList from "../InterviewList/InterviewList";

function CompanyInterview() {
  const params = useSearchParams();

  return (
    <div className="w-full h-full flex flex-wrap gap-x-12 gap-y-10 mx-5 my-10">
      {!params.get("interview_kind") &&
        INTERVIEW_KIND.map((el, idx) => (
          <ActiveBox
            key={idx}
            boxText={el.text}
            boxDesc={el.desc}
            kind={el.kind}
          />
        ))}
      {params.get("interview_kind") && (
        <InterviewList kind={params.get("interview_kind") ?? ""} />
      )}
    </div>
  );
}

export default CompanyInterview;
