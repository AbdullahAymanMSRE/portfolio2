import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-between items-center">
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40  text-center ">
          <Link href="/">
            <SheetClose>
              <Logo />
            </SheetClose>
          </Link>
        </div>

        {/* nav links */}
        <NavLinks className="flex-col text-xl" mobile />
      </SheetContent>
    </Sheet>
  );
}
