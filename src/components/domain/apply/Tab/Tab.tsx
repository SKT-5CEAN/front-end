import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import { TabProps } from "./tab.type";

function Tab(props: TabProps) {
  const { tabList } = props;

  return (
    <Root
      className="relative w-[1054px] h-full"
      defaultValue={tabList[0].triggerName}
    >
      <List className="relative w-[1054px] flex">
        {tabList.map((el) => (
          <Trigger
            className="h-[3.125rem] grow border border-t-0 border-r-black-200 text-xl text-gray-400 data-[state=active]:border-b-teal-500 border-b-2 data-[state=active]:text-black text-2xl"
            key={el.triggerName}
            value={el.triggerName}
          >
            {el.triggerName}
          </Trigger>
        ))}
      </List>
      {tabList.map((el) => (
        <Content
          className="relative"
          key={el.triggerName}
          value={el.triggerName}
        >
          {el.contentNode}
        </Content>
      ))}
    </Root>
  );
}

export default Tab;
