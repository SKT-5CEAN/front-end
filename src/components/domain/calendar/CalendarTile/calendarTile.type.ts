import { ProcessChipProps } from "../ProcessChip/processChip.type";

export interface DroppedItemsType extends ProcessChipProps {
  date: Date;
}

export interface CalendarTileProps {
  date: Date;
  droppedItems: Array<DroppedItemsType>;
  onDrop: (props: DroppedItemsType) => void;
}
