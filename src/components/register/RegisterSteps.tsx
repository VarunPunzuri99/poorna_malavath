"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { cloneElement, isValidElement, useState, type FormEvent, type ReactElement, type ReactNode } from "react";
import { RegisterFrame, focusFirst } from "./RegisterFrame";
import {
  ageRanges,
  contactName,
  formatDate,
  guardianErrors,
  locationById,
  locations,
  participantErrors,
  programById,
  programErrors,
  programs,
  reviewErrors,
  scheduleErrors,
  whoErrors,
  type ProgramId,
  type RegistrationDraft,
} from "./model";
import { useRegistration } from "./RegistrationProvider";
import styles from "./RegisterFlow.module.css";

function Errors({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={`${id}-error`} className={styles.error}>
      {message}
    </span>
  );
}

function Actions({ back, backLabel, next }: { back: string; backLabel: string; next: string }) {
  return (
    <div className={styles.actions}>
      <Link href={back}>{backLabel}</Link>
      <button type="submit">
        {next}
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

export function WhoStep() {
  const router = useRouter();
  const { draft, update } = useRegistration();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = whoErrors(draft);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById("who-individual")?.focus();
      return;
    }
    router.push("/register/program");
  }

  return (
    <RegisterFrame
      step="who"
      kicker="Step 1"
      title="Who are you registering?"
      lede="Choose the path that best describes this registration. We will tailor the next steps, permissions and pricing to match."
      quote="Challenge is planned. Care is constant."
      safety="Program difficulty, instructor ratios and equipment plans are matched to the participant or group you register."
    >
      <form onSubmit={onSubmit} noValidate>
        <fieldset className={styles.choiceGrid} id="who" tabIndex={-1}>
          <legend className={styles.sr}>Registration type</legend>
          <Choice
            id="who-individual"
            name="who"
            checked={draft.who === "individual"}
            onChange={() => {
              update({ who: "individual" });
              setErrors({});
            }}
            title="Individual"
            text="For yourself or one participant. Best for open training dates, personal goals and direct payment."
            meta="One participant · personal contact"
          />
          <Choice
            id="who-school"
            name="who"
            checked={draft.who === "school"}
            onChange={() => {
              update({ who: "school" });
              setErrors({});
            }}
            title="School or group"
            text="For students, staff or a cohort. We will collect group needs, school permissions and a planning contact."
            meta="8–60 participants · school coordinator"
          />
        </fieldset>
        <Errors id="who" message={errors.who} />
        {draft.who === "school" ? (
          <div className={styles.note}>
            <label htmlFor="groupSize">
              <span>Planning for a school group</span>
              <input
                id="groupSize"
                inputMode="numeric"
                value={draft.groupSize}
                placeholder="36"
                onChange={(event) => update({ groupSize: event.target.value })}
              />
            </label>
            <p>You can update the estimated group size later. No payment is taken until dates, staffing and the final quote are confirmed.</p>
          </div>
        ) : null}
        <p className={styles.pause}>
          <strong>Safe to pause and return</strong>
          Your answers are saved securely for this browser session. Required fields are marked with an asterisk, and nothing is submitted until the final step.
        </p>
        <Actions back="/training" backLabel="← Back to programs" next="Continue to programs" />
      </form>
    </RegisterFrame>
  );
}

function Choice({
  id,
  name,
  checked,
  onChange,
  title,
  text,
  meta,
}: {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  text: string;
  meta: string;
}) {
  return (
    <label className={checked ? styles.choiceOn : styles.choice} htmlFor={id}>
      <input id={id} type="radio" name={name} checked={checked} onChange={onChange} />
      <span>
        <strong>{title}</strong>
        {text}
        <small>{meta}</small>
      </span>
    </label>
  );
}

