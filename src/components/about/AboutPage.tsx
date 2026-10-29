import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./AboutPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

const preparation = [
  { number: "01", title: "Foundation", text: "Fitness, routine and team discipline created the base." },
  { number: "02", title: "Mountain craft", text: "Technical skills and high-altitude awareness built confidence." },
  { number: "03", title: "Everest", text: "Preparation became calm action on the world’s highest mountain." },
] as const;

const challenges = [
  { title: "Thin air", text: "Managing effort carefully and listening to the body.", mark: "air" },
  { title: "Extreme cold", text: "Staying precise when weather and fatigue test focus.", mark: "cold" },
  { title: "Self-doubt", text: "Returning to training, purpose and the strength of the team.", mark: "doubt" },
  { title: "Unknown terrain", text: "Learning to adapt without losing sight of the objective.", mark: "terrain" },
] as const;

const milestones = [
  {
    kicker: "Early years",
    title: "A wider world comes into view",
    text: "School, community and a new opportunity open the door to adventure.",
  },
  {
    kicker: "Training begins",
    title: "Discipline becomes a daily habit",
    text: "Conditioning, teamwork and mountain skills turn curiosity into readiness.",
  },
  {
    kicker: "2014 · Everest",
    title: "A landmark summit",
    text: "Poorna reaches Mount Everest and becomes the youngest Indian girl to do so.",
    featured: true,
  },
  {
    kicker: "Beyond the summit",
    title: "Experience becomes a message",
    text: "The climb grows into a story about access, courage and possibility.",
  },
  {
    kicker: "Today",
    title: "Helping others rise",
    text: "Mentorship and youth engagement carry the lessons of the mountain forward.",
  },
] as const;

function Mark({ name }: { name: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 } as const;
  if (name === "cold") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M12 3v18M5 7l14 10M19 7 5 17" {...stroke} />
      </svg>
    );
  }
  if (name === "doubt") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="7" {...stroke} />
        <path d="M9.5 10a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.6V14" {...stroke} />
      </svg>
    );
  }
  if (name === "terrain") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M4 16c2-2 3.5-2 5.5 0s3.5 2 5.5 0 3.5-2 5.5 0" {...stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M4 14c3-4 5-4 8 0s5 4 8 0" {...stroke} />
    </svg>
  );
}

