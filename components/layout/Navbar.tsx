"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {SITE} from "@/constants/site";
import { Menu } from "lucide-react";
import { useState ,useEffect} from "react";
import{THEME} from "@/constants/theme"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";


const navItems = [
  { label: "Home", href: "#home", id: "home" },
{ label: "About", href: "#about", id: "about" },
{ label: "Services", href: "#services", id: "services" },
{ label: "Gallery", href: "#gallery", id: "gallery" },
{ label: "Brands", href: "#brands", id: "brands" },
{ label: "Testimonials", href: "#testimonials", id: "testimonials" },
{ label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

   

  return (
    
<header className="fixed inset-x-0 top-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
  <Container>
        <nav className="flex h-20 items-center justify-between">
        <Link href="/" className="group tracking-wider">
  <span className={`text-3xl font-extrabold     ${THEME.colors.brandGradient}
 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(239,68,68,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]`}>
    {SITE.name}
  </span>
</Link>

          <ul className="hidden items-center gap-8 md:flex">
          
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
 className={`relative text-sm font-medium transition-all duration-300 ${
    activeSection === item.id
      ? "text-white"
      : "text-zinc-300 hover:text-white"
  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 ${
    activeSection === item.id
      ? "after:w-full"
      : "after:w-0 hover:after:w-full"
  }`}
>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
<Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
      aria-label="Open Menu"
    >
      <Menu className="h-5 w-5 text-white" />
    </button>
  </SheetTrigger>

  <SheetContent
    side="right"
    className="border-l border-white/10 bg-[#090909] text-white"
  >
    <div className="mt-12 flex flex-col gap-6">
      {navItems.map((item) => (
        <Link
  key={item.label}
  href={item.href}
  onClick={() => setOpen(false)}
  className="text-lg font-medium text-zinc-300 transition hover:text-orange-500"
>
  {item.label}
</Link>
      ))}
    </div>
  </SheetContent>
</Sheet>
        </nav>
      </Container>
    </header>
  );
}