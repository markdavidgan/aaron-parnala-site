import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { PROJECTS, PRACTICE_PILLARS, WORKING_PROCESS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const heroProject = PROJECTS.find((p) => p.id === "skinnovia") || PROJECTS[0];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-end px-6 sm:px-8 pb-16 pt-32 overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroProject.coverImage.src}
            alt={heroProject.coverImage.alt}
            fill
            priority
            className="object-cover object-center brightness-[0.45] contrast-[1.05]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121314] via-[#121314]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121314]/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-3.5 py-1 mb-6 text-xs font-mono tracking-widest text-amber-200 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Interior Architecture & Turnkey Fit-Out</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-[#F4F2EE]">
              Spaces resolved with quiet purpose.
            </h1>

            <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-[#C8C5BE] max-w-2xl">
              From commercial dermatology clinics to compact high-density condominiums across Metro Manila—we design and execute interiors where clarity leads, movement feels natural, and every detail is built with intention.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-sm bg-amber-400 px-6 py-3 text-xs font-mono tracking-widest text-black uppercase font-medium hover:bg-amber-300 transition-all"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-6 py-3 text-xs font-mono tracking-widest text-[#F4F2EE] uppercase hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 text-amber-300" />
              </Link>
            </div>
          </div>

          {/* Hero Metadata Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-[#9A9893]">
            <div className="flex items-center gap-2">
              <span className="text-white">Featured Project:</span>
              <span className="text-amber-200/90">{heroProject.title}</span>
              <span className="text-white/40">•</span>
              <span>{heroProject.location}</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Turnkey Execution</span>
              <span className="text-white/40">•</span>
              <span>Bespoke Millwork</span>
              <span className="text-white/40">•</span>
              <span>Lighting Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Positioning & Ethos */}
      <section className="py-24 px-6 sm:px-8 border-t border-white/5 bg-[#141517]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
                Practice Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F2EE] leading-tight">
                We do not separate design from execution.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-base font-light leading-relaxed text-[#C8C5BE]">
              <p>
                In interior design, fit-outs are often treated as mere installation phases—the point where drawings are handed off to third parties to assemble. But in reality, this is where design is truly tested.
              </p>
              <p>
                Every joint, panel alignment, and light transition reveals whether a space was deeply resolved or simply put together. A well-executed space is quiet: no forced solutions, no awkward adjustments. We show up on-site, take measurements in person, and calibrate materials directly under real lighting.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-[#9A9893]">
                <div className="border-l border-amber-400/40 pl-4">
                  <span className="text-[#F4F2EE] font-medium block text-sm mb-1">On-Site Presence</span>
                  Direct designer supervision throughout construction.
                </div>
                <div className="border-l border-amber-400/40 pl-4">
                  <span className="text-[#F4F2EE] font-medium block text-sm mb-1">Integrated Lighting</span>
                  Lighting planned into geometry from day one, not as an afterthought.
                </div>
                <div className="border-l border-amber-400/40 pl-4">
                  <span className="text-[#F4F2EE] font-medium block text-sm mb-1">Tailored Living</span>
                  Every square meter made to work harder without feeling crowded.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Projects Showcase */}
      <section className="py-28 px-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
                Curated Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F2EE]">
                Selected Works
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-300 hover:text-amber-200 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Practice Pillars / Disciplines */}
      <section className="py-24 px-6 sm:px-8 bg-[#16171A] border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
              Capabilities & Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F2EE]">
              Disciplines built around how spaces are lived and used.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRACTICE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="flex flex-col justify-between p-6 bg-[#121314] border border-white/5 hover:border-white/15 transition-all"
              >
                <div>
                  <span className="font-mono text-xs text-amber-400/80 mb-4 block">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif text-xl text-[#F4F2EE] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-[#9A9893]">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-amber-200/70">
                  {pillar.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Working Process */}
      <section className="py-28 px-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
                Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F2EE] leading-tight mb-6">
                The path from bare space to quiet clarity.
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#C8C5BE] mb-8">
                Good design takes discipline. Every decision is resolved through close collaboration, physical measurement, and material calibration before structural implementation.
              </p>
              <div className="p-6 rounded border border-white/10 bg-white/5">
                <blockquote className="font-serif italic text-base text-[#F4F2EE] leading-relaxed">
                  “The least photogenic part of the job is usually the most important. Measure twice. Build once. Sleep better.”
                </blockquote>
                <div className="mt-4 text-xs font-mono text-amber-300">
                  — Aaron Parnala Projects
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {WORKING_PROCESS.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-6 p-8 rounded-sm bg-[#161719] border border-white/5"
                >
                  <span className="font-mono text-sm text-amber-400 font-semibold shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-[#F4F2EE] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light leading-relaxed text-[#9A9893]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Aaron Introduction Quote & Character */}
      <section className="py-24 px-6 sm:px-8 bg-[#0E0F10] border-t border-white/5 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-6">
            Design Philosophy
          </span>
          <p className="font-serif text-2xl sm:text-4xl italic text-[#F4F2EE] leading-relaxed">
            “Talent creates. Character sustains. The goal is never to be smarter than the client—it’s to understand, listen, and bring their vision to life with care. Every project deserves humility. Every detail deserves respect.”
          </p>
          <div className="mt-8 text-xs font-mono tracking-widest text-[#9A9893] uppercase">
            Aaron Parnala • Principal Designer & Fit-Out Director
          </div>
        </div>
      </section>

      {/* 7. Start a Project CTA */}
      <section className="py-28 px-6 sm:px-8 bg-gradient-to-b from-[#141517] to-[#121314] border-t border-white/5">
        <div className="mx-auto max-w-5xl rounded-xl border border-amber-400/20 bg-[#18191C] p-8 sm:p-14 text-center">
          <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
            Inquire For Upcoming Openings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F2EE] max-w-2xl mx-auto leading-tight">
            Have a space you’re planning to transform?
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light text-[#C8C5BE] max-w-xl mx-auto leading-relaxed">
            Whether preparing a bare commercial clinic turnover or optimizing a condominium home, we ensure every square meter is designed with purpose and built right.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-amber-400 px-8 py-3.5 text-xs font-mono tracking-widest text-black uppercase font-medium hover:bg-amber-300 transition-colors"
            >
              <span>Request Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:aaronparnala@gmail.com"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-mono tracking-widest text-[#F4F2EE] uppercase hover:bg-white/10 transition-colors"
            >
              <span>Email Directly</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Secondary Social Channel (Instagram) */}
      <section className="py-12 px-6 sm:px-8 border-t border-white/5 bg-[#101112]">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-amber-400">
              <InstagramIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-[#F4F2EE]">Follow Daily Site Progress & Material Calibration</p>
              <p className="text-[11px] font-mono text-[#76746F]">@aaron_parnala_projects • Instagram</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/aaron_parnala_projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 hover:text-amber-200 transition-colors"
          >
            <span>Visit Instagram Profile</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
