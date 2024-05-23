import { create } from "zustand";

import { Task, TaskType } from "@/types";
import getUserTasks from "@/actions/getUserTasks";
import createTaskAction from "@/actions/createTask";
import updateTaskAction from "@/actions/updateTask";
import deleteTaskById from "@/actions/deleteTaskById";

// define types for state values and actions separately
interface State {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
}

interface Actions {
  setTasks: (tasks: Task[]) => void;
  fetchAndSetTasks: () => Promise<void>;
  createTask: (newTask: Task) => Promise<void>;
  updateTask: (updatedTask: Task) => Promise<void>;
  removeTask: (taskId: string) => Promise<void>;
  getTasksByType: (type: TaskType) => Task[];
}

// define the initial state
const initialState: State = {
  tasks: [],
  isLoading: false,
  error: null,
};

const useTaskStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setTasks: (tasks: Task[]) => set({ tasks }),
  fetchAndSetTasks: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data, error } = await getUserTasks();

      if (error) {
        set({ error, isLoading: false });
      } else {
        set({ tasks: data ?? [], isLoading: false });
      }
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  createTask: async (newTask: Task) => {
    // Generate a temporary ID
    const tempId = `temp-${Date.now()}-${newTask.title}`;
    const tempTask = { ...newTask, id: tempId };

    // Optimistically add the task
    set((state) => ({ tasks: [...state.tasks, tempTask] }));

    try {
      const { success, error } = await createTaskAction(newTask);

      if (error) {
        throw new Error(error);
      }

      if (success) {
        // Refetch tasks to get the correct data from the backend
        await get().fetchAndSetTasks();
      }
    } catch (error) {
      // Remove the optimistic task on error
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== tempId),
        error: (error as Error).message,
      }));
    }
  },
  updateTask: async (updatedTask: Task) => {
    // optimistically updating local state
    const prevTasks = get().tasks;
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    }));

    try {
      const { error } = await updateTaskAction(updatedTask);

      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      // Rollback the change on error
      set({ tasks: prevTasks, error: (error as Error).message });
    }
  },
  removeTask: async (taskId: string) => {
    // optimistically removing the task
    const prevTasks = get().tasks;
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));

    try {
      const { error } = await deleteTaskById(taskId);

      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      // Rollback the change on error
      set({ tasks: prevTasks, error: (error as Error).message });
    }
  },
  getTasksByType: (type: TaskType) => {
    return get().tasks.filter((task) => task.type === type);
  },
}));

export default useTaskStore;
