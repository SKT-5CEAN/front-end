import { InterviewListProps } from "./interviewList.type";

function InterviewList(props: InterviewListProps) {
  const { kind } = props;

  return <div>{kind}</div>;
}

export default InterviewList;
