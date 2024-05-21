"use client";

import { ChangeEventHandler, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onChange }) => {
  return (
    <label className="flex cursor-pointer items-center">
      <input
        type="checkbox"
        id="my-checkbox"
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />
      <div
        className={`mr-2 flex size-5 items-center justify-center rounded-full border border-primary transition dark:border-secondary ${
          isChecked ? "bg-primary dark:bg-secondary" : "bg-transparent"
        }`}
      >
        {/* SVG checkmark icon */}
        {isChecked && (
          <svg
            className="size-4 stroke-current font-extrabold text-white"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
