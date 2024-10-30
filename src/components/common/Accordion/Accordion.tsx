import { Root, Item, Trigger, Content } from "@radix-ui/react-accordion";
import { AccordionProps } from "./accordion.type";

function Accordion(props: AccordionProps) {
  const { items, triggerFontSize } = props;

  return (
    <Root type="multiple">
      {items.length > 0 &&
        items.map((el, idx) => (
          <Item value={`item-${idx}`} disabled={el.disabled}>
            <Trigger className={`text-${triggerFontSize}`}>{el.title}</Trigger>
            <Content>{el.content}</Content>
          </Item>
        ))}
    </Root>
  );
}

export default Accordion;
