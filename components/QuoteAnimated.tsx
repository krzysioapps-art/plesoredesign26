"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function QuoteAnimated() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-15% 0px",
  });

  const [stage, setStage] = useState("idle");

  useEffect(() => {
    if (!isInView) return;

    setStage("typing");

    const timer = setTimeout(() => {
      setStage("done");
    }, 650);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <div className="quote-chat" ref={ref}>
      <div className="quote-avatar">
        <img
          src="https://pleso.me/_next/static/media/staff1.f542e8cf.webp"
          alt="Anna"
        />
      </div>

      <div className="quote-bubble">
        {stage === "typing" && (
          <div className="quote-typing" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}

        {stage === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <motion.p
              className="quote-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              Słowo od założycielki
            </motion.p>

            <motion.h2
              id="quote-title"
              className="quote-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Psychoterapia jest OK
            </motion.h2>

            {[
              "Psychoterapia (również przez Internet) to sposób na lepsze zrozumienie siebie, nauczenie się szacunku dla własnych potrzeb oraz bycia przyjaznym wobec siebie.",
              "Efekty są jednak tego warte.",
              "I pamiętaj: próbowanie czegoś nowego jest OK ;)",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="quote-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 + i * 0.12 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="quote-author"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <strong>Anna</strong>
              <span>Współzałożycielka pleso i lekarz</span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default QuoteAnimated;