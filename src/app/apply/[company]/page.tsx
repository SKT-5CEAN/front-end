import ProgressBar from "@/components/common/Bar/ProgressBar/ProgressBar";
import { ProgressDataType } from "@/components/common/Bar/ProgressBar/progressBar.type";
import CompanyList from "@/components/domain/apply/CompanyList/CompanyList";
import CompanyResearch from "@/components/domain/apply/CompanyResearch/CompanyResearch";
import CompanyResume from "@/components/domain/apply/CompanyResume/CompanyResume";
import Tab from "@/components/domain/apply/Tab/Tab";

function ApplyCompanyPage({ params }: { params: { company: string } }) {
  const tabList = [
    {
      triggerName: "기업 조사",
      contentNode: <CompanyResearch />,
    },
    {
      triggerName: "서류 준비",
      contentNode: <CompanyResume />,
    },
    {
      triggerName: "면접 준비",
      contentNode: <div>면접 준비</div>,
    },
  ];

  const processList: Array<ProgressDataType> = [
    {
      name: "서류 전형",
      status: "pass",
    },
    {
      name: "인적성 검사",
      status: "pass",
    },
    {
      name: "1차 면접",
      status: "pending",
    },
    {
      name: "2차 면접",
      status: "pending",
    },
    {
      name: "결과 발표",
      status: "pending",
    },
  ];

  return (
    <div className="pt-32 pb-4 px-11 flex justify-between">
      <section className="flex flex-col justify-between">
        <CompanyList selectedCompany={params.company} />
      </section>
      <section>
        <ProgressBar processData={processList} />
        <div className="w-[64.0625rem] h-[750px] border-4">
          <Tab tabList={tabList} />
        </div>
      </section>
    </div>
  );
}

export default ApplyCompanyPage;
