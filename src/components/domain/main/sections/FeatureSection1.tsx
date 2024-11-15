import Image from "next/image";

export default function FeatureSection1() {
  return (
    <section className="h-screen w-screen mx-auto flex justify-start items-center bg-gradient-to-b from-[#FAF8CF] from-64% to-[#FCFCFC]">
      <div className="w-full h-full flex px-[100px] py-[180px] items-center gap-20">
        <div className="">
          <Image
            src="/landing2.png"
            alt="landing2 이미지"
            // layout="responsive"
            width={1000}
            height={600}
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold leading-relaxed">
            취준 일정만 담는 <br />
            깔끔하고 간편한 캘린더
          </h1>
          <p className="text-lg text-gray-600 mt-4">기업마다 다른 취업 프로세스를 효과적으로 관리하세요.</p>
        </div>
      </div>
    </section>
  );
}