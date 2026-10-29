export const registrationSteps = [
  { id: "who", label: "Registration type", href: "/register", title: "Who are you registering?" },
  { id: "program", label: "Select program", href: "/register/program", title: "Select a program" },
  { id: "participant", label: "Participant details", href: "/register/participant", title: "Participant details" },
  { id: "guardian", label: "Guardian", href: "/register/guardian", title: "Parent or guardian" },
  { id: "schedule", label: "Date & location", href: "/register/schedule", title: "Preferred date & location" },
  { id: "review", label: "Review & submit", href: "/register/review", title: "Review & submit" },
] as const;

export type StepId = (typeof registrationSteps)[number]["id"];

export const programs = [
  {
    id: "adventure",
    title: "School adventure programs",
    meta: "1–5 days · campus or trail",
    detail:
      "A flexible 1–5 day experience focused on confidence, teamwork and outdoor awareness. Delivery can be on campus, on nearby trails or residential.",
  },
  {
    id: "motivation",
    title: "Student motivation sessions",
    meta: "45–90 min · assembly or class",
    detail: "45–90 min · assembly or class",
  },
  {
    id: "awareness",
    title: "Mountaineering awareness",
    meta: "45–90 min · classroom",
    detail: "45–90 min · classroom",
  },
  {
    id: "leadership",
    title: "Leadership workshops",
    meta: "1–3 days · campus or trail",
    detail: "1–3 days · campus or trail",
  },
  {
    id: "fitness",
    title: "Physical fitness programs",
    meta: "1–3 days · campus or trail",
    detail: "1–3 days · campus or trail",
  },
  {
    id: "camps",
    title: "Outdoor camps",
    meta: "2–5 days · day or residential",
    detail: "2–5 days · day or residential",
  },
  {
    id: "custom",
    title: "Custom school program",
    meta: "Built around your school goals",
    detail: "Built around your school goals",
  },
] as const;

export type ProgramId = (typeof programs)[number]["id"];

export const ageRanges = ["8–12 years", "13–16 years", "18+"] as const;

export const locations = [
  { id: "academy", title: "Academy base", meta: "Travel to our training site" },
  { id: "campus", title: "Our school campus", meta: "On-site delivery selected" },
  { id: "trail", title: "Nearby trail", meta: "Academy-approved location" },
] as const;

export type LocationId = (typeof locations)[number]["id"];

export type RegistrationDraft = {
  who: "" | "individual" | "school";
  groupSize: string;
  program: "" | ProgramId;
  schoolName: string;
  schoolEmail: string;
  coordinatorName: string;
  participantName: string;
  participantEmail: string;
  mobile: string;
  ageRange: string;
  students: string;
  staff: string;
  experience: string;
  medical: string;
  guardianMode: "" | "contact" | "school" | "none";
  guardianName: string;
  relationship: string;
  guardianEmail: string;
  guardianMobile: string;
  consentRequest: boolean;
  startDate: string;
  alternateDate: string;
  flexible: boolean;
  location: "" | LocationId;
  city: string;
  meeting: string;
  notes: string;
  payment: "" | "quote" | "deposit";
  confirmAccurate: boolean;
  agreeTerms: boolean;
  understandSafety: boolean;
};

