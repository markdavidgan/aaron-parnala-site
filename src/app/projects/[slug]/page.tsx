import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const isConcept = project.coverImage.source === "concept-ai";

  return (
    <article className="py-16 sm:py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#9A9893] uppercase hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Works</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              {isConcept ? (
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-amber-300/40 bg-amber-400/10 px-2.5 py-1 text-xs font-mono tracking-wider text-amber-200 uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>Concept Visualization (AI)</span>
                </span>
              ) : (
                <span className="inline-flex rounded-sm bg-white/5 px-2.5 py-1 text-xs font-mono tracking-wider text-amber-300 uppercase border border-white/10">
                  {project.typologyLabel}
                </span>
              )}
              {project.client && (
                <span className="text-xs font-mono text-[#9A9893]">
                  Client: {project.client}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4F2EE] leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Quick Metadata Box */}
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col justify-between gap-4 text-xs font-mono text-[#C8C5BE] bg-[#161719] p-6 rounded-sm border border-white/5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#76746F]">Location</span>
              <span className="text-right text-[#F4F2EE]">{project.location}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#76746F]">Timeline</span>
              <span className="text-right text-[#F4F2EE]">{project.year}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#76746F]">Delivery</span>
              <span className="text-right text-amber-200/90">Turnkey Fit-Out</span>
            </div>
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/5">
              <span className="text-[#76746F]">Asset Provenance</span>
              <span className="text-right text-xs">
                {isConcept ? "Concept Study" : "Aaron Parnala Portfolio"}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Full-Bleed Image */}
        <div className="my-12 overflow-hidden rounded-sm border border-white/5 bg-[#141517]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {project.coverImage.caption && (
            <div className="p-4 bg-[#101112] text-xs font-mono text-[#9A9893] flex items-center justify-between">
              <span>{project.coverImage.caption}</span>
              {project.coverImage.credit && (
                <span className="text-[11px] text-[#76746F]">{project.coverImage.credit}</span>
              )}
            </div>
          )}
        </div>

        {/* Concept & Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-white/10 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
              Design Intent
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F2EE]">
              Aesthetics meeting purpose.
            </h2>
            <div className="mt-8 space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-[#76746F] uppercase">
                Disciplines Applied
              </h4>
              <ul className="space-y-2 text-xs font-mono text-[#C8C5BE]">
                {project.disciplines.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-amber-400" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9A9893] mb-2">
                The Context & Challenge
              </h3>
              <p className="text-base font-light leading-relaxed text-[#C8C5BE]">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9A9893] mb-2">
                Spatial Resolution
              </h3>
              <p className="text-base font-light leading-relaxed text-[#C8C5BE]">
                {project.resolution}
              </p>
            </div>

            {project.quotes && project.quotes.length > 0 && (
              <div className="p-6 rounded border-l-2 border-amber-400 bg-white/5 space-y-3">
                {project.quotes.map((quote, i) => (
                  <blockquote key={i} className="font-serif italic text-base text-[#F4F2EE]">
                    “{quote}”
                  </blockquote>
                ))}
                <span className="text-[11px] font-mono text-amber-300/80 block">
                  — Aaron Parnala on-site notes
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Section */}
        {project.gallery.length > 1 && (
          <div className="py-16 border-b border-white/10">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
                Spatial Sequence
              </span>
              <h2 className="font-serif text-3xl text-[#F4F2EE]">
                Flow, Junctions & Materiality
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.slice(1).map((img, i) => (
                <div key={i} className="flex flex-col bg-[#161719] border border-white/5 overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {img.source === "concept-ai" && (
                      <div className="absolute top-3 left-3 rounded-sm bg-black/80 px-2 py-0.5 text-[10px] font-mono text-amber-300 border border-amber-300/30">
                        Concept Image
                      </div>
                    )}
                  </div>
                  {img.caption && (
                    <div className="p-4 text-xs font-mono text-[#9A9893]">
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Material Palette */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
              Specifications
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F2EE]">
              Materials & Hardware Calibration
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.materials.map((mat, i) => (
              <div key={i} className="p-5 rounded-sm bg-[#161719] border border-white/5">
                <span className="font-mono text-[11px] text-amber-400/80 mb-2 block">
                  Material 0{i + 1}
                </span>
                <p className="text-xs text-[#F4F2EE] font-light leading-relaxed">
                  {mat}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project & Inquiry CTA Navigation */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-[#76746F] uppercase block mb-1">
              Next Project in Portfolio
            </span>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="font-serif text-2xl text-[#F4F2EE] hover:text-amber-300 transition-colors flex items-center gap-2 group"
            >
              <span>{nextProject.title}</span>
              <ArrowRight className="h-5 w-5 text-amber-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-amber-400 px-6 py-3.5 text-xs font-mono tracking-widest text-black uppercase font-medium hover:bg-amber-300 transition-colors"
          >
            <span>Inquire About This Service</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
