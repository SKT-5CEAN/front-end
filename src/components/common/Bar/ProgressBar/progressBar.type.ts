export interface ProgressDataType {
  name: string; // 전형 이름(ex. 서류전형, 1차면접...)
  status: "pass" | "fail" | "pending"; // 합격, 불합격, 대기중
}

export interface ProgressBarProps {
  processData: Array<ProgressDataType>;
}
