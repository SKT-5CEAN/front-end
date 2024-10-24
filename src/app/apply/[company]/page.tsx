import CompanyList from "@/components/domain/apply/CompanyList";
import Tab from "@/components/domain/apply/Tab/Tab";

function ApplyCompanyPage() {
  const tabList = [
    {
      triggerName: "기업 조사",
      contentNode: <div>기업 조사</div>,
    },
    {
      triggerName: "서류 준비",
      contentNode: <div>서류 준비</div>,
    },
    {
      triggerName: "면접 준비",
      contentNode: <div>면접 준비</div>,
    },
  ];

  return (
    <div className="pt-32 pb-4 px-11 flex justify-between">
      <section className="flex flex-col justify-between">
        <CompanyList />
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
