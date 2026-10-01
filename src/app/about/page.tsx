import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench, Compass, Eye, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Practice Overview */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
            The Practice
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F2EE] leading-tight">
            Design grounded in craft, character, and presence.
          </h1>
          <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-[#C8C5BE]">
            Aaron Parnala Projects is an independent interior design and turnkey fit-out practice based in Metro Manila, Philippines. We design and deliver commercial clinical facilities, compact urban residences, and hospitality destinations.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="p-8 rounded-sm bg-[#161719] border border-white/5 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber-400/10 text-amber-300">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F4F2EE]">
              Character Sustains
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#9A9893] leading-relaxed">
              “Talent creates. Character sustains. The goal is never to be smarter than the client—it’s to understand, listen, and bring their vision to life with care. Every project deserves humility. Every detail deserves respect.”
            </p>
          </div>

          <div className="p-8 rounded-sm bg-[#161719] border border-white/5 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber-400/10 text-amber-300">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F4F2EE]">
              Hands-On On-Site Delivery
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#9A9893] leading-relaxed">
              “I make it a point to be on-site even during trying seasons. I take the measurements myself, study how light moves, and test how pieces sit. What works on a plan doesn’t always translate the same in real life.”
            </p>
          </div>

          <div className="p-8 rounded-sm bg-[#161719] border border-white/5 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber-400/10 text-amber-300">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F4F2EE]">
              Aesthetics Meeting Purpose
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#9A9893] leading-relaxed">
              Design is not meant to call superficial attention to itself. In clinical and commercial spaces, it builds quiet trust, acoustic comfort, and effortless flow from the moment you step through the door.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-[#161719] border border-white/5 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber-400/10 text-amber-300">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F4F2EE]">
              Handled Like It’s Our Own
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#9A9893] leading-relaxed">
              “When someone becomes a client, they are entrusting us with their resources, their expectations, and something personally meaningful to them. We take on the responsibility to make sure every request is resolved.”
            </p>
          </div>
        </div>

        {/* Verified Scope: What We Do vs What We Don't Do */}
        <div className="my-20 p-8 sm:p-12 rounded-sm bg-[#141517] border border-white/5">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F2EE] mb-8">
            Scope & Practice Boundaries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>What We Do</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-light text-[#C8C5BE]">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Turnkey commercial clinic and dermatology interior architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Urban condominium space optimization and custom built-in millwork</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Direct on-site contractor coordination, drywall framing, and precision fit-out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Architectural lighting calculation (ambient, task, accent cove illumination)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Showroom sourcing, material calibration, and bespoke styling</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#76746F] mb-4 flex items-center gap-2">
                <span>What We Don&apos;t Do</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-light text-[#9A9893]">
                <li className="flex items-start gap-2">
                  <span className="text-[#76746F]">•</span>
                  <span>Hasty 3D renders disconnected from construction reality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#76746F]">•</span>
                  <span>Unsupervised drawing handoffs to third-party subcontractors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#76746F]">•</span>
                  <span>Superficial catalog staging without functional ergonomics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#76746F]">•</span>
                  <span>Rushed fit-outs that compromise joint alignments and finishing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Verification Note */}
        <div className="rounded border border-white/10 bg-white/[0.02] p-6 text-xs font-mono text-[#76746F]">
          <span className="text-amber-300 font-semibold uppercase block mb-1">
            Documentation Standard
          </span>
          All philosophy, quotes, and process details are derived directly from verified statements and project documentation recorded in the Aaron Parnala Projects portfolio audit.
        </div>

        {/* Consultation CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-amber-400 px-8 py-3.5 text-xs font-mono tracking-widest text-black uppercase font-medium hover:bg-amber-300 transition-colors"
          >
            <span>Discuss an Upcoming Commission</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
