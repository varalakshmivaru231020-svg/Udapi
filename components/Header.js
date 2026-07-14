"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/service/", label: "Service" },
  { href: "/menu/", label: "Menu" },
  { href: "/contact/", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <img src="/assets/img/logo-icon.png" alt="Udupi Sambrama logo" className="brand-logo" />
          <span className="brand-text">
            <strong>Udupi Sambrama</strong>
            <small>A/C Fine Dine &middot; Pure Veg</small>
          </span>
        </Link>

        <nav className={`site-nav${open ? " open" : ""}`} id="siteNav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:+917676490777" className="btn btn-outline btn-icon btn-sm">
            <svg className="icon"><use href="#i-phone" /></svg>
            <span className="only-lg">Call</span>
          </a>
          <a href="https://wa.me/917676490777" target="_blank" rel="noopener" className="btn btn-whatsapp btn-icon btn-sm">
            <svg className="icon"><use href="#i-whatsapp" /></svg>
            <span>WhatsApp</span>
          </a>
          <button
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
