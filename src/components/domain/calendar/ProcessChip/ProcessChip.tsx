import { ProcessChipProps } from "./processChip.type";

function ProcessChip(props: ProcessChipProps) {
  const { company, process, processColor } = props;

  return (
    <div className="flex">
      <p>{company}</p>
      <div className={`bg-${processColor}`}>{process}</div>
    </div>
  );
}

export default ProcessChip;
