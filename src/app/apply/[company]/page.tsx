import CompanyList from "@/components/domain/apply/CompanyList";

function ApplyCompanyPage() {
  return (
    <div className="pt-32 pb-4 px-11 flex justify-between">
      <section className="flex flex-col justify-between">
        <CompanyList />
      </section>
      <section>
        <div className="w-[64.0625rem] h-[53.75rem] border-4"></div>
      </section>
    </div>
  );
}

export default ApplyCompanyPage;
