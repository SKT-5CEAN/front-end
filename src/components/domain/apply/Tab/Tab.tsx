import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import { TabProps } from "./tab.type";

function Tab(props: TabProps) {
  const { tabList } = props;

  return (
    <Root className="w-[35rem] border border-red-300" defaultValue="tab1">
      <List className="flex border border-blue-300">
        {tabList.map((el) => (
          <Trigger
            className="grow border border-r-black-200 data-[state=active]:font-bold data-[state=active]:border-b-black"
            key={el.triggerName}
            value={el.triggerName}
          >
            {el.triggerName}
          </Trigger>
        ))}
      </List>
      {tabList.map((el) => (
        <Content key={el.triggerName} value={el.triggerName}>
          {el.contentNode}
        </Content>
      ))}
    </Root>
  );
}

export default Tab;