export function ProgramStep() {
  const router = useRouter();
  const { draft, update } = useRegistration();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const selected = programById(draft.program);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = programErrors(draft);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById("program-adventure")?.focus();
      return;
    }
    router.push("/register/participant");
  }

  return (
    <RegisterFrame
      step="program"
      kicker="Step 2"
      title="Select a program"
      lede="Start with the closest fit. Our training team can refine activities, duration and group outcomes with your school."
      quote="The right challenge begins with the right format."
      safety="We review ability, access needs and medical information before confirming a program."
    >
      <form onSubmit={onSubmit} noValidate>
        <fieldset className={styles.programGrid} id="program" tabIndex={-1}>
          <legend className={styles.sr}>Program</legend>
          {programs.map((program) => (
            <label
              key={program.id}
              className={draft.program === program.id ? styles.programOn : styles.program}
              htmlFor={`program-${program.id}`}
            >
              <input
                id={`program-${program.id}`}
                type="radio"
                name="program"
                checked={draft.program === program.id}
                onChange={() => {
                  update({ program: program.id as ProgramId });
                  setErrors({});
                }}
              />
              <span>
                <strong>{program.title}</strong>
                <small>{program.meta}</small>
              </span>
            </label>
          ))}
        </fieldset>
        <Errors id="program" message={errors.program} />
        {selected ? (
          <p className={styles.selectedNote}>
            <strong>{selected.title} selected</strong>
            {selected.detail}
          </p>
        ) : null}
        <Actions back="/register" backLabel="← Back" next="Continue to participants" />
      </form>
    </RegisterFrame>
  );
}

