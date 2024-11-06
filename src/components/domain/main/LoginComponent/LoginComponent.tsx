import Image from "next/image";
import { useEffect } from "react";

export default function LoginComponent() {
  useEffect(() => {
    // Kakao SDK 초기화 (한 번만 실행)
    if (typeof window !== 'undefined' && window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY); // Kakao Developers에서 발급받은 JavaScript 키
      console.log("Kakao SDK 초기화 완료");
    }
  }, []);

  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      console.error("Kakao SDK가 초기화되지 않았습니다.");
      return;
    }

    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI, // Redirect URI 설정
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center">나만의 취업 여정을 기록, 취얼업</h1>
      <p className="text-lg font-bold text-center text-gray-400 mt-4">
        취준의 시작부터 끝을 나만의 방식으로
        <br />
        관리하고 돌아보기
      </p>
      <button
        className="bg-yellow text-black font-semibold py-2 px-10 rounded-[12px] mt-8 flex items-center"
        onClick={handleKakaoLogin} // 카카오 로그인 버튼 클릭 핸들러
      >
        <Image src="/kakao-logo.png" alt="카카오 로고" width={20} height={20} className="mr-2" /> {/* 카카오 로고 이미지 */}
        카카오 계정으로 로그인하기
      </button>
    </div>
  );
}
