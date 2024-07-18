"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={cn(
            "font-medium transition-all hover:text-accent capitalize",
            {
              "text-accent border-b-2 border-accent": pathname === link.path,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
