"use client";

import TitleList from "@/components/TitleList/TitleList";
import { useCompanyStore } from "@/store/useCompanyStore";
import { useEffect } from "react";

function CompanyList() {
  const { inProgressList, setInProgress, completedList, setCompleted } =
    useCompanyStore();

  useEffect(() => {
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
      <TitleList title="지원 중인 기업" list={inProgressList} />
      <TitleList title="지원 완료 기업" list={completedList} />
    </div>
  );
}

export default CompanyList;
