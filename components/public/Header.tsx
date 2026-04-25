"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    label: "Znajdź terapeutę",
    sections: [
      {
        title: "",
        items: [
          { label: "Przewodnik po psychoterapii", href: "/demo" },
        ],
      },
    ],
  },
  {
    label: "Porady",
    sections: [
      {
        title: "",
        items: [
          { label: "Blog", href: "/demo" },
          { label: "Testy psychologiczne", href: "/demo" },
          { label: "Nurty psychoterapii", href: "/demo" },
          { label: "Terapii", href: "/demo" },
          { label: "Wiadomości", href: "/demo" },
        ],
      },
    ],
  },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("PL");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setActive(null);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) setActive(null);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`site-header
    ${scrolled ? "site-header-small" : ""}
    ${active || mobileOpen ? "site-header-open" : ""}
  `}
        onMouseLeave={() => setActive(null)}
      >
        <div className="container header-inner">
          {/* DESKTOP */}
          <div className="header-row">
            <Link
              href="/"
              className="logo"
              onMouseEnter={() => setActive(null)}
            >
              <Image
                src="/plesologo.svg"
                alt="Pleso"
                width={110}
                height={28}
                priority
                className="logo-img"
              />
            </Link>

            {menu.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => setActive(item.label)}
              >
                <button className="nav-trigger">{item.label}</button>
              </div>
            ))}

            <div
              className="header-static"
              onMouseEnter={() => setActive(null)}
            >
              <Link href="/demo" className="nav-link">
                Karty podarunkowe
              </Link>

              <Link href="/demo" className="nav-link">
                O nas
              </Link>

              <Link href="/demo" className="nav-link">
                Dla biznesu
              </Link>

              <Link href="/demo" className="nav-link">
                Dla psychoterapeutów
              </Link>

              <button
                className="lang-switch"
                onClick={() =>
                  setLang((prev) => (prev === "PL" ? "EN" : "PL"))
                }
              >
                {lang}
              </button>

              <Link href="/dashboard" className="header-login">
                Zaloguj się
              </Link>
            </div>

            <button
              className={`menu-toggle ${mobileOpen ? "is-open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        {active && (
          <div
            className="mega-menu"
            onMouseLeave={() => setActive(null)}
          >
            <div className="container mega-inner">
              {menu
                .find((m) => m.label === active)
                ?.sections.map((section) => (
                  <div key={section.title}>
                    {section.title && (
                      <p className="mega-title">{section.title}</p>
                    )}

                    <div className="mega-links">
                      {section.items.map((link) => (
                        <Link href={link.href} key={link.label}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </header>

      {/* MOBILE */}
      {mobileOpen && (
        <>
          <div
            className="mobile-backdrop"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="mobile-drawer">
                <div className="container">

            <div className="mobile-menu">
              {menu.map((item) => (
                <div key={item.label}>
                  <button
                    className="mobile-parent"
                    onClick={() =>
                      setMobileActive(
                        mobileActive === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <span>
                      {mobileActive === item.label ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`mobile-sub ${mobileActive === item.label
                      ? "mobile-sub-open"
                      : ""
                      }`}
                  >
                    {item.sections.map((section) =>
                      section.items.map((link) => (
                        <Link
                          href={link.href}
                          key={link.label}
                          onClick={closeMobile}
                        >
                          {link.label}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              ))}

              <Link href="/demo" onClick={closeMobile}>
                Karty podarunkowe
              </Link>
              <Link href="/demo" onClick={closeMobile}>
                O nas
              </Link>

              <button
                className="mobile-parent"
                onClick={() =>
                  setLang((prev) => (prev === "PL" ? "EN" : "PL"))
                }
              >
                Język: {lang}
              </button>

              <Link href="/dashboard" className="header-login" onClick={closeMobile}>
                Zaloguj się
              </Link>
            </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}