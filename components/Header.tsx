import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Abdullah<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden"></div>
      </div>
    </header>
  );
}
