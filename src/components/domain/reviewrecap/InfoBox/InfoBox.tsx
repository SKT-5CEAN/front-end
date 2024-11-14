import {
  BOOKMARK_INFO_BOX,
  RECAP_INFO_BOX,
  REVIEW_INFO_BOX,
} from "@/constants/infoBoxKind";
import { InfoBoxProps, InfoType } from "./infoBox.type";

function InfoBox(props: InfoBoxProps) {
  const { kind } = props;

  const infoBoxMap: Record<InfoBoxProps["kind"], InfoType> = {
    REVIEW: REVIEW_INFO_BOX,
    RECAP: RECAP_INFO_BOX,
    BOOKMARK: BOOKMARK_INFO_BOX,
  };

  const info = infoBoxMap[kind];

  return (
    <div
      className={`w-[1002px] h-[84px] flex ${info.bgColor} rounded-xl p-4 items-center gap-5`}
    >
      <div className={`w-10 h-10 rounded-full ${info.iconColor}`}></div>
      <div className="tracking-wide">
        <p className={`text-lg font-semibold ${info.titleColor}`}>
          {info.title}
        </p>
        <p className={`${info.descColor}`}>{info.desc}</p>
      </div>
    </div>
  );
}

export default InfoBox;
