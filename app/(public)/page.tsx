"use client";

import { useEffect, useRef, useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import NewsSection from "@/components/NewsSection";
import { faqItems } from "@/data/faqItems";
import Image from "next/image";

function Counter({
    end,
    suffix = "",
}: {
    end: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;

        let start: number | null = null;
        const duration = 1800;

        const step = (time: number) => {
            if (!start) start = time;

            const progress = Math.min((time - start) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [started, end]);

    return (
        <h3 ref={ref} className="stat-number">
            {count.toLocaleString("pl-PL")}
            {suffix}
        </h3>
    );
}

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="hero section">
                <div className="container hero-grid">
                    <div>
                        <p className="badge">Psychoterapia online</p>

                        <h1 className="hero-title">
                            <span>Zadbaj o siebie</span>
                            <span>terapia online</span>
                            <span className="hero-gradient">na pleso</span>
                        </h1>

                        <p className="hero-text">
                            Dopasowany psychoterapeuta, wygodna rezerwacja i bezpieczna sesja
                            bez wychodzenia z domu.
                        </p>

                        <div className="hero-actions">
                            <a href="#" className="btn-primary">
                                Znajdź terapeutę
                            </a>

                            <a href="#" className="btn-secondary">
                                Zobacz specjalistów
                            </a>
                        </div>

                        <div className="hero-points">
                            <span>✓ Zweryfikowani terapeuci</span>
                            <span>✓ Sesje 7 dni w tygodniu</span>
                            <span>✓ Bezpieczne płatności</span>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <Image
                            src="/images/hero-turtle.webp"
                            alt="Psychoterapia online"
                            width={700}
                            height={620}
                            className="hero-image"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="section">
                <div className="container stats-grid">
                    <div className="stat-card">
                        <Counter end={30000} suffix="+" />
                        <p>użytkowników otrzymało pomoc</p>
                    </div>

                    <div className="stat-card">
                        <Counter end={95} suffix="%" />
                        <p>średnia ocena specjalistów</p>
                    </div>

                    <div className="stat-card">
                        <Counter end={200000} suffix="+" />
                        <p>przeprowadzonych sesji</p>
                    </div>

                    <div className="stat-card">
                        <Counter end={500} suffix="+" />
                        <p>terapeutów do wyboru</p>
                    </div>
                </div>
            </section>

            {/* TRUST LOGOS */}
            <section className="section section-white" aria-labelledby="trust-logos-title">
                <div className="container">
                    <div className="section-head section-head-center">
                        <p className="section-label">Zaufanie i partnerstwa</p>

                        <h2 id="trust-logos-title" className="section-title">
                            Wspierają nas
                        </h2>
                    </div>

                    <div className="logo-marquee" role="presentation">
                        <div className="logo-track">
                            {[
                                "https://a.storyblok.com/f/198860/600x157/910f04b7fb/forbes-international-logo-black-transparent.png",
                                "https://a.storyblok.com/f/198860/400x112/fcb52961c7/wprost.svg",
                                "https://a.storyblok.com/f/198860/820x312/af124c8fe4/manager-plus-logo.webp",
                                "https://a.storyblok.com/f/198860/1289x800/f039e63ae6/pap-biznes_logo_monochromatyczne_pl-v2.webp",
                                "https://a.storyblok.com/f/198860/2880x1134/511c497f0e/2024_new_msn_logo.webp",
                                "https://a.storyblok.com/f/198860/270x85/e884e916ed/partner-logo-20-warsaw-booster-23.webp",
                                "https://a.storyblok.com/f/198860/225x225/d9361c52fa/partner-logo-10-mit-enterprise-forum.png",
                                "https://a.storyblok.com/f/198860/408x200/b153c1c685/partner-logo-1-pusf.webp",
                                "https://a.storyblok.com/f/198860/316x200/f2c29fe7b5/partner-logo-6-unit-city.webp",
                                "https://a.storyblok.com/f/198860/304x200/bd86bb6ed9/partner-logo-3-project-ninja.webp",
                                "https://a.storyblok.com/f/198860/172x200/23a2345607/partner-logo-4-it-arena.webp",
                                "https://a.storyblok.com/f/198860/412x200/dfe4d9415e/partner-logo-5-microsoft-for-startups.webp",
                                "https://a.storyblok.com/f/198860/1104x853/9b267b7c96/partner-logo-23-karta-duzej-rodziny.png",
                                "https://a.storyblok.com/f/198860/600x157/910f04b7fb/forbes-international-logo-black-transparent.png",
                                "https://a.storyblok.com/f/198860/400x112/fcb52961c7/wprost.svg",
                                "https://a.storyblok.com/f/198860/820x312/af124c8fe4/manager-plus-logo.webp",
                                "https://a.storyblok.com/f/198860/1289x800/f039e63ae6/pap-biznes_logo_monochromatyczne_pl-v2.webp",
                                "https://a.storyblok.com/f/198860/2880x1134/511c497f0e/2024_new_msn_logo.webp",
                                "https://a.storyblok.com/f/198860/270x85/e884e916ed/partner-logo-20-warsaw-booster-23.webp",
                            ].map((src, index) => (
                                <div className="logo-item" key={`${src}-${index}`}>
                                    <img
                                        src={src}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        aria-hidden="true"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* GIFT CARDS */}
            <section className="section section-white" aria-labelledby="gift-cards-title">
                <div className="container">
                    <div className="gift-premium card">
                        <div className="gift-content">
                            <p className="section-label">Karty podarunkowe</p>

                            <h2 id="gift-cards-title" className="section-title">
                                Podaruj bliskiej osobie terapię i spokój
                            </h2>

                            <p className="section-text">
                                Wyjątkowy prezent, który realnie wspiera zdrowie psychiczne i pomaga
                                odzyskać równowagę.
                            </p>

                            <div className="gift-actions">
                                <a href="#" className="btn-primary">
                                    Wybierz kartę podarunkową
                                </a>
                            </div>
                        </div>

                        <div className="gift-image-wrap">
                            <img
                                src="https://pleso.me/_next/static/media/gifts-banner-turtle-50.495b5eba.webp"
                                alt="Karta podarunkowa"
                                className="gift-image"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <p className="section-label">Jak może pomóc terapia</p>

                        <h2 className="section-title">
                            Psychoterapia pomaga odzyskać równowagę i ruszyć dalej
                        </h2>

                        <p className="section-text">
                            W bezpiecznej relacji z terapeutą możesz lepiej zrozumieć siebie,
                            zmniejszyć napięcie i wprowadzić realne zmiany.
                        </p>
                    </div>

                    <div className="benefits-grid">
                        {[
                            {
                                text: "Odnaleźć spokój ducha i pożegnać się z niepokojem",
                                img: "https://pleso.me/_next/static/media/w1.2b20e3dd.webp",
                            },
                            {
                                text: "Zbudować zdrowe relacje i nauczyć się stawiać granice",
                                img: "https://pleso.me/_next/static/media/w2.6e3ef8d7.webp",
                            },
                            {
                                text: "Odnaleźć motywację i pokonać prokrastynację",
                                img: "https://pleso.me/_next/static/media/w3.0d98d620.webp",
                            },
                            {
                                text: "Zaakceptować siebie i uciszyć wewnętrznego krytyka",
                                img: "https://pleso.me/_next/static/media/w4.4245114b.webp",
                            },
                            {
                                text: "Budować karierę zgodnie z własnymi wartościami",
                                img: "https://pleso.me/_next/static/media/w5.0e9027fa.webp",
                            },
                            {
                                text: "Przejść przez ważne zmiany życiowe i zredukować stres",
                                img: "https://pleso.me/_next/static/media/w6.68cdf5e1.webp",
                            },
                        ].map((item) => (
                            <article key={item.text} className="benefit-card">
                                <img src={item.img} alt={item.text} />
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section
                className="section section-white how-section"
                aria-labelledby="how-title"
            >
                <div className="container">
                    <div className="section-head how-head">
                        <p className="section-label">Jak to działa</p>

                        <h2 id="how-title" className="section-title">
                            Rozpocznij terapię online w 4 prostych krokach
                        </h2>

                        <p className="section-text">
                            Bez stresu, bez wychodzenia z domu i bez zbędnych formalności.
                        </p>
                    </div>

                    <div className="how-grid">
                        {[
                            {
                                nr: "01",
                                title: "Wypełnij test",
                                text:
                                    "Krótki formularz pomoże dopasować psychoterapeutę do Twoich potrzeb.",
                                img: "https://pleso.me/_next/static/media/what1.9f8989d7.webp",
                            },
                            {
                                nr: "02",
                                title: "Wybierz terapeutę",
                                text:
                                    "Sprawdź profile specjalistów, doświadczenie i podejście terapeutyczne.",
                                img: "https://pleso.me/_next/static/media/what2-v2.a9f83a56.webp",
                            },
                            {
                                nr: "03",
                                title: "Zarezerwuj termin",
                                text:
                                    "Samodzielnie wybierz dogodny termin spotkania online.",
                                img: "https://pleso.me/_next/static/media/what3-v2.456968c2.webp",
                            },
                            {
                                nr: "04",
                                title: "Dołącz do sesji",
                                text:
                                    "Po płatności otrzymasz link do spotkania i możesz zacząć terapię.",
                                img: "https://pleso.me/_next/static/media/what4.9fde2b33.webp",
                            },
                        ].map((item) => (
                            <article className="how-card" key={item.nr}>
                                <div className="how-card-top">
                                    <span className="how-step">{item.nr}</span>
                                </div>

                                <div className="how-image-wrap">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="how-image"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <div className="how-card-body">
                                    <h3 className="how-card-title">{item.title}</h3>

                                    <p className="how-card-text">{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="how-actions">
                        <a href="#" className="btn-primary">
                            Wypełnij test w kilka minut
                        </a>
                    </div>
                </div>
            </section>

            {/* THERAPISTS */}
            <section
                className="section section-white"
                aria-labelledby="therapists-title"
            >
                <div className="container">
                    <div className="section-head therapists-clean-head">
                        <p className="section-label">Nasi specjaliści</p>

                        <h2 id="therapists-title" className="section-title">
                            Poznaj psychoterapeutów dostępnych na pleso
                        </h2>

                        <p className="section-text">
                            Starannie dobieramy specjalistów i współpracujemy wyłącznie z osobami,
                            którym możesz zaufać.
                        </p>
                    </div>

                    <div className="therapists-clean-grid">
                        {[
                            {
                                name: "Damian",
                                role: "Relacje • stres • kryzysy życiowe",
                                img: "https://pleso.me/_next/static/media/pl_staff1.08978904.webp",
                                text: "Pomaga odzyskać spokój, przejść przez trudny moment w życiu i odbudować relacje z bliskimi.",
                            },
                            {
                                name: "Agnieszka",
                                role: "Depresja • wypalenie • zmiana",
                                img: "https://pleso.me/_next/static/media/pl_staff2-v2.234a16d1.webp",
                                text: "Wspiera osoby zmagające się z napięciem, przeciążeniem i potrzebą nowego kierunku.",
                            },
                            {
                                name: "Łucja",
                                role: "Poczucie wartości • granice • rozwój",
                                img: "https://pleso.me/_next/static/media/pl_staff3-v2.96c96b94.webp",
                                text: "Pomaga budować pewność siebie, zdrowe granice i większą sprawczość na co dzień.",
                            },
                        ].map((item) => (
                            <article className="card therapist-clean-card" key={item.name}>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="therapist-clean-image"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="therapist-clean-body">
                                    <p className="therapist-clean-role">{item.role}</p>

                                    <h3 className="therapist-clean-name">{item.name}</h3>

                                    <p className="therapist-clean-text">{item.text}</p>

                                    <a href="#" className="therapist-link">
                                        Zobacz profil
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="card therapists-cta-box">
                        <div className="therapists-avatars" aria-hidden="true">
                            <img src="https://pleso.me/_next/static/media/pl_staff_avatars_1-v3.9aebdbe9.webp" alt="" />
                            <img src="https://pleso.me/_next/static/media/pl_staff_avatars_2-v2.083097e9.webp" alt="" />
                            <img src="https://pleso.me/_next/static/media/pl_staff_avatars_3-v2.33864e56.webp" alt="" />
                            <img src="https://pleso.me/_next/static/media/pl_staff_avatars_4-v2.7ee340d3.webp" alt="" />
                            <img src="https://pleso.me/_next/static/media/pl_staff_avatars_5-v2.c6a53407.webp" alt="" />
                        </div>

                        <div className="therapists-cta-content">
                            <h3>500+ zweryfikowanych terapeutów</h3>

                            <p className="section-text">
                                Dopasuj specjalistę do swoich potrzeb, celu terapii i terminu.
                            </p>
                        </div>

                        <a href="#" className="btn-primary">
                            Znajdź terapeutę
                        </a>
                    </div>
                </div>
            </section>

            <section className="section section-white guide-section" aria-labelledby="guide-title">
                <div className="container">
                    <div className="guide-premium">
                        <div className="guide-copy">
                            <p className="section-label">Bezpłatna pomoc</p>

                            <h2 id="guide-title" className="guide-title">
                                Nie wiesz, którego terapeutę wybrać?
                            </h2>

                            <p className="guide-text">
                                Jeśli trudno Ci podjąć decyzję, nasz przewodnik terapii pomoże dobrać
                                odpowiedniego specjalistę i spokojnie zacząć.
                            </p>

                            <div className="guide-actions">
                                <a href="#" className="btn-primary">
                                    Umów bezpłatne spotkanie
                                </a>

                                <span className="guide-note">15 minut • bez zobowiązań</span>
                            </div>

                            <div className="guide-benefits">
                                <span>✓ znaleźć sprawdzonego terapeutę</span>
                                <span>✓ dobrać nurt psychoterapii</span>
                                <span>✓ przygotować się do pierwszej sesji</span>
                                <span>✓ upewnić się, że to dobre dopasowanie</span>
                            </div>
                        </div>

                        <img
                            src="https://pleso.me/_next/static/media/ua-guide-banner-final-v1.09f7ea7c.png"
                            alt="Pomoc w wyborze terapeuty"
                            className="guide-art"
                        />
                    </div>
                </div>
            </section>

            {/* QUOTE */}
            <section className="section section-white" aria-labelledby="quote-title">
                <div className="container">
                    <div className="quote-box">
                        <div className="quote-media">
                            <div className="quote-image-wrap">
                                <img
                                    src="https://pleso.me/_next/static/media/staff1.f542e8cf.webp"
                                    alt="Anna - współzałożycielka Pleso"
                                    className="quote-image"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        <div className="quote-content">
                            <p className="section-label">Słowo od założycielki</p>

                            <h2 id="quote-title" className="quote-title">
                                Psychoterapia jest OK
                            </h2>

                            <p className="quote-text">
                                Psychoterapia (również przez Internet) to sposób na lepsze
                                zrozumienie siebie, nauczenie się szacunku dla własnych potrzeb oraz
                                bycia przyjaznym i akceptującym wobec samego siebie.
                            </p>

                            <p className="quote-text">
                                Efekty są jednak tego warte.
                            </p>

                            <p className="quote-text">
                                I pamiętaj: próbowanie czegoś nowego jest OK ;)
                            </p>

                            <div className="quote-author">
                                <strong>Anna</strong>
                                <span>Współzałożycielka Pleso i lekarz</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <Testimonials />

            {/* NEWS */}
            <NewsSection />

            {/* NEWSLETTER */}
            <section
                className="section section-white"
                aria-labelledby="newsletter-title"
            >
                <div className="container">
                    <div className="newsletter-box">
                        <div className="newsletter-content">
                            <p className="section-label">Bądź na bieżąco</p>

                            <h2 id="newsletter-title" className="newsletter-title">
                                Dowiedz się o naszych wydarzeniach jako pierwszy
                            </h2>

                            <p className="newsletter-text">
                                Organizujemy bezpłatne webinary, dzielimy się wiedzą ekspertów i
                                publikujemy praktyczne materiały o zdrowiu psychicznym.
                                Zapisz się, aby niczego nie przegapić.
                            </p>

                            <form className="newsletter-form">
                                <label className="sr-only" htmlFor="newsletter-email">
                                    Twój adres e-mail
                                </label>

                                <input
                                    id="newsletter-email"
                                    type="email"
                                    placeholder="Twój adres e-mail"
                                    className="newsletter-input"
                                />

                                <button className="btn-primary" type="submit">
                                    Zapisz się
                                </button>
                            </form>

                            <p className="newsletter-note">
                                Zapisując się, wyrażasz zgodę na przetwarzanie danych osobowych.
                                Zero spamu — tylko wartościowe treści.
                            </p>
                        </div>

                        <div className="newsletter-side" aria-hidden="true">
                            <div className="newsletter-pill">Webinary</div>
                            <div className="newsletter-pill">Artykuły ekspertów</div>
                            <div className="newsletter-pill">Nowe wydarzenia</div>
                            <div className="newsletter-pill">Poradniki</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HELP */}
            <section className="section section-white" aria-labelledby="help-title">
                <div className="container">
                    <div className="help-box">
                        <div className="help-content">
                            <p className="section-label">Masz pytania?</p>

                            <h2 id="help-title" className="help-title">
                                Uzyskaj odpowiedzi i skontaktuj się z nami
                            </h2>

                            <p className="help-text">
                                Jesteśmy tutaj, aby pomóc Ci wybrać terapeutę, odpowiedzieć na pytania
                                dotyczące platformy oraz wesprzeć Cię przed pierwszą sesją.
                            </p>

                            <div className="help-list">
                                <div className="help-item">
                                    <strong>Media społecznościowe</strong>
                                    <span>@pleso.terapia</span>
                                </div>

                                <div className="help-item">
                                    <strong>Email</strong>
                                    <span>biuro@pleso.me</span>
                                </div>

                                <div className="help-item">
                                    <strong>Dział wsparcia klientów</strong>
                                    <span>@pleso.terapia</span>
                                </div>

                                <div className="help-item">
                                    <strong>Kontakt bezpośredni</strong>
                                    <span>biuro@pleso.me</span>
                                </div>
                            </div>

                            <div className="help-actions">
                                <a className="btn-primary" href="#">
                                    Przejdź do strony z pytaniami
                                </a>
                            </div>
                        </div>

                        <div className="help-visual">
                            <img
                                src="https://pleso.me/_next/static/media/quest.e8dfe7fa.webp"
                                alt="Pomoc i kontakt"
                                className="help-image"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* EMERGENCY */}
<section
  className="section emergency-section"
  aria-labelledby="emergency-title"
>
  <div className="container">
    <div className="emergency-box">
      <div className="emergency-content">
        <p className="section-label emergency-label">Pilne wsparcie</p>

        <h2 id="emergency-title" className="emergency-title">
          Potrzebujesz natychmiastowej pomocy psychologicznej?
        </h2>

        <p className="emergency-text">
          Jeśli jesteś w kryzysie lub potrzebujesz pilnej, bezpłatnej pomocy,
          skorzystaj z poniższych numerów wsparcia dostępnych w Polsce.
        </p>
      </div>

      <div className="emergency-grid">
        <div className="emergency-item">
          <p className="emergency-name">Całodobowa Linia Wsparcia</p>
          <a href="tel:800702222" className="emergency-phone">
            800 70 2222
          </a>
        </div>

        <div className="emergency-item">
          <p className="emergency-name">
            Telefon zaufania dzieci i młodzieży
          </p>
          <a href="tel:116111" className="emergency-phone">
            116 111
          </a>
        </div>

        <div className="emergency-item">
          <p className="emergency-name">
            Telefon zaufania dla dorosłych
          </p>
          <a href="tel:116123" className="emergency-phone">
            116 123
          </a>
        </div>

        <div className="emergency-item">
          <p className="emergency-name">Niebieska Linia</p>
          <a href="tel:800120002" className="emergency-phone">
            800 120 002
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* FAQ */}
            <section className="section">
                <div className="container faq-wrap">
                    <div className="section-head">
                        <p className="section-label">FAQ</p>
                        <h2 className="section-title">Najczęstsze pytania</h2>
                    </div>

                    <FaqAccordion items={faqItems} limit={3} showMoreLink />
                </div>
            </section>



            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-box">
                        <p className="section-label">Zadbaj o siebie</p>

                        <h2 className="section-title">
                            Pierwszy krok do lepszego samopoczucia zaczyna się dziś
                        </h2>

                        <p className="section-text">
                            Wybierz terapeutę dopasowanego do Twoich potrzeb i umów pierwszą
                            sesję online.
                        </p>

                        <div className="hero-actions">
                            <a href="#" className="btn-primary">
                                Znajdź terapeutę
                            </a>

                            <a href="#" className="btn-secondary">
                                Dowiedz się więcej
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}