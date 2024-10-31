import { Root, Item, Trigger, Content } from "@radix-ui/react-accordion";
import { AccordionProps } from "./accordion.type";

function Accordion(props: AccordionProps) {
  const { items, triggerFontSize } = props;

  return (
    <Root className="w-full flex flex-col gap-4 p-4" type="multiple">
      {items.length > 0 &&
        items.map((el, idx) => (
          <Item
            className={`w-full border ${el.disabled ? "bg-gray-300" : "bg-lime-300"} rounded-2xl`}
            key={idx}
            value={`item-${idx}`}
            disabled={el.disabled}
          >
            <Trigger className={`text-${triggerFontSize} w-full p-4 text-left	`}>
              {el.title}
            </Trigger>
            <Content className="p-4 bg-lime-500">{el.content}</Content>
          </Item>
        ))}
    </Root>
  );
}

export default Accordion;
