"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  RiDashboardLine,
  RiCalendarLine,
  RiUserLine,
  RiFileTextLine,
  RiLayoutGridLine,
  RiPieChartLine,
  RiAppsLine,
  RiLoginBoxLine,
  RiArrowLeftSLine,
} from "react-icons/ri";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MAIN MENU",
    menuItems: [
      {
        icon: <RiDashboardLine className="text-current" size={24} />,
        label: "Products",
        route: "/pages/products",
      },
      {
        icon: <RiCalendarLine className="text-current" size={24} />,
        label: "Calendar",
        route: "/calendar",
      },
      {
        icon: <RiUserLine className="text-current" size={24} />,
        label: "Profile",
        route: "/profile",
      },
      {
        icon: <RiFileTextLine className="text-current" size={24} />,
        label: "Forms",
        route: "#",
        children: [
          { label: "Form Elements", route: "/forms/form-elements" },
          { label: "Form Layout", route: "/forms/form-layout" },
        ],
      },
      {
        icon: <RiLayoutGridLine className="text-current" size={24} />,
        label: "Tables",
        route: "#",
        children: [{ label: "Tables", route: "/tables" }],
      },
      {
        icon: <RiFileTextLine className="text-current" size={24} />,
        label: "Pages",
        route: "#",
        children: [{ label: "Settings", route: "/pages/settings" }],
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: <RiPieChartLine className="text-current" size={24} />,
        label: "Charts",
        route: "#",
        children: [{ label: "Basic Chart", route: "/charts/basic-chart" }],
      },
      {
        icon: <RiAppsLine className="text-current" size={24} />,
        label: "UI Elements",
        route: "#",
        children: [
          { label: "Alerts", route: "/ui-elements/alerts" },
          { label: "Buttons", route: "/ui-elements/buttons" },
        ],
      },
      {
        icon: <RiLoginBoxLine className="text-current" size={24} />,
        label: "Authentication",
        route: "#",
        children: [{ label: "Sign In", route: "/auth/signin" }],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <RiArrowLeftSLine className="text-current" size={30} />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
