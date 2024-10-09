import Image from "next/image";

export default function FeatureSection2() {
  return (
    <section className="pt-36 container mx-auto py-20 flex justify-between items-center">
      <div>
        <h2 className="text-5xl font-bold text-gray-800">지나간 과정도 소중하게, <br /> 떠올리고 돌아보기</h2>
        <p className="text-lg text-gray-600 mt-4">나만의 이야기로 남기는 기록</p>
      </div>
      <div>
        <Image src="/images/feature2.png" alt="feature2 이미지" width={800} height={800} />
      </div>
    </section>
  );
}