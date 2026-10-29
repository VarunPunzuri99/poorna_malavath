"use client";

import { useState } from "react";
import styles from "./ContactPage.module.css";

const items = [
  {
    question: "How far ahead should a school book a program?",
    answer:
      "For the widest choice of dates, contact us 8–12 weeks ahead. We can sometimes accommodate smaller local sessions with four weeks’ notice.",
  },
  {
    question: "Can Poorna speak at virtual or international events?",
    answer: "",
  },
  {
    question: "Do you accept individual training applications year-round?",
    answer: "",
  },
  {
    question: "What information should a media request include?",
    answer: "",
  },
  {
    question: "Can organisations sponsor a student or academy program?",
    answer: "",
  },
] as const;

const missing =
  "The written answer for this question is not in the current reference. Use the enquiry form or email hello@poornamalavath.com.";

export function ContactFaq() {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.question}>
            <button
              type="button"
              id={`faq-button-${index}`}
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              {item.question}
              <span aria-hidden="true">{expanded ? "–" : "+"}</span>
            </button>
            <p id={panelId} role="region" aria-labelledby={`faq-button-${index}`} hidden={!expanded}>
              {item.answer || missing}
            </p>
          </div>
        );
      })}
    </div>
  );
}
