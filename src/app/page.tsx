import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { PortfolioImage } from "@/components/PortfolioImage";
import { Threshold } from "@/components/Threshold";
export default function Home() {
  const [clinic, home, cafe, craft] = PROJECTS;
  return (
    <>
      <section className="opening">
        <div className="opening-meta">
          <span>Spaces for everyday life.</span>
          <span>Metro Manila, Philippines</span>
        </div>
        <h1>
          Spaces,
          <br />
          <span className="felt">felt.</span>
        </h1>
        <div className="opening-bottom">
          <p>
            Thoughtfully designed.
            <br />
            Personally brought to life.
          </p>
          <Link href="#spaces" className="text-link">
            Explore the spaces <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>
      <Threshold asset={home.gallery[1]} />
      <section className="intro section-shell">
        <p className="section-note">The way a room feels</p>
        <h2>
          Light. Material.
          <br />A little room to breathe.
        </h2>
        <div className="intro-copy">
          <p>
            Interiors shaped around how you live, work, and gather. From a quiet
            home to a welcoming clinic, Aaron brings design and on-site
            execution into the same conversation.
          </p>
          <Link className="text-link" href="/about">
            Meet the practice
          </Link>
        </div>
      </section>
      <section id="spaces" className="selected section-shell">
        <div className="section-heading">
          <h2>Selected spaces</h2>
          <Link className="text-link" href="/projects">
            The complete collection
          </Link>
        </div>
        <div className="space-grid">
          <article className="space-large">
            <Link href={`/projects/${home.slug}`}>
              <PortfolioImage asset={home.coverImage} />
              <div className="project-caption">
                <h3>Room to live.</h3>
                <span>Urban residential</span>
              </div>
            </Link>
            <p>Built-ins, soft sage, and space that works harder.</p>
          </article>
          <article className="space-offset">
            <Link href={`/projects/${clinic.slug}`}>
              <PortfolioImage asset={clinic.coverImage} />
              <div className="project-caption">
                <h3>A quieter welcome.</h3>
                <span>Skinnovia Dermatology</span>
              </div>
            </Link>
            <p>Softened sightlines. A considered first impression.</p>
          </article>
        </div>
      </section>
      <section className="material section-shell">
        <div>
          <p className="section-note">At a closer scale</p>
          <h2>
            The details
            <br />
            make the room.
          </h2>
          <p>
            Warm timber. An uninterrupted line. The way light lands on a
            surface. Explore the interiors through their smaller moments.
          </p>
          <Link className="text-link" href="/projects/bgc-condo">
            Look closer at the residence
          </Link>
        </div>
        <PortfolioImage asset={home.gallery[2]} />
      </section>
      <section className="evening">
        <div className="evening-title">
          <p>A place to linger</p>
          <h2>
            Stay a<br />
            little longer.
          </h2>
          <Link className="text-link" href={`/projects/${cafe.slug}`}>
            Explore hospitality
          </Link>
        </div>
        <PortfolioImage asset={cafe.coverImage} />
        <p className="evening-caption">
          Coffee, conversation, and the spaces between.
        </p>
      </section>
      <section className="making section-shell">
        <div className="section-heading">
          <h2>
            From thought
            <br />
            to touch.
          </h2>
          <p>
            Design continues on site.
            <br />
            In every measurement and decision.
          </p>
        </div>
        <div className="making-grid">
          <PortfolioImage asset={craft.gallery[4]} />
          <div>
            <PortfolioImage asset={craft.gallery[2]} />
            <p>
              Aaron walks the space, takes measurements, and works alongside the
              people building it.
            </p>
            <Link className="text-link" href="/projects/fit-out-craft">
              See the making
            </Link>
          </div>
        </div>
      </section>
      <section className="invitation section-shell">
        <p>Something in mind?</p>
        <h2>
          Tell us about
          <br />
          your space.
        </h2>
        <Link href="/contact" className="round-link">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
