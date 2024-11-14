export interface InfoBoxProps {
  kind: "REVIEW" | "RECAP" | "BOOKMARK"; // 회고, 복기, 북마크 탭 종류
}

export interface InfoType {
  title: string;
  desc: string;
  bgColor: string;
  titleColor: string;
  descColor: string;
  iconColor: string;
}
