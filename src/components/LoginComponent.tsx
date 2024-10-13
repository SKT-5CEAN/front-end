import Image from "next/image";

export default function LoginComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center">나만의 취업 여정을 기록, 취얼업</h1>
      <p className="text-lg font-bold text-center text-gray-400 mt-4">
        취준의 시작부터 끝을 나만의 방식으로
        <br />
        관리하고 돌아보기
      </p>
      <button className="bg-yellow text-black font-semibold py-2 px-10 rounded-[12px] mt-8 flex items-center">
        <Image src="/kakao-logo.png" alt="카카오 로고" width={20} height={20} className="mr-2" /> {/* 카카오 로고 이미지 */}
        카카오 계정으로 로그인하기
      </button>
    </div>
  );
}
