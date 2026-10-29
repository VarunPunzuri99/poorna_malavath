import Link from "next/link";
import {
  getScreen,
  registrationNeighbors,
  type ScreenRoute,
} from "@/content/screens";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./ScreenPage.module.css";

type ScreenPageProps = {
  route: ScreenRoute;
};

export function ScreenPage({ route }: ScreenPageProps) {
  const screen = getScreen(route);
  const neighbors = registrationNeighbors(route);
  const isRegistration = route.startsWith("/register");

  return (
    <>
      <SiteHeader currentRoute={route} />
      <main className={styles.page}>
        <p className={styles.notice} role="status">
          Structure only. Visual design, final copy, images, and measurements are
          waiting for Figma inspect data and exported assets. This route is
          provisional.
        </p>
        <header>
          <p className={styles.meta}>Figma frame: {screen.figmaName}</p>
          <h1>{screen.figmaName}</h1>
          <p className={styles.meta}>Node {screen.figmaNodeId}</p>
        </header>
        <div className={styles.sections}>
          {screen.sections.map((section, index) => (
            <section className={styles.section} key={`${section.name}-${index}`}>
              <h2>
                {index + 1}. {section.name}
              </h2>
              <p className={styles.meta}>Section shell only. Not visually matched.</p>
              {section.children.length > 0 ? (
                <ul className={styles.children}>
                  {section.children.map((child, childIndex) => (
                    <li key={`${child}-${childIndex}`}>{child}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        {isRegistration ? (
          <nav aria-label="Registration steps" className={styles.steps}>
            {neighbors.previous ? (
              <Link href={neighbors.previous}>Previous step</Link>
            ) : null}
            {neighbors.next ? <Link href={neighbors.next}>Next step</Link> : null}
            {route === "/register/review" ? (
              <p>
                Review is the last designed screen. There is no success screen, and
                this step does not submit data.
              </p>
            ) : null}
          </nav>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
