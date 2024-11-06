import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import { TabProps } from "./tab.type";

function Tab(props: TabProps) {
  const { tabList } = props;

  return (
    <Root className="h-full" defaultValue={tabList[0].triggerName}>
      <List className="flex border border-blue-300">
        {tabList.map((el) => (
          <Trigger
            className="w-[20rem] h-[3.125rem] grow border border-r-black-200 data-[state=active]:font-bold data-[state=active]:border-b-black text-2xl"
            key={el.triggerName}
            value={el.triggerName}
          >
            {el.triggerName}
          </Trigger>
        ))}
      </List>
      {tabList.map((el) => (
        <Content className="h-full" key={el.triggerName} value={el.triggerName}>
          {el.contentNode}
        </Content>
      ))}
    </Root>
  );
}

export default Tab;
