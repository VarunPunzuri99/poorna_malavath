"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import styles from "./StoriesPage.module.css";

export type StoryCategory = "student" | "training" | "mountain" | "motivation" | "interviews";

export type StoryCard = {
  id: string;
  category: StoryCategory;
  label: string;
  title: string;
  text: string;
  meta: string;
  href: string;
  image?: string;
  alt?: string;
  imageFocus?: string;
  overlay?: boolean;
};

const tabs: { id: StoryCategory; label: string; icon: "person" | "camp" | "peak" | "spark" | "chat" }[] = [
  { id: "student", label: "Student Stories", icon: "person" },
  { id: "training", label: "Training Stories", icon: "camp" },
  { id: "mountain", label: "Mountain Lessons", icon: "peak" },
  { id: "motivation", label: "Motivation Articles", icon: "spark" },
  { id: "interviews", label: "Interviews", icon: "chat" },
];

function TabIcon({ name }: { name: (typeof tabs)[number]["icon"] }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "person") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="8" r="2.6" {...stroke} />
        <path d="M7 19c.7-2.7 2.4-4 5-4s4.3 1.3 5 4" {...stroke} />
      </svg>
    );
  }
  if (name === "camp") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M4 19h16M6 19 12 6l6 13" {...stroke} />
        <path d="M12 19v-4" {...stroke} />
      </svg>
    );
  }
  if (name === "peak") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M3 18 9 7l3 4 2.5-4L21 18H3Z" {...stroke} />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M12 3.5 13.5 8.8 18.8 10.3 13.5 11.8 12 17.1 10.5 11.8 5.2 10.3 10.5 8.8 12 3.5Z" {...stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M6 16.2 4.6 19 8 17.6A7.5 7.5 0 1 0 6 16.2Z" {...stroke} />
    </svg>
  );
}

export function StoryBrowser({ cards, children }: { cards: readonly StoryCard[]; children: ReactNode }) {
  const [selected, setSelected] = useState<StoryCategory | "all">("all");
  const [touched, setTouched] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const visual: StoryCategory = selected === "all" ? "student" : selected;
  const visible = selected === "all" ? cards : cards.filter((card) => card.category === selected);
  const activeLabel = tabs.find((tab) => tab.id === visual)?.label ?? "Stories";

  function choose(id: StoryCategory, index: number) {
    setTouched(true);
    setSelected((current) => {
      const shown = current === "all" ? "student" : current;
      if (shown === id && current !== "all") return "all";
      return id;
    });
    buttons.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const index = tabs.findIndex((tab) => tab.id === visual);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    setTouched(true);
    setSelected(tabs[next].id);
    buttons.current[next]?.focus();
  }

  return (
    <>
      <div className={styles.explore}>
        <p>Explore stories</p>
        <div className={styles.tabList} role="tablist" aria-label="Story categories" onKeyDown={onKeyDown}>
          {tabs.map((tab, index) => {
            const current = tab.id === visual;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`story-tab-${tab.id}`}
                aria-selected={current}
                aria-controls="story-collection"
                tabIndex={current ? 0 : -1}
                className={current ? styles.tabActive : styles.tab}
                onClick={() => choose(tab.id, index)}
              >
                <TabIcon name={tab.icon} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      {children}
      <section className={styles.notes} id="field-notes" aria-labelledby="field-notes-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Latest from the academy</p>
          <h2 id="field-notes-title">Field notes for the path ahead.</h2>
          <p className={styles.lede}>
            Stories across student life, training practice, mountain judgment, motivation and
            conversations with the people who guide the work.
          </p>
          <p className={styles.live} aria-live="polite">
            {touched
              ? selected === "all"
                ? "Showing the latest stories from every category."
                : `Showing ${activeLabel}.`
              : "Latest stories from the academy."}
          </p>
          <div
            className={styles.noteGrid}
            id="story-collection"
            role="tabpanel"
            aria-labelledby={`story-tab-${visual}`}
          >
            {visible.map((card) => (
              <article key={card.id} className={card.overlay ? styles.overlayCard : styles.noteCard}>
                <Link href={card.href}>
                  {card.image ? (
                    <span className={styles.notePhoto}>
                      <Image
                        src={card.image}
                        alt={card.alt ?? ""}
                        fill
                        sizes="(max-width: 800px) 100vw, 380px"
                        className={styles.cover}
                        style={{ objectPosition: card.imageFocus ?? "center center" }}
                      />
                    </span>
                  ) : (
                    <span className={styles.noteFallback}>
                      <TabIcon name="peak" />
                    </span>
                  )}
                  <span className={styles.noteBody}>
                    <span className={styles.pill}>{card.label}</span>
                    <h3>{card.title}</h3>
                    <span className={styles.noteText}>{card.text}</span>
                    <span className={styles.noteMeta}>{card.meta}</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
