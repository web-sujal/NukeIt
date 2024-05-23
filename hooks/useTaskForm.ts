import { create } from "zustand";

import { Priority, Task, TaskStatus, TaskType } from "@/types";

interface State {
  status: TaskStatus;
  priority: Priority;
  type: TaskType;
  alarmStatus: boolean;
}

interface Actions {
  setStatus: (status: TaskStatus) => void;
  setPriority: (priority: Priority) => void;
  setType: (type: TaskType) => void;
  setAlarmStatus: (status: boolean) => void;
  initialize: (task: Partial<Task>) => void;
}

const initial_state: State = {
  status: "not started",
  priority: "low",
  type: "daily",
  alarmStatus: false,
};

const useTaskForm = create<State & Actions>((set) => ({
  ...initial_state,
  setStatus: (status) => set({ status }),
  setPriority: (priority) => set({ priority }),
  setType: (type) => set({ type }),
  setAlarmStatus: (alarmStatus) => set({ alarmStatus }),
  initialize: (task) =>
    set({
      status: task.status || initial_state.status,
      priority: task.priority || initial_state.priority,
      type: task.type || initial_state.type,
      alarmStatus: task.alarm || initial_state.alarmStatus,
    }),
}));

export default useTaskForm;