export const emptyDraft: RegistrationDraft = {
  who: "",
  groupSize: "",
  program: "",
  schoolName: "",
  schoolEmail: "",
  coordinatorName: "",
  participantName: "",
  participantEmail: "",
  mobile: "",
  ageRange: "",
  students: "",
  staff: "",
  experience: "",
  medical: "",
  guardianMode: "",
  guardianName: "",
  relationship: "",
  guardianEmail: "",
  guardianMobile: "",
  consentRequest: false,
  startDate: "",
  alternateDate: "",
  flexible: false,
  location: "",
  city: "",
  meeting: "",
  notes: "",
  payment: "",
  confirmAccurate: false,
  agreeTerms: false,
  understandSafety: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function digits(value: string) {
  return value.replace(/\D/g, "");
}

export function programById(id: string) {
  return programs.find((item) => item.id === id);
}

export function locationById(id: string) {
  return locations.find((item) => item.id === id);
}

export function formatDate(iso: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${day} ${months[month - 1]} ${year}`;
}

function phoneError(value: string, label: string) {
  if (!value.trim()) return `Enter a ${label}.`;
  if (digits(value).length < 8) return `Enter a ${label} with at least 8 digits.`;
  return "";
}

export function whoErrors(draft: RegistrationDraft): Record<string, string> {
  return draft.who ? {} : { who: "Choose who you are registering." };
}

export function programErrors(draft: RegistrationDraft): Record<string, string> {
  return draft.program ? {} : { program: "Choose a program." };
}

export function participantErrors(draft: RegistrationDraft) {
  const errors: Record<string, string> = {};
  if (draft.who === "school") {
    if (!draft.schoolName.trim()) errors.schoolName = "Enter the school name.";
    if (!emailPattern.test(draft.schoolEmail.trim())) errors.schoolEmail = "Enter a valid school email address.";
    if (!draft.coordinatorName.trim()) errors.coordinatorName = "Enter the coordinator name.";
    const mobile = phoneError(draft.mobile, "mobile number");
    if (mobile) errors.mobile = mobile;
    if (!draft.ageRange) errors.ageRange = "Choose a student age range.";
    const students = Number(draft.students);
    if (!draft.students.trim() || Number.isNaN(students) || students < 8 || students > 60) {
      errors.students = "Enter an estimated group size from 8 to 60.";
    }
    const staff = Number(draft.staff);
    if (!draft.staff.trim() || Number.isNaN(staff) || staff < 1) {
      errors.staff = "Enter the number of accompanying staff.";
    }
  } else if (draft.who === "individual") {
    if (!draft.participantName.trim()) errors.participantName = "Enter the participant name.";
    if (!emailPattern.test(draft.participantEmail.trim())) errors.participantEmail = "Enter a valid email address.";
    const mobile = phoneError(draft.mobile, "mobile number");
    if (mobile) errors.mobile = mobile;
    if (!draft.ageRange) errors.ageRange = "Choose an age range.";
  }
  return errors;
}

export function guardianErrors(draft: RegistrationDraft) {
  const errors: Record<string, string> = {};
  if (!draft.guardianMode) {
    errors.guardianMode = "Choose how guardian contact should be handled.";
    return errors;
  }
  if (draft.guardianMode !== "contact") return errors;
  if (!draft.guardianName.trim()) errors.guardianName = "Enter the guardian’s full name.";
  if (!draft.relationship) errors.relationship = "Choose a relationship.";
  if (!emailPattern.test(draft.guardianEmail.trim())) errors.guardianEmail = "Enter a valid guardian email address.";
  const mobile = phoneError(draft.guardianMobile, "guardian mobile number");
  if (mobile) errors.guardianMobile = mobile;
  if (!draft.consentRequest) errors.consentRequest = "Confirm the guardian consent request, or choose another option.";
  return errors;
}

export function scheduleErrors(draft: RegistrationDraft) {
  const errors: Record<string, string> = {};
  if (!draft.startDate) errors.startDate = "Choose a preferred start date.";
  if (!draft.location) errors.location = "Choose a preferred location.";
  if (!draft.city.trim()) errors.city = "Enter a city and state.";
  return errors;
}

export function reviewErrors(draft: RegistrationDraft) {
  const errors: Record<string, string> = {};
  if (!draft.payment) errors.payment = "Choose how you would like payment to be handled.";
  if (!draft.confirmAccurate) errors.confirmAccurate = "Confirm the information is accurate.";
  if (!draft.agreeTerms) errors.agreeTerms = "Agree to the training terms before continuing.";
  if (!draft.understandSafety) errors.understandSafety = "Confirm that dates are set only after a safety review.";
  return errors;
}

export function stepErrors(step: StepId, draft: RegistrationDraft) {
  if (step === "who") return whoErrors(draft);
  if (step === "program") return programErrors(draft);
  if (step === "participant") return participantErrors(draft);
  if (step === "guardian") return guardianErrors(draft);
  if (step === "schedule") return scheduleErrors(draft);
  return reviewErrors(draft);
}

export function earliestIncomplete(draft: RegistrationDraft): StepId | null {
  for (const step of registrationSteps) {
    if (Object.keys(stepErrors(step.id, draft)).length > 0) return step.id;
  }
  return null;
}

export function stepIndex(step: StepId) {
  return registrationSteps.findIndex((item) => item.id === step);
}

export function contactName(draft: RegistrationDraft) {
  if (draft.who === "school") return draft.coordinatorName.trim();
  return draft.participantName.trim();
}
