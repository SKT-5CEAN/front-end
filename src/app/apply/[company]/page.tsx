import TitleList from "@/components/TitleList/TitleList";

function ApplyCompanyPage() {
  return (
    <div className="pt-32 pb-4 px-11 flex justify-between">
      <section className="flex flex-col justify-between">
        <TitleList
          title="지원 중인 기업"
          list={[
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
          ]}
        />
        <TitleList title="지원 완료 기업" list={["a", "b", "c"]} />
      </section>
      <section>
        <div className="w-[64.0625rem] h-[53.75rem] border-4"></div>
      </section>
    </div>
  );
}

export default ApplyCompanyPage;
