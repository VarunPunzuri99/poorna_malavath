import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./TrainingPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const philosophy = [
  {
    title: "Learn by doing",
    text: "Real terrain, real responsibility and guidance that turns experience into judgment.",
  },
  {
    title: "Progress with purpose",
    text: "Age-appropriate challenge, clear preparation and steady growth over quick wins.",
  },
  {
    title: "Move as a team",
    text: "Confidence is built alongside empathy, communication and care for others.",
  },
] as const;

const programs = [
  {
    tag: "Ages 8–12",
    title: "Children",
    text: "Playful outdoor challenges that build coordination, curiosity and self-belief.",
    meta: "Day camps + starter trails",
    icon: "spark",
    featured: false,
  },
  {
    tag: "School cohorts",
    title: "School students",
    text: "Structured camps that connect adventure with teamwork, responsibility and confidence.",
    meta: "1–5 day programs",
    icon: "pack",
    featured: true,
  },
  {
    tag: "Campus groups",
    title: "College students",
    text: "Higher challenge, practical expedition skills and leadership under pressure.",
    meta: "Camps + field modules",
    icon: "cap",
    featured: false,
  },
  {
    tag: "Open enrolment",
    title: "Individuals",
    text: "A focused pathway for beginners ready to become capable, mountain-aware trekkers.",
    meta: "Weekend + multi-day",
    icon: "person",
    featured: false,
  },
  {
    tag: "Teams & leaders",
    title: "Corporate groups",
    text: "Outdoor experiences built around trust, decisions, communication and shared outcomes.",
    meta: "Custom team programs",
    icon: "team",
    featured: false,
  },
] as const;

const strengths = [
  { label: "Physical fitness", icon: "bolt" },
  { label: "Mental resilience", icon: "mind" },
  { label: "Leadership", icon: "flag" },
  { label: "Basic mountaineering", icon: "peak" },
  { label: "Outdoor adventure", icon: "compass" },
  { label: "Safety", icon: "shield" },
  { label: "Discipline", icon: "target" },
] as const;

function Glyph({ name }: { name: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M12 3.5 13.4 8.6 18.5 10 13.4 11.4 12 16.5 10.6 11.4 5.5 10 10.6 8.6 12 3.5Z" {...stroke} />
        <path d="M18 15.5 18.6 17.4 20.5 18 18.6 18.6 18 20.5 17.4 18.6 15.5 18 17.4 17.4 18 15.5Z" {...stroke} />
      </svg>
    );
  }
  if (name === "pack") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8" {...stroke} />
        <path d="M6.5 8h11l.6 11.2a1.5 1.5 0 0 1-1.5 1.6H7.4a1.5 1.5 0 0 1-1.5-1.6L6.5 8Z" {...stroke} />
        <path d="M9.5 12.5h5" {...stroke} />
      </svg>
    );
  }
  if (name === "cap") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M3 10 12 6l9 4-9 4-9-4Z" {...stroke} />
        <path d="M7 12.2V16c1.4 1.4 3.1 2 5 2s3.6-.6 5-2v-3.8" {...stroke} />
      </svg>
    );
  }
  if (name === "person") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="8" r="3" {...stroke} />
        <path d="M6.5 19.5c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" {...stroke} />
      </svg>
    );
  }
  if (name === "team") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="8" cy="9" r="2.2" {...stroke} />
        <circle cx="16" cy="9" r="2.2" {...stroke} />
        <path d="M3.8 18.5c.6-2.4 2.2-3.6 4.2-3.6s3.6 1.2 4.2 3.6M11.8 18.5c.6-2.4 2.2-3.6 4.2-3.6s3.6 1.2 4.2 3.6" {...stroke} />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M13 3 6 13h5l-1 8 7-10h-5l1-8Z" {...stroke} />
      </svg>
    );
  }
  if (name === "mind") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M9 18V9.5A3.5 3.5 0 0 1 12.5 6 3.5 3.5 0 0 1 16 9.5V18" {...stroke} />
        <path d="M8 10.5H6.5A2.5 2.5 0 0 0 4 13v1.5A2.5 2.5 0 0 0 6.5 17H8M16 10.5h1.5A2.5 2.5 0 0 1 20 13v1.5A2.5 2.5 0 0 1 17.5 17H16" {...stroke} />
      </svg>
    );
  }
  if (name === "flag") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M7 20V4.5M7 5h9l-1.6 3.2L16 11.5H7" {...stroke} />
      </svg>
    );
  }
  if (name === "peak") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M3 18 9 8l3 4 3-6 6 12H3Z" {...stroke} />
      </svg>
    );
  }
  if (name === "compass") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...stroke} />
        <path d="m14.8 9.2-1.3 4.3-4.3 1.3 1.3-4.3 4.3-1.3Z" {...stroke} />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M12 3.5 19 6.2v5.4c0 4-2.8 6.8-7 8.4-4.2-1.6-7-4.4-7-8.4V6.2L12 3.5Z" {...stroke} />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" {...stroke} />
        <path d="M12 8.5V12l2.5 1.6" {...stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" {...stroke} />
      <circle cx="12" cy="12" r="3" {...stroke} />
      <path d="M12 4.5V7M12 17v2.5M4.5 12H7M17 12h2.5" {...stroke} />
    </svg>
  );
}

