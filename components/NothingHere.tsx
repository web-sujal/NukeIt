import Image from "next/image";

const NothingHere = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/no-tasks.svg"
        alt="no tasks illustration"
        fill
        className="object-contain p-10"
      />
    </div>
  );
};

export default NothingHere;
