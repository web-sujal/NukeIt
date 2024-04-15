interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <main className="flex h-full w-full flex-col gap-y-2 bg-modal-primary p-6 text-start md:rounded-t-2xl lg:rounded-2xl lg:drop-shadow-xl dark:bg-modal-secondary">
      {children}
    </main>
  );
};

export default Box;
