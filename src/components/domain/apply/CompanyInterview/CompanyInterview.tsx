import ActiveBox from "@/components/common/Box/ActiveBox/ActiveBox";
import { INTERVIEW_KIND } from "@/constants/interviewKind";

function CompanyInterview() {
  return (
    <div className="w-full h-full flex flex-wrap gap-x-12 justify-center items-center pb-14">
      {INTERVIEW_KIND.map((el, idx) => (
        <ActiveBox key={idx} boxText={el.text} link={el.link} />
      ))}
    </div>
  );
}

export default CompanyInterview;
