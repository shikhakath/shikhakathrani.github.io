"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    href: "/projects",
    label: "projects",
    idleClass: "border-cyan-300 text-cyan-700 hover:bg-cyan-50",
    activeClass: "bg-cyan-500 border-cyan-500 text-cyan-800",
  },
  {
    href: "/writing",
    label: "writing",
    idleClass: "border-cyan-300 text-cyan-700 hover:bg-cyan-50",
    activeClass: "bg-cyan-500 border-blue-500 text-cyan-800",
  },
  {
    href: "/courses",
    label: "courses",
    idleClass: "border-cyan-300 text-cyan-700 hover:bg-cyan-50",
    activeClass: "bg-cyan-50 border-cyan-500 text-cyan-800",
  },
];

export function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-3">
      {tabs.map((tab) => {
        const isActive =
          tab.href === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.href);

        const base =
          "px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm";
        const colorClasses = isActive ? tab.activeClass : tab.idleClass;

        return (
          <Link 
          key={tab.href} 
          href={tab.href} 
          className={`${base} ${colorClasses}`}>
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
