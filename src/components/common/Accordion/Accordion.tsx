import { Root, Item, Trigger, Content } from "@radix-ui/react-accordion";
import { AccordionProps } from "./accordion.type";
import Image from "next/image";

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
            <Trigger
              className={`group flex text-${triggerFontSize} w-full p-4 text-left justify-between items-center`}
            >
              <p className="max-w-3xl">{el.title}</p>
              <Image
                className="duration-300 ease-in-out group-data-[state=open]:rotate-180"
                src="/ic-arrow.png"
                alt="토글 화살표"
                width={45}
                height={45}
              />
            </Trigger>
            <Content className="h-fit overflow-hidden p-4 bg-lime-500 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
              {el.content}
            </Content>
          </Item>
        ))}
    </Root>
  );
}

export default Accordion;
