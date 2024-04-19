import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <main
      className={twMerge(
        "md:rounded-t-2x flex h-full max-h-screen w-full flex-1 flex-col gap-y-2 bg-modal-primary p-6 text-start lg:rounded-2xl lg:drop-shadow-xl dark:bg-modal-secondary",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default Box;
