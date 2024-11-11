import { Root, Item, Trigger, Content } from "@radix-ui/react-accordion";
import { AccordionProps } from "./accordion.type";
import Image from "next/image";

function Accordion(props: AccordionProps) {
  const { items, triggerFontSize } = props;

  return (
    <Root className="w-full flex flex-col p-4 rounded-md" type="multiple">
      {items.length > 0 &&
        items.map((el, idx) => (
          <Item
            className={`w-full border ${el.disabled ? "bg-gray-300" : "bg-white"} first:rounded-t-md last:rounded-b-md`}
            key={idx}
            value={`item-${idx}`}
            disabled={el.disabled}
          >
            <Trigger
              className={`group flex text-${triggerFontSize} transition-colors duration-300 data-[state=open]:text-blue-600 w-full gap-4 p-4 text-left justify-start items-center`}
            >
              <Image
                className="duration-300 ease-in-out group-data-[state=open]:rotate-180"
                src="/ic-arrow.png"
                alt="토글 화살표"
                width={16}
                height={16}
              />
              <p className="max-w-3xl">{el.title}</p>
            </Trigger>
            <Content className="h-fit overflow-hidden p-4 pl-12 text-gray-500 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
              {el.content}
            </Content>
          </Item>
        ))}
    </Root>
  );
}

export default Accordion;
