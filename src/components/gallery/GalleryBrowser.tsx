"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import styles from "./GalleryPage.module.css";

export type GalleryCategory =
  | "expeditions"
  | "training"
  | "schools"
  | "childhood"
  | "awards"
  | "media"
  | "events";

export type GalleryPhoto = {
  id: string;
  category: GalleryCategory;
  label: string;
  title: string;
  meta: string;
  image: string;
  alt: string;
  focus?: string;
  highlight?: boolean;
};

const filters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All media" },
  { id: "expeditions", label: "Expeditions" },
  { id: "training", label: "Training" },
  { id: "schools", label: "Schools" },
  { id: "childhood", label: "Childhood" },
  { id: "awards", label: "Awards" },
  { id: "media", label: "Media" },
  { id: "events", label: "Events" },
];

function FilterIcon({ id }: { id: (typeof filters)[number]["id"] }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (id === "all") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" {...stroke} />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" {...stroke} />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" {...stroke} />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" {...stroke} />
      </svg>
    );
  }
  if (id === "expeditions") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M3 18 9 7l3 4 2.5-4L21 18H3Z" {...stroke} />
      </svg>
    );
  }
  if (id === "training") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M4 19h16M7 19V9l5-4 5 4v10" {...stroke} />
      </svg>
    );
  }
  if (id === "schools") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M3 10.5 12 5l9 5.5M6 10.5V18h12v-7.5" {...stroke} />
      </svg>
    );
  }
  if (id === "childhood") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="8" r="2.5" {...stroke} />
        <path d="M7.2 18c.6-2.4 2.3-3.6 4.8-3.6s4.2 1.2 4.8 3.6" {...stroke} />
      </svg>
    );
  }
  if (id === "awards") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="9" r="4" {...stroke} />
        <path d="M9.2 12.4 8 19l4-2 4 2-1.2-6.6" {...stroke} />
      </svg>
    );
  }
  if (id === "media") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <rect x="8" y="4" width="8" height="12" rx="4" {...stroke} />
        <path d="M12 16v3M9 19h6" {...stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" {...stroke} />
      <path d="M4 9h16M8 3.5V6M16 3.5V6" {...stroke} />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M9 5H5v4M15 5h4v4M19 15v4h-4M5 15v4h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GalleryBrowser({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [selected, setSelected] = useState<GalleryCategory | "all">("all");
  const [expanded, setExpanded] = useState(false);
  const [touched, setTouched] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  const highlights = photos.filter((photo) => photo.highlight);
  const pool = selected === "all" && !expanded ? highlights : photos;
  const visible = selected === "all" ? pool : pool.filter((photo) => photo.category === selected);
  const feature = selected === "all" ? visible.slice(0, 3) : [];
  const rest = selected === "all" ? visible.slice(3) : visible;
  const active = photos.find((photo) => photo.id === activeId) ?? null;
  const moreAvailable = selected === "all" && !expanded && photos.some((photo) => !photo.highlight);

  useEffect(() => {
    if (!active) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      opener.current?.focus();
    };
  }, [active]);

  function choose(index: number) {
    const next = filters[index];
    if (!next) return;
    setSelected(next.id);
    setTouched(true);
    tabs.current[index]?.focus();
  }

  function onTabKey(event: ReactKeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      choose((index + 1) % filters.length);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      choose((index - 1 + filters.length) % filters.length);
    }
    if (event.key === "Home") {
      event.preventDefault();
      choose(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      choose(filters.length - 1);
    }
  }

  function openPhoto(photo: GalleryPhoto, button: HTMLButtonElement) {
    opener.current = button;
    setActiveId(photo.id);
  }

  function renderCard(photo: GalleryPhoto) {
    return (
      <article key={photo.id}>
        <button
          type="button"
          onClick={(event) => openPhoto(photo, event.currentTarget)}
        >
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            sizes="(max-width: 800px) 100vw, 420px"
            style={{ objectPosition: photo.focus ?? "center center" }}
          />
          <span className={styles.frameLabel}>{photo.label}</span>
          <span className={styles.expand}>
            <ExpandIcon />
          </span>
          <span className={styles.caption}>
            <strong>{photo.title}</strong>
            <small>{photo.meta}</small>
          </span>
        </button>
      </article>
    );
  }

  return (
    <div className={styles.archive} id="archive">
      <div className={styles.filterRow}>
        <div>
          <p className={styles.filterLabel}>Filter by collection</p>
          <div role="tablist" aria-label="Gallery collections">
            {filters.map((filter, index) => {
              const pressed = selected === filter.id;
              return (
                <button
                  key={filter.id}
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  id={`gallery-tab-${filter.id}`}
                  type="button"
                  role="tab"
                  aria-selected={pressed}
                  tabIndex={pressed ? 0 : -1}
                  className={pressed ? styles.filterActive : styles.filter}
                  onClick={() => {
                    setSelected(filter.id);
                    setTouched(true);
                  }}
                  onKeyDown={(event) => onTabKey(event, index)}
                >
                  <FilterIcon id={filter.id} />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
        <p aria-live="polite">
          {touched || selected !== "all" || expanded
            ? `Showing ${visible.length} ${visible.length === 1 ? "photograph" : "photographs"}.`
            : `Showing ${visible.length} gallery highlights`}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className={styles.empty}>No supplied photographs are in this collection.</p>
      ) : (
        <>
          {feature.length > 0 ? <div className={styles.mosaic}>{feature.map(renderCard)}</div> : null}
          {rest.length > 0 ? <div className={styles.grid}>{rest.map(renderCard)}</div> : null}
        </>
      )}

      {selected === "all" ? (
        <div className={styles.more}>
          <div>
            <strong>The archive continues beyond this page.</strong>
            <p>New field notes, event photography and academy milestones are added throughout the year.</p>
          </div>
          {moreAvailable ? (
            <button type="button" onClick={() => { setExpanded(true); setTouched(true); }}>
              Load more moments <span aria-hidden="true">+</span>
            </button>
          ) : null}
        </div>
      ) : null}

      {active ? (
        <div className={styles.lightbox} role="presentation" onClick={() => setActiveId(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-dialog-title"
            className={styles.dialog}
            onClick={(event) => event.stopPropagation()}
          >
            <button ref={closeButton} type="button" onClick={() => setActiveId(null)}>
              Close
            </button>
            <div className={styles.dialogPhoto}>
              <Image src={active.image} alt={active.alt} fill sizes="90vw" style={{ objectPosition: active.focus ?? "center center" }} />
            </div>
            <p id="gallery-dialog-title">{active.title}</p>
            <p>{active.meta}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
