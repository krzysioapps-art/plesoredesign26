import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/plesologo.svg"
              alt="Pleso"
              className="footer-logo"
            />

            <p id="footer-title" className="footer-desc">
              Nowoczesna psychoterapia online. Łączymy osoby szukające wsparcia
              ze sprawdzonymi terapeutami.
            </p>

            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" className="footer-social" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" className="footer-social" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <nav className="footer-grid" aria-label="Stopka">
            <div className="footer-col">
              <h4>Informacje</h4>
              <a href="#">FAQ</a>
              <a href="#">Polityka prywatności</a>
              <a href="#">Regulamin</a>
              <a href="#">Karty podarunkowe</a>
            </div>

            <div className="footer-col">
              <h4>Oferta</h4>
              <a href="#">Znajdź terapeutę</a>
              <a href="#">Psychoterapia online</a>
              <a href="#">Dla firm</a>
              <a href="#">Porady</a>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <a href="mailto:biuro@pleso.me">biuro@pleso.me</a>
              <a href="#">Pomoc klienta</a>

              <p className="footer-hours">
                pn–pt: 9:00–20:00
                <br />
                weekend: 10:00–17:00
              </p>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PLESO THERAPY sp. z o.o.</span>
          <span>NIP: 5783155594 · KRS: 0000980227 · REGON: 522652856</span>
          <span>ul. 12 Lutego 25/7, 82-300 Elbląg</span>
        </div>
      </div>
    </footer>
  );
}