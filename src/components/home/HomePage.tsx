import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./HomePage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const metrics = [
  { value: "7+", label: "Major Expeditions" },
  { value: "Youngest", label: "Indian girl to scale Mount Everest" },
  { value: "10,000+", label: "Students Inspired" },
  { value: "Multiple", label: "National & International Summits" },
] as const;

const programs = [
  {
    title: "For Children",
    text: "Adventure, confidence, fitness and resilience.",
    action: "Explore Programs",
    href: "/training",
    image: "Program image.png",
    alt: "Poorna Malavath in a green cap and pink jacket, with mountains behind her.",
    icon: "/assets/icons/Group.svg",
    tone: "navy",
  },
  {
    title: "For Schools",
    text: "Customized student development and adventure programs.",
    action: "Request a School Program",
    href: "/schools",
    image: "Program image (1).png",
    alt: "Portrait of Poorna Malavath in a blue jacket.",
    icon: "/assets/icons/hugeicons_school-01.svg",
    tone: "green",
  },
  {
    title: "For Individuals",
    text: "Mountaineering, fitness and personal challenge programs.",
    action: "View Training Options",
    href: "/training",
    image: "Program image (2).png",
    alt: "Poorna Malavath speaking into a microphone, wearing a white blazer.",
    icon: "/assets/icons/Group.svg",
    tone: "violet",
  },
] as const;

const achievements = [
  { title: "Mount Everest", text: "Youngest Indian girl to scale", tone: "blue", icon: "mountain" },
  { title: "Multiple Summits", text: "National & International Expeditions", tone: "green", icon: "flag" },
  { title: "Awards & Recognition", text: "For her exceptional achievements", tone: "orange", icon: "trophy" },
  { title: "Youth Inspiration", text: "10,000+ students motivated", tone: "violet", icon: "person" },
  { title: "Featured Globally", text: "Media, documentaries and interviews", tone: "amber", icon: "star" },
] as const;

const stories = [
  {
    tag: "Adventure Camp - Hyderabad",
    title: "120 students • 2-day program",
    text: "Adventure, courage and confidence in action.",
    image: "Mountain portrait.png",
    alt: "Poorna Malavath in a blue shirt and cap, with snow peaks behind her.",
    tone: "tagBlue",
  },
  {
    tag: "Leadership Workshop - School Program",
    title: "250 students • Motivation & Adventure",
    text: "A school program built around leadership and growth.",
    image: "Program image (1).png",
    alt: "Close portrait of Poorna Malavath in a blue jacket.",
    tone: "tagGreen",
  },
  {
    tag: "Outdoor Training - Winter Camp",
    title: "50 students • Basic Mountaineering",
    text: "Learning resilience through outdoor training.",
    image: "Program image.png",
    alt: "Poorna Malavath outdoors in a green cap and pink jacket.",
    tone: "tagOrange",
  },
] as const;

const voices = [
  {
    quote: "Poorna’s session inspired our students to dream bigger and believe in themselves.",
    name: "School Principal",
    place: "Hyderabad",
  },
  {
    quote: "The training gave my daughter confidence and a positive mindset. Truly life-changing.",
    name: "Parent",
    place: "Bengaluru",
  },
  {
    quote: "Poorna is a role model for our young generation. Her story shows what is possible with determination.",
    name: "Student",
    place: "Class 9, Hyderabad",
  },
] as const;

function AchievementMark({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 };
  if (name === "flag") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M6 20V4m0 0h9l-1.5 3L15 10H6" {...common} />
      </svg>
    );
  }
  if (name === "trophy") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M8 4h8v5a4 4 0 0 1-8 0V4Zm-3 1h3v2a3 3 0 0 1-3-2Zm14 0h-3v2a3 3 0 0 0 3-2ZM12 13v3m-3 3h6" {...common} />
      </svg>
    );
  }
  if (name === "person") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <circle cx="12" cy="8" r="2.4" {...common} />
        <path d="M7 18c.8-2.4 2.6-3.5 5-3.5s4.2 1.1 5 3.5" {...common} />
      </svg>
    );
  }
  if (name === "star") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="m12 4 1.8 4.2L18.5 9l-3.2 2.8.9 4.4L12 14.2 7.8 16.2l.9-4.4L5.5 9l4.7-.8L12 4Z" {...common} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="m4 16 5-7 3 3 3-5 5 9H4Z" {...common} />
    </svg>
  );
}

