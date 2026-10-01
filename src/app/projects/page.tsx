"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Info } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "commercial", label: "Commercial & Clinic" },
    { id: "residential", label: "Urban Residential" },
    { id: "hospitality", label: "Hospitality & Cafe" },
    { id: "fit-out", label: "Fit-Out & Craft" },
    { id: "concept", label: "Concept Studies" }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.typology === selectedCategory);

  return (
    <div className="py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
            Portfolio Index
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F2EE] leading-tight">
            Selected Commissions & Spatial Studies
          </h1>
          <p className="mt-4 text-base font-light leading-relaxed text-[#C8C5BE]">
            An editorial archive of commercial clinic facilities, high-density metropolitan residences, hospitality environments, and turnkey on-site executions.
          </p>
        </div>

        {/* Prototype disclosure pill */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#9A9893]">
          <Info className="h-3.5 w-3.5 text-amber-400" />
          <span>
            Real commissions feature verified photography. Concept visualizations are explicitly labeled.
          </span>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/10 mb-12">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all ${
                  active
                    ? "bg-amber-400 text-black font-medium"
                    : "bg-white/5 text-[#C8C5BE] hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-sm font-mono text-[#9A9893]">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
