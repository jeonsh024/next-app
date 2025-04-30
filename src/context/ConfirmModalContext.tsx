"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ConfirmOptions {
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

interface ConfirmContextProps {
  open: (options: ConfirmOptions) => void;
  close: () => void;
  isOpen: boolean;
  message: string;
  confirmText?: string;
  cancelText?: string;
  handleConfirm: () => void;
}

const ConfirmModalContext = createContext<ConfirmContextProps | null>(null);

export const ConfirmModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [onConfirm, setOnConfirm] = useState<() => void>(() => {});
  const [confirmText, setConfirmText] = useState("확인");
  const [cancelText, setCancelText] = useState("취소");

  const open = ({
    message,
    onConfirm,
    confirmText,
    cancelText,
  }: ConfirmOptions) => {
    setMessage(message);
    setOnConfirm(() => onConfirm);
    setConfirmText(confirmText || "확인");
    setCancelText(cancelText || "취소");
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const handleConfirm = () => {
    onConfirm();
    close();
  };

  return (
    <ConfirmModalContext.Provider
      value={{
        open,
        close,
        isOpen,
        message,
        handleConfirm,
        confirmText,
        cancelText,
      }}
    >
      {children}
    </ConfirmModalContext.Provider>
  );
};

export const useConfirmContext = () => {
  const ctx = useContext(ConfirmModalContext);
  if (!ctx)
    throw new Error(
      "useConfirmContext must be used within ConfirmModalProvider"
    );
  return ctx;
};
