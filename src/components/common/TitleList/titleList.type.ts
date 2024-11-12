import { COMPANY_KEY } from "@/constants/companyKey";

export interface TitleListProps {
  title: string;
  listType:
    | typeof COMPANY_KEY.inProgressCompany
    | typeof COMPANY_KEY.completedCompany;
  list: Array<string>;
  state: string;
  setState: (state: string) => void;
  queryParams: string;
  basePath: string;
}
