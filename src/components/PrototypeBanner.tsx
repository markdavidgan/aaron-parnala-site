"use client";

import React, { useState } from "react";
import { Info, X } from "lucide-react";

export function PrototypeBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <aside aria-label="Prototype preview notice" className="relative z-50 border-b border-amber-500/20 bg-[#161410] px-4 py-2.5 text-xs text-amber-200/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Info className="h-3.5 w-3.5 shrink-0 text-amber-400" />
          <p className="leading-tight font-normal">
            <span className="font-semibold text-amber-300">Prototype Preview:</span> This is a speculative prospective-client prototype for Aaron Parnala. Selected concept imagery is AI-generated for layout visualization and does not represent completed projects.
          </p>
        </div>
        <button
          onClick={() => setClosed(true)}
          className="shrink-0 p-1 text-amber-400/70 hover:text-amber-200 transition-colors"
          aria-label="Dismiss prototype notice"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}
