import Image from "next/image";

export default function FeatureSection1() {
  return (
    <section className="pt-36 container mx-auto py-20 flex justify-between items-center">
      <div>
        <Image src="/images/feature1.png" alt="feature1 이미지" width={800} height={1000}/>
      </div>
      <div>
        <h2 className="text-5xl font-bold text-gray-800">취준 일정만 담는 <br /> 깔끔한 캘린더</h2>
        <p className="text-lg text-gray-600 mt-4">기업마다 다른 취업 프로세스를 효과적으로 관리하세요.</p>
      </div>
    </section>
  );
}