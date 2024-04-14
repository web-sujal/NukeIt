import { MdComputer, MdOutlineToday } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { BsCalendarWeek } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export const SidebarFilterItems = [
  { label: "Today", icon: <MdOutlineToday />, path: "/" },
  { label: "This Week", icon: <BsCalendarWeek />, path: "/this-week" },
  {
    label: "This Month",
    icon: <MdOutlineCalendarMonth />,
    path: "/this-month",
  },
  { label: "Starred", icon: <FaStar />, path: "/starred" },
];

export const SidebarFeatureItems = [
  { label: "System", icon: <MdComputer />, path: "/system" },
  { label: "Analytics", icon: <IoAnalytics />, path: "/analytics" },
];
