import ActiveBox from "@/components/common/Box/ActiveBox/ActiveBox";
import { INTERVIEW_KIND } from "@/constants/interviewKind";

function CompanyInterview() {
  return (
    <div className="w-full h-full flex flex-wrap gap-x-12 gap-y-10 justify-center items-center mt-10">
      {INTERVIEW_KIND.map((el, idx) => (
        <ActiveBox
          key={idx}
          boxText={el.text}
          boxDesc={el.desc}
          kind={el.kind}
        />
      ))}
    </div>
  );
}

export default CompanyInterview;
