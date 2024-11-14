"use client";
import ActiveBox from "@/components/common/Box/ActiveBox/ActiveBox";
import { RECAP_LIST } from "@/constants/recapList";
import { useSearchParams } from "next/navigation";
import RecapBox from "@/components/common/Box/RecapBox/RecapBox";
import RecapList from "../RecapList/RecapList";
import InfoBox from "../InfoBox/InfoBox";

function MyRecap() {
  const params = useSearchParams();

  return (
    <div className="w-full h-full flex flex-wrap gap-x-12 gap-y-10 mx-5 my-10">
      <InfoBox kind="RECAP" />
      {!params.get("recap_kind") &&
        RECAP_LIST.map((el, idx) => (
          <RecapBox
            key={idx}
            boxText={el.text}
            boxDesc={el.desc}
            kind={el.kind}
          />
        ))}
      {params.get("recap_kind") && (
        <RecapList kind={params.get("recap_kind") ?? ""} />
      )}
    </div>
  );
}

export default MyRecap;
