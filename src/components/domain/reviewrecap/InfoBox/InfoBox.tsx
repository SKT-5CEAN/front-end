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

  return <div className={`w-[1002px] h-[84px] ${info.bgColor}`}></div>;
}

export default InfoBox;
