interface TitleProps {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <h2 className="truncate text-3xl font-bold text-primary-heading md:text-2xl dark:text-secondary-heading">
      {label}
    </h2>
  );
};

export default Title;
