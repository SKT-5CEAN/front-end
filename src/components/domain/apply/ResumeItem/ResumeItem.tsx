import Image from "next/image";
import { ResumeItemProps } from "./resumeItem.type";

function ResumeItem({ title, content, onChange, onDelete }: ResumeItemProps) {
  return (
    <div className="w-full flex flex-col gap-4 p-6">
      <div className="w-full flex justify-between">
        <input
          className="w-11/12 h-16 text-3xl border border-slate-400 rounded-lg px-3 outline-none"
          type="text"
          placeholder="자소서 문항 제목을 입력해 주세요"
          value={title}
          onChange={(e) => onChange("question", e.target.value)}
        />
        <button className="cursor-pointer" onClick={onDelete}>
          <Image src="/trash-can.png" alt="삭제 버튼" width={40} height={40} />
        </button>
      </div>
      <div className="w-full">
        <textarea
          className="w-full h-56 text-2xl border border-slate-400 rounded-lg p-4 outline-none"
          placeholder="문항에 대한 답변을 작성해 주세요. (문항 제목만 추가하고 싶다면 비워둬도 좋아요)"
          value={content}
          onChange={(e) => onChange("content", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default ResumeItem;
