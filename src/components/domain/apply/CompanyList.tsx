"use client";
import TitleList from "@/components/TitleList/TitleList";
import { SESSION_STORAGE_KEY } from "@/constants/sessionKey";
import { useCompanyStore } from "@/store/useCompanyStore";
import { useEffect } from "react";

function CompanyList() {
  const { inProgressList, setInProgress, completedList, setCompleted } =
    useCompanyStore();

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
        storageKey={SESSION_STORAGE_KEY.inProgressCompany}
      />
      <TitleList
        title="지원 완료 기업"
        list={completedList}
        storageKey={SESSION_STORAGE_KEY.completedCompany}
      />
    </div>
  );
}

export default CompanyList;