export function AboutPage() {
  return (
    <>
      <SiteHeader currentRoute="/about" />
      <main>
        <section className={styles.hero} aria-labelledby="about-title">
          <Image
            src={photo("About Hero image.png")}
            alt="Poorna Malavath in a green cap, orange-tinted sunglasses and a pink jacket, with a rocky slope behind her."
            fill
            preload
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Her story · Her summits · Her purpose</p>
            <h1 id="about-title">About Poorna</h1>
            <p>
              A mountaineer shaped by courage, discipline and a belief that every young person
              deserves the chance to dream beyond their circumstances.
            </p>
            <Link className={styles.primary} href="#her-story">
              Explore Her Journey <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={styles.story} id="her-story" aria-labelledby="story-title">
          <div className={styles.storyMedia}>
            <Image
              src={photo("Mountain portrait.png")}
              alt="Poorna Malavath in a blue shirt and cap, holding trekking poles in front of a snow peak."
              fill
              sizes="(max-width: 800px) 100vw, 520px"
              className={styles.cover}
            />
            <p className={styles.pullQuote}>
              The summit begins with the courage to take one step.
            </p>
          </div>
          <div>
            <p className={styles.kicker}>Her story</p>
            <h2 className={styles.title} id="story-title">
              From a quiet beginning to a life above the clouds
            </h2>
            <p>
              Poorna Malavath’s journey is not only about reaching a summit. It is about
              discovering strength, learning to trust a team and choosing to continue when the path
              becomes difficult.
            </p>
            <p>
              Her story began far from the world’s great mountain ranges. Opportunity, focused
              training and an open mind introduced her to mountaineering—and to a larger sense of
              what her life could become. The discipline she found in the mountains continues to
              guide how she learns, leads and encourages others.
            </p>
          </div>
        </section>

        <section className={styles.early} aria-labelledby="early-title">
          <div>
            <p className={styles.kicker}>Early life</p>
            <h2 className={styles.title} id="early-title">
              Rooted in community. Ready for possibility.
            </h2>
          </div>
          <div className={styles.earlyCopy}>
            <blockquote>
              “A young person’s starting point should never decide how far they are allowed to
              dream.”
            </blockquote>
            <p>
              Growing up in rural Telangana, Poorna’s early years were shaped by family, school and
              community. When she encountered outdoor and adventure training, she stepped into an
              unfamiliar world with curiosity. Each lesson—from physical conditioning to caring for
              teammates—expanded her confidence and prepared her for challenges much larger than
              herself.
            </p>
          </div>
        </section>

        <section className={styles.journey} aria-labelledby="journey-title">
          <div>
            <p className={styles.kickerLight}>Mountaineering journey</p>
            <h2 className={styles.title} id="journey-title">
              Training turned possibility into preparation
            </h2>
            <p>
              Mountaineering asked Poorna to become a student of every detail: movement, weather,
              equipment, recovery and teamwork. The Everest journey was built gradually—through
              demanding training, patient instruction and repeated practice.
            </p>
            <ol>
              {preparation.map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.journeyMedia}>
            <Image
              src={photo("Program image.png")}
              alt="Poorna Malavath smiling in a green cap and pink jacket, with mountains behind her."
              fill
              sizes="(max-width: 800px) 100vw, 480px"
              className={styles.cover}
            />
            <p>
              <strong>One deliberate step at a time</strong>
              Preparation makes courage repeatable.
            </p>
          </div>
        </section>

        <section className={styles.challenges} aria-labelledby="challenges-title">
          <div className={styles.challengeIntro}>
            <div>
              <p className={styles.kicker}>Challenges she overcame</p>
              <h2 className={styles.title} id="challenges-title">
                Courage was practiced before it was proven.
              </h2>
            </div>
            <p>
              High altitude does not remove fear. It teaches a climber how to respond—with judgment,
              humility, patience and the willingness to ask for help.
            </p>
          </div>
          <ul>
            {challenges.map((item) => (
              <li key={item.title}>
                <span className={styles.mark}>
                  <Mark name={item.mark} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.philosophy} aria-labelledby="philosophy-title">
          <p className={styles.kicker}>Philosophy</p>
          <h2 className={styles.title} id="philosophy-title">
            The mountain rewards humility, not hurry.
          </h2>
          <blockquote>
            “The mountains made me brave, and I want to help many more to rise.”
          </blockquote>
          <p>
            Poorna’s philosophy is grounded in steady preparation and shared responsibility.
            Progress is rarely dramatic: it is built through small commitments kept consistently,
            respect for the environment and care for the people climbing beside you.
          </p>
        </section>

        <section className={styles.mission} aria-labelledby="mission-title">
          <div className={styles.missionHead}>
            <div>
              <p className={styles.kicker}>Mission & vision</p>
              <h2 className={styles.title} id="mission-title">
                Help more young people see a way forward.
              </h2>
            </div>
            <p>
              The summit is a symbol. The deeper work is helping young people discover courage they
              can carry into school, work, relationships and community life.
            </p>
          </div>
          <div className={styles.missionGrid}>
            <article>
              <p>Mission</p>
              <h3>Turn inspiration into action</h3>
              <p>
                Use story, outdoor learning and mentorship to nurture confidence, discipline,
                resilience and responsible ambition.
              </p>
            </article>
            <article>
              <p>Vision</p>
              <h3>A generation that climbs beyond limits</h3>
              <p>
                A future where background does not limit possibility and young people meet challenge
                with skill, empathy and courage.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.banner} aria-labelledby="timeline-title">
          <Image
            src={photo("School program image.png")}
            alt="Poorna Malavath in a green cap and pink jacket speaking with schoolchildren, with forested mountains behind them."
            fill
            sizes="100vw"
            className={styles.cover}
          />
          <div className={styles.bannerScrim} />
          <div className={styles.bannerCopy}>
            <p className={styles.kickerLight}>Timeline of major milestones</p>
            <h2 className={styles.title} id="timeline-title">
              A journey measured in courage, not only altitude.
            </h2>
            <p>
              From a first encounter with training to a life of mentorship, each milestone carries
              the lesson of the one before it.
            </p>
          </div>
        </section>

        <section className={styles.timeline} aria-label="Milestones">
          <ol>
            {milestones.map((item, index) => (
              <li key={item.title} className={"featured" in item && item.featured ? styles.featured : undefined}>
                <span className={styles.step}>{index + 1}</span>
                <article>
                  <p>{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </li>
            ))}
          </ol>
          <div className={styles.timelineNote}>
            <p>Every milestone is also a beginning.</p>
            <Link href="/training">Keep climbing · Keep learning</Link>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="about-cta">
          <h2 className={styles.title} id="about-cta">
            What will you climb next?
          </h2>
          <p>
            Carry Poorna’s lesson forward: begin with purpose, prepare with discipline and take the
            next brave step.
          </p>
        </section>
      </main>
      <SiteFooter variant="about" />
    </>
  );
}
