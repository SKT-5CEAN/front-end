import ActiveBox from "@/components/common/Box/ActiveBox/ActiveBox";
import { INTERVIEW_KIND } from "@/constants/interviewKind";

function CompanyInterview() {
  return (
    <div className="w-full h-full flex flex-wrap">
      {INTERVIEW_KIND.map((el, idx) => (
        <ActiveBox
          key={idx}
          boxText={el.text}
          active={el.active}
          activeLink={el.activeLink}
        />
      ))}
    </div>
  );
}

export default CompanyInterview;
