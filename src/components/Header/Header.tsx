"use client";
import { HeaderMenu, useHeaderStore } from "@/store/useHeaderStore";
import Image from "next/image";
import logo from "../../../public/ic-logo.png";
import my from "../../../public/ic-my.png";

function Header() {
  const { selectedMenu, setSelectedMenu } = useHeaderStore();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.innerText as HeaderMenu;
    setSelectedMenu(text);
    // 추후 페이지 link 추가
  };

  const menuItems: HeaderMenu[] = [
    "캘린더",
    "지원 준비",
    "보관함",
    "회고 / 복기",
    "통계",
  ];

  return (
    <header className="flex justify-between w-auto h-36 items-center px-16">
      <Image src={logo} alt="취얼업 로고" className="w-[122px] h-[48px]" />
      <ul className="flex space-x-28">
        {menuItems.map((menu) => (
          <li
            key={menu}
            onClick={handleClick}
            className={`cursor-pointer text-2xl ${
              selectedMenu === menu ? "text-yellow" : "text-gray-500"
            }`}
          >
            {menu}
          </li>
        ))}
      </ul>
      <Image src={my} alt="마이페이지 로고" className="w-[56px] h-[56px]" />
    </header>
  );
}

export default Header;
