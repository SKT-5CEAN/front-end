"use client";
import { TitleListProps } from "./titleList.type";
import { useRouter } from "next/navigation";
import useSessionState from "@/hook/useSessionState";

function TitleList(props: TitleListProps) {
  const { title, list, storageKey } = props;
  const router = useRouter();
  const { state: selected, setState: setSelected } = useSessionState(
    storageKey,
    ""
  );

  return (
    <div className="w-64 h-96 border-4 flex flex-col py-6 px-8">
      <h2 className="text-2xl">{title}</h2>
      {list.length > 0 && (
        <ul className="h-64 overflow-y-scroll">
          {list.map((el, idx) => (
            <li
              key={idx}
              className={`text-xl ${el === selected ? "font-bold" : ""}`}
              onClick={() => {
                setSelected(el);
                router.push(`/apply/${el}`);
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TitleList;
