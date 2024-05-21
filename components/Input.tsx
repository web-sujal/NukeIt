import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `border-netural-200 flex w-full rounded-md border bg-modal-primary px-3 py-3 text-sm text-black placeholder:text-neutral-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400`,
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
