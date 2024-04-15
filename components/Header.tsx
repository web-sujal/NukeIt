"use client";

import Link from "next/link";

const Header = () => {
  return (
    <h1 className="hidden w-full items-center justify-start pb-6 text-start text-3xl font-extrabold md:flex">
      <Link href="/" className="cursor-pointer">
        ❄️ Nuke<span className="text-primary dark:text-secondary">It</span>
      </Link>
    </h1>
  );
};

export default Header;
