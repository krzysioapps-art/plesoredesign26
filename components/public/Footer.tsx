import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="container">
        <div className="footer-top">
          {/* BRAND */}
          <div className="footer-brand">
            <Link href="/" aria-label="Pleso - strona główna">
              <Image
                src="/plesologo.svg"
                alt="Pleso"
                width={146}
                height={44}
                className="footer-logo"
              />
            </Link>

            <p id="footer-title" className="footer-desc">
              Nowoczesna psychoterapia online. Łączymy osoby
              szukające wsparcia ze sprawdzonymi terapeutami.
            </p>

            <div className="footer-socials">
              <a
                href="#"
                className="footer-social"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <nav className="footer-grid" aria-label="Stopka">
            <div className="footer-col">
              <h4>Informacje</h4>

              <Link href="/faq">FAQ</Link>
              <Link href="/polityka-prywatnosci">
                Polityka prywatności
              </Link>
              <Link href="/regulamin">Regulamin</Link>
              <Link href="/karty-podarunkowe">
                Karty podarunkowe
              </Link>
            </div>

            <div className="footer-col">
              <h4>Oferta</h4>

              <Link href="/znajdz-terapeute">
                Znajdź terapeutę
              </Link>
              <Link href="/psychoterapia-online">
                Psychoterapia online
              </Link>
              <Link href="/dla-firm">Dla firm</Link>
              <Link href="/porady">Porady</Link>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>

              <a href="mailto:biuro@pleso.me">
                biuro@pleso.me
              </a>

              <Link href="/kontakt">
                Pomoc klienta
              </Link>

              <p className="footer-hours">
                pn–pt: 9:00–20:00
                <br />
                weekend: 10:00–17:00
              </p>
            </div>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>
            © 2026 PLESO THERAPY sp. z o.o.
          </span>

          <span>
            NIP: 5783155594 · KRS: 0000980227 ·
            REGON: 522652856
          </span>

          <span>
            ul. 12 Lutego 25/7, 82-300 Elbląg
          </span>
        </div>
      </div>
    </footer>
  );
}