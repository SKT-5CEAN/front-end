"use client";

import { ModalProps } from "./modal.type";

function Modal(props: ModalProps) { 
  const { onClose, title, content, footer } = props;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="mb-6">{content}</div>
          {footer && <div className="mt-4">{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;