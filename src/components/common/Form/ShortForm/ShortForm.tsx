import { ShortFormProps } from "./shortForm.type";

function ShortForm(props: ShortFormProps) {
  const {
    name,
    title,
    trigger,
    placeholder = "내용을 작성해 주세요.",
    content,
    setContent,
  } = props;

  return (
    <div>
      <p>{title}</p>
      {!trigger && <p>{content}</p>}
      {trigger && (
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
      )}
    </div>
  );
}

export default ShortForm;
