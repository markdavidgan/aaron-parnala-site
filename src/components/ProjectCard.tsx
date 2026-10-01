import Link from "next/link";
import { Project } from "@/data/projects";
import { PortfolioImage } from "@/components/PortfolioImage";
export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`}>
        <PortfolioImage
          asset={project.coverImage}
          priority={priority}
          sizes="(max-width: 700px) 100vw, 50vw"
        />
        <div className="project-caption">
          <h2>{project.title}</h2>
          <span>{project.typologyLabel}</span>
        </div>
      </Link>
    </article>
  );
}
