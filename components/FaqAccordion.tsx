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

          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <article
              key={item.question}
              className={`faq-item ${open ? "is-open" : ""}`}
            >
              <button
                id={buttonId}
                type="button"
                className="faq-button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-plus" aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`faq-answer-wrap ${open ? "is-open" : ""}`}
              >
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