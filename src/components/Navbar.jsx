"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; 
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/buttons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); 
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/templates", label: "Templates" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
  ];

  // ✅ Handle Create Resume click (auth logic manually handle karoge)
  const handleCreateResume = () => {
    const isSignedIn = false; // <-- yahan apna auth logic lagao (cookies, localStorage, backend token, etc.)
    
    if (!isSignedIn) {
      router.push("/login"); // not signed in → go to login
    } else {
      router.push("/create-resume"); // signed in → go to builder
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white py-6">
      <div className="customContainer">
        <div className="flex items-center justify-between py-4 px-6 bg-white shadow-sm rounded-full">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-indigo-600">
              🎓 Resume Builder
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-black font-medium">
              {navLinks.map((item) => {
                const isActive = pathname === item.href; 
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative group transition duration-300"
                    >
                      {item.label}
                      <span
                        className={`
                          absolute left-0 -bottom-1 h-[2px] 
                          bg-[var(--primary-indigo)] 
                          transition-all duration-300 
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button variant="primary" onClick={handleCreateResume}>
              Create Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={pathname === item.href ? "text-[var(--primary-indigo)] font-semibold" : ""}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Create Resume Button */}
          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              setOpen(false);
              handleCreateResume();
            }}
          >
            Create Resume
          </Button>
        </div>
      </div>
    </header>
  );
}
