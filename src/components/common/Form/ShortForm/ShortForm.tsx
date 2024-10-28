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
    <div className="min-h-24 flex flex-col gap-2">
      <p className="text-3xl text-lime-400 font-bold">{title}</p>
      {!trigger && (
        <p className="text-2xl text-stone-400">
          {content || "아직 작성된 정보가 없습니다."}
        </p>
      )}
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
