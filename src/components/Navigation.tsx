"use client";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <Link className="identity" href="/" onClick={() => setOpen(false)}>
        Aaron Parnala<span>Projects / Interior design & fit-out</span>
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="site-navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        {[
          ["/projects", "Selected spaces"],
          ["/about", "The practice"],
          [
            "https://www.instagram.com/aaron_parnala_projects/",
            "Contact on Instagram",
          ],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith("https:") ? "_blank" : undefined}
            rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}
            aria-current={path === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {href.startsWith("https:") && <InstagramIcon />}
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
