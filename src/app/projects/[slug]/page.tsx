import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { PortfolioImage } from "@/components/PortfolioImage";
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PROJECTS.find((p) => p.slug === slug);
  return {
    title: p ? `${p.title} — Aaron Parnala Projects` : "Project not found",
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PROJECTS.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
  const concept = p.coverImage.source === "concept-ai";
  return (
    <article className="case-study">
      <div className="case-opening section-shell">
        <Link className="text-link" href="/projects">
          Back to selected spaces
        </Link>
        <div className="case-title">
          <p>
            {p.typologyLabel}
            {concept ? " / AI-generated concept study" : ""}
          </p>
          <h1>{p.title}</h1>
        </div>
      </div>
      <PortfolioImage asset={p.coverImage} priority className="case-hero" />
      <section className="case-story section-shell">
        <div>
          <p className="section-note">
            {concept ? "An exploration" : "The idea"}
          </p>
          <h2>
            {p.typology === "residential"
              ? "Small space.\nConsidered living."
              : p.typology === "commercial"
                ? "A considered\nwelcome."
                : p.typology === "hospitality"
                  ? "Room for\nconversation."
                  : p.typology === "fit-out"
                    ? "Where design\nmeets the site."
                    : "A possible\nspace."}
          </h2>
        </div>
        <div>
          <p>
            {concept
              ? "An exploratory composition of light, materials, and spatial proportions, created for this website prototype."
              : p.summary}
          </p>
          <p>
            {concept
              ? "This AI-generated layout study is a prototype visualization. It does not represent a completed Aaron Parnala commission."
              : p.typology === "fit-out"
                ? "Measurements, sourcing, lighting tests, and decisions made directly on site."
                : "Explore the portfolio imagery below for a closer look at the space and its details."}
          </p>
          <div className="case-facts">
            <span>{p.typologyLabel}</span>
            <span>
              {concept ? "Concept visualization" : "Aaron Parnala portfolio"}
            </span>
          </div>
        </div>
      </section>
      <div className="case-gallery section-shell">
        {p.gallery
          .filter((a) => a.src !== p.coverImage.src)
          .map((a) => (
            <PortfolioImage key={a.src} asset={a} />
          ))}
      </div>
      <section className="next-space section-shell">
        <p>Continue exploring</p>
        <Link href={`/projects/${next.slug}`}>
          <h2>{next.title}</h2>
          <span aria-hidden="true">↗</span>
        </Link>
        <Link className="text-link" href="/contact">
          Tell us about your space
        </Link>
      </section>
    </article>
  );
}
