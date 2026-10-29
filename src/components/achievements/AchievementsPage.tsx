import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./AchievementsPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const heroMetrics = [
  { value: "13y 11m", label: "Age at the summit of Everest" },
  { value: "8,848 m", label: "Mount Everest · 25 May 2014" },
  { value: "7", label: "Continents reached at their highest point" },
  { value: "1st", label: "Youngest girl to summit Everest at the time" },
] as const;

const everestStats = [
  { value: "8,848 m", label: "Summit elevation" },
  { value: "52 days", label: "Expedition window" },
  { value: "13", label: "Years old" },
] as const;

const summitCards = [
  {
    year: "2016 · Africa",
    elevation: "5,895 m",
    name: "Mount Kilimanjaro",
    place: "Tanzania",
    image: "Mt_kilimanjaro.png",
    alt: "Mount Kilimanjaro at sunrise above a sea of clouds, with hikers on the rocky ridge.",
  },
  {
    year: "2017 · Europe",
    elevation: "5,642 m",
    name: "Mount Elbrus",
    place: "Caucasus, Russia",
    image: "Mt_elbrus.png",
    alt: "Snow-covered Mount Elbrus under a clear blue sky, with climbers on the glacier.",
  },
  {
    year: "2019 · South America",
    elevation: "6,961 m",
    name: "Aconcagua",
    place: "Andes, Argentina",
    image: "Acanguaga.png",
    alt: "Snow-capped Aconcagua beyond brown Andean ridges and a winding trail.",
  },
] as const;

const expeditions = [
  {
    year: "2013",
    title: "Darjeeling foundation",
    text: "Formal mountain training builds rope craft, endurance and confidence.",
  },
  {
    year: "2014",
    title: "Everest expedition",
    text: "A landmark Himalayan ascent and a record seen around the world.",
    featured: true,
  },
  {
    year: "2016–19",
    title: "Across continents",
    text: "Kilimanjaro, Elbrus and Aconcagua broaden experience in varied terrain.",
  },
  {
    year: "2019–21",
    title: "Polar and Pacific peaks",
    text: "Remote objectives demand colder systems and deeper self-reliance.",
  },
  {
    year: "2022",
    title: "Seven Summits arc",
    text: "Denali completes a defining chapter—and begins the work of mentorship.",
  },
] as const;

const awards = [
  {
    tag: "National honour",
    title: "Tenzing Norgay National Adventure Award",
    body: "Government of India",
    text: "National recognition for mountaineering achievement and the example it set for young climbers.",
    icon: "/assets/logos/medal.svg",
  },
  {
    tag: "2018",
    title: "First Ladies Award",
    body: "Ministry of Women & Child Development",
    text: "Honour for pioneering achievement and for widening what girls could imagine for themselves.",
    icon: "/assets/logos/award.svg",
  },
  {
    tag: "State recognition",
    title: "Malala Award",
    body: "Government of Telangana",
    text: "State recognition connecting education, courage and a story that began in rural Telangana.",
    icon: "/assets/logos/star.svg",
  },
  {
    tag: "Ongoing",
    title: "Youth inspiration and mentorship",
    body: "Schools and communities across India",
    text: "Recognition continues through school sessions, youth programmes and community invitations.",
    icon: "/assets/logos/users.svg",
  },
] as const;

const records = [
  {
    number: "01",
    title: "Youngest girl to summit Everest at the time",
    text: "13 years and 11 months old on 25 May 2014.",
  },
  {
    number: "02",
    title: "A Seven Summits first for tribal women",
    text: "The highest peaks on all seven continents, completed across a demanding multi-year campaign.",
  },
  {
    number: "03",
    title: "A new face of Indian mountaineering",
    text: "Proof that access, training and belief can uncover extraordinary talent anywhere.",
  },
] as const;

