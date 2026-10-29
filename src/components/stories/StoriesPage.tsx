import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StoryBrowser, type StoryCard } from "./StoryBrowser";
import styles from "./StoriesPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const storyCards: readonly StoryCard[] = [
  {
    id: "steady-pace",
    category: "student",
    label: "Student stories",
    title: "Finding a steady pace",
    text: "One student reflects on learning to move without comparing every step.",
    meta: "Student stories · 4 min",
    href: "#transformation",
    image: photo("Story image.png"),
    alt: "A climber in an orange helmet and a blue vest with a TARC mark, standing against rock.",
    imageFocus: "center 22%",
    overlay: true,
  },
  {
    id: "rope-team",
    category: "training",
    label: "Training stories",
    title: "Trust begins with the rope team",
    text: "A practical exercise shows why attention travels in both directions.",
    meta: "Training stories · 5 min",
    href: "/training",
    image: photo("Story image (4).png"),
    alt: "A person in a cap and sunglasses against a blue mountain sky.",
    imageFocus: "center center",
  },
  {
    id: "weather",
    category: "mountain",
    label: "Mountain lessons",
    title: "Read the weather before ambition",
    text: "Cloud, wind and visibility are information—not interruptions.",
    meta: "Mountain lessons · 3 min",
    href: "#lessons",
    image: photo("Mt_kilimanjaro.png"),
    alt: "A snow-covered peak rising above a sea of clouds at sunrise.",
    imageFocus: "center 46%",
  },
  {
    id: "small-habits",
    category: "motivation",
    label: "Motivation articles",
    title: "Small habits before brave moments",
    text: "Confidence is built in ordinary repetitions long before a difficult day arrives.",
    meta: "Motivation · 4 min",
    href: "#motivation",
    image: photo("Story image (3).png"),
    alt: "A close portrait against a plain light background.",
    imageFocus: "center center",
  },
  {
    id: "calm-communication",
    category: "interviews",
    label: "Interviews",
    title: "Why calm communication matters",
    text: "An instructor explains how clear language helps a group make better decisions.",
    meta: "Interview · 7 min",
    href: "/media",
    image: photo("Story image (2).png"),
    alt: "A smiling portrait against vertical wood panels.",
    imageFocus: "center center",
  },
  {
    id: "asking-for-help",
    category: "student",
    label: "Student stories",
    title: "The day asking for help felt strong",
    text: "A student's account of learning that independence can include speaking up.",
    meta: "Student stories · 4 min",
    href: "#transformation",
    image: photo("Story image (1).png"),
    alt: "A person in a magenta jacket standing with arms crossed on snow.",
    imageFocus: "center center",
  },
];

const lessons = [
  {
    number: "01",
    title: "Weather is part of the route",
    text: "Check forecasts, watch the sky and stay willing to change the plan.",
    icon: "sun",
  },
  {
    number: "02",
    title: "Pack in systems, not guesses",
    text: "Keep warmth, water and essentials accessible before they become urgent.",
    icon: "layers",
  },
  {
    number: "03",
    title: "The group sets the pace",
    text: "A responsible pace protects attention, energy and communication.",
    icon: "people",
  },
] as const;

const exploreLinks = [
  { label: "About Poorna", href: "/about" },
  { label: "The Academy", href: "/training" },
  { label: "Achievements", href: "/achievements" },
  { label: "Stories & Inspiration", href: "/stories" },
] as const;

const trainingLinks = [
  { label: "Student programs", href: "/training" },
  { label: "School programs", href: "/schools" },
  { label: "Outdoor camps", href: "/training" },
  { label: "Register for training", href: "/register" },
] as const;

const resourceLinks = [
  { label: "Mountain lessons", href: "#lessons" },
  { label: "Safety approach", href: "/schools" },
  { label: "Frequently asked questions", href: "/contact" },
  { label: "Contact the academy", href: "/contact" },
] as const;

function Mark({ name }: { name: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "sun") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" {...stroke} />
        <path d="M12 4.5v1.8M12 17.7V19.5M4.5 12h1.8M17.7 12H19.5M6.6 6.6l1.3 1.3M16.1 16.1l1.3 1.3M17.4 6.6l-1.3 1.3M7.9 16.1l-1.3 1.3" {...stroke} />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M12 5 4.5 9 12 13l7.5-4L12 5Z" {...stroke} />
        <path d="M6.2 12.2 4.5 13.2 12 17l7.5-3.8-1.7-1" {...stroke} />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="9" cy="9" r="2.2" {...stroke} />
        <circle cx="16" cy="10" r="1.8" {...stroke} />
        <path d="M4.8 18c.6-2.2 2.2-3.3 4.2-3.3s3.6 1.1 4.2 3.3M13.2 18c.4-1.6 1.5-2.5 2.8-2.5 1.2 0 2.2.7 2.8 2.2" {...stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M8 7.5a4 4 0 1 1 6.4 3.2c-1.2.8-1.9 1.6-1.9 3.1" {...stroke} />
      <path d="M12 17.8v.2" {...stroke} />
    </svg>
  );
}

