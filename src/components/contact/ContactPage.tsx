import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactDesk } from "./ContactDesk";
import { ContactFaq } from "./ContactFaq";
import styles from "./ContactPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const exploreLinks = [
  { label: "About Poorna", href: "/about" },
  { label: "The Academy", href: "/training" },
  { label: "Achievements", href: "/achievements" },
  { label: "Stories & Inspiration", href: "/stories" },
] as const;

const programLinks = [
  { label: "School programs", href: "/schools" },
  { label: "Training camps", href: "/training" },
  { label: "Outdoor learning", href: "/training" },
  { label: "Register for training", href: "/register" },
] as const;

const resourceLinks = [
  { label: "Media gallery", href: "/gallery" },
  { label: "Media enquiries", href: "#enquiry" },
  { label: "Press kit", href: "/media#press" },
  { label: "Contact the academy", href: "#enquiry" },
] as const;

export function ContactPage() {
  return (
    <>
      <SiteHeader currentRoute="/contact" />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="contact-title">
          <div className={styles.heroCopy}>
            <p className={styles.pill}>Contact the academy</p>
            <div>
              <h1 id="contact-title">
                Let’s move
                <br />
                possibility
                <br />
                forward<span>.</span>
              </h1>
              <p>
                Whether you’re planning a school program, inviting Poorna to speak or exploring a
                partnership, tell us what you hope to make possible.
              </p>
            </div>
            <a className={styles.mail} href="mailto:hello@poornamalavath.com">
              <span className={styles.mailIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <rect x="3.5" y="6" width="17" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              <span>
                <strong>General enquiries</strong>
                <small>hello@poornamalavath.com</small>
              </span>
            </a>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src={photo("Instructor portrait.png")}
              alt="An instructor in a blue blouse smiling outdoors, with trees behind her."
              fill
              preload
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.heroImage}
            />
            <p className={styles.photoBadge}>Begin with a conversation</p>
            <div className={styles.heroQuote}>
              <blockquote>“Every meaningful expedition starts by listening.”</blockquote>
              <p>Poorna Malavath · Founder & mentor</p>
            </div>
          </div>
        </section>

        <ContactDesk />

        <section className={styles.visit} aria-labelledby="visit-title">
          <div className={styles.visitInner}>
            <div className={styles.splitHead}>
              <div>
                <p className={styles.kickerLight}>Visit & follow</p>
                <h2 id="visit-title">Find us closer to the work.</h2>
              </div>
              <p>
                Our coordination office is in Hyderabad, with training programs hosted at partner
                campuses and outdoor sites across Telangana.
              </p>
            </div>
            <div className={styles.visitGrid}>
              <article className={styles.visitPhoto}>
                <Image
                  src={photo("Story image.png")}
                  alt="A climber in an orange helmet and a blue vest with a TARC mark, standing against rock."
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  className={styles.visitImage}
                />
                <p className={styles.photoBadge}>Poorna Mountaineering Academy</p>
                <div>
                  <strong>Training begins with trust, preparation and care.</strong>
                  <small>Program base · Telangana, India</small>
                </div>
              </article>
              <div className={styles.office} id="office-address">
                <div className={styles.officeHead}>
                  <h3>Academy coordination office</h3>
                  <span>
                    Get directions
                    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <ul className={styles.officeFacts}>
                  <li className={styles.addressFact}>
                    <span className={styles.factIcon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </span>
                    <span>
                      <small>Address</small>
                      <span className={styles.factValue}>Road No. 12, Banjara Hills, Hyderabad, Telangana 500034</span>
                    </span>
                  </li>
                  <li>
                    <span className={styles.factIcon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 8v4.5l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>
                      <small>Office hours</small>
                      <span className={styles.factValue}>Monday–Friday, 9:30 am–5:30 pm IST</span>
                    </span>
                  </li>
                  <li>
                    <span className={styles.factIcon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M8 3.5v3M16 3.5v3M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>
                      <small>Visits</small>
                      <span className={styles.factValue}>By appointment, with 48 hours’ notice</span>
                    </span>
                  </li>
                </ul>
                <div className={styles.follow}>
                  <p>Follow the journey</p>
                  <p>Field updates, stories and program notices</p>
                  <ul className={styles.socialRow} aria-label="Social profiles">
                    <li>
                      <span>
                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                          <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                          <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
                        </svg>
                        Instagram
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                          <path d="M8 10.5V16M8 8h.01M12 16v-3.4a2 2 0 0 1 4 0V16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                        </svg>
                        LinkedIn
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                          <rect x="3.5" y="7" width="13" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                          <path d="m16.5 11 4-2v6l-4-2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                        </svg>
                        YouTube
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                          <path d="M14 8h2.2A2.8 2.8 0 0 1 19 10.8V16h-3v-4.2c0-.7-.5-1.2-1.2-1.2H14V8zM9 8h3v8H9z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                          <circle cx="7.2" cy="6.2" r="0.9" fill="currentColor" />
                        </svg>
                        Facebook
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faq} id="answers" aria-labelledby="faq-title">
          <div className={styles.faqIntro}>
            <p className={styles.kicker}>Before you write</p>
            <h2 id="faq-title">A few helpful answers.</h2>
            <p>Quick guidance for the questions our small team receives most often.</p>
            <aside>
              <span aria-hidden="true">!</span>
              <div>
                <strong>Current participant?</strong>
                <p>Use the emergency number supplied in your program pack for active-trip support.</p>
              </div>
            </aside>
          </div>
          <ContactFaq />
        </section>

        <section className={styles.callout} aria-labelledby="callout-title">
          <div>
            <p className={styles.kickerLight}>A conversation is a good beginning</p>
            <h2 id="callout-title">Have an idea that doesn’t fit a box?</h2>
            <p>
              Share the opportunity, the people it could serve and where you’d like to begin. We’re
              always open to thoughtful new routes.
            </p>
          </div>
          <div>
            <Link href="#enquiry">
              Start a conversation
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M5 8.5h14M12 8.5V18M8.5 14.5 12 18l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a href="mailto:hello@poornamalavath.com">hello@poornamalavath.com</a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <Link className={styles.brand} href="/">
              <span>
                <Image src="/assets/logos/mountain-snow.svg" alt="" width={22} height={22} unoptimized />
              </span>
              <span>
                Poorna Malavath
                <small>Mountaineer · Adventurer · Mentor</small>
              </span>
            </Link>
            <p>
              Training young people to meet challenge with preparation, responsibility and care—for the
              team around them.
            </p>
            <ul className={styles.social} aria-label="Social profiles">
              <li>
                <span aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li>
                <span aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                    <circle cx="7.2" cy="7.2" r="1.15" fill="currentColor" />
                    <path d="M6.2 10.2h2v7.2h-2ZM10.3 10.2h1.9v1c.4-.7 1.2-1.2 2.2-1.2 1.8 0 2.6 1.1 2.6 3v4.4h-2v-3.8c0-.9-.3-1.5-1.2-1.5s-1.3.6-1.3 1.5v3.8h-2.2Z" fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li>
                <span aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                    <rect x="3.5" y="7" width="17" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M11 10.2v3.6l3.4-1.8-3.4-1.8Z" fill="currentColor" />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {exploreLinks.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Programs</h2>
            <ul>
              {programLinks.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Resources</h2>
            <ul>
              {resourceLinks.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footerBase}>
          <p>© 2026 Poorna Mountaineering Academy</p>
          <p>
            <span>Privacy Policy</span>
            <span>Terms & Usage</span>
            <span>Accessibility</span>
          </p>
        </div>
      </footer>
    </>
  );
}
