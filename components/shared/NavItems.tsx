"use client";
import { headerLinks } from "@/constants";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-row flex flex-col w-full items-start gap-5">
      {headerLinks.map((item, index) => {
        const isActive = pathname === item?.route;

        return (
          <li
            key={index}
            className={` ${isActive && "text-primary-500"} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={item?.route}>{item?.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