export function ParticipantStep() {
  const router = useRouter();
  const { draft, update } = useRegistration();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const school = draft.who === "school";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = participantErrors(draft);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirst(found);
      return;
    }
    router.push("/register/guardian");
  }

  function field<K extends keyof RegistrationDraft>(key: K, value: RegistrationDraft[K]) {
    update({ [key]: value });
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  return (
    <RegisterFrame
      step="participant"
      kicker="Step 3"
      title="Participant details"
      lede={
        school
          ? "Tell us who is joining and who will coordinate. Accurate age, experience and health information helps us plan responsibly."
          : "Tell us who is joining. Accurate age, experience and health information helps us plan responsibly."
      }
      quote="Good preparation makes room for confident action."
      safety="We use age, group size, experience and access needs to set instructor ratios and choose suitable activities."
    >
      <form onSubmit={onSubmit} noValidate>
        {school ? (
          <div className={styles.fields}>
            <Field id="schoolName" label="School name" required error={errors.schoolName}>
              <input id="schoolName" value={draft.schoolName} autoComplete="organization" onChange={(event) => field("schoolName", event.target.value)} />
            </Field>
            <Field id="coordinatorName" label="Coordinator name" required error={errors.coordinatorName}>
              <input id="coordinatorName" value={draft.coordinatorName} autoComplete="name" onChange={(event) => field("coordinatorName", event.target.value)} />
            </Field>
            <Field id="schoolEmail" label="School email" required error={errors.schoolEmail} hint="We will send confirmations and planning notes here.">
              <input id="schoolEmail" type="email" value={draft.schoolEmail} autoComplete="email" onChange={(event) => field("schoolEmail", event.target.value)} />
            </Field>
            <Field id="mobile" label="Mobile number" required error={errors.mobile} hint="Used only for time-sensitive program updates.">
              <input id="mobile" type="tel" value={draft.mobile} autoComplete="tel" onChange={(event) => field("mobile", event.target.value)} />
            </Field>
            <Field id="ageRange" label="Student age range" required error={errors.ageRange}>
              <select id="ageRange" value={draft.ageRange} onChange={(event) => field("ageRange", event.target.value)}>
                <option value="">Choose an age range</option>
                {ageRanges.map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
            </Field>
            <Field id="students" label="Estimated students" required error={errors.students} hint="8–60 per group">
              <input id="students" inputMode="numeric" value={draft.students} onChange={(event) => field("students", event.target.value)} />
            </Field>
            <Field id="staff" label="Accompanying staff" required error={errors.staff}>
              <input id="staff" inputMode="numeric" value={draft.staff} onChange={(event) => field("staff", event.target.value)} />
            </Field>
          </div>
        ) : (
          <div className={styles.fields}>
            <Field id="participantName" label="Full name" required error={errors.participantName}>
              <input id="participantName" value={draft.participantName} autoComplete="name" onChange={(event) => field("participantName", event.target.value)} />
            </Field>
            <Field id="participantEmail" label="Email" required error={errors.participantEmail}>
              <input id="participantEmail" type="email" value={draft.participantEmail} autoComplete="email" onChange={(event) => field("participantEmail", event.target.value)} />
            </Field>
            <Field id="mobile" label="Mobile number" required error={errors.mobile}>
              <input id="mobile" type="tel" value={draft.mobile} autoComplete="tel" onChange={(event) => field("mobile", event.target.value)} />
            </Field>
            <Field id="ageRange" label="Age range" required error={errors.ageRange}>
              <select id="ageRange" value={draft.ageRange} onChange={(event) => field("ageRange", event.target.value)}>
                <option value="">Choose an age range</option>
                {ageRanges.map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
            </Field>
          </div>
        )}
        <div className={styles.fields}>
          <Field id="experience" label="Current outdoor experience" error={errors.experience}>
            <select id="experience" value={draft.experience} onChange={(event) => field("experience", event.target.value)}>
              <option value="">Choose experience</option>
              <option>Some outdoor activity</option>
            </select>
          </Field>
          <Field id="medical" label="Medical, dietary or accessibility needs" error={errors.medical} hint="Share only what instructors need to plan safe participation.">
            <textarea id="medical" rows={3} value={draft.medical} onChange={(event) => field("medical", event.target.value)} />
          </Field>
        </div>
        <p className={styles.selectedNote}>
          <strong>Information checked before training</strong>
          Our program lead will confirm medication protocols, access arrangements and emergency contacts privately before finalising activities.
        </p>
        <Actions back="/register/program" backLabel="← Back" next="Continue to guardian" />
      </form>
    </RegisterFrame>
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      {isValidElement(children)
        ? cloneElement(children as ReactElement<{ "aria-invalid"?: boolean; "aria-describedby"?: string }>, {
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? `${id}-error` : undefined,
          })
        : children}
      {hint ? <small>{hint}</small> : null}
      <Errors id={id} message={error} />
    </label>
  );
}

export function GuardianStep() {
  const router = useRouter();
  const { draft, update } = useRegistration();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = guardianErrors(draft);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirst(found.guardianMode ? { guardianMode: found.guardianMode } : found);
      if (found.guardianMode) document.getElementById("guardian-contact")?.focus();
      return;
    }
    router.push("/register/schedule");
  }

  return (
    <RegisterFrame
      step="guardian"
      kicker="Step 4"
      title="Parent or guardian"
      lede="Because this group includes participants under 18, tell us how guardian communication and consent will be managed."
      quote="Consent is clear before every student steps forward."
      safety="Minor participants must have documented consent. Schools may collect it centrally or nominate a guardian contact."
    >
      <form onSubmit={onSubmit} noValidate>
        <fieldset className={styles.modeGrid} id="guardianMode" tabIndex={-1}>
          <legend className={styles.sr}>Guardian contact</legend>
          <Mode
            id="guardian-contact"
            checked={draft.guardianMode === "contact"}
            title="Add guardian contact"
            meta="Primary contact for this group"
            onChange={() => {
              update({ guardianMode: "contact" });
              setErrors({});
            }}
          />
          <Mode
            id="guardian-school"
            checked={draft.guardianMode === "school"}
            title="School manages consent"
            meta="Upload consent roster later"
            onChange={() => {
              update({ guardianMode: "school" });
              setErrors({});
            }}
          />
          <Mode
            id="guardian-none"
            checked={draft.guardianMode === "none"}
            title="Not required"
            meta="All participants are 18+"
            onChange={() => {
              update({ guardianMode: "none" });
              setErrors({});
            }}
          />
        </fieldset>
        <Errors id="guardianMode" message={errors.guardianMode} />
        {draft.guardianMode === "contact" ? (
          <div className={styles.fields}>
            <Field id="guardianName" label="Guardian full name" required error={errors.guardianName}>
              <input id="guardianName" value={draft.guardianName} autoComplete="name" onChange={(event) => update({ guardianName: event.target.value })} />
            </Field>
            <Field id="relationship" label="Relationship" required error={errors.relationship}>
              <select id="relationship" value={draft.relationship} onChange={(event) => update({ relationship: event.target.value })}>
                <option value="">Choose a relationship</option>
                <option>Parent</option>
                <option>Guardian</option>
              </select>
            </Field>
            <Field id="guardianEmail" label="Guardian email" required error={errors.guardianEmail} hint="Consent request and program information will be sent here.">
              <input id="guardianEmail" type="email" value={draft.guardianEmail} autoComplete="email" onChange={(event) => update({ guardianEmail: event.target.value })} />
            </Field>
            <Field id="guardianMobile" label="Guardian mobile" required error={errors.guardianMobile} hint="Used for urgent consent or safety questions only.">
              <input id="guardianMobile" type="tel" value={draft.guardianMobile} autoComplete="tel" onChange={(event) => update({ guardianMobile: event.target.value })} />
            </Field>
            <label className={styles.check} htmlFor="consentRequest">
              <input
                id="consentRequest"
                type="checkbox"
                checked={draft.consentRequest}
                onChange={(event) => update({ consentRequest: event.target.checked })}
              />
              <span>
                <strong>Send the guardian consent request after I submit</strong>
                The guardian can review health, photo and emergency-contact permissions securely.
              </span>
            </label>
            <Errors id="consentRequest" message={errors.consentRequest} />
          </div>
        ) : null}
        <p className={styles.pause}>
          <strong>School-managed consent is also supported</strong>
          Choose “School manages consent” if your school will collect individual forms. We will provide a secure roster template before confirmation.
        </p>
        <Actions back="/register/participant" backLabel="← Back" next="Continue to date & location" />
      </form>
    </RegisterFrame>
  );
}

