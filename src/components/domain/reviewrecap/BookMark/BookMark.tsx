"use client";

import { useState } from "react";
import Modal from "@/components/common/Modal/Modal";
import { useSearchParams } from "next/navigation";
import { useCompanyBookmarkStore } from "@/store/useCompanyBookMarkStore";
import InfoBox from "../InfoBox/InfoBox";

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
    <div className="p-20">
      <InfoBox kind="BOOKMARK" />
      <h2 className="text-2xl font-semibold mb-6">북마크 - {companyId}</h2>
      <button
        onClick={openModal}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        북마크 추가
      </button>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <p className="font-semibold">{bookmark.title}</p>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {bookmark.url}
            </a>
            <p
              className={`mt-2 text-sm text-white px-2 py-1 rounded ${bookmark.tag === "회고" ? "bg-green-500" : "bg-blue-500"}`}
            >
              {bookmark.tag}
            </p>
          </div>
        ))}
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
