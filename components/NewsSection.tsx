"use client";

type NewsItem = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  category: string;
};

type Props = {
  limit?: number;
  showMoreLink?: boolean;
};

export default function NewsSection({
  limit,
  showMoreLink = false,
}: Props) {
  const news: NewsItem[] = [
    {
      category: "Wypalenie",
      title: "Jak rozpoznać objawy wypalenia zawodowego?",
      excerpt:
        "Sprawdź najczęstsze sygnały przeciążenia psychicznego i dowiedz się, kiedy warto sięgnąć po wsparcie.",
      date: "12 marca 2026",
      url: "#",
    },
    {
      category: "Stres",
      title: "Lęk i stres – co naprawdę pomaga na co dzień?",
      excerpt:
        "Poznaj proste strategie regulacji napięcia i sposoby odzyskania większego spokoju.",
      date: "3 marca 2026",
      url: "#",
    },
    {
      category: "Start terapii",
      title: "Pierwsza terapia online – czego się spodziewać?",
      excerpt:
        "Jak wygląda pierwsze spotkanie z terapeutą i jak przygotować się do rozmowy.",
      date: "24 lutego 2026",
      url: "#",
    },
  ];

  const visibleItems = limit ? news.slice(0, limit) : news;

  return (
    <section
      className="news section"
      aria-labelledby="news-title"
    >
      <div className="container">
        <div className="section-head">
          <p className="section-label">Baza wiedzy</p>

          <h2 id="news-title" className="section-title">
            Artykuły wspierające Twoje zdrowie psychiczne
          </h2>

          <p className="section-text">
            Rzetelne materiały przygotowane, aby pomóc Ci lepiej rozumieć siebie,
            stres i codzienne emocje.
          </p>
        </div>

        <div className="news-grid">
          {visibleItems.map((item) => (
            <article key={item.title} className="news-card">
              <div className="news-meta">
                <span className="news-category">
                  {item.category}
                </span>

                <span className="news-date">
                  {item.date}
                </span>
              </div>

              <h3 className="news-title-sm">
                {item.title}
              </h3>

              <p className="news-excerpt">
                {item.excerpt}
              </p>

              <a
                href={item.url}
                className="news-link"
              >
                Czytaj więcej
              </a>
            </article>
          ))}
        </div>

        {showMoreLink && (
          <div className="news-more">
            <a
              href="/blog"
              className="btn-primary"
            >
              Zobacz wszystkie artykuły
            </a>
          </div>
        )}
      </div>
    </section>
  );
}