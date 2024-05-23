"use client";

import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import useEditTaskModal from "@/hooks/useEditTaskModal";
import useTaskStore from "@/hooks/useTaskStore";
import { Inputs } from "@/types";
import useTaskForm from "@/hooks/useTaskForm";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

const EditTaskModal = () => {
  const { isOpen, onClose, task } = useEditTaskModal();
  const [isLoading, setIsLoading] = useState(false);
  const { updateTask, error } = useTaskStore();

  const { status, alarmStatus, priority, type, initialize } = useTaskForm();

  useEffect(() => {
    if (task) {
      initialize(task);
    }
  }, [initialize, task]);

  if (!task) return null;
  const defaultValues: Inputs = {
    ...task,
    title: task.title,
    status: task.status,
    priority: task.priority,
    type: task.type,
    alarm: task.alarm,
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const updatedTask = {
        ...data,
        status,
        priority,
        type,
        alarm: alarmStatus,
      };

      await updateTask(updatedTask);

      if (error) {
        toast.error(`Failed to update task: ${error}`);
        console.error("failed to update task: ", error);
        return;
      }

      toast.success("Task updated successfully.");
      onClose();
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Unexpected error in update onSubmit:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="View/Edit Task"
      // description="Here's the details of your task."
    >
      <TaskForm
        taskId={task.id}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isCreating={false}
      />
    </Modal>
  );
};

export default EditTaskModal;
