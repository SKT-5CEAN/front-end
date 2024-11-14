"use client";
import { HeaderMenu, useHeaderStore } from "@/store/useHeaderStore";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { HEADER_LINK } from "@/constants/headerLink";

function Header() {
  const { selectedMenu, setSelectedMenu } = useHeaderStore();
  const { setAccessTkn } = useUserStore();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.innerText as HeaderMenu;
    setSelectedMenu(text);
    router.push(`${HEADER_LINK[text]}`);
    // 추후 페이지 link 추가
  };

  const handleLogoClick = () => {
    setAccessTkn(""); // 토큰 세팅 로직 추가 예정
  };

  const handleLoginClick = () => {
    setAccessTkn("토큰"); // 토큰 세팅 로직 추가 예정
  };

  const menuItems: HeaderMenu[] = [
    "캘린더",
    "지원 준비",
    // "보관함",
    "회고 / 복기",
    // "통계",
  ];

  return (
    <header className="fixed py-8 left-0 w-full h-[60px] flex justify-between items-center px-[120px] bg-white z-50 border-b-2">
      <div className="flex items-center gap-20">
      <button className="flex items-center" onClick={handleLogoClick}>
        <Image
          src="/logo1.png"
          alt="취얼업 로고"
          className="w-[100px]"
          width={83}
          height={45}
        />
      </button>
      <ul className="flex space-x-14">
        {menuItems.map((menu) => (
          <li
            key={menu}
            onClick={handleClick}
            className={`cursor-pointer text-[20px] ${
              selectedMenu === menu ? "text-yellow" : "text-gray-500"
            }`}
          >
            {menu}
          </li>
        ))}
      </ul>
      </div>
      <div>
        <button
          className="border-[2px] border-[#FFE74C] text-[#F5A524] font-bold py-2 px-4 rounded-[8px]"
          onClick={handleLoginClick} // 로그인 버튼 클릭 핸들러
        >
          로그인 / 회원가입
        </button>
      </div>
    </header>
  );
}

export default Header;
