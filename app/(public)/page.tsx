"use client";

import { useEffect, useRef, useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import NewsSection from "@/components/NewsSection";
import { faqItems } from "@/data/faqItems";
import Image from "next/image";
import QuoteAnimated from "@/components/QuoteAnimated";

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
            <section className="hero section" aria-labelledby="hero-title">
                <div className="container hero-grid">
                    <div className="hero-content">
                        <p className="badge">Psychoterapia online</p>

                        <h1 id="hero-title" className="hero-title">
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

                        <div className="hero-points" aria-label="Najważniejsze korzyści">
                            <span>✓ Zweryfikowani terapeuci</span>
                            <span>✓ Sesje 7 dni w tygodniu</span>
                            <span>✓ Bezpieczne płatności</span>
                        </div>
                    </div>

                    <div className="hero-visual" aria-hidden="true">
                        <Image
                            src="/images/hero-turtle.webp"
                            alt=""
                            width={700}
                            height={620}
                            className="hero-image"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="section stats" aria-labelledby="stats-title">
                <div className="container">
                    <h2 id="stats-title" className="sr-only">
                        Najważniejsze statystyki platformy
                    </h2>

                    <div className="home-grid-4">
                        <div className="home-card home-card-soft stat-card">
                            <Counter end={30000} suffix="+" />
                            <p>użytkowników otrzymało pomoc</p>
                        </div>

                        <div className="home-card home-card-soft stat-card">
                            <Counter end={95} suffix="%" />
                            <p>średnia ocena specjalistów</p>
                        </div>

                        <div className="home-card home-card-soft stat-card">
                            <Counter end={200000} suffix="+" />
                            <p>przeprowadzonych sesji</p>
                        </div>

                        <div className="home-card home-card-soft stat-card">
                            <Counter end={500} suffix="+" />
                            <p>terapeutów do wyboru</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST LOGOS */}
            <section
                className="logos section"
                aria-labelledby="trust-logos-title"
            >
                <div className="container">
                    <div className="logos-head">
                        <p className="logos-label">Zaufanie i partnerstwa</p>

                        <h2 id="trust-logos-title" className="logos-title">
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
            <section
                className="gift section"
                aria-labelledby="gift-cards-title"
            >
                <div className="container">
                    <div className="gift-premium">
                        <div className="gift-content">
                            <p className="home-label">
                                Karty podarunkowe
                            </p>

                            <h2
                                id="gift-cards-title"
                                className="home-title"
                            >
                                Podaruj bliskiej osobie terapię i spokój
                            </h2>

                            <p className="home-text">
                                Wyjątkowy prezent, który realnie wspiera zdrowie psychiczne i pomaga
                                odzyskać równowagę.
                            </p>

                            <div className="gift-actions">
                                <a href="#" className="btn-primary">
                                    Wybierz kartę podarunkową
                                </a>
                            </div>
                        </div>

                        <div
                            className="gift-image-wrap"
                            aria-hidden="true"
                        >
                            <img
                                src="https://pleso.me/_next/static/media/gifts-banner-turtle-50.495b5eba.webp"
                                alt=""
                                className="gift-image"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section
                className="benefits section"
                aria-labelledby="benefits-title"
            >
                <div className="container">
                    <div className="home-head">
                        <p className="home-label">Jak może pomóc terapia</p>

                        <h2 id="benefits-title" className="home-title">
                            Psychoterapia pomaga odzyskać równowagę i ruszyć dalej
                        </h2>

                        <p className="home-text">
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
                                <img
                                    src={item.img}
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* AMBASSADOR */}
            <section
                className="ambassador section"
                aria-labelledby="ambassador-title"
            >
                <div className="container">
                    <div className="ambassador-box">

                        <div className="ambassador-media">
                            <div className="ambassador-profile">
                                <img
                                    src="https://pleso.me/_next/static/media/polikowski.9cc818ae.webp"
                                    alt="Łukasz Polikowski"
                                    className="ambassador-image"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="ambassador-person">
                                    <strong>Łukasz Polikowski</strong>
                                    <span>Psycholog • Twórca edukacyjny</span>
                                </div>

                                <div className="ambassador-stats">
                                    <div className="ambassador-stat">
                                        <strong>300k+</strong>
                                        <span>społeczność</span>
                                    </div>

                                    <div className="ambassador-stat">
                                        <strong>8 lat+</strong>
                                        <span>biznes & consulting</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ambassador-content">
                            <p className="home-label">
                                Ambasador marki
                            </p>

                            <h2
                                id="ambassador-title"
                                className="ambassador-title"
                            >
                                Łukasz Polikowski wspiera pleso jako ambasador
                            </h2>

                            <p className="ambassador-lead">
                                Razem promujemy nowoczesne podejście do zdrowia psychicznego,
                                terapię online oraz realne wsparcie dla osób prywatnych i firm.
                            </p>

                            <div className="ambassador-points">
                                <span>popularyzacja wiedzy psychologicznej</span>
                                <span>większa dostępność terapii online</span>
                                <span>wsparcie wellbeingowe dla firm</span>
                                <span>edukacja bez stygmatyzacji</span>
                            </div>

                            <div className="ambassador-quote">
                                „Dostępna i nowoczesna terapia powinna być prostym wyborem
                                dla każdego, kto potrzebuje wsparcia.”
                            </div>

                            <div className="ambassador-actions">
                                <a href="#" className="btn-primary">
                                    Poznaj pleso dla firm
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section
                className="how section"
                aria-labelledby="how-title"
            >
                <div className="container">
                    <div className="how-head">
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
                                <span className="how-step">{item.nr}</span>

                                <div className="how-image-wrap">
                                    <img
                                        src={item.img}
                                        alt=""
                                        aria-hidden="true"
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
                className="therapists section"
                aria-labelledby="therapists-title"
            >
                <div className="container">
                    <div className="therapists-head">
                        <p className="section-label">Nasi specjaliści</p>

                        <h2 id="therapists-title" className="section-title">
                            Poznaj psychoterapeutów dostępnych na pleso
                        </h2>

                        <p className="section-text">
                            Starannie dobieramy specjalistów i współpracujemy wyłącznie z osobami,
                            którym możesz zaufać.
                        </p>
                    </div>

                    <div className="therapists-grid">
                        {[
                            {
                                name: "Damian",
                                role: "Relacje • stres • kryzysy życiowe",
                                img: "https://pleso.me/_next/static/media/pl_staff1.08978904.webp",
                                text:
                                    "Pomaga odzyskać spokój, przejść przez trudny moment w życiu i odbudować relacje z bliskimi.",
                            },
                            {
                                name: "Agnieszka",
                                role: "Depresja • wypalenie • zmiana",
                                img: "https://pleso.me/_next/static/media/pl_staff2-v2.234a16d1.webp",
                                text:
                                    "Wspiera osoby zmagające się z napięciem, przeciążeniem i potrzebą nowego kierunku.",
                            },
                            {
                                name: "Łucja",
                                role: "Poczucie wartości • granice • rozwój",
                                img: "https://pleso.me/_next/static/media/pl_staff3-v2.96c96b94.webp",
                                text:
                                    "Pomaga budować pewność siebie, zdrowe granice i większą sprawczość na co dzień.",
                            },
                        ].map((item) => (
                            <article className="therapist-card" key={item.name}>
                                <div className="therapist-image-wrap">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="therapist-image"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <div className="therapist-body">
                                    <p className="therapist-role">{item.role}</p>

                                    <h3 className="therapist-name">{item.name}</h3>

                                    <p className="therapist-text">{item.text}</p>

                                    <a href="#" className="therapist-link">
                                        Zobacz profil
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="therapists-cta">
                        <div className="therapists-avatars" aria-hidden="true">
                            <img
                                src="https://pleso.me/_next/static/media/pl_staff_avatars_1-v3.9aebdbe9.webp"
                                alt=""
                            />
                            <img
                                src="https://pleso.me/_next/static/media/pl_staff_avatars_2-v2.083097e9.webp"
                                alt=""
                            />
                            <img
                                src="https://pleso.me/_next/static/media/pl_staff_avatars_3-v2.33864e56.webp"
                                alt=""
                            />
                            <img
                                src="https://pleso.me/_next/static/media/pl_staff_avatars_4-v2.7ee340d3.webp"
                                alt=""
                            />
                            <img
                                src="https://pleso.me/_next/static/media/pl_staff_avatars_5-v2.c6a53407.webp"
                                alt=""
                            />
                        </div>

                        <div className="therapists-cta-copy">
                            <h3>500+ zweryfikowanych terapeutów</h3>

                            <p>
                                Dopasuj specjalistę do swoich potrzeb, celu terapii i terminu.
                            </p>
                        </div>

                        <a href="#" className="btn-primary">
                            Znajdź terapeutę
                        </a>
                    </div>
                </div>
            </section>

            {/* GUIDE */}
            <section
                className="guide section"
                aria-labelledby="guide-title"
            >
                <div className="guide-shell">
                    <div className="container">
                        <div className="guide-layout">
                            <div className="guide-copy">
                                <p className="home-label">Bezpłatna pomoc</p>

                                <h2 id="guide-title" className="guide-title">
                                    Nie wiesz, którego terapeutę wybrać?
                                </h2>

                                <p className="guide-text">
                                    Jeśli trudno Ci podjąć decyzję, nasz przewodnik terapii pomoże dobrać
                                    odpowiedniego specjalistę i spokojnie zacząć terapię bez stresu.
                                </p>

                                <div className="guide-actions">
                                    <a href="#" className="btn-primary">
                                        Umów bezpłatne spotkanie
                                    </a>

                                    <span className="guide-note">
                                        15 minut • bez zobowiązań
                                    </span>
                                </div>

                                <div className="guide-benefits">
                                    <span>✓ znaleźć sprawdzonego terapeutę</span>
                                    <span>✓ dobrać nurt psychoterapii</span>
                                    <span>✓ przygotować się do pierwszej sesji</span>
                                    <span>✓ upewnić się, że to dobre dopasowanie</span>
                                </div>
                            </div>

                            <div className="guide-visual">
                                <img
                                    src="https://pleso.me/_next/static/media/ua-guide-banner-final-v1.09f7ea7c.png"
                                    alt="Pomoc w wyborze terapeuty"
                                    className="guide-art"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VERIFY */}
            <section
                className="verify section"
                aria-labelledby="verify-title"
            >
                <div className="container">
                    <div className="verify-section">
                        <img
                            src="https://pleso.me/_next/static/media/candidate.55476eb1.webp"
                            alt=""
                            aria-hidden="true"
                            className="verify-bg-image"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="verify-top">
                            <div className="verify-copy">
                                <p className="home-label">Proces weryfikacji</p>

                                <h2 id="verify-title" className="verify-title">
                                    Tylko najlepsi terapeuci trafiają na platformę
                                </h2>

                                <p className="verify-text">
                                    Jedynie około 20% kandydatów przechodzi pełny proces selekcji.
                                    Dzięki temu możesz wybierać spośród specjalistów, którym warto zaufać.
                                </p>
                            </div>

                            <div className="verify-stat">
                                <span>20%</span>
                                <small>zaakceptowanych kandydatów</small>
                            </div>
                        </div>

                        <div className="verify-grid">
                            <article className="verify-card">
                                <span>01</span>

                                <h3>Wykształcenie i doświadczenie</h3>

                                <p>
                                    Sprawdzamy kierunkowe wykształcenie, przygotowanie terapeutyczne
                                    oraz minimum 3 lata praktyki zawodowej.
                                </p>
                            </article>

                            <article className="verify-card">
                                <span>02</span>

                                <h3>Rozmowa kwalifikacyjna</h3>

                                <p>
                                    Oceniamy profesjonalizm, etykę pracy, komunikację i jakość
                                    podejścia terapeutycznego.
                                </p>
                            </article>

                            <article className="verify-card">
                                <span>03</span>

                                <h3>Stały rozwój</h3>

                                <p>
                                    Nasi terapeuci korzystają z superwizji, szkoleń i regularnie
                                    podnoszą swoje kwalifikacje.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUOTE */}
<section className="quote section" aria-labelledby="quote-title">
  <div className="container">
    <QuoteAnimated />
  </div>
</section>

            {/* TESTIMONIALS */}
            <Testimonials />

            {/* WHY THERAPY */}
            <section className="why section" aria-labelledby="why-title">
                <div className="container">

                    {/* HEADER */}
                    <div className="why-head">
                        <p className="section-label">Dlaczego warto</p>

                        <h2 id="why-title" className="section-title">
                            Psychoterapia online może realnie poprawić jakość życia
                        </h2>

                        <p className="section-text">
                            Bezpieczna, wygodna i skuteczna forma wsparcia dopasowana do Twoich potrzeb.
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="why-grid">
                        {[
                            {
                                title: "Dobry psycholog online pomoże",
                                text:
                                    "Psychoterapeuta to Twój pomocnik, który będzie po Twojej stronie. Terapia może pomóc poradzić sobie z lękiem, depresją, apatią, niską samooceną i innymi trudnościami.",
                                img: "https://pleso.me/_next/static/media/is1.b560d484.webp",
                            },
                            {
                                title: "Sprawdzony prywatny psycholog",
                                text:
                                    "Współpracujemy wyłącznie ze sprawdzonymi specjalistami z odpowiednim wykształceniem, doświadczeniem i wysokimi rekomendacjami.",
                                img: "https://pleso.me/_next/static/media/is2.8a8c0e4e.webp",
                            },
                            {
                                title: "Psycholog wysłucha",
                                text:
                                    "Bez oceniania, bez presji. Rozmowy są poufne, a sesje nie są nagrywane, dzięki czemu możesz mówić swobodnie o ważnych sprawach.",
                                img: "https://pleso.me/_next/static/media/is3.59c6bb73.webp",
                            },
                            {
                                title: "Komfort terapii online",
                                text:
                                    "Spotkanie odbywa się z domu przez przeglądarkę. Bez dojazdów, bez instalacji aplikacji i bez tracenia czasu.",
                                img: "https://pleso.me/_next/static/media/is4.c47d1ec5.webp",
                            },
                            {
                                title: "Psycholog online dla dorosłych",
                                text:
                                    "Szeroki wybór nurtów terapeutycznych i specjalistów pracujących z różnymi grupami oraz osobami LGBTQ+.",
                                img: "https://pleso.me/_next/static/media/is5.503b2363.webp",
                            },
                            {
                                title: "Psycholog zrozumie",
                                text:
                                    "Doświadczeni terapeuci pomagają spojrzeć szerzej na sytuację i znaleźć właściwe odpowiedzi.",
                                img: "https://pleso.me/_next/static/media/is6.2e4d3df2.webp",
                            },
                        ].map((item) => (
                            <article className="why-card" key={item.title}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="why-image"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <h3>{item.title}</h3>

                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="why-cta">
                        <a href="#" className="btn-primary">
                            Rozpocznij terapię
                        </a>
                    </div>

                </div>
            </section>

            {/* NEWS */}
            <NewsSection />

            {/* NEWSLETTER */}
            <section className="newsletter section" aria-labelledby="newsletter-title">
                <div className="container">
                    <div className="newsletter-box">

                        {/* LEFT */}
                        <div className="newsletter-content">
                            <p className="section-label">Bądź na bieżąco</p>

                            <h2 id="newsletter-title" className="section-title">
                                Dowiedz się o naszych wydarzeniach jako pierwszy
                            </h2>

                            <p className="section-text newsletter-text">
                                Organizujemy bezpłatne webinary, dzielimy się wiedzą ekspertów i
                                publikujemy praktyczne materiały o zdrowiu psychicznym. Zapisz się,
                                aby niczego nie przegapić.
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

                        {/* RIGHT (CONTENT FEED) */}
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
            <section className="help section" aria-labelledby="help-title">
                <div className="container">

                    <div className="help-box">

                        {/* LEFT */}
                        <div className="help-content">
                            <p className="section-label">Masz pytania?</p>

                            <h2 id="help-title" className="section-title">
                                Uzyskaj odpowiedzi i skontaktuj się z nami
                            </h2>

                            <p className="section-text help-text">
                                Jesteśmy tutaj, aby pomóc Ci wybrać terapeutę, odpowiedzieć na pytania
                                dotyczące platformy oraz wesprzeć Cię przed pierwszą sesją.
                            </p>

                            {/* CONTACT CARDS */}
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

                            {/* CTA */}
                            <div className="help-actions">
                                <a className="btn-primary" href="#">
                                    Przejdź do strony z pytaniami
                                </a>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="help-visual" aria-hidden="true">
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
            <section className="emergency section" aria-labelledby="emergency-title">
                <div className="container">
                    <div className="emergency-box">

                        {/* HEADER */}
                        <div className="emergency-content">
                            <p className="section-label emergency-label">
                                Pilne wsparcie
                            </p>

                            <h2 id="emergency-title" className="section-title">
                                Potrzebujesz natychmiastowej pomocy psychologicznej?
                            </h2>

                            <p className="section-text emergency-text">
                                Jeśli jesteś w kryzysie lub potrzebujesz pilnej, bezpłatnej pomocy,
                                skorzystaj z poniższych numerów wsparcia dostępnych w Polsce.
                            </p>
                        </div>

                        {/* GRID */}
                        <div className="emergency-grid">

                            <a href="tel:800702222" className="emergency-item">
                                <p className="emergency-name">
                                    Całodobowa Linia Wsparcia
                                </p>
                                <span className="emergency-phone">
                                    800 70 2222
                                </span>
                            </a>

                            <a href="tel:116111" className="emergency-item">
                                <p className="emergency-name">
                                    Telefon zaufania dzieci i młodzieży
                                </p>
                                <span className="emergency-phone">
                                    116 111
                                </span>
                            </a>

                            <a href="tel:116123" className="emergency-item">
                                <p className="emergency-name">
                                    Telefon zaufania dla dorosłych
                                </p>
                                <span className="emergency-phone">
                                    116 123
                                </span>
                            </a>

                            <a href="tel:800120002" className="emergency-item">
                                <p className="emergency-name">
                                    Niebieska Linia
                                </p>
                                <span className="emergency-phone">
                                    800 120 002
                                </span>
                            </a>

                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq section" aria-labelledby="faq-title">
                <div className="container faq-wrap">

                    <div className="section-head">
                        <p className="section-label">FAQ</p>

                        <h2 id="faq-title" className="section-title">
                            Najczęstsze pytania
                        </h2>
                    </div>

                    {/* soft wrapper instead of raw list */}
                    <div className="faq-shell">
                        <FaqAccordion
                            items={faqItems}
                            limit={3}
                            showMoreLink
                        />
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section
                className="section section-white"
                aria-labelledby="cta-title"
            >
                <div className="container">
                    <div className="cta-box">
                        <p className="section-label">Zadbaj o siebie</p>

                        <h2 id="cta-title" className="section-title">
                            Pierwszy krok do lepszego samopoczucia zaczyna się dziś
                        </h2>

                        <p className="section-text">
                            Wybierz terapeutę dopasowanego do Twoich potrzeb i umów pierwszą
                            sesję online.
                        </p>

                        <div className="cta-actions">
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