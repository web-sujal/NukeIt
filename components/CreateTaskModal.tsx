"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

import useCreateTaskModal from "@/hooks/useCreateTaskModal";
import useTaskForm from "@/hooks/useTaskForm";
import useTaskStore from "@/hooks/useTaskStore";
import { getCurrentTime, getTaskTypeFromRoute } from "@/libs/helpers";
import { Inputs } from "@/types";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

const CreateTaskModal = () => {
  const pathName = usePathname();
  const { isOpen, onClose } = useCreateTaskModal();

  const {
    status,
    alarmStatus,
    priority,
    type,
    setAlarmStatus,
    setStatus,
    setPriority,
    setType,
  } = useTaskForm();

  const { createTask, error, isLoading } = useTaskStore();

  const defaultValues: Inputs = {
    title: "",
    desc: "",
    type: getTaskTypeFromRoute(pathName),
    start_time: getCurrentTime(),
    end_time: "00:00",
    priority: "low",
    status: "not started",
    alarm: false,
    subtasks: [],
    order: undefined,
  };

  const { reset } = useForm<Inputs>();

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();

      setAlarmStatus(false);
      setStatus("not started");
      setPriority("low");
      setType(getTaskTypeFromRoute(pathName));
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newTask = {
        ...data,
        status,
        alarm: alarmStatus,
        priority,
        type,
      };

      // const { error } = await createTask(newTask);
      await createTask(newTask);

      if (error) {
        return toast.error(`Failed to create task: ${error}`);
      }

      toast.success("Task created successfully.");

      reset();
      onClose();

      setAlarmStatus(false);
      setStatus("not started");
      setPriority("low");
      setType(getTaskTypeFromRoute(pathName));
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Unexpected error in onSubmit:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="Create Task"
      description="What's on your mind."
    >
      <TaskForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isCreating
      />
    </Modal>
  );
};

export default CreateTaskModal;
