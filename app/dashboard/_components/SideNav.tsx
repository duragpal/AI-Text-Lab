"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
  const path = usePathname(); //gives the path

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logo.jpg"} alt="logo" width={120} height={100} />{" "}
      </div>
      <hr className="my-7 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            className={`flex gap-2 mb-2 p-3 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer items-center ${
              path == menu.path && "bg-blue-600 text-white "
            }`}
          >
            <menu.icon className="h-6 w-6" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
