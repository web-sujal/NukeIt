import { create } from "zustand";

interface MoreOptionsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMoreOptionsModal = create<MoreOptionsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMoreOptionsModal;
