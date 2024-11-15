import Image from "next/image";

export default function FeatureSection2() {
  return (
    <section className="h-screen w-screen mx-auto flex justify-end items-center bg-gradient-to-b from-[#FCFCFC] from-24% to-[#F9F3FF]">
      <div className="w-full h-full flex px-[140px] py-[180px] items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold leading-relaxed">
            지나간 과정도 소중하게, <br />
            떠올리고 돌아보기
          </h1>
          <p className="text-lg text-gray-600 mt-4">나만의 이야기로 남기는 기록</p>
        </div>
        <div className="">
          <Image
            src="/landing3.png"
            alt="landing3 이미지"
            // layout="responsive"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}