import Image from "next/image";
import { useEffect } from "react";

export default function IntroSection() {
  useEffect(() => {
    // Kakao SDK 초기화 (한 번만 실행)
    if (typeof window !== 'undefined' && window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
      console.log("Kakao SDK 초기화 완료");
    }
  }, []);

  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      console.error("Kakao SDK가 초기화되지 않았습니다.");
      return;
    }
    
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  };
  
  return (
    <section className="w-screen flex flex-col items-start justify-center h-screen bg-gradient-to-b from-[#EDF9E0] from-10% to-[#FAF8CF] px-10">
      <div className="w-full h-full flex px-[140px] py-[180px] items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold leading-relaxed">
            복잡한 취업 준비 과정, <br />
            나만의 프로세스 관리는 <br />
            취얼업에서
          </h1>
          <button
            onClick={handleKakaoLogin}
            className="bg-black text-white font-bold py-3 px-6 rounded-lg mt-4"
          >
            취준 관리 시작하기
          </button>
        </div>
        <div className="">
          <Image
            src="/landing1.png"
            alt="landing1 이미지"
            // layout="responsive"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
