"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  earliestIncomplete,
  registrationSteps,
  stepIndex,
  type StepId,
} from "./model";
import { useRegistration } from "./RegistrationProvider";
import styles from "./RegisterFlow.module.css";

const helpPhone = "+91 90000 10884";

type RegisterFrameProps = {
  step: StepId;
  kicker: string;
  title: string;
  lede: string;
  quote: string;
  safety: string;
  children: ReactNode;
};

export function RegisterFrame({ step, kicker, title, lede, quote, safety, children }: RegisterFrameProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { draft, ready, saved } = useRegistration();
  const current = stepIndex(step);
  const href = registrationSteps[current]?.href;

  useEffect(() => {
    if (!ready || pathname !== href) return;
    const incomplete = earliestIncomplete(draft);
    if (!incomplete) return;
    if (stepIndex(incomplete) < current) {
      const target = registrationSteps.find((item) => item.id === incomplete);
      if (target) router.replace(target.href);
    }
  }, [ready, draft, current, href, pathname, router]);

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <Link className={styles.brand} href="/">
          <span>
            <Image src="/assets/logos/mountain-snow.svg" alt="" width={22} height={22} unoptimized />
          </span>
          <span>
            Poorna Malavath
            <small>Mountaineering academy</small>
          </span>
        </Link>
        <p>
          {saved ? (
            <span className={styles.saved}>
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="m5 12 4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Progress saved
            </span>
          ) : (
            <span className={styles.savedMuted}>Progress saved on this device after you continue</span>
          )}
          <Link href="/training">Save & exit</Link>
        </p>
      </header>
      <div className={styles.progress}>
        <div>
          <p>Register for training</p>
          <p>Step {current + 1} of 6</p>
        </div>
        <ol>
          {registrationSteps.map((item, index) => {
            const incomplete = earliestIncomplete(draft);
            const open = ready && (incomplete === null || index <= stepIndex(incomplete));
            const state = index < current ? styles.done : index === current ? styles.current : undefined;
            const body = (
              <>
                <span>{index < current ? "✓" : index + 1}</span>
                {item.label}
              </>
            );
            return (
              <li key={item.id} className={state} aria-current={index === current ? "step" : undefined}>
                {open && index !== current ? <Link href={item.href}>{body}</Link> : <span>{body}</span>}
              </li>
            );
          })}
        </ol>
      </div>
      <main className={styles.main}>
        <section className={styles.card}>
          <p className={styles.kicker}>{kicker}</p>
          <h1>{title}</h1>
          <p className={styles.lede}>{lede}</p>
          {children}
        </section>
        <aside className={styles.aside}>
          <figure>
            <Image
              src={`/assets/images/${encodeURIComponent("Rope skills training.png")}`}
              alt="An instructor and two students checking a rope on a rocky mountain."
              fill
              sizes="320px"
              className={styles.asideImage}
            />
            <figcaption>
              <span>Prepared before we begin</span>
              {quote}
            </figcaption>
          </figure>
          <div className={styles.safety}>
            <p>
              <span aria-hidden="true">▣</span>
              <span>
                <strong>Safety-led planning</strong>
                {safety}
              </span>
            </p>
            <p>
              <span aria-hidden="true">▣</span>
              <span>
                <strong>Your details stay private</strong>
                Information is encrypted, shared only with the training team and never sold.
              </span>
            </p>
          </div>
          <div className={styles.help}>
            <p>
              <span aria-hidden="true">?</span>
              <span>
                <strong>Need help choosing?</strong>
                <a href="tel:+919000010884">Call {helpPhone}</a>
                <small>Mon–Sat, 9am–6pm</small>
              </span>
            </p>
          </div>
        </aside>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Poorna Mountaineering Academy</p>
        <p>
          <span>Privacy Policy</span>
          <span>Terms & Safety</span>
        </p>
      </footer>
    </div>
  );
}

export function focusFirst(errors: Record<string, string>) {
  const id = Object.keys(errors)[0];
  if (!id) return;
  document.getElementById(id)?.focus();
}
