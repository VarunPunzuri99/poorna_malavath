import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./SchoolsPage.module.css";

function photo(file: string) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

type Program = {
  tag: string;
  title: string;
  text: string;
  duration: string;
  focus: string;
  icon: string;
};

const corePrograms: readonly Program[] = [
  {
    tag: "Adventure",
    title: "School adventure programs",
    text: "Guided trails, team challenges and outdoor experiences designed to build confidence, trust and shared responsibility.",
    duration: "1–5 days · campus or trail",
    focus: "Confidence · teamwork · outdoor awareness",
    icon: "peak",
  },
  {
    tag: "Motivation",
    title: "Student motivation sessions",
    text: "Interactive talks and workshops that help students connect goals, effort and resilience with everyday school life.",
    duration: "45–90 minutes · assembly or classroom",
    focus: "Goal-setting · grit · motivation",
    icon: "spark",
  },
  {
    tag: "Awareness",
    title: "Mountaineering awareness",
    text: "Classroom and campus sessions that introduce students to expedition planning, safety, teamwork and environmental respect.",
    duration: "45–90 minutes · classroom",
    focus: "Planning · safety · teamwork",
    icon: "compass",
  },
];

const partnerPrograms: readonly Program[] = [
  {
    tag: "Leadership",
    title: "Leadership workshops",
    text: "Practical sessions that help students lead, communicate, make decisions and support one another in real-world scenarios.",
    duration: "1–3 days · campus or trail",
    focus: "Initiative · communication · responsibility",
    icon: "flag",
  },
  {
    tag: "Fitness",
    title: "Physical fitness programs",
    text: "Structured movement sessions that improve stamina, coordination and overall well-being through outdoor activity and practical challenge.",
    duration: "1–3 days · campus or trail",
    focus: "Stamina · coordination · movement",
    icon: "pulse",
  },
  {
    tag: "Camps",
    title: "Outdoor camps",
    text: "Residential or day camps that combine adventure, reflection and practical learning in a supportive outdoor environment.",
    duration: "2–5 days · residential or day camp",
    focus: "Connection · reflection · adventure",
    icon: "camp",
  },
];

const outcomes = [
  { title: "Confidence", text: "Try, adapt and recognise progress", icon: "spark" },
  { title: "Teamwork", text: "Contribute, communicate and trust", icon: "team" },
  { title: "Leadership", text: "Take initiative and guide with care", icon: "flag" },
  { title: "Physical fitness", text: "Build stamina, balance and movement", icon: "pulse" },
  { title: "Mental resilience", text: "Stay steady through discomfort", icon: "mind" },
  { title: "Respect for nature", text: "Travel lightly and observe deeply", icon: "leaf" },
] as const;

const inclusions = [
  {
    number: "01",
    title: "School planning",
    text: "Goals, cohort needs, schedule and permissions aligned in advance.",
    icon: "clipboard",
  },
  {
    number: "02",
    title: "Equipment guidance",
    text: "Clear packing lists and support with essential technical equipment.",
    icon: "pack",
  },
  {
    number: "03",
    title: "Outdoor experience",
    text: "Age-appropriate trails, activities and practical mountain learning.",
    icon: "trail",
  },
  {
    number: "04",
    title: "Guided reflection",
    text: "Facilitated moments that turn experience into transferable insight.",
    icon: "chat",
  },
  {
    number: "05",
    title: "School debrief",
    text: "A closing review with educators, observations and next-step suggestions.",
    icon: "doc",
  },
] as const;

