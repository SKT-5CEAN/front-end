import { DroppedItemsType } from "../CalendarTile/calendarTile.type";

export interface CompanyApplication {
  companyName: string; // 기업 이름
  applyType: string; // 전형
}

export interface DateData {
  date: string;
  data: Array<CompanyApplication>;
}

export interface MainCalendarProps {
  droppedItems: Array<DroppedItemsType>;
  handleDrop: (date: Date, company: string, process: string) => void;
}
