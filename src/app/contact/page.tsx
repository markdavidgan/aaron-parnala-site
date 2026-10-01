import React from "react";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

export default function ContactPage() {
  return (
    <div className="py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
            Inquiry & Consultation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F2EE] leading-tight">
            Start a project.
          </h1>
          <p className="mt-4 text-base font-light leading-relaxed text-[#C8C5BE]">
            Whether you are preparing a commercial clinic turnover, fitting out a condominium residence, or planning a hospitality space—share your vision below to begin the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Inquiry Form */}
          <div className="lg:col-span-8 bg-[#141517] p-8 sm:p-10 rounded-sm border border-white/5">
            <h2 className="font-serif text-2xl text-[#F4F2EE] mb-2">
              Project Consultation Request
            </h2>
            <p className="text-xs font-mono text-[#9A9893] mb-8">
              Fill in your spatial specifications to help us assess scope, timeline, and site requirements.
            </p>
            <InquiryForm />
          </div>

          {/* Sidebar / Direct Contact Channels */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-sm bg-[#161719] border border-white/5 space-y-6">
              <h3 className="font-serif text-xl text-[#F4F2EE]">
                Direct Inquiries
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#76746F] block mb-1">
                    Primary Email
                  </span>
                  <a
                    href="mailto:aaronparnala@gmail.com"
                    className="flex items-center justify-between text-sm text-[#F4F2EE] hover:text-amber-300 transition-colors group"
                  >
                    <span>aaronparnala@gmail.com</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-amber-300 transition-colors" />
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#76746F] block mb-1">
                    Social / Direct Message
                  </span>
                  <a
                    href="https://www.instagram.com/aaron_parnala_projects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-[#F4F2EE] hover:text-amber-300 transition-colors group"
                  >
                    <span>@aaron_parnala_projects</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-amber-300 transition-colors" />
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#76746F] block mb-1">
                    Service Area
                  </span>
                  <p className="text-xs text-[#C8C5BE] font-light leading-relaxed">
                    Metro Manila (BGC, Makati, Manila, Alabang, Las Piñas, Ortigas, QC) & select regional commercial commissions.
                  </p>
                </div>
              </div>
            </div>

            {/* Engagement Steps */}
            <div className="p-8 rounded-sm bg-[#141517] border border-white/5 space-y-4">
              <h3 className="font-serif text-lg text-[#F4F2EE]">
                Consultation Process
              </h3>
              <ol className="space-y-3 text-xs font-mono text-[#9A9893]">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">1.</span>
                  <span>Intake review of space condition, floor area, and timeline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">2.</span>
                  <span>Initial walkthrough & direct on-site measurements by Aaron.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">3.</span>
                  <span>Spatial layout development, lighting study, and turnkey estimate.</span>
                </li>
              </ol>
            </div>

            {/* Prototype Notice */}
            <div className="p-6 rounded border border-amber-400/20 bg-amber-400/5 text-xs font-mono text-amber-200/80">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
                <ShieldAlert className="h-4 w-4" />
                <span>Prototype Mode</span>
              </div>
              The form on the left simulates client qualification. During this preview period, real inquiries should be addressed to aaronparnala@gmail.com.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
