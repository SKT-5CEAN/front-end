import { ProgressDataType } from "@/components/common/Bar/ProgressBar/progressBar.type";

export const STATUS_LABEL: { [key in ProgressDataType["status"]]: string } = {
  pass: "합격",
  pending: "대기중",
  fail: "불합격",
};
