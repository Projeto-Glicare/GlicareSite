"use client";

import IconGlicare from "@/public/svg/icon-glicare-light";

interface ModalWarningProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function ModalWarning({
  isOpen,
  onClose,
  message,
}: ModalWarningProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="float-right text-gray-500 text-xl">
          ×
        </button>

        <div className="text-center pt-4">
          <div className="flex flex-row items-center justify-center">
            <IconGlicare />
            <h3 className="text-lg font-semibold">Canal de Comunicação</h3>
          </div>
          <p className="text-gray-600 mb-4">{message}</p>
          <p className="text-blue-600 font-semibold mb-6">
            contato@glicare.com
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
