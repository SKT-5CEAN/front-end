import ProgressBar from "@/components/common/Bar/ProgressBar/ProgressBar";
import { ProgressDataType } from "@/components/common/Bar/ProgressBar/progressBar.type";
import CompanyInterview from "@/components/domain/apply/CompanyInterview/CompanyInterview";
import CompanyList from "@/components/common/CompanyList/CompanyList";
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
      contentNode: <CompanyInterview />,
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
    <div className="h-full pt-32 pb-4 px-11 flex justify-between bg-neutral-100">
      <section className="h-full flex flex-col">
        <CompanyList selectedCompany={params.company} basePath="/apply"/>
      </section>
      <section className="min-h-[990px] h-full flex flex-col gap-[14px]">
        <ProgressBar processData={processList} basePath="/apply" />
        <div className="w-[1114px] min-h-[750px] border-4 flex justify-center rounded-2xl px-10 py-5 bg-white">
          <Tab tabList={tabList} />
        </div>
      </section>
    </div>
  );
}

export default ApplyCompanyPage;
