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
    <header className="fixed top-0 left-0 w-full h-24 flex justify-between items-center px-16 bg-white z-50">
      <Image src={logo} alt="취얼업 로고" className="w-[122px] h-[36px]" />
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
      <Image src={my} alt="마이페이지 로고" className="w-[40px] h-[40px]" />
    </header>
  );
}

export default Header;
