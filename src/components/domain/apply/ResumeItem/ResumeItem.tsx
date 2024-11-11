import Image from "next/image";
import { ResumeItemProps } from "./resumeItem.type";

function ResumeItem({ title, content, onChange, onDelete }: ResumeItemProps) {
  return (
    <div className="w-full flex flex-col gap-4 p-6">
      <div className="w-full flex justify-between">
        <input
          className="w-[959px] h-16 text-xl border border-gray-200 rounded-lg px-3 outline-none"
          type="text"
          placeholder="문항을 입력해 주세요"
          value={title}
          onChange={(e) => onChange("question", e.target.value)}
        />
        <button className="cursor-pointer" onClick={onDelete}>
          <Image
            src="/ic-trash-can.png"
            alt="삭제 버튼"
            width={30}
            height={30}
          />
        </button>
      </div>
      <div className="w-full">
        <textarea
          className="w-full h-[153px] text-xl border border-gray-200 rounded-lg p-4 outline-none"
          placeholder={`답변을 작성해 주세요.\n(문항 제목만 추가하고 싶다면 비워둬도 좋아요)`}
          value={content}
          onChange={(e) => onChange("content", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default ResumeItem;
