import * as React from "react";
import Link from "next/link";

import { Icons } from "@/components/icons";

interface SidebarProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  budge?: number | "true";
}

export function Sidebar({ href, title, icon, budge }: SidebarProps) {
  return (
    <Link
      href={href}
      className="flex flex-row items-center justify-center px-3 py-2 rounded-xl text-black hover:bg-gray-100 ring-inset"
    >
      <p className="flex items-center justify-center">{icon}</p>
      <p className="text-sm font-medium ml-3">{title}</p>
      <p className="flex items-center ml-auto gap-x-2">
        {budge &&
          (budge === "true" ? (
            <span className="size-3 bg-blue-500 rounded-full ml-auto" />
          ) : (
            <span className="flex items-center justify-center px-1.5 py-1 text-[11px] leading-none text-white bg-blue-500 rounded-full ml-auto">
              {budge > 99 ? "+99" : budge}
            </span>
          ))}
        <Icons.ChevronRight className="size-4 stroke-2" />
      </p>
    </Link>
  );
}

interface SideHeaderProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export function SideHeader({ href, title, icon }: SideHeaderProps) {
  return (
    <Link
      href={href}
      className="flex items-center cursor-pointer mb-3 px-3 py-2 rounded-xl hover:bg-gray-100 ring-inset"
    >
      <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white border border-gray-200">
        {icon}
      </div>
      <span className="text-sm font-medium ml-2">{title}</span>
    </Link>
  );
}

interface SideTitleProps {
  title: string;
}

export function SideTitle({ title }: SideTitleProps) {
  return <div className="px-3 py-2 text-[13px] text-gray-400">{title}</div>;
}
