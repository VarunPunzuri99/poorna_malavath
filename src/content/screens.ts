export type ScreenSection = {
  name: string;
  children: readonly string[];
};

export type ScreenDefinition = {
  id: string;
  figmaName: string;
  figmaNodeId: string;
  route: string;
  routeStatus: "provisional";
  sections: readonly ScreenSection[];
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Training", href: "/training" },
  { label: "For Schools", href: "/schools" },
  { label: "Stories", href: "/stories" },
  { label: "Media", href: "/media" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const joinTrainingLink = {
  label: "Join a Training",
  href: "/register",
} as const;

export const registrationRoutes = [
  "/register",
  "/register/program",
  "/register/participant",
  "/register/guardian",
  "/register/schedule",
  "/register/review",
] as const;

export const screens = [
  {
    id: "home",
    figmaName: "Poorna Malavath landing page",
    figmaNodeId: "1:1517",
    route: "/",
    routeStatus: "provisional",
    sections: [
      {
        name: "Header and hero",
        children: ["Header", "Hero"],
      },
      {
        name: "Purpose",
        children: ["Story image composition", "Purpose copy"],
      },
      {
        name: "Programs",
        children: ["Programs heading", "Program cards"],
      },
      {
        name: "School program banner",
        children: ["School program image", "Image overlay", "School banner content"],
      },
      {
        name: "Achievements",
        children: ["Achievements heading", "Achievement cards"],
      },
      {
        name: "Leadership story",
        children: ["Story copy", "Speaker portrait"],
      },
      {
        name: "Next Expedition",
        children: ["Expedition copy", "Expedition image"],
      },
      {
        name: "Training Stories",
        children: ["Stories heading", "Story cards"],
      },
      {
        name: "Voices",
        children: ["Voices heading", "Testimonial cards"],
      },
      {
        name: "Footer",
        children: ["Closing callout", "Footer content"],
      },
    ],
  },
  {
    id: "about",
    figmaName: "About Poorna Malavath",
    figmaNodeId: "1:1187",
    route: "/about",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: ["Brand", "Navigation"] },
      { name: "Header and about hero", children: ["About hero"] },
      { name: "Her story and early life", children: ["Her story", "Early life"] },
      {
        name: "Mountaineering journey and challenges",
        children: ["Mountaineering journey", "Challenges overcome"],
      },
      {
        name: "Philosophy mission and vision",
        children: ["Philosophy", "Mission and vision"],
      },
      { name: "Major milestones", children: ["Timeline banner", "Timeline"] },
      {
        name: "Closing call to action and footer",
        children: ["Closing callout", "Footer"],
      },
    ],
  },
  {
    id: "achievements",
    figmaName: "Poorna Malavath achievements",
    figmaNodeId: "1:1918",
    route: "/achievements",
    routeStatus: "provisional",
    sections: [
      {
        name: "Header and achievement hero",
        children: ["Header", "Achievement hero", "Achievement summary"],
      },
      {
        name: "Major summits and expeditions",
        children: ["Major summits", "Expeditions"],
      },
      {
        name: "Awards recognition and records",
        children: ["Awards and recognition", "Records"],
      },
      {
        name: "Media appearances and closing",
        children: ["Media appearances", "Closing callout", "Footer"],
      },
    ],
  },
  {
    id: "training",
    figmaName: "Poorna Mountaineering Academy",
    figmaNodeId: "1:2322",
    route: "/training",
    routeStatus: "provisional",
    sections: [
      {
        name: "Header and academy hero",
        children: ["Header", "Academy hero"],
      },
      {
        name: "Academy introduction",
        children: ["Section heading", "Why mountaineering and philosophy"],
      },
      {
        name: "Academy programs",
        children: ["Section heading", "Program grid", "Program note"],
      },
      {
        name: "Training focus area",
        children: ["Focus introduction", "Focus feature"],
      },
      {
        name: "Enrollment and footer",
        children: ["Enrollment callout", "Footer"],
      },
    ],
  },
  {
    id: "schools",
    figmaName: "Schools | Poorna Mountaineering Academy",
    figmaNodeId: "1:2603",
    route: "/schools",
    routeStatus: "provisional",
    sections: [
      {
        name: "Header and schools hero",
        children: ["Header", "Schools hero"],
      },
      {
        name: "School Programs",
        children: ["School Programs intro", "School Programs extended"],
      },
      {
        name: "Student outcomes and program inclusions",
        children: ["Student outcomes", "Program includes"],
      },
      {
        name: "Safety and guidance",
        children: ["Safety copy", "Instructor image"],
      },
      {
        name: "Schools call to action and footer",
        children: ["Schools call to action", "Footer"],
      },
    ],
  },
  {
    id: "stories",
    figmaName: "Stories and Inspiration",
    figmaNodeId: "1:3147",
    route: "/stories",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: ["Brand", "Navigation and action"] },
      { name: "Stories hero", children: ["Hero copy", "Hero image"] },
      {
        name: "Poorna journey feature",
        children: ["Journey media", "Journey copy"],
      },
      {
        name: "Story categories",
        children: ["Prompt", "Category tab", "Category tab", "Category tab", "Category tab", "Category tab"],
      },
      { name: "Featured story", children: ["Featured image", "Featured copy"] },
      {
        name: "Editorial collection",
        children: ["Section heading", "Editorial row", "Editorial row"],
      },
      {
        name: "Student transformation",
        children: ["Transformation copy", "Transformation portrait"],
      },
      { name: "Mountain lessons", children: ["Lessons heading row", "Lesson list"] },
      { name: "Motivation article", children: ["Article copy", "Article image"] },
      { name: "Interview spotlight", children: ["Interview portrait", "Interview copy"] },
      { name: "Follow the stories", children: ["Newsletter panel"] },
      { name: "Academy footer", children: ["Footer content", "Footer base"] },
    ],
  },
  {
    id: "media",
    figmaName: "Media and press",
    figmaNodeId: "1:3507",
    route: "/media",
    routeStatus: "provisional",
    sections: [
      { name: "Media hero", children: ["Header", "Hero body"] },
      {
        name: "News coverage",
        children: ["News introduction", "Featured coverage", "Recent coverage"],
      },
      {
        name: "Editorial library",
        children: ["Library introduction", "Interviews", "Videos", "Articles"],
      },
      { name: "Press resources", children: ["Resource introduction", "Resource content"] },
      { name: "Media callout", children: ["Enquiry panel"] },
      { name: "Academy footer", children: ["Footer content", "Footer base"] },
    ],
  },
  {
    id: "gallery",
    figmaName: "gallery",
    figmaNodeId: "1:2",
    route: "/gallery",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: ["Brand", "Navigation and action"] },
      { name: "Gallery hero", children: ["Hero copy", "Hero image"] },
      {
        name: "Gallery collection",
        children: ["Gallery introduction", "Gallery filters", "Gallery grid"],
      },
      { name: "Gallery callout", children: ["Program panel"] },
      { name: "Academy footer", children: ["Footer content", "Footer base"] },
    ],
  },
  {
    id: "contact",
    figmaName: "Contact",
    figmaNodeId: "1:3940",
    route: "/contact",
    routeStatus: "provisional",
    sections: [
      { name: "Contact hero", children: ["Header", "Hero body"] },
      { name: "Contact workspace", children: ["Contact introduction", "Contact content"] },
      { name: "Inquiry routing", children: ["Routing introduction", "Route cards"] },
      { name: "Visit and connect", children: ["Visit introduction", "Location content"] },
      { name: "Contact FAQ", children: ["FAQ introduction", "FAQ list"] },
      { name: "Contact callout", children: ["Conversation panel"] },
      { name: "Academy footer", children: ["Footer content", "Footer base"] },
    ],
  },
  {
    id: "register-who",
    figmaName: "Register for Training — WHO ARE YOU REGISTERING?",
    figmaNodeId: "1:3001",
    route: "/register",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: [] },
      { name: "Registration progress", children: ["Progress heading", "Steps"] },
      { name: "Workspace", children: ["Form card", "Guidance sidebar"] },
      { name: "Footer", children: [] },
    ],
  },
  {
    id: "register-program",
    figmaName: "Register for Training — SELECT A PROGRAM",
    figmaNodeId: "1:1003",
    route: "/register/program",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: [] },
      { name: "Registration progress", children: ["Progress heading", "Steps"] },
      { name: "Workspace", children: ["Form card", "Guidance sidebar"] },
      { name: "Footer", children: [] },
    ],
  },
  {
    id: "register-participant",
    figmaName: "Register for Training — PARTICIPANT DETAILS",
    figmaNodeId: "1:836",
    route: "/register/participant",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: [] },
      { name: "Registration progress", children: ["Progress heading", "Steps"] },
      { name: "Workspace", children: ["Form card", "Guidance sidebar"] },
      { name: "Footer", children: [] },
    ],
  },
  {
    id: "register-guardian",
    figmaName: "Register for Training — PARENT OR GUARDIAN",
    figmaNodeId: "1:659",
    route: "/register/guardian",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: [] },
      { name: "Registration progress", children: ["Progress heading", "Steps"] },
      { name: "Workspace", children: ["Form card", "Guidance sidebar"] },
      { name: "Footer", children: [] },
    ],
  },
  {
    id: "register-schedule",
    figmaName: "Register for Training — PREFERRED DATE & LOCATION",
    figmaNodeId: "1:473",
    route: "/register/schedule",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: [] },
      { name: "Registration progress", children: ["Progress heading", "Steps"] },
      { name: "Workspace", children: ["Form card", "Guidance sidebar"] },
      { name: "Footer", children: [] },
    ],
  },
  {
    id: "register-review",
    figmaName: "Register for Training — REVIEW & SUBMIT",
    figmaNodeId: "1:291",
    route: "/register/review",
    routeStatus: "provisional",
    sections: [
      { name: "Header", children: [] },
      { name: "Registration progress", children: ["Progress heading", "Steps"] },
      { name: "Workspace", children: ["Form card", "Guidance sidebar"] },
      { name: "Footer", children: [] },
    ],
  },
] as const satisfies readonly ScreenDefinition[];

export type ScreenRoute = (typeof screens)[number]["route"];

export function getScreen(route: ScreenRoute): ScreenDefinition {
  const screen = screens.find((item) => item.route === route);
  if (!screen) {
    throw new Error(`No screen is defined for ${route}`);
  }
  return screen;
}

export function registrationNeighbors(route: ScreenRoute): {
  previous?: ScreenRoute;
  next?: ScreenRoute;
} {
  const index = registrationRoutes.indexOf(route as (typeof registrationRoutes)[number]);
  if (index === -1) {
    return {};
  }
  return {
    previous: index > 0 ? registrationRoutes[index - 1] : undefined,
    next: index < registrationRoutes.length - 1 ? registrationRoutes[index + 1] : undefined,
  };
}
