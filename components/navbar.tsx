import Link from "next/link";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { BriefcaseIcon } from "@/components/icons/BriefcaseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { UsersIcon } from "@/components/icons/UsersIcon";

const navLinks = [
  {
    href: "/meet-leo",
    text: "Sobre-Léo",
    Icon: BriefcaseIcon,
  },
  {
    href: "/sobre-iot",
    text: "Sobre-IoT",
    Icon: InfoIcon,
  },
  {
    href: "/areas",
    text: "Areas",
    Icon: UsersIcon,
  },
];

export function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="py-4 px-6 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-xl font-bold">BLOG DO CORBI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, text }) => (
            <Link
              href={href}
              key={text}
              className="hover:underline"
              prefetch={false}
            >
              {text}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-black" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              {navLinks.map(({ href, text, Icon }) => (
                <Link
                  href={href}
                  key={text}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Icon className="h-5 w-5" />
                  {text}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