function Mode({
  id,
  checked,
  title,
  meta,
  onChange,
}: {
  id: string;
  checked: boolean;
  title: string;
  meta: string;
  onChange: () => void;
}) {
  return (
    <label className={checked ? styles.choiceOn : styles.choice} htmlFor={id}>
      <input id={id} type="radio" name="guardianMode" checked={checked} onChange={onChange} />
      <span>
        <strong>{title}</strong>
        <small>{meta}</small>
      </span>
    </label>
  );
}

export function ScheduleStep() {
  const router = useRouter();
  const { draft, update } = useRegistration();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = scheduleErrors(draft);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirst(found);
      return;
    }
    router.push("/register/review");
  }

  return (
    <RegisterFrame
      step="schedule"
      kicker="Step 5"
      title="Preferred date & location"
      lede="Share your ideal window and setting. We will check instructor availability, weather suitability and travel requirements before confirming."
      quote="Weather is respected. Plans stay flexible."
      safety="Dates are confirmed only after route, weather, travel and site checks. We will always discuss a safe alternative."
    >
      <form onSubmit={onSubmit} noValidate>
        <div className={styles.fields}>
          <Field id="startDate" label="Preferred start date" required error={errors.startDate} hint="Subject to safety and availability checks.">
            <input id="startDate" type="date" value={draft.startDate} onChange={(event) => update({ startDate: event.target.value })} />
          </Field>
          <Field id="alternateDate" label="Alternative date" hint="Optional, but helps us confirm sooner.">
            <input id="alternateDate" type="date" value={draft.alternateDate} onChange={(event) => update({ alternateDate: event.target.value })} />
          </Field>
        </div>
        <label className={styles.check} htmlFor="flexible">
          <input id="flexible" type="checkbox" checked={draft.flexible} onChange={(event) => update({ flexible: event.target.checked })} />
          <span>
            <strong>Our dates are flexible by ±1 week</strong>
            The academy may suggest the safest available day within this window.
          </span>
        </label>
        <fieldset className={styles.modeGrid} id="location" tabIndex={-1}>
          <legend>Preferred location</legend>
          {locations.map((place) => (
            <label key={place.id} className={draft.location === place.id ? styles.choiceOn : styles.choice}>
              <input
                id={`location-${place.id}`}
                type="radio"
                name="location"
                checked={draft.location === place.id}
                onChange={() => update({ location: place.id })}
              />
              <span>
                <strong>{place.title}</strong>
                <small>{place.meta}</small>
              </span>
            </label>
          ))}
        </fieldset>
        <Errors id="location" message={errors.location} />
        <div className={styles.fields}>
          <Field id="city" label="City and state" required error={errors.city}>
            <input id="city" value={draft.city} onChange={(event) => update({ city: event.target.value })} />
          </Field>
          <Field id="meeting" label="Campus meeting point" hint="Our team will complete a site check.">
            <input id="meeting" value={draft.meeting} onChange={(event) => update({ meeting: event.target.value })} />
          </Field>
          <Field id="notes" label="Schedule or location notes" hint="Include exam periods, travel limits or campus restrictions.">
            <textarea id="notes" rows={3} value={draft.notes} onChange={(event) => update({ notes: event.target.value })} />
          </Field>
        </div>
        <p className={styles.pause}>
          <strong>Final dates follow a safety check</strong>
          This is a preference, not a booking. We will respond within two working days with availability and any weather-safe alternatives.
        </p>
        <Actions back="/register/guardian" backLabel="← Back" next="Review registration" />
      </form>
    </RegisterFrame>
  );
}

