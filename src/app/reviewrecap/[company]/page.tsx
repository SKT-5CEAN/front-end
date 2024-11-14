import ProgressBar from "@/components/common/Bar/ProgressBar/ProgressBar";
import { ProgressDataType } from "@/components/common/Bar/ProgressBar/progressBar.type";
import CompanyList from "@/components/common/CompanyList/CompanyList";
import Tab from "@/components/domain/apply/Tab/Tab";
import MyReview from "@/components/domain/reviewrecap/MyReview/MyReview";
import MyRecap from "@/components/domain/reviewrecap/MyRecap/MyRecap";
import BookMark from "@/components/domain/reviewrecap/BookMark/BookMark";

function ApplyCompanyPage({ params }: { params: { company: string } }) {
  {/* contentNode 바뀌어야해요 */}
  const tabList = [
    {
      triggerName: "나의 회고",
      contentNode: <MyReview />,
    },
    {
      triggerName: "나의 복기",
      contentNode: <MyRecap />,
    },
    {
      triggerName: "북마크",
      contentNode: <BookMark />,
    },
  ];

  {/* 여기도 바꿀것 */}
  const processList: Array<ProgressDataType> = [
    {
      name: "서류 전형",
      status: "pass",
    },
    {
      name: "인적성 검사",
      status: "pass",
    },
    {
      name: "1차 면접",
      status: "pending",
    },
    {
      name: "2차 면접",
      status: "pending",
    },
    {
      name: "결과 발표",
      status: "pending",
    },
  ];

  return (
    <div className="w-full h-full flex justify-between px-[120px] py-[124px] bg-neutral-100">
      <section className="h-full flex flex-col">
        <CompanyList selectedCompany={params.company} basePath="/reviewrecap"/>
      </section>
      <section className="min-h-[990px] h-full flex flex-col gap-[14px]">
        <ProgressBar processData={processList} basePath="/reviewrecap"/>
        <div className="w-[1114px] min-h-[750px] border-4 flex justify-center rounded-2xl px-10 py-5 bg-white">
          <Tab tabList={tabList} />
        </div>
      </section>
    </div>
  );
}

export default ApplyCompanyPage;