const mediaItems = [
  {
    tag: "Interview · 2014",
    title: "A thirteen-year-old at the top of the world",
    text: "National television and news conversations",
    icon: "/assets/icons/mic-2.svg",
  },
  {
    tag: "Profile · 2017",
    title: "The courage behind the film Poorna",
    text: "Press features with Poorna and director Rahul Bose",
    icon: "/assets/icons/newspaper.svg",
  },
  {
    tag: "Interview · 2019",
    title: "What the Seven Summits taught me",
    text: "Adventure and leadership forums",
    icon: "/assets/icons/mic-2.svg",
  },
  {
    tag: "Profile · Today",
    title: "From record-holder to mentor",
    text: "Education, youth and social-impact media",
    icon: "/assets/icons/newspaper.svg",
  },
] as const;

export function AchievementsPage() {
  return (
    <>
      <SiteHeader currentRoute="/achievements" />
      <main>
        <section className={styles.hero} aria-labelledby="achievements-title">
          <Image
            src={photo("Hero image.png")}
            alt="Poorna Malavath in a red beanie and sunglasses, with snow-covered peaks behind her at sunset."
            fill
            preload
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>The Seven Summits · A life of firsts</p>
            <h1 id="achievements-title">Achievements</h1>
            <p className={styles.heroLead}>
              Every summit is proof that possibility can begin anywhere.
            </p>
            <p>
              From Everest at thirteen to the highest peaks on seven continents, Poorna Malavath’s
              record is a story of preparation, courage and purpose carried forward.
            </p>
            <Link className={styles.primary} href="#major-summits">
              Explore the milestones <span aria-hidden="true">→</span>
            </Link>
            <p className={styles.scrollHint}>Scroll to trace the journey</p>
          </div>
        </section>

        <section className={styles.metrics} aria-label="Achievement summary">
          <ul>
            {heroMetrics.map((metric) => (
              <li key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.summits} id="major-summits" aria-labelledby="summits-title">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Major summits</p>
              <h2 className={styles.title} id="summits-title">
                Seven continents. One extraordinary arc.
              </h2>
            </div>
            <p>
              Each ascent demanded a different kind of intelligence—from reading weather and snow
              to pacing, patience and trust in a rope team.
            </p>
          </div>

          <article className={styles.everest}>
            <div className={styles.everestMedia}>
              <Image
                src={photo("Mountain portrait.png")}
                alt="Poorna Malavath in a blue shirt and white-and-green cap, holding trekking poles in front of a snow peak."
                fill
                sizes="(max-width: 900px) 100vw, 520px"
                className={styles.cover}
              />
            </div>
            <div className={styles.everestCopy}>
              <p className={styles.badge}>Defining ascent · 2014</p>
              <h3>Mount Everest — where a record became a responsibility</h3>
              <p>
                On 25 May 2014, Poorna reached the roof of the world at 13 years and 11 months. The
                summit made history; the preparation behind it made her a mountaineer.
              </p>
              <dl>
                {everestStats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          <ul className={styles.summitGrid}>
            {summitCards.map((summit) => (
              <li key={summit.name}>
                <div className={styles.summitVisual}>
                  <Image
                    src={photo(summit.image)}
                    alt={summit.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 380px"
                    className={styles.cover}
                  />
                </div>
                <div className={styles.summitCopy}>
                  <div className={styles.summitMeta}>
                    <span>{summit.year}</span>
                    <span>{summit.elevation}</span>
                  </div>
                  <h3>{summit.name}</h3>
                  <p>{summit.place}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.summitNote}>
            <p>The record opened the door. The years after proved the discipline.</p>
            <Link href="#expeditions">View the complete summit log →</Link>
          </div>
        </section>

        <section className={styles.expeditions} id="expeditions" aria-labelledby="expeditions-title">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kickerLight}>Expeditions</p>
              <h2 className={styles.title} id="expeditions-title">
                Built over years. Earned step by step.
              </h2>
            </div>
            <p>
              A chronology of training, acclimatisation and difficult decisions across the world’s
              great mountain ranges.
            </p>
          </div>
          <div className={styles.expeditionBanner}>
            <Image
              src={photo("Program image.png")}
              alt="Poorna Malavath smiling in a green cap and pink jacket, with mountains behind her."
              fill
              sizes="100vw"
              className={styles.cover}
            />
            <div className={styles.expeditionBannerCopy}>
              <p>
                <strong>A summit is one moment. An expedition is every choice before it.</strong>
                Conditioning · route craft · team care · weather judgment
              </p>
            </div>
          </div>
          <ul className={styles.expeditionGrid}>
            {expeditions.map((item) => (
              <li
                key={item.year}
                className={"featured" in item && item.featured ? styles.featuredExpedition : undefined}
              >
                <div className={styles.expeditionTop}>
                  <span>{item.year}</span>
                  <span aria-hidden="true">⚑</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.awards} aria-labelledby="awards-title">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>Awards & recognition</p>
              <h2 className={styles.title} id="awards-title">
                Honoured for the summit. Remembered for what it made possible.
              </h2>
            </div>
            <p>
              Recognition arrived from institutions across India, but Poorna’s enduring measure is
              the confidence her journey gives to young people from underserved communities.
            </p>
          </div>
          <ul className={styles.awardGrid}>
            {awards.map((award) => (
              <li key={award.title}>
                <div className={styles.awardTop}>
                  <span className={styles.awardMark}>
                    <Image src={award.icon} alt="" width={21} height={21} unoptimized />
                  </span>
                  <span>{award.tag}</span>
                </div>
                <h3>{award.title}</h3>
                <p className={styles.awardBody}>{award.body}</p>
                <p>{award.text}</p>
              </li>
            ))}
          </ul>
          <blockquote className={styles.awardQuote}>
            An award belongs to one moment. The courage it awakens in someone else can last a
            lifetime.
          </blockquote>
        </section>

        <section className={styles.records} aria-labelledby="records-title">
          <div className={styles.recordsCopy}>
            <p className={styles.kickerLight}>Records</p>
            <h2 className={styles.title} id="records-title">
              A first that made the horizon wider.
            </h2>
            <p>
              Poorna’s records matter because of who could now see themselves in the story: girls,
              tribal youth and students far from the traditional centres of adventure sport.
            </p>
            <ol>
              {records.map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.recordsMedia}>
            <Image
              src={photo("Portrait.png")}
              alt="Poorna Malavath speaking into a microphone, wearing a striped shirt."
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.cover}
            />
            <p>
              <Image
                src="/assets/logos/mountain-snow.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
              />
              Across every continent
            </p>
          </div>
        </section>

        <section className={styles.media} aria-labelledby="media-title">
          <div className={styles.mediaIntro}>
            <div>
              <p className={styles.kicker}>Media appearances</p>
              <h2 className={styles.title} id="media-title">
                The story travelled far beyond the summit.
              </h2>
            </div>
            <p>
              Film, interviews and national coverage carried a remote Telangana village to audiences
              around the world—and kept the focus on access to opportunity.
            </p>
          </div>
          <div className={styles.mediaLayout}>
            <div>
              <div className={styles.mediaFeature}>
                <Image
                  src={photo("Program image.png")}
                  alt="Poorna Malavath outdoors in a green cap and pink jacket."
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  className={styles.cover}
                />
                <span>Feature film · 2017</span>
              </div>
              <article className={styles.filmCard}>
                <h3>Poorna</h3>
                <p>
                  Directed by Rahul Bose, the biographical film brought Poorna’s journey, her
                  community and the power of public education to the big screen.
                </p>
                <Link href="/media">
                  <span aria-hidden="true">▶</span>
                  Watch the story
                </Link>
              </article>
            </div>
            <div>
              <ul className={styles.mediaList}>
                {mediaItems.map((item) => (
                  <li key={item.title}>
                    <Link href="/media">
                      <span className={styles.mediaMark}>
                        <Image src={item.icon} alt="" width={19} height={19} unoptimized />
                      </span>
                      <span>
                        <span className={styles.mediaTag}>{item.tag}</span>
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.mediaDesk}>
                <p>For interviews and speaking requests</p>
                <Link href="/media">Visit the media desk →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="achievements-cta">
          <div>
            <h2 className={styles.title} id="achievements-cta">
              What will you climb next?
            </h2>
            <p>
              Bring Poorna’s lessons in courage, preparation and possibility to your school, team or
              community.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaPrimary} href="/schools">
              Book a school session <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.ctaGhost} href="/contact">
              Invite Poorna to speak
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter variant="about" />
    </>
  );
}
