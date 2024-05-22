import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

import useTheme from "@/hooks/useTheme";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange} defaultOpen={isOpen}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm" />

        <Dialog.Content
          className={twMerge(
            "fixed left-[50%] top-[50%] flex h-full max-h-full w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 p-[25px] text-white drop-shadow-md focus:outline-none md:h-auto md:max-h-[85vh] md:w-[95vw] md:max-w-[500px]",
            isDarkMode === false &&
              "border-modal-primary bg-modal-primary text-primary-heading",
          )}
        >
          {title && (
            <Dialog.Title className="mb-4 text-center text-xl font-bold">
              {title}
            </Dialog.Title>
          )}

          {description && (
            <Dialog.Description className="mb-5 text-center text-sm leading-normal">
              {description}
            </Dialog.Description>
          )}

          <div className="w-full">{children}</div>

          <Dialog.Close asChild>
            <button className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-neutral-400 hover:text-white focus:outline-none">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
