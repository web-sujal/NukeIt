import { create } from "zustand";

import { Priority, TaskStatus, TaskType } from "@/types";

interface useTaskFormStore {
  status: TaskStatus;
  priority: Priority;
  type: TaskType;
  alarmStatus: boolean;
  setStatus: (status: TaskStatus) => void;
  setPriority: (priority: Priority) => void;
  setType: (type: TaskType) => void;
  setAlarmStatus: (status: boolean) => void;
}

const useTaskForm = create<useTaskFormStore>((set) => ({
  status: "not started",
  priority: "low",
  type: "daily",
  alarmStatus: false,
  setStatus: (status) => set({ status }),
  setPriority: (priority) => set({ priority }),
  setType: (type) => set({ type }),
  setAlarmStatus: (alarmStatus) => set({ alarmStatus }),
}));

export default useTaskForm;
