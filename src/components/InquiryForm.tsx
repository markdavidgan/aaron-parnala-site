"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Mail, ShieldAlert } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    typology: "Commercial / Clinic",
    location: "Metro Manila (BGC / Makati)",
    timeline: "Within 3 Months",
    floorArea: "",
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-amber-400/30 bg-[#161719] p-8 sm:p-10 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl text-[#F4F2EE]">
          Consultation Request Simulated
        </h3>
        <p className="mt-3 text-sm text-[#C8C5BE] max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-amber-200">{formData.name}</span>. This website is currently a prospective-client prototype demonstrating how Aaron Parnala could receive and qualify project inquiries.
        </p>
        <div className="mt-6 rounded border border-white/10 bg-white/5 p-4 text-xs font-mono text-[#9A9893] max-w-md mx-auto text-left">
          <div className="flex items-center gap-1.5 text-amber-300 mb-2">
            <ShieldAlert className="h-4 w-4" />
            <span className="font-semibold uppercase">Prototype Safety Notice</span>
          </div>
          No personal data has been transmitted or stored. To initiate an actual design consultation directly with Aaron, reach out through his verified channels below.
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:aaronparnala@gmail.com"
            className="flex items-center gap-2 rounded-sm border border-amber-300/40 bg-amber-400/10 px-5 py-3 text-xs font-mono tracking-widest text-amber-200 uppercase hover:bg-amber-400/20 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Email Aaron Directly</span>
          </a>
          <a
            href="https://www.instagram.com/aaron_parnala_projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-5 py-3 text-xs font-mono tracking-widest text-[#F4F2EE] uppercase hover:bg-white/10 transition-colors"
          >
            <InstagramIcon className="h-4 w-4 text-amber-400" />
            <span>Message on Instagram</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#C8C5BE] mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Christine Alvarez"
            className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F4F2EE] placeholder-white/30 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#C8C5BE] mb-2">
            Email or Phone / WhatsApp *
          </label>
          <input
            type="text"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="e.g. christine@example.com or +63 917..."
            className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F4F2EE] placeholder-white/30 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#C8C5BE] mb-2">
            Project Typology
          </label>
          <select
            value={formData.typology}
            onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
            className="w-full rounded-sm border border-white/10 bg-[#161719] px-4 py-3 text-sm text-[#F4F2EE] focus:border-amber-300 focus:outline-none transition-colors"
          >
            <option>Commercial / Medical Clinic</option>
            <option>Urban Condominium Residence</option>
            <option>Hospitality / Cafe / Bar</option>
            <option>Turnkey Fit-Out Execution</option>
            <option>Office / Corporate Workspace</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#C8C5BE] mb-2">
            Location
          </label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full rounded-sm border border-white/10 bg-[#161719] px-4 py-3 text-sm text-[#F4F2EE] focus:border-amber-300 focus:outline-none transition-colors"
          >
            <option>BGC / Taguig</option>
            <option>Makati City</option>
            <option>Ortigas / Mandaluyong</option>
            <option>Quezon City</option>
            <option>Las Piñas / Alabang / South</option>
            <option>Other Metro Manila</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#C8C5BE] mb-2">
            Target Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full rounded-sm border border-white/10 bg-[#161719] px-4 py-3 text-sm text-[#F4F2EE] focus:border-amber-300 focus:outline-none transition-colors"
          >
            <option>Immediate (1–2 Months)</option>
            <option>Within 3–6 Months</option>
            <option>6+ Months / Planning Phase</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#C8C5BE] mb-2">
          Estimated Floor Area (Square Meters)
        </label>
        <input
          type="text"
          value={formData.floorArea}
          onChange={(e) => setFormData({ ...formData, floorArea: e.target.value })}
          placeholder="e.g. 85 sqm condo or 180 sqm commercial clinic"
          className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F4F2EE] placeholder-white/30 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#C8C5BE] mb-2">
          Project Vision & Requirements
        </label>
        <textarea
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe the space condition (bare, turnover, existing fit-out), design goals, and any specific requirements..."
          className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F4F2EE] placeholder-white/30 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300 transition-colors resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
        <p className="text-xs text-[#76746F] font-mono">
          * Prototype mode: Submissions demonstrate intake workflow.
        </p>
        <button
          type="submit"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-amber-400 px-8 py-3.5 text-xs font-mono tracking-widest text-black uppercase font-medium hover:bg-amber-300 transition-colors"
        >
          <span>Submit Project Inquiry</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
