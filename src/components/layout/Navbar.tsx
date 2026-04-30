"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavLink } from "@/lib/types";

const navLinks: NavLink[] = [
  { label: "Home",           href: "/"               },
  { label: "Daily Sessions", href: "/daily-sessions" },
  { label: "Retreats",       href: "/retreats"       },
  { label: "PWA Apps",       href: "/pwa-apps"       },
  { label: "Donations",      href: "/donations"      },
  { label: "Contact Us",     href: "/contact"        },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="container-page flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Way To Moksha – Home"
        >
          {/* Placeholder logo mark */}
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "var(--color-teal-primary)" }}
            aria-hidden="true"
          >
            W
          </span>
          <span className="font-bold text-[var(--color-navy)] text-lg leading-tight hidden sm:block">
            Way To Moksha
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150
                ${
                  isActive(link.href)
                    ? "bg-[var(--color-teal-subtle)] text-[var(--color-teal-primary)] font-semibold"
                    : "text-[var(--color-text-base)] hover:bg-[var(--color-teal-subtle)] hover:text-[var(--color-teal-primary)]"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--color-navy)] hover:bg-[var(--color-teal-subtle)] transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-[var(--color-border)] px-4 pb-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 mt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                    ${
                      isActive(link.href)
                        ? "bg-[var(--color-teal-subtle)] text-[var(--color-teal-primary)] font-semibold"
                        : "text-[var(--color-text-base)] hover:bg-[var(--color-teal-subtle)] hover:text-[var(--color-teal-primary)]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
