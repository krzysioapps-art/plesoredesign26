"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
  limit?: number;
  showMoreLink?: boolean;
};

export default function FaqAccordion({
  items,
  limit,
  showMoreLink = false,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="faq">
      <div className="faq-list">
        {visibleItems.map((item, index) => {
          const open = openIndex === index;

          return (
            <article
              key={item.question}
              className={`faq-item ${open ? "is-open" : ""}`}
            >
              <button
                type="button"
                className="faq-button"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-plus">{open ? "−" : "+"}</span>
              </button>

              <div className={`faq-answer-wrap ${open ? "is-open" : ""}`}>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {showMoreLink && limit && items.length > limit && (
        <div className="faq-more">
          <a href="/faq" className="btn-primary">
            Zobacz wszystkie pytania
          </a>
        </div>
      )}
    </div>
  );
}