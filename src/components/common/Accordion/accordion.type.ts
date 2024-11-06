export interface AccordionItem {
  title: string;
  content: string;
  disabled: boolean;
}

export interface AccordionProps {
  items: Array<AccordionItem>;
  triggerFontSize: string;
}
