import { Dispatch, SetStateAction } from "react";

export interface CompanyInputProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
