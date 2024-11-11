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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  return (
    <div className="w-full min-h-24 h-full flex flex-col gap-6">
      <p className="text-3xl text-lime-500 font-bold">{title}</p>
      {!trigger && (
        <p className="text-2xl text-stone-400 pl-5">
          {content || "내용을 입력해 주세요."}
        </p>
      )}
      {trigger && (
        <textarea
          name={name}
          placeholder={placeholder}
          className="w-full min-h-28 border border-gray-200 p-3 rounded-xl focus:outline-blue-500"
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default ShortForm;