export function TrainingPage() {
  return (
    <>
      <SiteHeader currentRoute="/training" />
      <main>
        <section className={styles.hero} aria-labelledby="training-title">
          <Image
            src={photo("Training image.png")}
            alt="A roped team in helmets crossing a snowy ridge, led by a climber in a red helmet."
            fill
            preload
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Poorna Mountaineering Academy · Train for more</p>
            <h1 id="training-title">Find your strength in the mountains.</h1>
            <p className={styles.heroLead}>Training that builds courage, character and mountain-ready skill.</p>
            <p>
              Practical outdoor learning led by Poorna Malavath—for young people, individuals and teams
              ready to discover what disciplined effort can unlock.
            </p>
            <Link className={styles.primary} href="#programs">
              Explore academy programs →
            </Link>
            <p className={styles.heroFoot}>Skills for the mountain. Strength for life.</p>
          </div>
        </section>

        <section className={styles.intro} aria-labelledby="academy-title">
          <div className={styles.introHead}>
            <div>
              <p className={styles.kicker}>The academy</p>
              <h2 className={styles.title} id="academy-title">
                The mountain becomes a classroom.
              </h2>
            </div>
            <p>
              Poorna Mountaineering Academy creates structured outdoor experiences where challenge
              becomes confidence—and confidence becomes character.
            </p>
          </div>
          <div className={styles.classroom}>
            <div className={styles.classroomPhoto}>
              <Image
                src={photo("Academy training.png")}
                alt="Four trainees in helmets handling an orange rope on a rocky mountain trail."
                fill
                sizes="(max-width: 900px) 100vw, 560px"
                className={styles.cover}
              />
            </div>
            <div className={styles.why}>
              <p className={styles.whyKicker}>Why mountaineering</p>
              <h3>Because the climb reveals how we respond when the way forward is not easy.</h3>
              <p>
                The outdoors makes effort visible. It asks us to prepare, adapt, support one another
                and keep moving with humility.
              </p>
              <p className={styles.whyKicker}>Our training philosophy</p>
              <ul>
                {philosophy.map((item) => (
                  <li key={item.title}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong>{item.title}</strong>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.programs} id="programs" aria-labelledby="programs-title">
          <div className={styles.programHead}>
            <div>
              <p className={styles.kickerLight}>Programs</p>
              <h2 className={styles.title} id="programs-title">
                A challenge for every starting point.
              </h2>
            </div>
            <p>
              Each program is shaped to the age, experience and goals of the group—never
              one-size-fits-all, always grounded in safe progression.
            </p>
          </div>
          <ul className={styles.programGrid}>
            {programs.map((program) => (
              <li key={program.title} className={program.featured ? styles.featured : undefined}>
                <div className={styles.programTop}>
                  <span className={styles.programIcon}>
                    <Glyph name={program.icon} />
                  </span>
                  <span>{program.tag}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <p className={styles.programMeta}>
                  <Glyph name="clock" />
                  {program.meta}
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.programNote}>
            <p>Start where you are. We will help you take the next step well.</p>
            <Link href="/register">Find the right program</Link>
          </div>
        </section>

        <section className={styles.focus} aria-labelledby="focus-title">
          <div className={styles.focusHead}>
            <div>
              <p className={styles.kicker}>Training focus</p>
              <h2 className={styles.title} id="focus-title">
                Capability, built from the ground up.
              </h2>
            </div>
            <p>
              The goal is not simply to reach a viewpoint. It is to return more prepared, more aware
              and more dependable than before.
            </p>
          </div>
          <div className={styles.focusCard}>
            <div className={styles.focusPhoto}>
              <Image
                src={photo("Rope skills training.png")}
                alt="An instructor showing two students how to manage a rope in foggy mountain terrain."
                fill
                sizes="(max-width: 900px) 100vw, 620px"
                className={styles.cover}
              />
              <span className={styles.badge}>Practice before pressure</span>
              <p>Good judgment begins with fundamentals repeated until they become habits.</p>
            </div>
            <div className={styles.focusCopy}>
              <h3>What every program strengthens</h3>
              <p>The emphasis changes by audience; the foundation remains the same.</p>
              <ul>
                {strengths.map((item) => (
                  <li key={item.label}>
                    <Glyph name={item.icon} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="training-cta">
          <div>
            <h2 className={styles.title} id="training-cta">
              Ready to begin your training?
            </h2>
            <p>
              Tell us who you are training with and what you hope to build. We will recommend the
              right next step.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaPrimary} href="/register">
              Enquire about training →
            </Link>
            <Link className={styles.ctaGhost} href="/register">
              Plan a group program
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter variant="training" />
    </>
  );
}
