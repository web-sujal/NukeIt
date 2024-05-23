"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

import { Inputs } from "@/types";

import Input from "./Input";

interface TimeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: "start_time" | "end_time";
  label: string;
  disabled: boolean;
  register: UseFormRegister<Inputs>;
}

const TimeInput: React.FC<TimeInputProps> = forwardRef<
  HTMLInputElement,
  TimeInputProps
>(({ id, label, disabled, register, ...props }, ref) => {
  return (
    <div className="flex items-center justify-between gap-x-2">
      <label className="text-nowrap" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        type="time"
        disabled={disabled}
        {...register(id)}
        {...props}
      />
    </div>
  );
});

TimeInput.displayName = "TimeInput";

export default TimeInput;
