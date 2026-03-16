"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Up Up Down Down Left Right Left Right B A
const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function KonamiEgg() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === KONAMI[index]) {
        const next = index + 1;
        if (next === KONAMI.length) {
          setActive(true);
          setIndex(0);
          setTimeout(() => setActive(false), 2600);
        } else {
          setIndex(next);
        }
      } else {
        setIndex(key === KONAMI[0] ? 1 : 0);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center"
          aria-hidden="true"
          role="presentation"
        >
          {/* Ethiopian flag colors — green, yellow, red */}
          <div className="konami-overlay absolute inset-0" style={{
            background: "linear-gradient(180deg, #078930 33.33%, #FCDD09 33.33% 66.66%, #DA121A 66.66%)",
          }} />

          {/* Center overlay message */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="relative z-10 text-center px-8 py-6 rounded-2xl"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-5xl mb-3">🇪🇹</div>
            <p
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "2rem",
                color: "#ffffff",
                letterSpacing: "0.08em",
              }}
            >
              ETHIOPIA TIKDEM
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.7)",
                marginTop: "0.5rem",
              }}
            >
              ↑↑↓↓←→←→BA — nice moves
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