const safeguards = [
  {
    title: "Safety-led planning",
    text: "Routes, weather, group ability, equipment and emergency protocols are reviewed before every program.",
    icon: "shield",
  },
  {
    title: "Trained instructors",
    text: "Experienced outdoor educators guide each activity with clear supervision and age-appropriate progression.",
    icon: "instructor",
  },
  {
    title: "Calm discipline",
    text: "Students learn preparation, punctuality, listening and responsibility as essential expedition habits.",
    icon: "clipboard",
  },
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
        <path d="M12 3.2 13.6 8.8 19.2 10.4 13.6 12 12 17.6 10.4 12 4.8 10.4 10.4 8.8 12 3.2Z" {...stroke} />
      </svg>
    );
  }
  if (name === "compass") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...stroke} />
        <path d="m14.8 9.2-1.3 4.3-4.3 1.3 1.3-4.3 4.3-1.3Z" {...stroke} />
      </svg>
    );
  }
  if (name === "flag") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M7 20V4.5M7 5.2h9.2L14.6 8.6 16.2 12H7" {...stroke} />
      </svg>
    );
  }
  if (name === "pulse") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M3 12h4l2-5 3.2 10 2.2-5H21" {...stroke} />
      </svg>
    );
  }
  if (name === "camp") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M4 19 12 6l8 13H4Z" {...stroke} />
        <path d="M12 19v-5" {...stroke} />
      </svg>
    );
  }
  if (name === "team") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="8" cy="9" r="2.1" {...stroke} />
        <circle cx="16" cy="9" r="2.1" {...stroke} />
        <path d="M4.2 18.2c.5-2.2 2-3.3 3.8-3.3s3.3 1.1 3.8 3.3M12.2 18.2c.5-2.2 2-3.3 3.8-3.3s3.3 1.1 3.8 3.3" {...stroke} />
      </svg>
    );
  }
  if (name === "mind") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M12 4.5a3.2 3.2 0 0 0-3.2 3.2V16a3.2 3.2 0 0 0 6.4 0V7.7A3.2 3.2 0 0 0 12 4.5Z" {...stroke} />
        <path d="M8.8 10H7a2.4 2.4 0 0 0 0 4.8h1.8M15.2 10H17a2.4 2.4 0 0 1 0 4.8h-1.8" {...stroke} />
      </svg>
    );
  }
  if (name === "leaf") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M5 19c8-1 12-6 13.5-13.5C11 6.5 6 10 5 19Z" {...stroke} />
        <path d="M9 15c1.4-1.6 3-2.8 5.2-3.6" {...stroke} />
      </svg>
    );
  }
  if (name === "clipboard") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <rect x="6" y="5.5" width="12" height="14.5" rx="2" {...stroke} />
        <path d="M9 5.5V4.8A1.3 1.3 0 0 1 10.3 3.5h3.4A1.3 1.3 0 0 1 15 4.8v.7M9 11h6M9 14.5h4" {...stroke} />
      </svg>
    );
  }
  if (name === "pack") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M8 8.5V6.8A2.2 2.2 0 0 1 10.2 4.6h3.6A2.2 2.2 0 0 1 16 6.8v1.7" {...stroke} />
        <path d="M6.2 8.5h11.6l.5 10.2a1.4 1.4 0 0 1-1.4 1.5H7.1a1.4 1.4 0 0 1-1.4-1.5L6.2 8.5Z" {...stroke} />
      </svg>
    );
  }
  if (name === "trail") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M4 18.5 9.2 8.5l2.6 4.2 2.4-5.2L20 18.5H4Z" {...stroke} />
      </svg>
    );
  }
  if (name === "chat") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M6 16.5 4.5 19.5 8.2 18A8 8 0 1 0 6 16.5Z" {...stroke} />
      </svg>
    );
  }
  if (name === "doc") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-8.5A1.5 1.5 0 0 1 6.5 20V5A1.5 1.5 0 0 1 8 3.5Z" {...stroke} />
        <path d="M14 3.8V8h4.2M9 12.5h6M9 16h4" {...stroke} />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M12 3.5 19 6.2v5.3c0 4.1-2.8 6.9-7 8.5-4.2-1.6-7-4.4-7-8.5V6.2L12 3.5Z" {...stroke} />
        <path d="m9.2 12 1.8 1.8 3.8-4" {...stroke} />
      </svg>
    );
  }
  if (name === "instructor") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="8" r="2.6" {...stroke} />
        <path d="M7 19.2c.7-2.8 2.5-4.2 5-4.2s4.3 1.4 5 4.2" {...stroke} />
        <path d="M16.2 6.2 18 4.8" {...stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M4 18 9 8l3 4 3-6 5 12H4Z" {...stroke} />
    </svg>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <li>
      <div className={styles.programTop}>
        <span className={styles.icon}>
          <Glyph name={program.icon} />
        </span>
        <span className={styles.tag}>{program.tag}</span>
      </div>
      <h3>{program.title}</h3>
      <p>{program.text}</p>
      <p className={styles.meta}>{program.duration}</p>
      <p className={styles.meta}>{program.focus}</p>
    </li>
  );
}

