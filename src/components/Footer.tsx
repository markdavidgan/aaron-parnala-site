import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E0F10] text-[#9A9893] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 pb-16 border-b border-white/5">
          {/* Studio identity */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl tracking-widest text-[#F4F2EE] uppercase block mb-2">
                Aaron Parnala Projects
              </span>
              <p className="text-sm font-light text-[#C8C5BE] leading-relaxed max-w-md">
                Interior design and turnkey fit-out execution based in Metro Manila. Focused on commercial clinics, urban residences, and hospitality spaces resolved with quiet precision.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#9A9893]">
              <MapPin className="h-3.5 w-3.5 text-amber-400/80" />
              <span>Metro Manila, Philippines • Available for Turnkey Commissions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono tracking-widest text-[#F4F2EE] uppercase mb-4">
              Portfolio & Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/projects" className="hover:text-amber-300 transition-colors">
                  All Selected Works
                </Link>
              </li>
              <li>
                <Link href="/projects/skinnovia" className="hover:text-amber-300 transition-colors">
                  Skinnovia Dermatology (Clinic)
                </Link>
              </li>
              <li>
                <Link href="/projects/bgc-condo" className="hover:text-amber-300 transition-colors">
                  BGC Urban Residence (Condo)
                </Link>
              </li>
              <li>
                <Link href="/projects/kape-light" className="hover:text-amber-300 transition-colors">
                  Kape Light (Hospitality)
                </Link>
              </li>
              <li>
                <Link href="/projects/fit-out-craft" className="hover:text-amber-300 transition-colors">
                  Turnkey On-Site Fit-Out
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono tracking-widest text-[#F4F2EE] uppercase mb-4">
              Direct Contact & Social
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:aaronparnala@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[#F4F2EE] hover:text-amber-300 transition-colors group"
              >
                <Mail className="h-4 w-4 text-amber-400/80" />
                <span className="font-mono text-xs">aaronparnala@gmail.com</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-amber-300 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/aaron_parnala_projects/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#F4F2EE] hover:text-amber-300 transition-colors group"
              >
                <InstagramIcon className="h-4 w-4 text-amber-400/80" />
                <span className="font-mono text-xs">@aaron_parnala_projects</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-amber-300 transition-colors" />
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-xs font-mono tracking-widest text-amber-200 uppercase hover:bg-amber-400/20 transition-all"
              >
                <span>Book Initial Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright & prototype disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#76746F]">
          <p>© {new Date().getFullYear()} Aaron Parnala Projects. Prototype demonstration.</p>
          <p className="text-center sm:text-right max-w-md">
            Unlisted presentation prototype. Selected concept imagery is clearly labeled for layout demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
}
