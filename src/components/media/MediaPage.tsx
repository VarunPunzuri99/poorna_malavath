import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./MediaPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const coverage = [
  {
    outlet: "BBC World Service",
    date: "04 Apr 2026",
    title: "The climber opening new paths for India’s girls",
    text: "A profile of Poorna’s ascent from Pakala to Everest—and the academy she is building for the next generation.",
    image: photo("Student portrait.png"),
    alt: "A seated portrait in a light blazer and blue shirt against wood panels.",
    focus: "center 18%",
  },
  {
    outlet: "The Hindu",
    date: "21 Feb 2026",
    title: "Beyond the summit: turning achievement into access",
    text: "Why the work after the record matters just as much as the climb itself.",
    image: photo("Story image (4).png"),
    alt: "A person in a cap and sunglasses against a blue mountain sky.",
    focus: "center center",
  },
  {
    outlet: "National Geographic India",
    date: "08 Dec 2025",
    title: "A new map of possibility",
    text: "Inside a training day with young climbers learning preparation, teamwork and care.",
    image: photo("Instructor briefing students2.png"),
    alt: "A person in a beige blazer standing in front of Indian flags.",
    focus: "center 16%",
  },
] as const;

const mentions = [
  {
    outlet: "Deccan Chronicle",
    title: "Young mountaineers find a mentor in Poorna Malavath",
    tag: "Profile",
    date: "17 Jan 2026",
  },
  {
    outlet: "NDTV",
    title: "The discipline behind a record-breaking ascent",
    tag: "News",
    date: "02 Nov 2025",
  },
  {
    outlet: "Femina India",
    title: "Women who move the horizon",
    tag: "Feature",
    date: "24 Sep 2025",
  },
] as const;

const interviews = [
  { source: "The Habit Coach", title: "Building courage one practice at a time", length: "31 min" },
  { source: "All India Radio", title: "From Pakala to the seven summits", length: "24 min" },
  { source: "She Leads", title: "Making the outdoors more equitable", length: "38 min" },
] as const;

const videos = [
  {
    title: "What Everest taught me about preparation",
    source: "Tedx Hyderabad",
    time: "14:08",
    image: photo("Mountain training group.png"),
    alt: "Poorna speaking into a microphone in an olive blazer, with a Baths All-R League 2024 banner behind her.",
    focus: "38% 32%",
  },
  {
    title: "A day at the academy basecamp",
    source: "Poorna Academy Films",
    time: "08:42",
    image: photo("Story image.png"),
    alt: "A climber in an orange helmet and a blue vest with a TARC mark, standing against rock.",
    focus: "center 28%",
  },
  {
    title: "When girls see the summit",
    source: "UN Women India",
    time: "09:16",
    image: photo("Story image (1).png"),
    alt: "A person in a magenta jacket standing with arms crossed on snow.",
    focus: "center center",
  },
] as const;

const articles = [
  {
    kind: "Essay",
    title: "Before the summit: why preparation is a form of hope",
    meta: "By Poorna Malavath · 7 min read",
  },
  {
    kind: "Field note",
    title: "Five lessons from training young expedition teams",
    meta: "Academy Journal · 5 min read",
  },
  {
    kind: "Op-ed",
    title: "Outdoor learning belongs in every child’s education",
    meta: "Indian Express · 8 min read",
  },
] as const;

const kitItems = [
  "Official biography · PDF",
  "Milestones & key facts · PDF",
  "Brand marks · SVG + PNG",
  "Spokesperson notes · PDF",
] as const;

