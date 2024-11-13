import { ReactNode } from "react";

export interface ModalProps {
  onClose: () => void;
  title: string;
  content: ReactNode;
  footer?: ReactNode;
}