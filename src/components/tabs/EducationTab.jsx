import React from "react";

export default function EducationTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
          Academic Journey
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          MS Computer Science @ George Mason University • GPA 3.78/4
        </p>
      </div>

      {/* MS Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-base sm:text-lg tracking-tight leading-snug break-words">
              Master’s in Computer Science
            </h3>
            <p className="text-slate-400 text-sm mt-1">George Mason University</p>

            {/* date pill (mobile placement) */}
            <span
              className="sm:hidden inline-flex mt-3 shrink-0 whitespace-nowrap
                         font-mono text-[11px] text-slate-300
                         bg-white/5 border border-white/10
                         px-3 py-1 rounded-full"
            >
              Aug 2025 – May 2027
            </span>
          </div>

          {/* date pill (desktop placement) */}
          <span
            className="hidden sm:inline-flex shrink-0 whitespace-nowrap
                       font-mono text-xs text-slate-300
                       bg-white/5 border border-white/10
                       px-3 py-1 rounded-full"
          >
            Aug 2025 – May 2027
          </span>
        </div>

        <div className="mt-4 text-slate-400 text-sm">
          <span className="text-slate-300 font-medium">GPA:</span> 3.78 / 4.0
        </div>
      </div>

      {/* Undergrad Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-base sm:text-lg tracking-tight leading-snug break-words">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              GITAM University • Hyderabad
            </p>

            {/* date pill (mobile placement) */}
            <span
              className="sm:hidden inline-flex mt-3 shrink-0 whitespace-nowrap
                         font-mono text-[11px] text-slate-300
                         bg-white/5 border border-white/10
                         px-3 py-1 rounded-full"
            >
              Oct 2021 – Apr 2025
            </span>
          </div>

          {/* date pill (desktop placement) */}
          <span
            className="hidden sm:inline-flex shrink-0 whitespace-nowrap
                       font-mono text-xs text-slate-300
                       bg-white/5 border border-white/10
                       px-3 py-1 rounded-full"
          >
            Oct 2021 – Apr 2025
          </span>
        </div>

        <div className="mt-4 text-slate-400 text-sm">
          <span className="text-slate-300 font-medium">CGPA:</span> 7.68 / 10
        </div>
      </div>
    </div>
  );
}
