"use client";
import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
export default function ProjectsPage() {
  const [category, setCategory] = useState("all");
  const projects = PROJECTS.filter(
    (p) => category === "all" || p.typology === category,
  );
  return (
    <div className="collection section-shell">
      <div className="page-heading">
        <p>Rooms, details, and the making.</p>
        <h1>
          Selected
          <br />
          spaces.
        </h1>
      </div>
      <div className="filters" aria-label="Filter projects">
        {[
          ["all", "All spaces"],
          ["commercial", "Clinics"],
          ["residential", "Homes"],
          ["hospitality", "Hospitality"],
          ["fit-out", "The making"],
          ["concept", "Concept studies"],
        ].map(([id, label]) => (
          <button
            key={id}
            aria-pressed={category === id}
            onClick={() => setCategory(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="collection-note">
        Aaron-sourced portfolio imagery. AI-generated concept studies are
        labeled separately.
      </p>
      <div key={category} className="collection-grid" aria-live="polite">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
