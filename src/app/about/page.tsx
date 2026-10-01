import { InstagramIcon } from "@/components/icons/InstagramIcon";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { PortfolioImage } from "@/components/PortfolioImage";
export default function About() {
  const craft = PROJECTS[3];
  return (
    <>
      <section className="page-heading section-shell">
        <p>Aaron Parnala Projects</p>
        <h1>
          Thoughtfully
          <br />
          made.
        </h1>
        <div className="about-lead">
          <p>
            Interior design and fit-out, brought together through a hands-on
            approach.
          </p>
          <PortfolioImage asset={craft.gallery[4]} priority />
        </div>
      </section>
      <section className="intro section-shell">
        <p className="section-note">The practice</p>
        <h2>
          Good spaces
          <br />
          begin with listening.
        </h2>
        <div className="intro-copy">
          <p>
            Aaron’s portfolio spans commercial clinics, urban homes, and
            hospitality interiors. His approach connects spatial planning,
            material sourcing, and direct involvement on site.
          </p>
          <p>
            “Every project deserves humility. Every detail deserves respect.”
          </p>
        </div>
      </section>
      <section className="process section-shell">
        <h2>
          From the first walk
          <br />
          to the final detail.
        </h2>
        <ol>
          {[
            [
              "Walk the space",
              "Understand how you live or work. Take measurements and consider the light.",
            ],
            [
              "Resolve the layout",
              "Bring circulation, storage, materials, and lighting into the same plan.",
            ],
            [
              "Feel the materials",
              "Consider scale, texture, furniture, and proportion in person.",
            ],
            [
              "Bring it to life",
              "Work directly with contractors and review the details on site.",
            ],
          ].map(([t, d]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="invitation section-shell">
        <p>Homes. Clinics. Places to gather.</p>
        <h2>
          What does your
          <br />
          space need?
        </h2>
        <Link
          className="round-link"
          href="https://www.instagram.com/aaron_parnala_projects/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on Instagram{" "}
          <span aria-hidden="true">
            <InstagramIcon />
          </span>
        </Link>
      </section>
    </>
  );
}
