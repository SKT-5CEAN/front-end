interface ReviewData {
  stageName: string;
  preparation: string;
  difficulty: string;
  strength: string;
  weakness: string;
}

interface ReviewSummaryProps {
  data: ReviewData[];
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({ data }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">나의 회고 / 모아보기</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">전형 이름</th>
            <th className="border p-2">준비 과정</th>
            <th className="border p-2">난이도</th>
            <th className="border p-2">잘한 점</th>
            <th className="border p-2">부족한 점</th>
            <th className="border p-2">회고</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border p-2 text-center">{item.stageName}</td>
              <td className="border p-2 text-center">{item.preparation}</td>
              <td className="border p-2 text-center">{item.difficulty}</td>
              <td className="border p-2 text-center">{item.strength}</td>
              <td className="border p-2 text-center">{item.weakness}</td>
              <td className="border p-2 text-center text-blue-500 cursor-pointer">회고 다시하기</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewSummary;
