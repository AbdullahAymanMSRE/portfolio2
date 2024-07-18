import Link from "next/link";
import { Button } from "./ui/button";

// Components
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-8 xl:flex">
          <NavLinks />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
