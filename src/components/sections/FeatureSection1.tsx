import Image from "next/image";

export default function FeatureSection1() {
  return (
    <section className="h-screen w-screen mx-auto flex justify-start items-center bg-gradient-to-b from-[#FAF8CF] from-64% to-[#FCFCFC]">
      <div className="flex px-auto ml-20">
        <div>
          <Image src="/images/feature1.png" alt="feature1 이미지" width={1000} height={800}/>
        </div>
        <div className="mt-[20%]">
          <h2 className="text-5xl font-bold text-gray-800">취준 일정만 담는 <br /> 깔끔한 캘린더</h2>
          <p className="text-lg text-gray-600 mt-4">기업마다 다른 취업 프로세스를 효과적으로 관리하세요.</p>
        </div>
      </div>
    </section>
  );
}