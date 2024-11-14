"use client";
import TitleList from "@/components/common/TitleList/TitleList";
import { COMPANY_KEY } from "@/constants/companyKey";
import { useCompanyStore } from "@/store/useCompanyStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function CompanyList({ selectedCompany, basePath }: { selectedCompany: string, basePath: string }) {
  const {
    inProgressList,
    setInProgress,
    completedList,
    setCompleted,
    inProgressCompany,
    setInProgressCompany,
    completedCompany,
    setCompletedCompany,
  } = useCompanyStore();
  const params = useSearchParams();

  useEffect(function setSelectedCompany() {
    const state = params.get("state");
    if (state) {
      if (state === COMPANY_KEY.inProgressCompany) {
        setInProgressCompany(selectedCompany);
        return;
      }

      if (state === COMPANY_KEY.completedCompany) {
        setCompletedCompany(selectedCompany);
        return;
      }
    }
  }, []);

  useEffect(() => {
    // 추후 api 나오면 react-query 로직으로 교체
    setInProgress([
      "SKT",
      "네이버",
      "카카오",
      "AWS",
      "신한은행"
    ]);
    setCompleted(["삼성전자", "LG전자", "KT"]);
  }, []);

  return (
    <div className="flex flex-col gap-[40px]">
      <TitleList
        title="지원 중인 기업"
        listType={COMPANY_KEY.inProgressCompany}
        list={inProgressList}
        state={inProgressCompany}
        setState={setInProgressCompany}
        queryParams={`state=${COMPANY_KEY.inProgressCompany}&company=${selectedCompany}`}
        basePath={basePath}
      />
      <TitleList
        title="지원 완료 기업"
        listType={COMPANY_KEY.completedCompany}
        list={completedList}
        state={completedCompany}
        setState={setCompletedCompany}
        queryParams={`state=${COMPANY_KEY.inProgressCompany}&company=${selectedCompany}`}
        basePath={basePath}
      />
    </div>
  );
}

export default CompanyList;
