"use client";

import { useState } from "react";
import Modal from "@/components/common/Modal/Modal";
import { useSearchParams } from "next/navigation";
import { useCompanyBookmarkStore } from "@/store/useCompanyBookMarkStore";
import InfoBox from "../InfoBox/InfoBox";
import Image from "next/image";

const Bookmark = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [tag, setTag] = useState("회고"); // 기본 선택값은 "회고"로 설정
  const params = useSearchParams();
  const companyId = params.get("company") || ""; // URL에서 companyId를 가져옴

  const { addBookmark, getCompanyBookmarks } = useCompanyBookmarkStore();
  const bookmarks = getCompanyBookmarks(companyId);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBookmarkUrl("");
    setBookmarkTitle("");
    setTag("회고");
  };

  const handleSaveBookmark = () => {
    addBookmark(companyId, {
      title: bookmarkTitle,
      url: bookmarkUrl,
      tag, // 선택한 태그도 함께 저장
    });
    closeModal();
  };

  return (
    <div className="w-full h-full flex flex-wrap gap-x-12 gap-y-10 mx-5 my-10">
      <InfoBox kind="BOOKMARK" />

      <div className="mt-6 grid grid-cols-3 gap-4">
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="w-[320px] h-[95px] p-4 rounded-xl border border-gray-200">
            {/* 제목과 태그를 한 줄에 배치 */}
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">{bookmark.title}</p>
              <span
                className={`text-sm px-2 py-0.5 rounded-full ${bookmark.tag === "회고" ? "bg-yellow-100 text-gray-800" : "bg-blue-100 text-gray-800"}`}
              >
                {bookmark.tag}
              </span>
            </div>
            
            {/* 링크를 아래에 표시 */}
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 truncate"
            >
              {bookmark.url}
            </a>
          </div>
        ))}
        <button
          onClick={openModal}
          className="w-[320px] h-[95px] p-4 flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:bg-blue-100 hover:border-blue-300 hover:border-dotted transition"
        >
          <p className="font-semibold text-lg text-gray-400">북마크 추가</p>
          <Image src="/link.png" width={24} height={24} alt="북마크 추가" />
        </button>
      </div>



      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title="북마크 추가"
          content={
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="북마크 제목"
                value={bookmarkTitle}
                onChange={(e) => setBookmarkTitle(e.target.value)}
                className="border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="북마크 URL"
                value={bookmarkUrl}
                onChange={(e) => setBookmarkUrl(e.target.value)}
                className="border p-2 rounded-lg"
              />
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="border p-2 rounded-lg"
              >
                <option value="회고">회고</option>
                <option value="복기">복기</option>
              </select>
            </div>
          }
          footer={
            <button
              onClick={handleSaveBookmark}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              완료
            </button>
          }
        />
      )}
    </div>
  );
};

export default Bookmark;