export function SchoolsPage() {
  return (
    <>
      <SiteHeader currentRoute="/schools" />
      <main>
        <section className={styles.hero} aria-labelledby="schools-title">
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
            <p className={styles.eyebrow}>Poorna Mountaineering Academy · For Schools</p>
            <h1 id="schools-title">The mountain is a classroom without walls.</h1>
            <p className={styles.heroLead}>
              Outdoor programs that help students discover courage, responsibility and one another.
            </p>
            <p>
              Age-appropriate, school-ready experiences led by trained mountain instructors—designed
              around your learning goals, calendar and cohort.
            </p>
            <Link className={styles.primary} href="/register">
              Plan a school program →
            </Link>
            <p className={styles.heroFoot}>Learning beyond the classroom. Strength for life.</p>
          </div>
        </section>

        <section className={styles.programs} aria-labelledby="school-programs-title">
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div>
                <p className={styles.kicker}>School programs</p>
                <h2 id="school-programs-title">
                  Programs built to inspire, challenge and connect students.
                </h2>
              </div>
              <p>
                From motivation and awareness to leadership, fitness and outdoor camps, we design
                school programs that match your goals, age groups and calendar.
              </p>
            </div>
            <ul className={styles.programGrid}>
              {corePrograms.map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </ul>
            <div className={styles.notes}>
              <p>Programs can be delivered on campus, in nearby trails or as a residential experience.</p>
              <p>Age groups, cohort size and school goals are considered from the start.</p>
            </div>
          </div>
        </section>

        <section className={styles.partner} aria-labelledby="partner-title">
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div>
                <p className={styles.kickerLight}>More ways to partner</p>
                <h2 id="partner-title">Every school is different. Every program can be tailored.</h2>
              </div>
              <p>
                From leadership and fitness to camps and custom programs, we help schools choose the
                right format for their students, teachers and goals.
              </p>
            </div>
            <ul className={styles.programGrid}>
              {partnerPrograms.map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </ul>
            <div className={styles.notes}>
              <p>Day visits, residential camps and custom school expeditions.</p>
              <p>Cohort size, accessibility and school calendar considered from the start.</p>
            </div>
          </div>
        </section>

        <section className={styles.outcomes} aria-labelledby="outcomes-title">
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div>
                <p className={styles.kicker}>Student outcomes</p>
                <h2 id="outcomes-title">What students bring back.</h2>
              </div>
              <p>
                The summit is not the only result. We design each program so students return with
                stronger habits for school, teams and life.
              </p>
            </div>
            <div className={styles.outcomeBoard}>
              <div className={styles.outcomePhoto}>
                <Image
                  src={photo("Rope skills training.png")}
                  alt="An instructor showing two students how to manage an orange rope on a rocky slope."
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  className={styles.cover}
                />
                <span className={styles.badge}>Experience becomes character</span>
                <p>Growth becomes visible when students discover what they can do—and who they can help.</p>
              </div>
              <div className={styles.outcomePanel}>
                <h3>Six outcomes, one connected experience</h3>
                <p>Activities are chosen to develop the whole student—not just outdoor technique.</p>
                <ul>
                  {outcomes.map((item) => (
                    <li key={item.title}>
                      <span className={styles.icon}>
                        <Glyph name={item.icon} />
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
          </div>
        </section>

        <section className={styles.includes} aria-labelledby="includes-title">
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div>
                <p className={styles.kicker}>What a program includes</p>
                <h2 id="includes-title">Clear from first call to final debrief.</h2>
              </div>
              <p>
                A simple, supported process for educators—built around thoughtful preparation,
                excellent delivery and useful reflection.
              </p>
            </div>
            <ol className={styles.includeGrid}>
              {inclusions.map((item) => (
                <li key={item.number}>
                  <div className={styles.includeTop}>
                    <span className={styles.includeIcon}>
                      <Glyph name={item.icon} />
                    </span>
                    <span>{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.safety} aria-labelledby="safety-title">
          <div className={styles.safetyCopy}>
            <p className={styles.kickerLight}>Safety, people and discipline</p>
            <h2 id="safety-title">Challenge is planned. Care is constant.</h2>
            <p>
              Outdoor growth depends on trust. We create clear boundaries, progressive challenge and
              attentive supervision so students can stretch with confidence.
            </p>
            <ul className={styles.safetyCards}>
              {safeguards.map((item) => (
                <li key={item.title}>
                  <span className={styles.icon}>
                    <Glyph name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.safetyPhoto}>
            <Image
              src={photo("Instructor briefing students.png")}
              alt="An instructor kneels to check a student's harness while students in blue helmets wait on a rocky slope."
              fill
              sizes="(max-width: 900px) 100vw, 640px"
              className={styles.cover}
            />
            <span className={styles.safetyBadge}>
              <Glyph name="shield" />
              Prepared before we begin
            </span>
            <p>Clear instruction turns caution into capable, confident action.</p>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="schools-cta">
          <div>
            <h2 id="schools-cta">Ready to plan a program for your school?</h2>
            <p>
              Tell us your students&apos; ages, group size and learning goals. We will shape a safe,
              purposeful program around them.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaPrimary} href="/register">
              Request a School Program →
            </Link>
            <Link className={styles.ctaGhost} href="/contact">
              Talk to the academy
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter variant="training" />
    </>
  );
}
