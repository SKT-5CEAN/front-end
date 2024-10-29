export interface ShortFormProps {
  name: string;
  title: string;
  trigger: boolean;
  placeholder?: string;
  content: string;
  setContent: (text: string) => void;
}
