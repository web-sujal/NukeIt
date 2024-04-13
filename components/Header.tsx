"use client";

import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <h1 className="flex w-full items-center justify-between pb-6 text-start text-3xl font-extrabold">
      <Link href="/" className="cursor-pointer">
        ❄️ Nuke<span className="text-primary dark:text-secondary">It</span>
      </Link>

      <button onClick={() => alert("clicked")} className="lg:hidden">
        <MdOutlineMenu className="text-primary dark:text-secondary" size={40} />
      </button>
    </h1>
  );
};

export default Header;
