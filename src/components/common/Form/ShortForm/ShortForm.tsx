import { ShortFormProps } from "./shortForm.type";

function ShortForm(props: ShortFormProps) {
  const { name, title, placeholder = "내용을 작성해 주세요.", setText } = props;

  return (
    <div>
      <p>{title}</p>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={(e) => setText(e.currentTarget.value)}
      ></textarea>
    </div>
  );
}

export default ShortForm;
