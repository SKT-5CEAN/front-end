import { PlainButtonProps } from "./plainButton.type";
import Image from "next/image";

function PlainButton(props: PlainButtonProps) {
  const {
    text,
    textColor,
    borderColor,
    iconImg,
    bgColor = "transparent",
    handleClick,
  } = props;

  return (
    <button
      onClick={handleClick}
      className={`w-max h-[52px] py-2 px-6 ${bgColor} ${borderColor ? `border ${borderColor}` : ""} rounded-lg text-xl flex justify-center items-center gap-2 cursor-pointer`}
    >
      {iconImg && (
        <Image src={iconImg} alt="버튼 아이콘" width={24} height={24} />
      )}
      <p className={`${textColor} font-extrabold`}>{text}</p>
    </button>
  );
}

export default PlainButton;
