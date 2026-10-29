"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { joinTrainingLink, primaryNavigation, type ScreenRoute } from "@/content/screens";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  currentRoute: ScreenRoute;
};

export function SiteHeader({ currentRoute }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" onClick={close}>
          <span className={styles.mark}>
            <Image
              src="/assets/logos/mountain-snow.svg"
              alt=""
              width={22}
              height={22}
              unoptimized
            />
          </span>
          <span>
            <span className={styles.word}>Poorna Malavath</span>
            <span className={styles.tag}>Mountaineer · Adventurer · Mentor</span>
          </span>
        </Link>
        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.nav}>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={item.href === currentRoute ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className={styles.join} href={joinTrainingLink.href}>
          Join a Training
          <span aria-hidden="true"> →</span>
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div id={menuId} className={styles.menu} hidden={!open}>
        <nav aria-label="Primary">
          <ul className={styles.menuList}>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.href === currentRoute ? "page" : undefined}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className={styles.menuJoin} href={joinTrainingLink.href} onClick={close}>
                Join a Training
                <span aria-hidden="true"> →</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
