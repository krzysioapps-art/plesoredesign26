"use client";

export default function Testimonials() {
  const testimonials = [
    {
      title: "Dziękuję Ci, ukochane Pleso",
      text:
        "Gdy pierwszy raz weszłam na platformę w poszukiwaniu psychoterapeuty, bez problemu się po niej poruszałam.",
      author: "Klientka Pleso",
    },
    {
      title: "Najbardziej pomocne przy wyborze specjalisty",
      text:
        "Najbardziej pomocne przy wyborze psychoterapeuty były wywiady z każdym specjalistą.",
      author: "Klient Pleso",
    },
  ];

  return (
    <section className="news section">
      <div className="container">
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

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-stars" aria-hidden="true">
                ★★★★★
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span>{item.author}</span>
            </article>
          ))}
        </div>

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