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
        items: ["Przewodnik po psychoterapii"],
      },
    ],
  },
  {
    label: "Porady",
    sections: [
      {
        title: "",
        items: [
          "Blog",
          "Testy psychologiczne",
          "Nurty psychoterapii",
          "Terapii",
          "Wiadomości",
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

  return (
    <>
      <header
        className={`site-header
    ${scrolled ? "site-header-small" : ""}
    ${active ? "site-header-open" : ""}
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
              <Link href="#" className="nav-link">
                Karty podarunkowe
              </Link>

              <Link href="#" className="nav-link">
                O nas
              </Link>

              <Link href="#" className="nav-link">
                Dla biznesu
              </Link>

              <Link href="#" className="nav-link">
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
              className="menu-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              ☰
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
                      {section.items.map((item) => (
                        <a href="#" key={item}>
                          {item}
                        </a>
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
            <div className="mobile-top">
              <strong>Menu</strong>

              <button onClick={() => setMobileOpen(false)}>✕</button>
            </div>

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
                        <a href="#" key={link}>
                          {link}
                        </a>
                      ))
                    )}
                  </div>
                </div>
              ))}

              <a href="#">Karty podarunkowe</a>
              <a href="#">O nas</a>

              <button
                className="mobile-parent"
                onClick={() =>
                  setLang((prev) => (prev === "PL" ? "EN" : "PL"))
                }
              >
                Język: {lang}
              </button>

              <Link href="/dashboard" className="header-login">
                Zaloguj się
              </Link>
            </div>
          </aside>
        </>
      )}
    </>
  );
}