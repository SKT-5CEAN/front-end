export interface TitleListProps {
  title: string;
  list: Array<string>;
  state: string;
  setState: (state: string) => void;
  queryParams: string;
}
