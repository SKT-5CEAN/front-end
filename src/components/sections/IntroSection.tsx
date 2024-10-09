export default function IntroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center">취업 준비로 지친 당신을 위한 <br />
        프로세스 관리 툴</h1>
      {/* <p className="text-2xl">취업을 위한 취업 준비 서비스</p> */}
      <button
        className="bg-black text-white font-bold py-2 px-4 rounded-full mt-8"
      >
        취준 관리 시작하기
      </button>
    </section>
  );
}