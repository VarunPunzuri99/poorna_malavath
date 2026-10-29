import Image from "next/image";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Training", href: "/training" },
  { label: "For Schools", href: "/schools" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

const programs = [
  { label: "Children", href: "/training" },
  { label: "School Programs", href: "/schools" },
  { label: "Individuals", href: "/training" },
  { label: "Upcoming Batches", href: "/training" },
  { label: "Completed Trainings", href: "/training" },
] as const;

const aboutQuickLinks = [
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Training", href: "/training" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
] as const;

const aboutPrograms = [
  { label: "Children", href: "/training" },
  { label: "Schools", href: "/schools" },
  { label: "Individuals", href: "/training" },
  { label: "Group training", href: "/training" },
] as const;

const aboutContact = [
  { label: "Invite Poorna", href: "/contact" },
  { label: "Partner with us", href: "/contact" },
  { label: "Media enquiries", href: "/contact" },
  { label: "Contact", href: "/contact" },
] as const;

const trainingPrograms = [
  { label: "Children", href: "/training" },
  { label: "Schools", href: "/schools" },
  { label: "College groups", href: "/training" },
  { label: "Individuals", href: "/training" },
  { label: "Team training", href: "/training" },
] as const;

const trainingContact = [
  { label: "Join a program", href: "/register" },
  { label: "Partner with us", href: "/contact" },
  { label: "Invite Poorna", href: "/contact" },
  { label: "Media enquiries", href: "/contact" },
] as const;

type SiteFooterProps = {
  variant?: "home" | "about" | "training";
};

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
  const links = variant === "home" ? quickLinks : aboutQuickLinks;
  const training =
    variant === "training" ? trainingPrograms : variant === "about" ? aboutPrograms : programs;
  const contact = variant === "training" ? trainingContact : aboutContact;
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <Link className={styles.brand} href="/">
            <span className={styles.mark}>
              <Image
                src="/assets/logos/mountain-snow.svg"
                alt=""
                width={20}
                height={20}
                unoptimized
              />
            </span>
            {variant === "home" ? (
              <span>Poorna Malavath</span>
            ) : (
              <span className={styles.brandCopy}>
                <span>Poorna Malavath</span>
                <span className={styles.brandTag}>Mountaineer · Adventurer · Mentor</span>
              </span>
            )}
          </Link>
          <p className={variant === "home" ? styles.blurb : styles.blurbAbout}>
            {variant === "home"
              ? "Inspiring young minds to climb beyond limits."
              : "Mountaineer, adventurer and mentor—helping young people discover courage, discipline and the strength to rise."}
          </p>
          <ul className={styles.social} aria-label="Social profiles">
            <li>
              <span aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
                </svg>
              </span>
            </li>
            <li>
              <span aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <rect x="3.5" y="7" width="17" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M11 10.2v3.6l3.4-1.8-3.4-1.8Z" fill="currentColor" />
                </svg>
              </span>
            </li>
            <li>
              <span aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <circle cx="7.2" cy="7.2" r="1.15" fill="currentColor" />
                  <path d="M6.2 10.2h2v7.2h-2v-7.2Zm4.1 0h1.9v1c.4-.7 1.2-1.2 2.2-1.2 1.8 0 2.6 1.1 2.6 3v4.4h-2v-3.8c0-.9-.3-1.5-1.2-1.5-.8 0-1.3.6-1.3 1.5v3.8h-2.2v-7.2Z" fill="currentColor" />
                </svg>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Quick links</h2>
          <ul>
            {links.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Training programs</h2>
          <ul>
            {training.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Get in touch</h2>
          {variant === "home" ? (
            <ul>
              <li>
                <a href="mailto:info@poornamalavath.com">info@poornamalavath.com</a>
              </li>
              <li>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>Hyderabad, India</li>
              <li>
                <Link href="/contact">Send a Message →</Link>
              </li>
            </ul>
          ) : (
            <ul>
              {contact.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.base}>
        <p>© 2026 Poorna Malavath. All rights reserved.</p>
        <p className={styles.legal}>
          <span>Privacy Policy</span>
          <span>Terms</span>
          {variant === "training" ? null : <span>Sitemap</span>}
        </p>
        {variant === "home" ? <p>Dream · Explore · Inspire</p> : null}
      </div>
    </footer>
  );
}
