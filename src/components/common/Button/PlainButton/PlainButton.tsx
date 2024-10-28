import { PlainButtonProps } from "./plainButton.type";

function PlainButton(props: PlainButtonProps) {
  const {
    text,
    textColor,
    borderColor,
    bgColor = "transparent",
    handleClick,
  } = props;

  return (
    <button
      onClick={handleClick}
      className={`py-2 px-6 ${textColor} ${bgColor} ${borderColor ? `border ${borderColor}` : ""} rounded-3xl text-xl`}
    >
      {text}
    </button>
  );
}

export default PlainButton;
