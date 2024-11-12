import CompanyList from "@/components/common/CompanyList/CompanyList";

function ReviewRecapPage({ params }: { params: { company: string } }) {
  return (
    <div className="pt-32 pb-4 px-11 flex justify-between bg-neutral-100">
      <section>
        <CompanyList selectedCompany={params.company} basePath="/reviewrecap"/>
      </section>
      <section>
        <div className="w-[64.0625rem] h-[53.75rem] border-4 whitespace-pre flex justify-center items-center">
          <p className="text-3xl text-center">{`왼쪽의 '지원 중인 기업' 목록에서\n회고와 복기를 시작할 기업을 선택해 주세요!`}</p>
        </div>
      </section>
    </div>
  );
}

export default ReviewRecapPage;