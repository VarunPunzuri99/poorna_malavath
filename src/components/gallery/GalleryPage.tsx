import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { GalleryBrowser, type GalleryPhoto } from "./GalleryBrowser";
import styles from "./GalleryPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const photos: readonly GalleryPhoto[] = [
  {
    id: "everest-approach",
    category: "expeditions",
    label: "Expeditions",
    title: "On the ridge, every careful decision becomes part of the view.",
    meta: "Everest approach · Archive 01",
    image: photo("Poorna on the trail.png"),
    alt: "A smiling portrait in an olive blazer against an orange wall.",
    focus: "center 32%",
    highlight: true,
  },
  {
    id: "basecamp-briefing",
    category: "training",
    label: "Training",
    title: "The first briefing before the trail begins.",
    meta: "Academy basecamp · Archive 02",
    image: photo("Instructor briefing students2.png"),
    alt: "A person in a beige blazer standing in front of Indian flags.",
    focus: "center 18%",
    highlight: true,
  },
  {
    id: "rope-trust",
    category: "training",
    label: "Training",
    title: "Learning to trust the rope—and the team.",
    meta: "Rock craft session · Archive 03",
    image: photo("Story image.png"),
    alt: "A climber in an orange helmet and a blue vest with a TARC mark, standing against rock.",
    focus: "center 30%",
    highlight: true,
  },
  {
    id: "school-horizons",
    category: "schools",
    label: "Schools",
    title: "A school hall becomes a room full of new horizons.",
    meta: "Student conversation · Hyderabad",
    image: photo("Story image (4).png"),
    alt: "A person in a cap and sunglasses against a blue mountain sky.",
    focus: "center center",
    highlight: true,
  },
  {
    id: "summit-day",
    category: "expeditions",
    label: "Expeditions",
    title: "Confidence, carried lightly.",
    meta: "Summit day · Archive 04",
    image: photo("Story image (1).png"),
    alt: "A person in a magenta jacket standing with arms crossed on snow.",
    focus: "center center",
    highlight: true,
  },
  {
    id: "quiet-focus",
    category: "training",
    label: "Training",
    title: "The quiet focus before a new attempt.",
    meta: "Skills practice · Archive 05",
    image: photo("Story image (3).png"),
    alt: "A close portrait against a plain light background.",
    focus: "center center",
    highlight: true,
  },
  {
    id: "childhood",
    category: "childhood",
    label: "Childhood",
    title: "A childhood dream, remembered in full color.",
    meta: "Family archive · Pakala",
    image: photo("Student portrait.png"),
    alt: "A seated portrait in a light blazer and blue shirt against wood panels.",
    focus: "center 24%",
    highlight: true,
  },
  {
    id: "recognition",
    category: "awards",
    label: "Awards",
    title: "Recognition for a journey that opened doors.",
    meta: "National honor · New Delhi",
    image: photo("Mountain training group.png"),
    alt: "Poorna speaking into a microphone in an olive blazer, with a Baths All-R League 2024 banner behind her.",
    focus: "40% 30%",
    highlight: true,
  },
  {
    id: "field-conversation",
    category: "media",
    label: "Media",
    title: "Sharing what the mountain taught her.",
    meta: "Field conversation · Archive 06",
    image: photo("Instructor portrait.png"),
    alt: "An instructor in a blue blouse smiling outdoors, with trees behind her.",
    focus: "center 24%",
    highlight: true,
  },
  {
    id: "kilimanjaro",
    category: "expeditions",
    label: "Expeditions",
    title: "A summit rising above a sea of clouds.",
    meta: "Kilimanjaro · Expedition photograph",
    image: photo("Mt_kilimanjaro.png"),
    alt: "A snow-covered peak rising above a sea of clouds at sunrise.",
    focus: "center 46%",
  },
  {
    id: "high-trail",
    category: "expeditions",
    label: "Expeditions",
    title: "On a high trail with a pack and trekking poles.",
    meta: "Expedition photograph",
    image: photo("Mountain portrait.png"),
    alt: "A person in a blue shirt, cap and sunglasses on a rocky trail, with snow peaks behind.",
    focus: "center 30%",
  },
  {
    id: "rope-skills",
    category: "training",
    label: "Training",
    title: "Rope practice with the training group.",
    meta: "Training photograph",
    image: photo("Rope skills training.png"),
    alt: "Two people practicing with an orange rope in the fog.",
    focus: "center center",
  },
  {
    id: "school-group",
    category: "schools",
    label: "Schools",
    title: "A school group gathered with Poorna.",
    meta: "School program photograph",
    image: photo("School program image.png"),
    alt: "Poorna standing with a group of school students.",
    focus: "center 30%",
  },
  {
    id: "speaking",
    category: "events",
    label: "Events",
    title: "Speaking with a microphone at a gathering.",
    meta: "Event photograph",
    image: photo("Portrait.png"),
    alt: "A person in a striped shirt speaking into a microphone.",
    focus: "center 30%",
  },
];

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
  { label: "Media enquiries", href: "/contact" },
  { label: "Frequently asked questions", href: "/contact" },
  { label: "Contact the academy", href: "/contact" },
] as const;

export function GalleryPage() {
  return (
    <>
      <SiteHeader currentRoute="/gallery" />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="gallery-title">
          <div className={styles.heroCopy}>
            <p className={styles.pill}>Media archive</p>
            <div>
              <h1 id="gallery-title">
                Moments that
                <br />
                move us<span>.</span>
              </h1>
              <p>
                A living archive of expeditions, training grounds, school programs and the people who
                turn preparation into possibility.
              </p>
            </div>
            <Link className={styles.explore} href="#archive">
              <span className={styles.exploreIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              <span>
                <strong>Explore the visual archive</strong>
                <small>56 photographs · 7 collections</small>
              </span>
            </Link>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src={photo("Mountain training group.png")}
              alt="Poorna speaking into a microphone in an olive blazer, with a Baths All-R League 2024 banner behind her."
              fill
              preload
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.heroImage}
            />
            <p className={styles.photoBadge}>Featured frame · Media</p>
            <div className={styles.heroQuote}>
              <blockquote>“Every summit begins long before the mountain.”</blockquote>
              <p>Poorna Malavath · Academy archive</p>
            </div>
          </div>
        </section>

        <section className={styles.collection} aria-labelledby="collection-title">
          <div className={styles.splitHead}>
            <div>
              <p className={styles.kicker}>Explore the archive</p>
              <h2 id="collection-title">A life in motion, frame by frame.</h2>
            </div>
            <p>
              Browse photographs from high-altitude expeditions, academy sessions, school visits and
              milestone moments. Select a collection to focus the gallery.
            </p>
          </div>
          <GalleryBrowser photos={photos} />
        </section>

        <section className={styles.callout} aria-labelledby="callout-title">
          <div>
            <p className={styles.kickerLight}>Bring the experience closer</p>
            <h2 id="callout-title">Let the next frame begin with your students.</h2>
            <p>
              Invite Poorna and the academy team to create a school program shaped around resilience,
              preparation and possibility.
            </p>
          </div>
          <div>
            <Link href="/schools">
              Plan a School Program
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </Link>
            <small>Programs tailored for schools and youth groups</small>
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
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Programs</h2>
            <ul>
              {programLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Resources</h2>
            <ul>
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
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
