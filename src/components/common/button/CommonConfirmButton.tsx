"use client";

import { Button } from "@/components/ui/button";
import { useConfirmModal } from "@/hook/useConfirmModal";
import { ReactNode } from "react";

interface CommonConfirmButtonProps {
  onConfirm: () => void;
  children?: ReactNode;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export function CommonConfirmButton({
  onConfirm,
  children,
  message = "정말로 진행하시겠습니까?",
  confirmText = "확인",
  cancelText = "취소",
}: CommonConfirmButtonProps) {
  const { openConfirm } = useConfirmModal();

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();

    const confirmed = await openConfirm({
      message,
      confirmText,
      cancelText,
    });

    if (confirmed) await onConfirm();
  };

  return <Button onClick={handleDelete}>{children}</Button>;
}
