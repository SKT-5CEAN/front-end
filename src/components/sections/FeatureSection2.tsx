import Image from "next/image";

export default function FeatureSection2() {
  return (
    <section className="h-screen w-screen mx-auto flex justify-end items-center bg-gradient-to-b from-[#FCFCFC] from-24% to-[#F9F3FF]">
      <div className="flex px-auto mr-10">
        <div className="mt-[10%] mr-10">
          <h2 className="text-5xl font-bold text-gray-800">지나간 과정도 소중하게, <br /> 떠올리고 돌아보기</h2>
          <p className="text-lg text-gray-600 mt-4">나만의 이야기로 남기는 기록</p>
        </div>
        <div className="mr-20">
          <Image src="/images/feature2.png" alt="feature2 이미지" width={1000} height={1000} />
        </div>
      </div>
    </section>
  );
}