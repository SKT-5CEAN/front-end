import TitleList from "@/components/TitleList/TitleList";

function CompanyList() {
  return (
    <div className="flex flex-col justify-between">
      <TitleList
        title="지원 중인 기업"
        list={["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]}
      />
      <TitleList title="지원 완료 기업" list={["a", "b", "c"]} />
    </div>
  );
}

export default CompanyList;