const pressPhotos = [
  {
    title: "Expedition portrait",
    meta: "JPG · 18.2 MB · Credit: Academy archive",
    image: photo("Student portrait.png"),
    alt: "A seated portrait in a light blazer and blue shirt against wood panels.",
    focus: "center 22%",
  },
  {
    title: "Summit training",
    meta: "JPG · 14.7 MB · Credit: Poorna Academy",
    image: photo("Story image.png"),
    alt: "A climber in an orange helmet and a blue vest with a TARC mark, standing against rock.",
    focus: "center 24%",
  },
  {
    title: "Speaker portrait",
    meta: "JPG · 11.6 MB · Credit: Academy archive",
    image: photo("Mountain training group.png"),
    alt: "Poorna speaking into a microphone in an olive blazer, with a Baths All-R League 2024 banner behind her.",
    focus: "42% 28%",
  },
  {
    title: "Outdoor portrait",
    meta: "JPG · 9.8 MB · Credit: Ananya Rao",
    image: photo("Instructor portrait.png"),
    alt: "An instructor in a blue blouse smiling outdoors, with trees behind her.",
    focus: "center 24%",
  },
] as const;

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
  { label: "Press kit", href: "#press" },
  { label: "Contact the academy", href: "/contact" },
] as const;

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="3.5" y="6" width="17" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function Headphones() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M4.5 13.5v2.2A2.3 2.3 0 0 0 6.8 18h.2v-6H6.8A2.3 2.3 0 0 0 4.5 14.3M19.5 13.5v2.2A2.3 2.3 0 0 1 17.2 18h-.2v-6h.2a2.3 2.3 0 0 1 2.3 2.3M6.8 12V11a5.2 5.2 0 0 1 10.4 0v1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="currentColor" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M12 5v9M8.5 11.5 12 15l3.5-3.5M6 18.5h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 3.8V8h4.2M8 12.5h8M8 16h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MediaPage() {
  return (
    <>
      <SiteHeader currentRoute="/media" />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="media-title">
          <div className={styles.heroCopy}>
            <p className={styles.pill}>Media & press</p>
            <div>
              <h1 id="media-title">
                Stories of
                <br />
                courage,
                <br />
                shared with
                <br />
                the world<span>.</span>
              </h1>
              <p>
                News coverage, conversations and resources documenting Poorna Malavath’s journey—from
                a village in Telangana to the world’s highest summits.
              </p>
            </div>
            <a className={styles.mail} href="mailto:media@poornamalavath.com">
              <span className={styles.mailIcon}>
                <MailIcon />
              </span>
              <span>
                <strong>For interviews and media enquiries</strong>
                <small>media@poornamalavath.com · Response within 2 working days</small>
              </span>
            </a>
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
            <p className={styles.photoBadge}>Featured interview · The Better India</p>
            <div className={styles.heroQuote}>
              <blockquote>“The mountain taught me that courage can be prepared for.”</blockquote>
              <p>
                <span>12 min read · 18 May 2026</span>
                <Link href="#conversations">
                  Read the conversation <Arrow />
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.news} id="news" aria-labelledby="news-title">
          <div className={styles.splitHead}>
            <div>
              <p className={styles.kicker}>In the news</p>
              <h2 id="news-title">Coverage from the field and beyond.</h2>
            </div>
            <p>
              Selected reporting on Poorna’s expeditions, youth leadership and the growing work of the
              academy. For fact checks or source material,{" "}
              <Link href="#enquiry">contact the media team</Link>.
            </p>
          </div>
          <div className={styles.coverageGrid}>
            {coverage.map((item) => (
              <article key={item.title} className={styles.coverageCard}>
                <Link href="#enquiry">
                  <span className={styles.srOnly}>Opens the media enquiry. </span>
                  <span className={styles.coveragePhoto}>
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 380px" style={{ objectPosition: item.focus }} />
                  </span>
                  <span className={styles.coverageBody}>
                    <span className={styles.metaRow}>
                      <span className={styles.outlet}>{item.outlet}</span>
                      <time>{item.date}</time>
                    </span>
                    <h3>{item.title}</h3>
                    <span className={styles.cardText}>{item.text}</span>
                    <span className={styles.textLink}>
                      Read coverage <Arrow />
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
          <div className={styles.mentions}>
            <div className={styles.mentionHead}>
              <h3>Recent mentions</h3>
              <p>Independent editorial coverage</p>
            </div>
            <ul>
              {mentions.map((item) => (
                <li key={item.title}>
                  <Link href="#enquiry">
                    <span className={styles.srOnly}>Opens the media enquiry. </span>
                    <span className={styles.outletName}>{item.outlet}</span>
                    <strong>{item.title}</strong>
                    <span className={styles.tag}>{item.tag}</span>
                    <time>{item.date}</time>
                    <span className={styles.open}>
                      Open <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.watch} id="conversations" aria-labelledby="watch-title">
          <div className={styles.watchInner}>
            <div className={styles.splitHead}>
              <div>
                <p className={styles.kickerLight}>Watch and listen</p>
                <h2 id="watch-title">Conversations with purpose.</h2>
              </div>
              <p>
                Long-form interviews, films and first-person writing on resilience, access and the
                responsibility that follows achievement.
              </p>
            </div>
            <div className={styles.library}>
              <article className={styles.featureAudio}>
                <Image
                  src={photo("Instructor portrait.png")}
                  alt="An instructor in a blue blouse smiling outdoors, with trees behind her."
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  className={styles.audioImage}
                />
                <p className={styles.audioBadge}>Featured audio · The Seen and the Unseen</p>
                <div>
                  <blockquote>“Ambition becomes meaningful when it makes room for others.”</blockquote>
                  <p>42 min · Podcast interview · Mar 2026</p>
                </div>
              </article>
              <div className={styles.interviewPanel}>
                <div className={styles.panelHead}>
                  <h3>Interviews</h3>
                  <p>Selected conversations</p>
                </div>
                <ul>
                  {interviews.map((item) => (
                    <li key={item.title}>
                      <Link href="#enquiry">
                        <span className={styles.srOnly}>Opens the media enquiry. </span>
                        <span className={styles.round}>
                          <Headphones />
                        </span>
                        <span>
                          <small>{item.source}</small>
                          <strong>{item.title}</strong>
                        </span>
                        <span className={styles.length}>
                          {item.length} <Arrow />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.blockHead} id="videos">
              <div>
                <h3>Videos</h3>
                <p>Talks, short films and expedition stories.</p>
              </div>
              <Link href="#videos">
                View video archive <Arrow />
              </Link>
            </div>
            <div className={styles.videoGrid}>
              {videos.map((item) => (
                <article key={item.title}>
                  <Link href="#enquiry">
                    <span className={styles.srOnly}>Opens the media enquiry. </span>
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 380px" style={{ objectPosition: item.focus }} />
                    <span className={styles.play}>
                      <PlayIcon />
                    </span>
                    <span className={styles.duration}>{item.time}</span>
                    <span className={styles.videoCopy}>
                      <strong>{item.title}</strong>
                      <small>{item.source}</small>
                    </span>
                  </Link>
                </article>
              ))}
            </div>

            <div className={styles.blockHead} id="articles">
              <div>
                <h3>Articles & essays</h3>
                <p>First-person reflections and practical lessons.</p>
              </div>
              <Link href="#articles">
                Browse all writing <Arrow />
              </Link>
            </div>
            <div className={styles.articleGrid}>
              {articles.map((item) => (
                <article key={item.title}>
                  <Link href="#enquiry">
                    <span className={styles.srOnly}>Opens the media enquiry. </span>
                    <small>{item.kind}</small>
                    <strong>{item.title}</strong>
                    <span>
                      <span>{item.meta}</span>
                      <Arrow />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.press} id="press" aria-labelledby="press-title">
          <div className={styles.splitHead}>
            <div>
              <p className={styles.kicker}>For editors and producers</p>
              <h2 id="press-title">Press-ready resources.</h2>
            </div>
            <p>
              Approved biographies, key facts, brand files and high-resolution photography for editorial
              use. Please retain the listed credits.
            </p>
          </div>
          <div className={styles.pressPanel}>
            <div className={styles.kit}>
              <span className={styles.docIcon}>
                <DocIcon />
              </span>
              <p className={styles.kitKicker}>Press kit · Updated May 2026</p>
              <h3>Everything you need for an accurate story.</h3>
              <p>
                A concise package containing Poorna’s official biography, milestone timeline, academy
                overview, factsheet and usage guidelines.
              </p>
              <ul>
                {kitItems.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link className={styles.download} href="#enquiry">
                Download press kit <DownloadIcon />
              </Link>
              <small>ZIP · 24.6 MB · Editorial use</small>
            </div>
            <div className={styles.photos}>
              <div className={styles.blockHead}>
                <div>
                  <h3>Downloadable photographs</h3>
                  <p>High-resolution images cleared for editorial use.</p>
                </div>
                <Link href="#enquiry">
                  Download all photographs <DownloadIcon />
                </Link>
              </div>
              <div className={styles.photoGrid}>
                {pressPhotos.map((item) => (
                  <article key={item.title}>
                    <Link href="#enquiry">
                      <span className={styles.srOnly}>Opens the media enquiry. </span>
                      <Image src={item.image} alt={item.alt} fill sizes="180px" style={{ objectPosition: item.focus }} />
                      <span className={styles.photoDown}>
                        <DownloadIcon />
                      </span>
                      <span className={styles.photoCopy}>
                        <strong>{item.title}</strong>
                        <small>{item.meta}</small>
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
              <p className={styles.notice}>
                <span aria-hidden="true">i</span>
                By downloading, you agree to use images only in direct editorial coverage of Poorna
                Malavath or Poorna Mountaineering Academy, with the supplied credit line.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.enquiry} id="enquiry" aria-labelledby="enquiry-title">
          <div>
            <p className={styles.kickerLight}>Media enquiries</p>
            <h2 id="enquiry-title">Planning a story, interview or screening?</h2>
            <p>
              Share your publication, deadline and format. Our media team can help with interviews,
              verified facts, photography and timing access.
            </p>
          </div>
          <div>
            <Link href="/contact">
              Contact the media team <MailIcon />
            </Link>
            <a href="mailto:media@poornamalavath.com">media@poornamalavath.com</a>
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
