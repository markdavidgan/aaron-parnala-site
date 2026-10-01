"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "/projects", label: "Selected Works" },
    { href: "/about", label: "The Practice" },
    { href: "/contact", label: "Start a Project" }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#121314]/90 backdrop-blur-md py-4"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-lg tracking-widest text-[#F4F2EE] uppercase group-hover:text-amber-200/90 transition-colors">
            Aaron Parnala
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#9A9893] uppercase font-mono">
            Projects • Interior Design
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-amber-300"
                    : "text-[#C8C5BE] hover:text-[#F4F2EE]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-mono tracking-widest text-[#F4F2EE] uppercase transition-all hover:border-amber-300/60 hover:bg-amber-400/10"
          >
            <span>Consultation</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-amber-300" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#F4F2EE] md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] border-b border-white/10 bg-[#121314] px-6 py-8 shadow-2xl md:hidden">
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={closeMobile}
              className={`text-sm font-mono uppercase tracking-widest ${
                pathname === "/" ? "text-amber-300" : "text-[#C8C5BE]"
              }`}
            >
              Overview
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`text-sm font-mono uppercase tracking-widest ${
                    isActive ? "text-amber-300" : "text-[#C8C5BE]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex items-center justify-between rounded-sm border border-amber-300/40 bg-amber-400/10 px-5 py-3 text-xs font-mono tracking-widest text-amber-200 uppercase"
              >
                <span>Request Project Consultation</span>
                <ArrowUpRight className="h-4 w-4 text-amber-300" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
