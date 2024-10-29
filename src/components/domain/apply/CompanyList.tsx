"use client";
import TitleList from "@/components/TitleList/TitleList";
import { SESSION_STORAGE_KEY } from "@/constants/sessionKey";
import { useCompanyStore } from "@/store/useCompanyStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function CompanyList({ selectedCompany }: { selectedCompany: string }) {
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
      if (state === SESSION_STORAGE_KEY.inProgressCompany) {
        setInProgressCompany(selectedCompany);
        return;
      }

      if (state === SESSION_STORAGE_KEY.completedCompany) {
        setCompletedCompany(selectedCompany);
        return;
      }
    }
  }, []);

  useEffect(() => {
    // 추후 api 나오면 react-query 로직으로 교체
    setInProgress([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
    ]);
    setCompleted(["a", "b", "c"]);
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <TitleList
        title="지원 중인 기업"
        list={inProgressList}
        state={inProgressCompany}
        setState={setInProgressCompany}
        queryParams={`state=${SESSION_STORAGE_KEY.inProgressCompany}`}
      />
      <TitleList
        title="지원 완료 기업"
        list={completedList}
        state={completedCompany}
        setState={setCompletedCompany}
        queryParams={`state=${SESSION_STORAGE_KEY.completedCompany}`}
      />
    </div>
  );
}

export default CompanyList;
