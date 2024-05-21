"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

import useCreateTaskModal from "@/hooks/useCreateTaskModal";
import { Priority, Subtask, TaskStatus, TaskType } from "@/types";
import { getCurrentTime, getTaskTypeFromRoute } from "@/libs/helpers";

import Modal from "./Modal";
import Chip from "./Chip";
import Input from "./Input";
import Checkbox from "./Checkbox";
import TimeInput from "./TimeInput";

export interface Inputs {
  title: string;
  desc?: string;
  type: TaskType;
  startTime?: string;
  endTime?: string;
  priority?: Priority;
  status?: TaskStatus;
  alarm?: boolean;
  subtasks?: Subtask[];
  order?: number;
}

const CreateTaskModal = () => {
  const pathName = usePathname();
  const { isOpen, onClose } = useCreateTaskModal();

  const [isLoading, setIsLoading] = useState(false);
  const [alarmStatus, setAlarmStatus] = useState(false);
  const [status, setStatus] = useState<TaskStatus>("not started");
  const [priority, setPriority] = useState<Priority>("low");
  const [type, setType] = useState<TaskType>(getTaskTypeFromRoute(pathName));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      desc: "",
      type: getTaskTypeFromRoute(pathName),
      startTime: getCurrentTime(),
      endTime: "00:00",
      priority: "low",
      status: "not started",
      alarm: false,
      subtasks: [],
      order: undefined,
    },
  });

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
      setIsLoading(true);

      const formData = { ...data, status, alarm: alarmStatus, priority, type };
      console.log(formData);
      // Add your form submission logic here
      // format end time and start time before submit

      toast.success("Task created successfully.");

      setAlarmStatus(false);
      setStatus("not started");
      setPriority("low");
      setType(getTaskTypeFromRoute(pathName));

      reset();
      onClose();
    } catch (error) {
      toast.error("Failed to create task.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="Create Task"
      description="What's on your mind."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        {/* title */}
        <Input
          id="title"
          type="text"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="title"
        />
        {errors.title && (
          <span className="text-sm tracking-tighter text-red-500">
            This field is required
          </span>
        )}

        {/* description */}
        <Input
          id="desc"
          type="text"
          disabled={isLoading}
          {...register("desc")}
          placeholder="desc"
        />

        {/* start time && end time */}
        <div className="flex items-center justify-between gap-x-4">
          <TimeInput
            id="startTime"
            label="From: "
            disabled={isLoading}
            register={register}
          />

          <TimeInput
            id="endTime"
            label="Till: "
            disabled={isLoading}
            register={register}
          />
        </div>

        {/* status */}
        <div className="flex items-center justify-between gap-x-2">
          <label className="mr-auto">Status:</label>
          <Chip
            status={status}
            disabled={isLoading}
            onValueChange={(newStatus: TaskStatus) => setStatus(newStatus)}
          />
        </div>

        {/* priority */}
        <div className="flex items-center justify-between gap-x-4">
          <label htmlFor="priority" className="mr-auto">
            Priority:
          </label>

          <RadioGroup.Root
            className="flex items-center justify-between gap-x-2"
            value={priority}
            onValueChange={(newPriority: Priority) => setPriority(newPriority)}
            aria-label="set task priority"
          >
            <RadioGroupItem id="low" label="low" value="low" />
            <RadioGroupItem id="medium" label="medium" value="medium" />
            <RadioGroupItem id="high" label="high" value="high" />
          </RadioGroup.Root>
        </div>

        {/* type */}
        <div className="flex items-center justify-between gap-x-4">
          <label htmlFor="type" className="mr-auto">
            Task Type:
          </label>

          <RadioGroup.Root
            className="flex items-center justify-between gap-x-6 md:gap-x-2"
            value={type}
            onValueChange={(newType: TaskType) => setType(newType)}
            aria-label="set task type"
          >
            <div className="flex flex-col items-start justify-between gap-x-2 gap-y-2 md:flex-row md:items-center md:gap-y-0">
              <RadioGroupItem id="daily" label="daily" value="daily" />
              <RadioGroupItem id="weekly" label="weekly" value="weekly" />
            </div>
            <div className="flex flex-col items-start justify-between gap-x-2 gap-y-2 md:flex-row md:items-center md:gap-y-0">
              <RadioGroupItem id="monthly" label="monthly" value="monthly" />
              <RadioGroupItem id="misc" label="misc" value="misc" />
            </div>
          </RadioGroup.Root>
        </div>

        {/* Alarm */}
        <div className="flex items-center justify-between gap-x-4">
          <label htmlFor="alarm">Alarm</label>
          <Checkbox
            id="alarm"
            isChecked={alarmStatus}
            onChange={() => setAlarmStatus(!alarmStatus)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="flex h-10 w-full items-center justify-center rounded-lg border-none bg-primary text-white shadow-xl outline-none transition hover:bg-primary/85 focus:outline-none dark:bg-secondary dark:hover:bg-secondary/85"
        >
          {isLoading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </Modal>
  );
};

const RadioGroupItem = ({
  id,
  label,
  value,
}: {
  id: string;
  label: Priority | TaskType;
  value: Priority | TaskType;
}) => {
  return (
    <div className="flex items-center">
      <RadioGroup.Item
        className="size-6 cursor-default rounded-full border border-primary bg-white outline-none focus:shadow-black dark:border-secondary"
        value={value}
        id={id}
      >
        <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center rounded-full transition after:block after:size-3 after:rounded-full after:bg-primary after:content-[''] after:dark:bg-secondary" />
      </RadioGroup.Item>
      <label
        className="pl-2 leading-none text-black dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default CreateTaskModal;