export function ReviewStep() {
  const { draft, update } = useRegistration();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [limited, setLimited] = useState(false);
  const program = programById(draft.program);
  const place = locationById(draft.location);
  const name = contactName(draft) || "the planning contact";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = reviewErrors(draft);
    setErrors(found);
    setLimited(false);
    if (Object.keys(found).length > 0) {
      focusFirst(found.payment ? { payment: found.payment } : found);
      if (found.payment) document.getElementById("payment-quote")?.focus();
      return;
    }
    setLimited(true);
  }

  const registration =
    draft.who === "school"
      ? `School or group · ${draft.schoolName}`
      : `Individual · ${draft.participantName}`;
  const participants =
    draft.who === "school"
      ? `${draft.students} students · ages ${draft.ageRange} · ${draft.staff} staff`
      : `${draft.participantName} · ${draft.ageRange}`;
  const plan = [formatDate(draft.startDate), place?.title, draft.city].filter(Boolean).join(" · ");

  return (
    <RegisterFrame
      step="review"
      kicker="Step 6"
      title="Review & submit"
      lede="Check the plan, acknowledge the policies and choose how to handle payment. You can still edit any section before submitting."
      quote="One careful review. Then we plan together."
      safety="Submission starts a planning review—it does not confirm dates. Our team checks safety, staffing and site suitability first."
    >
      <form onSubmit={onSubmit} noValidate>
        <div className={styles.summary}>
          <h2>Registration summary</h2>
          <SummaryRow label="Registration" value={registration} href="/register" />
          <SummaryRow label="Program" value={program ? `${program.title} · ${program.meta}` : ""} href="/register/program" />
          <SummaryRow label="Participants" value={participants} href="/register/participant" />
          <SummaryRow label="Preferred plan" value={plan} href="/register/schedule" />
        </div>
        <fieldset className={styles.payGrid} id="payment" tabIndex={-1}>
          <legend>Payment status</legend>
          <label className={draft.payment === "quote" ? styles.choiceOn : styles.choice} htmlFor="payment-quote">
            <input id="payment-quote" type="radio" name="payment" checked={draft.payment === "quote"} onChange={() => update({ payment: "quote" })} />
            <span>
              <strong>Request a final quote</strong>
              <small>No payment now · recommended for schools</small>
            </span>
          </label>
          <label className={draft.payment === "deposit" ? styles.choiceOn : styles.choice} htmlFor="payment-deposit">
            <input id="payment-deposit" type="radio" name="payment" checked={draft.payment === "deposit"} onChange={() => update({ payment: "deposit" })} />
            <span>
              <strong>Pay ₹5,000 deposit</strong>
              <small>Applied after dates are confirmed</small>
            </span>
          </label>
        </fieldset>
        <Errors id="payment" message={errors.payment} />
        <fieldset className={styles.acks}>
          <legend>Consent & acknowledgements</legend>
          <Ack id="confirmAccurate" checked={draft.confirmAccurate} error={errors.confirmAccurate} onChange={(checked) => update({ confirmAccurate: checked })}>
            I confirm the information provided is accurate.
          </Ack>
          <Ack id="agreeTerms" checked={draft.agreeTerms} error={errors.agreeTerms} onChange={(checked) => update({ agreeTerms: checked })}>
            I agree to the Training Terms, Privacy Policy and cancellation policy.
          </Ack>
          <Ack id="understandSafety" checked={draft.understandSafety} error={errors.understandSafety} onChange={(checked) => update({ understandSafety: checked })}>
            I understand dates and activities are confirmed only after safety review.
          </Ack>
        </fieldset>
        <p className={styles.selectedNote}>
          <strong>Ready to submit</strong>
          No payment will be taken today. A prepared registration would email {name} within two working days with availability, a final quote and the next safety-planning steps.
        </p>
        {limited ? (
          <p className={styles.limit} role="status">
            This registration is saved in this browser session only. It cannot be submitted yet because the project has no registration endpoint, and no email or payment has been sent.
          </p>
        ) : null}
        <Actions back="/register/schedule" backLabel="← Back" next="Submit registration" />
      </form>
    </RegisterFrame>
  );
}

function SummaryRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <p>
      <span>{label}</span>
      <strong>{value}</strong>
      <Link href={href}>Edit</Link>
    </p>
  );
}

function Ack({
  id,
  checked,
  error,
  onChange,
  children,
}: {
  id: string;
  checked: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
  children: string;
}) {
  return (
    <label className={styles.check} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{children}</span>
      <Errors id={id} message={error} />
    </label>
  );
}
