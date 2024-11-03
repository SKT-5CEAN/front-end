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

  return (
    <div className="pt-32 pb-4 px-11 flex justify-between">
      <section className="flex flex-col justify-between">
        <CompanyList selectedCompany={params.company} />
      </section>
      <section>
        <div className="w-[64.0625rem] h-[53.75rem] border-4">
          <Tab tabList={tabList} />
        </div>
      </section>
    </div>
  );
}

export default ApplyCompanyPage;
