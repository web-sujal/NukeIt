"use client";

import { MdOutlineCalendarMonth } from "react-icons/md";

import useMoreOptionsModal from "@/hooks/useMoreOptionsModal";
import { SidebarFeatureItems } from "@/constants";

import Modal from "./Modal";
import SidebarItem from "./SidebarItem";
import UserMenu from "./UserMenu";
import { IoClose } from "react-icons/io5";

const MoreOptionsModal = () => {
  const { isOpen, onClose } = useMoreOptionsModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onChange={onChange} title="More options...">
      <div className="">
        {/* filters */}
        <h2 className="mt-2 truncate pl-3 text-2xl font-bold text-primary-heading dark:text-secondary-heading">
          Filters
        </h2>
        <SidebarItem
          Icon={<MdOutlineCalendarMonth />}
          label="This Month"
          path="/this-month"
        />

        {/* Features */}
        <p className="mt-10 truncate pl-3 text-2xl font-bold text-primary-heading dark:text-secondary-heading">
          Features:
        </p>
        {SidebarFeatureItems.map((item) => (
          <SidebarItem
            key={item.label}
            Icon={item.icon}
            label={item.label}
            path={item.path}
          />
        ))}
      </div>

      {/* User email && Dark mode / auth */}
      <UserMenu className="mt-10" />

      {/* close button */}
      <button
        onClick={() => onClose()}
        type="button"
        className="mt-10 flex h-10 w-full items-center justify-center rounded-lg border border-primary bg-transparent p-3 text-primary outline-none transition hover:border-primary/85 focus:outline-none md:hidden dark:border-secondary dark:text-secondary dark:hover:border-secondary/85"
      >
        <IoClose size={25} />
      </button>
    </Modal>
  );
};

export default MoreOptionsModal;
