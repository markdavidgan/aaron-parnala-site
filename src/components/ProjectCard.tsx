import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const isConcept = project.coverImage.source === "concept-ai";

  return (
    <article className="group relative flex flex-col overflow-hidden bg-[#18191B] border border-white/5 transition-all duration-300 hover:border-white/20">
      <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[16/10] w-full bg-[#121314]">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Concept Badge or Category Tag */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {isConcept ? (
            <span className="inline-flex items-center gap-1 rounded-sm border border-amber-300/40 bg-black/80 px-2.5 py-1 text-[10px] font-mono tracking-wider text-amber-300 uppercase backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-amber-400" />
              <span>Concept Study</span>
            </span>
          ) : (
            <span className="inline-flex rounded-sm bg-black/75 px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#C8C5BE] uppercase backdrop-blur-md border border-white/10">
              {project.typologyLabel}
            </span>
          )}
        </div>

        {/* View Project Arrow */}
        <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono text-[#9A9893] mb-2">
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="font-serif text-xl font-normal text-[#F4F2EE] group-hover:text-amber-200/90 transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-xs font-light leading-relaxed text-[#9A9893] line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {project.materials.slice(0, 2).map((material, i) => (
            <span
              key={i}
              className="text-[10px] font-mono text-[#76746F] bg-white/[0.03] px-2 py-0.5 rounded-sm"
            >
              {material}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
