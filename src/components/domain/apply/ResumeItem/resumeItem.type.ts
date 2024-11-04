import { ResumeDataType } from "@/store/useResumeStore";

export interface ResumeItemProps {
  title: string;
  content: string;
  onChange: (field: keyof ResumeDataType, value: string) => void;
  onDelete: () => void;
}
