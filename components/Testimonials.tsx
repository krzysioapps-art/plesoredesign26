"use client";

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        
        {/* INTRO */}
        <div className="testimonials__intro">
          <p className="section-label">Opinie klientów</p>

          <h2 className="section-title">
            Co mówią osoby korzystające z Pleso
          </h2>

          <p className="testimonials__desc">
            Realne doświadczenia osób, które rozpoczęły terapię online i znalazły
            wsparcie dopasowane do swoich potrzeb.
          </p>
        </div>

        {/* GRID */}
        <div className="testimonials__grid">

          {/* FEATURED REVIEW */}
          <article className="testimonial-card">
            <div>
              <div className="testimonial-stars" aria-hidden="true">
                ★★★★★
              </div>

              <h3>Dziękuję Ci, ukochane Pleso</h3>

              <p>
                Gdy pierwszy raz weszłam na platformę w poszukiwaniu psychoterapeuty,
                bez problemu się po niej poruszałam i od razu znalazłam odpowiednią osobę.
              </p>
            </div>

            <span>Klientka Pleso</span>
          </article>

          {/* SECONDARY REVIEW */}
          <article className="testimonial-card">
            <div>
              <div className="testimonial-stars" aria-hidden="true">
                ★★★★★
              </div>

              <h3>Najbardziej pomocne przy wyborze specjalisty</h3>

              <p>
                Najbardziej pomocne przy wyborze psychoterapeuty były wywiady
                z każdym specjalistą — to bardzo ułatwiło decyzję.
              </p>
            </div>

            <span>Klient Pleso</span>
          </article>

        </div>

        {/* TRUST BAR */}
        <div className="testimonial-trust">
          <div>
            <p className="testimonial-trust__label">Trustpilot</p>

            <h3>4.8 / 5 ★★★★★</h3>

            <p className="testimonials__muted">
              Na podstawie 448 opinii klientów
            </p>
          </div>

          <a
            href="https://pl.trustpilot.com/review/pleso.me?utm_medium=trustbox&utm_source=MicroReviewCount"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Zobacz wszystkie opinie
          </a>
        </div>

      </div>
    </section>
  );
}