export function HomePage() {
  return (
    <>
      <SiteHeader currentRoute="/" />
      <main>
        <section className={styles.hero} aria-labelledby="home-title">
          <Image
            src={photo("Hero image.png")}
            alt="Poorna Malavath in a red beanie and sunglasses, with snow-covered peaks behind her."
            fill
            preload
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowMark} aria-hidden="true" />
              Mountaineer | Adventurer | Mentor
            </p>
            <h1 id="home-title">
              Poorna
              <br />
              Malavath
            </h1>
            <p className={styles.lede}>
              Inspiring young minds to discover courage, discipline and the strength to rise beyond
              their limits.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primary} href="/register">
                Join a Training <span aria-hidden="true">→</span>
              </Link>
              <Link className={styles.ghost} href="/about">
                Explore Her Journey <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.metrics} aria-label="Impact">
          <ul>
            {metrics.map((metric) => (
              <li key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.purpose} aria-labelledby="purpose-title">
          <div className={styles.purposeMedia}>
            <Image
              src={photo("Mountain portrait.png")}
              alt="Poorna Malavath holding trekking poles on a rocky ridge, with snow peaks behind her."
              fill
              sizes="(max-width: 800px) 100vw, 480px"
              className={styles.cover}
            />
          </div>
          <div>
            <p className={styles.kicker}>Her journey</p>
            <h2 className={styles.title} id="purpose-title">From a small village to the world’s highest peaks</h2>
            <p>
              Poorna Malavath’s journey is a story of courage, determination and the power of
              dreams. From a small village in Telangana to the summit of Mount Everest, she has
              shown that with passion and perseverance, no dream is too big.
            </p>
            <div className={styles.valueRow}>
              <article>
                <span className={styles.valueIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <h3 className={styles.cardTitle}>Courage</h3>
                <p>Face challenges with confidence.</p>
              </article>
              <article>
                <span className={styles.valueIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <circle cx="8" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="16" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4.5 18c.6-2.2 2.2-3.3 3.5-3.3S11 15.8 11.6 18M12.4 18c.6-2.2 2.2-3.3 3.5-3.3s2.9 1.1 3.5 3.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <h3 className={styles.cardTitle}>Determination</h3>
                <p>No dream is too big.</p>
              </article>
            </div>
            <Link className={styles.textLink} href="/about">
              Read Her Story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={styles.programs} aria-labelledby="programs-title">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Train with Poorna</p>
              <h2 className={styles.title} id="programs-title">Train with Poorna</h2>
            </div>
            <p>Adventure. Confidence. Fitness. A Stronger Tomorrow.</p>
          </div>
          <div className={styles.programGrid}>
            {programs.map((program) => (
              <article className={styles.programCard} key={program.title}>
                <div className={styles.programPhoto}>
                  <Image src={photo(program.image)} alt={program.alt} fill sizes="360px" className={styles.cover} />
                </div>
                <div className={styles.programBody}>
                  <span className={`${styles.iconBubble} ${styles[program.tone]}`}>
                    <Image src={program.icon} alt="" width={18} height={18} unoptimized />
                  </span>
                  <h3 className={styles.cardTitle}>{program.title}</h3>
                  <p>{program.text}</p>
                  <Link href={program.href}>
                    {program.action} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.banner} aria-labelledby="classroom-title">
          <Image
            src={photo("School program image.png")}
            alt="Poorna Malavath in a green cap speaking with schoolchildren, with forested mountains behind them."
            fill
            sizes="100vw"
            className={styles.cover}
          />
          <div className={styles.bannerScrim} />
          <div className={styles.bannerCopy}>
            <h2 className={styles.title} id="classroom-title">The mountain is a classroom</h2>
            <p>Mountains teach what classrooms sometimes cannot.</p>
            <div className={styles.heroActions}>
              <Link className={styles.primary} href="/schools">
                Courage · Discipline · Leadership · Resilience <span aria-hidden="true">→</span>
              </Link>
              <Link className={styles.ghost} href="/training">
                Keep Climbing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.achievements} aria-labelledby="achievements-title">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Achievements</p>
              <h2 className={styles.title} id="achievements-title">Breaking barriers and setting new benchmarks.</h2>
            </div>
            <Link className={styles.outline} href="/achievements">
              View All Achievements <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className={styles.achievementGrid}>
            {achievements.map((item) => (
              <li key={item.title}>
                <span className={`${styles.achievementIcon} ${styles[item.tone]}`} aria-hidden="true">
                  <AchievementMark name={item.icon} />
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.leadership} aria-labelledby="leadership-title">
          <div>
            <p className={styles.kicker}>Poorna Malavath</p>
            <h2 className={styles.title} id="leadership-title">Climb Beyond Limits.</h2>
            <blockquote>
              “The mountains made me brave, and I want to help many more to rise.”
            </blockquote>
            <p className={styles.signature}>
              <strong>Poorna Malavath</strong>
              <span>Mountaineer | Adventurer | Mentor</span>
            </p>
            <Link className={styles.primary} href="/about">
              Read Her Story <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles.leadershipMedia}>
            <Image
              src={photo("Portrait.png")}
              alt="Poorna Malavath speaking into a microphone, wearing a striped shirt."
              fill
              sizes="(max-width: 800px) 100vw, 520px"
              className={styles.cover}
            />
            <Link className={styles.watch} href="/stories">
              <span aria-hidden="true">▶</span>
              <span>
                <strong>From a small village to the world’s highest peaks</strong>
                Watch Her Journey
              </span>
            </Link>
          </div>
        </section>

        <section className={styles.expedition} aria-labelledby="expedition-title">
          <div>
            <p className={styles.kickerLight}>Next expedition</p>
            <h2 className={styles.title} id="expedition-title">The Next Summit Awaits</h2>
            <p>
              Continuing the journey to inspire, explore and push new boundaries. Follow Poorna’s
              upcoming expeditions and preparation journey.
            </p>
            <dl>
              <div>
                <dt>Destination</dt>
                <dd>To be announced</dd>
              </div>
              <div>
                <dt>Objective</dt>
                <dd>New summit challenge</dd>
              </div>
            </dl>
            <div className={styles.heroActions}>
              <Link className={styles.primary} href="/stories">
                Follow the Journey <span aria-hidden="true">→</span>
              </Link>
              <Link className={styles.ghost} href="/contact">
                Follow for latest updates
              </Link>
            </div>
          </div>
          <div className={styles.expeditionMedia}>
            <Image
              src={photo("Expedition photo.png")}
              alt="Poorna Malavath speaking into a microphone, wearing a white blazer."
              fill
              sizes="(max-width: 800px) 100vw, 480px"
              className={styles.cover}
            />
            <p>
              <strong>Timeline</strong>
              Coming soon
            </p>
          </div>
        </section>

        <section className={styles.stories} aria-labelledby="stories-title">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Training stories</p>
              <h2 className={styles.title} id="stories-title">Real experiences. Real impact.</h2>
            </div>
            <Link className={styles.outline} href="/stories">
              View All Stories <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles.storyGrid}>
            {stories.map((story) => (
              <article key={story.title}>
                <div className={styles.storyPhoto}>
                  <Image src={photo(story.image)} alt={story.alt} fill sizes="360px" className={styles.cover} />
                  <p className={`${styles.storyTag} ${styles[story.tone]}`}>{story.tag}</p>
                </div>
                <h3 className={styles.cardTitle}>{story.title}</h3>
                <p>{story.text}</p>
                <Link href="/stories">
                  View Story <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.voices} aria-labelledby="voices-title">
          <p className={styles.kicker}>Voices from the journey</p>
          <h2 className={styles.title} id="voices-title">Stories of courage, confidence and transformation.</h2>
          <div className={styles.voiceGrid}>
            {voices.map((voice) => (
              <figure key={voice.name}>
                <p className={styles.stars} aria-label="5 stars">
                  ★★★★★
                </p>
                <blockquote>{voice.quote}</blockquote>
                <figcaption>
                  <span aria-hidden="true">{voice.name.slice(0, 1)}</span>
                  <span>
                    <strong>{voice.name}</strong>
                    {voice.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="cta-title">
          <div>
            <h2 className={styles.title} id="cta-title">What Will You Climb Next?</h2>
            <p>
              Whether you’re a student, parent, school, institution or individual—start your
              journey towards a stronger, braver and brighter you.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/register">
              Join a Training <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact">
              Partner With Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
