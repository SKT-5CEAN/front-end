export interface TabElType {
  triggerName: string;
  contentNode: React.ReactNode;
}

export interface TabProps {
  tabList: Array<TabElType>;
}
