"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "./ui/sheet";

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

export default function NavLinks({
  className,
  mobile,
  ...props
}: { mobile?: boolean } & JSX.IntrinsicElements["div"]) {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-8", className)} {...props}>
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
          {mobile ? <SheetClose>{link.name}</SheetClose> : link.name}
        </Link>
      ))}
    </div>
  );
}