export function StoriesPage() {
  return (
    <>
      <SiteHeader currentRoute="/stories" />
      <main>
        <section className={styles.hero} aria-labelledby="stories-title">
          <div className={styles.heroCopy}>
            <p className={styles.heroBadge}>Stories from the academy</p>
            <div>
              <h1 id="stories-title">
                Stories & Inspiration<span className={styles.period}>.</span>
              </h1>
              <p>
                Field notes from training grounds, mountain paths and the quiet moments where
                confidence begins to take shape.
              </p>
            </div>
            <Link className={styles.play} href="#journey">
              <span aria-hidden="true">▶</span>
              <span>
                Begin with Poorna&apos;s journey
                <small>A story of preparation, courage and possibility</small>
              </span>
            </Link>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src={photo("Mountain training group.png")}
              alt="Poorna Malavath speaking into a microphone in a green blazer, with a Baths All-R League 2024 banner behind her."
              fill
              preload
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.heroImage}
            />
            <p className={styles.photoBadge}>From the training trail</p>
            <blockquote>
              “The mountain asks for attention before it asks for courage.”
            </blockquote>
          </div>
        </section>

        <section className={styles.journey} id="journey" aria-labelledby="journey-title">
          <div className={styles.journeyPhoto}>
            <Image
              src={photo("Poorna on the trail.png")}
              alt="Poorna Malavath smiling in a green blazer against an orange wall."
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              className={styles.cover}
            />
            <p className={styles.photoBadge}>Founding story</p>
            <p className={styles.journeyCaption}>Every long path begins with learning how to take the next careful step.</p>
            <p className={styles.journeyMeta}>Poorna&apos;s journey · Academy notes</p>
          </div>
          <div className={styles.journeyCopy}>
            <p className={styles.kicker}>Poorna&apos;s journey</p>
            <h2 id="journey-title">A journey that keeps opening doors for others.</h2>
            <p>
              Poorna&apos;s story is not presented as a finish line. It is the starting point for an
              academy built around preparation, access and the belief that young people grow when
              challenge is paired with steady support.
            </p>
            <ul className={styles.principles}>
              <li>Prepare with care</li>
              <li>Move with purpose</li>
              <li>Return with perspective</li>
            </ul>
            <Link className={styles.textLink} href="/about">
              Read Poorna&apos;s story →
            </Link>
          </div>
        </section>

        <StoryBrowser cards={storyCards}>
          <section className={styles.featured} aria-labelledby="featured-title">
            <div className={styles.featuredPhoto}>
              <Image
                src={photo("Instructor briefing students2.png")}
                alt="Poorna Malavath in a beige blazer and pink shirt, standing with hands clasped in front of Indian flags."
                fill
                sizes="(max-width: 900px) 100vw, 620px"
                className={styles.cover}
              />
              <p className={styles.photoBadge}>Featured story</p>
              <p className={styles.featuredMeta}>Training stories · 6 min read</p>
            </div>
            <div className={styles.featuredCopy}>
              <p className={styles.kicker}>From the training ground</p>
              <h2 id="featured-title">Before the climb, the group learns how to listen.</h2>
              <p>
                A morning briefing becomes a lesson in awareness: checking equipment, naming concerns
                and understanding that clear communication is part of every safe decision.
              </p>
              <p className={styles.callout}>
                <span>01</span>
                Preparation is a shared practice, not a private checklist.
              </p>
              <Link className={styles.textLink} href="/training">
                Read the featured story →
              </Link>
            </div>
          </section>
        </StoryBrowser>

        <section className={styles.transform} id="transformation" aria-labelledby="transform-title">
          <div className={styles.transformCopy}>
            <p className={styles.kickerLight}>Student transformation</p>
            <h2 id="transform-title">From holding back to taking her place in the team.</h2>
            <p>
              The change was not loud or sudden. It appeared in smaller choices: volunteering for a
              task, checking on a teammate and speaking clearly when the group paused to plan.
            </p>
            <blockquote>
              <span aria-hidden="true">“</span>
              I did not need to be the fastest. I needed to stay present and keep contributing.
            </blockquote>
            <Link className={styles.textLink} href="#field-notes">
              Read the student story →
            </Link>
          </div>
          <div className={styles.transformPhoto}>
            <Image
              src={photo("Student portrait.png")}
              alt="A young woman in a light blazer and blue shirt, smiling against wood panels."
              fill
              sizes="(max-width: 900px) 100vw, 460px"
              className={styles.cover}
            />
            <p className={styles.photoBadge}>Student stories</p>
            <p className={styles.featuredMeta}>Reflection · 5 min read</p>
          </div>
        </section>

        <section className={styles.lessons} id="lessons" aria-labelledby="lessons-title">
          <div className={styles.wrap}>
            <div className={styles.splitHead}>
              <div>
                <p className={styles.kicker}>Mountain lessons</p>
                <h2 id="lessons-title">Practical wisdom for every trail.</h2>
              </div>
              <p>
                Short guides designed to be read before the route, discussed with the group and
                remembered when conditions change.
              </p>
            </div>
            <ol className={styles.lessonGrid}>
              {lessons.map((lesson) => (
                <li key={lesson.number}>
                  <div>
                    <span className={styles.lessonIcon}>
                      <Mark name={lesson.icon} />
                    </span>
                    <span>{lesson.number}</span>
                  </div>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.article} id="motivation" aria-labelledby="article-title">
          <div className={styles.articleCopy}>
            <p className={styles.pill}>Motivation article</p>
            <h2 id="article-title">Courage is often quieter than we expect.</h2>
            <p>
              It may look like checking your knots again, admitting that you need a slower pace or
              returning to a skill until it feels dependable. Progress does not need drama to be real.
            </p>
            <ul>
              <li>Name what you can control.</li>
              <li>Prepare before confidence arrives.</li>
              <li>Let consistency carry the hard days.</li>
            </ul>
            <p className={styles.noteMeta}>Motivation articles · 5 min read</p>
            <Link className={styles.textLink} href="#field-notes">
              Read the article →
            </Link>
          </div>
          <div className={styles.articlePhoto}>
            <Image
              src={photo("Story image.png")}
              alt="A climber in an orange helmet and a blue vest with a TARC mark, standing against rock."
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.cover}
            />
          </div>
        </section>

        <section className={styles.interview} aria-labelledby="interview-title">
          <div className={styles.interviewPhoto}>
            <Image
              src={photo("Instructor portrait.png")}
              alt="An instructor in a blue blouse smiling outdoors, with trees behind her."
              fill
              sizes="(max-width: 900px) 100vw, 420px"
              className={styles.interviewImage}
            />
            <p className={styles.photoBadge}>Interview</p>
            <p className={styles.featuredMeta}>Academy instructor · Field conversation</p>
          </div>
          <div className={styles.interviewCard}>
            <p className={styles.kicker}>Interview spotlight</p>
            <h2 id="interview-title">“A good instructor notices what the group is not saying.”</h2>
            <p>
              A conversation about reading energy, inviting honest questions and creating the
              conditions for students to take responsibility without feeling alone.
            </p>
            <ul>
              <li>Listening</li>
              <li>Group care</li>
              <li>Decision-making</li>
            </ul>
            <p className={styles.noteMeta}>Interviews · 8 min read</p>
            <Link className={styles.textLink} href="/media">
              Read the conversation →
            </Link>
          </div>
        </section>

        <section className={styles.follow} aria-labelledby="follow-title">
          <div>
            <p>Field notes · Once a month</p>
            <h2 id="follow-title">Follow the stories beyond the summit.</h2>
            <p>New student reflections, practical mountain lessons and thoughtful conversations from the academy.</p>
          </div>
          <form action="/contact" method="get">
            <label className={styles.srOnly} htmlFor="story-email">
              Email address
            </label>
            <span>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <rect x="3.5" y="6" width="17" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              <input id="story-email" type="email" autoComplete="email" placeholder="Your email address" />
              <button type="submit">Follow stories →</button>
            </span>
            <small>Useful stories only. Unsubscribe whenever you choose.</small>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <Link className={styles.brand} href="/">
              <span>
                <Image src="/assets/logos/mountain-snow.svg" alt="" width={20} height={20} unoptimized />
              </span>
              <span>
                Poorna Malavath
                <small>Mountaineering Academy</small>
              </span>
            </Link>
            <p>Training young people to meet challenge with preparation, responsibility and care for the team around them.</p>
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
                    <path d="M6.2 10.2h2v7.2h-2ZM10.3 10.2h1.9v1c.4-.7 1.2-1.2 2.2-1.2 1.8 0 2.6 1.1 2.6 3v4.4h-2v-3.8c0-.9-.3-1.5-1.2-1.5s-1.3.6-1.3 1.5v3.8h-2.2Z" fill="currentColor" />
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
            <h2>Training</h2>
            <ul>
              {trainingLinks.map((item) => (
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
            <span>Terms & Safety</span>
            <span>Accessibility</span>
          </p>
        </div>
      </footer>
    </>
  );
}
