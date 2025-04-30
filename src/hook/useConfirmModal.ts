import { useConfirmContext } from "@/context/ConfirmModalContext";

type ConfirmOptions = {
  message: string;
  confirmText?: string;
  cancelText?: string;
};

export function useConfirmModal() {
  const { open, close } = useConfirmContext();

  const openConfirm = (options: ConfirmOptions): Promise<boolean> => {
    return new Promise(resolve => {
      open({
        message: options.message,
        onConfirm: () => resolve(true),
        confirmText: options.confirmText,
        cancelText: options.cancelText,
      });
    });
  };

  return { openConfirm };
}
