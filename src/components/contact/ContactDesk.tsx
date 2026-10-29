"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactPage.module.css";

const topics = [
  { value: "schools", label: "Schools and educators" },
  { value: "speaking", label: "Speaking invitation" },
  { value: "media", label: "Media and publishing" },
  { value: "partnership", label: "Partnership" },
  { value: "general", label: "General enquiry" },
] as const;

type Topic = (typeof topics)[number]["value"];

type Fields = {
  name: string;
  email: string;
  phone: string;
  topic: "" | Topic;
  organisation: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  organisation: "",
  message: "",
};

const routes = [
  {
    topic: "schools" as const,
    kicker: "Schools & educators",
    title: "Bring courage into the classroom",
    text: "School talks, outdoor learning programs and educator partnerships shaped for your students.",
    meta: "Programs team · 2 working days",
  },
  {
    topic: "speaking" as const,
    kicker: "Speaking invitations",
    title: "Invite Poorna to your stage",
    text: "Keynotes, panels and conversations on preparation, access, leadership and possibility.",
    meta: "Speaking desk · 2–3 working days",
  },
  {
    topic: "media" as const,
    kicker: "Media & publishing",
    title: "Plan an interview or story",
    text: "Verified facts, interview scheduling, approved photography and filming enquiries.",
    meta: "Media team · Same-day triage",
  },
  {
    topic: "partnership" as const,
    kicker: "Partners & supporters",
    title: "Build a purposeful partnership",
    text: "Collaborations that expand safe outdoor learning and mentorship for young people.",
    meta: "Partnerships · 3 working days",
  },
] as const;

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ContactDesk() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [limited, setLimited] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setLimited(false);
  }

  function validate(next: Fields) {
    const found: Partial<Record<keyof Fields, string>> = {};
    if (!next.name.trim()) found.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      found.email = "Enter a valid email address.";
    }
    if (next.phone.trim() && next.phone.replace(/\D/g, "").length < 8) {
      found.phone = "Enter a phone number with at least 8 digits, or leave it blank.";
    }
    if (!next.topic) found.topic = "Choose an enquiry type.";
    if (!next.message.trim()) found.message = "Tell us how we can help.";
    return found;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setLimited(false);
      const first = Object.keys(found)[0];
      document.getElementById(`enquiry-${first}`)?.focus();
      return;
    }
    setLimited(true);
  }

  function choose(topic: Topic) {
    update("topic", topic);
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("enquiry-topic")?.focus();
  }

  return (
    <>
      <section className={styles.workspace} aria-labelledby="plan-title">
        <div className={styles.splitHead}>
          <div>
            <p className={styles.kicker}>Start here</p>
            <h2 id="plan-title">Tell us what you’re planning.</h2>
          </div>
          <p>
            A little context helps us connect you with the right person. For student registrations,
            please include age, location and preferred program dates.
          </p>
        </div>
        <div className={styles.workspaceGrid}>
          <form id="enquiry" className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.formHead}>
              <h3>Send an enquiry</h3>
              <p>All fields are required unless marked optional.</p>
            </div>
            <div className={styles.pair}>
              <label htmlFor="enquiry-name">
                Your name
                <input
                  id="enquiry-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  value={fields.name}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                  onChange={(event) => update("name", event.target.value)}
                />
                {errors.name ? <span id="enquiry-name-error">{errors.name}</span> : null}
              </label>
              <label htmlFor="enquiry-email">
                Email address
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={fields.email}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                  onChange={(event) => update("email", event.target.value)}
                />
                {errors.email ? <span id="enquiry-email-error">{errors.email}</span> : null}
              </label>
            </div>
            <div className={styles.pair}>
              <label htmlFor="enquiry-phone">
                <span className={styles.fieldLabel}>
                  Phone number <small>Optional</small>
                </span>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  value={fields.phone}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
                  onChange={(event) => update("phone", event.target.value)}
                />
                {errors.phone ? <span id="enquiry-phone-error">{errors.phone}</span> : null}
              </label>
              <label htmlFor="enquiry-topic">
                I’m contacting you about
                <select
                  id="enquiry-topic"
                  name="topic"
                  value={fields.topic}
                  aria-invalid={errors.topic ? true : undefined}
                  aria-describedby={errors.topic ? "enquiry-topic-error" : undefined}
                  onChange={(event) => update("topic", event.target.value as Fields["topic"])}
                >
                  <option value="">Choose an enquiry type</option>
                  {topics.map((topic) => (
                    <option key={topic.value} value={topic.value}>
                      {topic.label}
                    </option>
                  ))}
                </select>
                {errors.topic ? <span id="enquiry-topic-error">{errors.topic}</span> : null}
              </label>
            </div>
            <label htmlFor="enquiry-organisation">
              <span className={styles.fieldLabel}>
                Organisation or school <small>Optional</small>
              </span>
              <input
                id="enquiry-organisation"
                name="organisation"
                autoComplete="organization"
                placeholder="Organisation name"
                value={fields.organisation}
                onChange={(event) => update("organisation", event.target.value)}
              />
            </label>
            <label htmlFor="enquiry-message">
              How can we help?
              <textarea
                id="enquiry-message"
                name="message"
                rows={5}
                placeholder="Share your idea, dates, audience and anything else we should know."
                value={fields.message}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "enquiry-message-error" : undefined}
                onChange={(event) => update("message", event.target.value)}
              />
              {errors.message ? <span id="enquiry-message-error">{errors.message}</span> : null}
            </label>
            <div className={styles.formFoot}>
              <p>
                <span aria-hidden="true">✓</span>
                Your details are used only to respond to this enquiry. We never share contact information.
              </p>
              <button type="submit">
                Send enquiry
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path d="M4 12h12M12 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {limited ? (
              <p className={styles.notice} role="status">
                This page cannot deliver the enquiry yet. Email{" "}
                <a href="mailto:hello@poornamalavath.com">hello@poornamalavath.com</a> and include the
                details you entered.
              </p>
            ) : null}
          </form>
          <aside className={styles.aside}>
            <div className={styles.direct}>
              <h3>Prefer a direct route?</h3>
              <p>Use the address that best matches your enquiry.</p>
              <ul>
                <li>
                  <span aria-hidden="true">✉</span>
                  <span>
                    <small>General & partnerships</small>
                    <a href="mailto:hello@poornamalavath.com">hello@poornamalavath.com</a>
                    <em>Programs, collaborations and visits</em>
                  </span>
                </li>
                <li>
                  <span aria-hidden="true">▤</span>
                  <span>
                    <small>Media enquiries</small>
                    <a href="mailto:media@poornamalavath.com">media@poornamalavath.com</a>
                    <em>Interviews, facts and image requests</em>
                  </span>
                </li>
                <li>
                  <span aria-hidden="true">☎</span>
                  <span>
                    <small>Academy office</small>
                    <a href="tel:+918455502116">+91 84555 02116</a>
                    <em>Mon–Fri · 9:30 am–5:30 pm IST</em>
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.reply}>
              <p>
                <span className={styles.replyMark} aria-hidden="true">
                  ◷
                </span>
                When you’ll hear from us
              </p>
              <p>We usually reply within two working days. Time-sensitive media requests are triaged the same day.</p>
              <a href="#answers">
                See enquiry guidance <Arrow />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.routes} aria-labelledby="routes-title">
        <div className={styles.splitHead}>
          <div>
            <p className={styles.kicker}>Find the right path</p>
            <h2 id="routes-title">Your enquiry, in the right hands.</h2>
          </div>
          <p>
            Choose a starting point and our team will route the conversation. Not sure where you fit?{" "}
            <button type="button" className={styles.routeLink} onClick={() => choose("general")}>
              Use the general enquiry form <Arrow />
            </button>
          </p>
        </div>
        <div className={styles.routeGrid}>
          {routes.map((route) => (
            <article key={route.topic}>
              <button type="button" onClick={() => choose(route.topic)}>
                <span className={styles.routeTop}>
                  <span className={styles.routeIcon} aria-hidden="true">
                    {route.topic === "schools" ? "⌂" : route.topic === "speaking" ? "♪" : route.topic === "media" ? "▤" : "♡"}
                  </span>
                  <Arrow />
                </span>
                <small>{route.kicker}</small>
                <strong>{route.title}</strong>
                <span>{route.text}</span>
                <em>{route.meta}</em>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
