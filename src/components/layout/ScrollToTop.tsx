"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

const showAfter = 480;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > showAfter);
    }

    queueMicrotask(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      className={visible ? `${styles.button} ${styles.visible}` : styles.button}
      aria-label="Back to top"
      aria-hidden={visible ? undefined : true}
      tabIndex={visible ? 0 : -1}
      onClick={toTop}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          d="M6.5 14.5 12 9l5.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
