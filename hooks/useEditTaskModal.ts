import { Task } from "@/types";
import { create } from "zustand";

interface EditTaskModalStore {
  isOpen: boolean;
  task: Task | null;
  onOpen: (task: Task) => void;
  onClose: () => void;
}

const useEditTaskModal = create<EditTaskModalStore>((set) => ({
  isOpen: false,
  task: null,
  onOpen: (task: Task) => set({ isOpen: true, task }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditTaskModal;
