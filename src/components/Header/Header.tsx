"use client";
import { HeaderMenu, useHeaderStore } from "@/store/useHeaderStore";
import Image from "next/image";
import logo from "../../../public/logo1.png";
import my from "../../../public/ic-my.png";

function Header({ onLogoClick, onLoginClick }: { onLogoClick: () => void, onLoginClick: () => void }) {
  const { selectedMenu, setSelectedMenu } = useHeaderStore();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.innerText as HeaderMenu;
    setSelectedMenu(text);
    console.log(text);
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
    <header className="fixed top-0 left-0 w-full h-[60px] flex justify-between items-center px-16 bg-white z-50">
      <button
        className="flex items-center"
        onClick={onLogoClick}
      >
        <Image src={logo} alt="취얼업 로고" className="w-[83.25px] h-[45px]" />
      </button>
      <ul className="flex space-x-28">
        {menuItems.map((menu) => (
          <li
            key={menu}
            onClick={handleClick}
            className={`cursor-pointer text-xl ${
              selectedMenu === menu ? "text-yellow" : "text-gray-500"
            }`}
          >
            {menu}
          </li>
        ))}
      </ul>
      <div>
        <button
          className="border-[2px] border-[#FFE74C] text-[#F5A524] font-bold py-2 px-4 rounded-[8px]"
          onClick={onLoginClick}  // 로그인 버튼 클릭 핸들러
        >
          로그인 / 회원가입
        </button>
      </div>
    </header>
  );
}

export default Header;
