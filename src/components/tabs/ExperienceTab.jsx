import React from "react";

export default function ExperienceTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
          Experience
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Professional experience and real-world engineering work.
        </p>
      </div>

      {/* ZeroCAC Internship */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-base sm:text-lg tracking-tight leading-snug">
              Front-End Intern
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              ZeroCAC • Hyderabad, India
            </p>

            {/* date pill (mobile placement) */}
            <span
              className="sm:hidden inline-flex mt-3 shrink-0 whitespace-nowrap
                         font-mono text-[11px] text-slate-300
                         bg-white/5 border border-white/10
                         px-3 py-1 rounded-full"
            >
              May 2024 – June 2024
            </span>
          </div>

          {/* date pill (desktop placement) */}
          <span
            className="hidden sm:inline-flex shrink-0 whitespace-nowrap
                       font-mono text-xs text-slate-300
                       bg-white/5 border border-white/10
                       px-3 py-1 rounded-full"
          >
            May 2024 – June 2024
          </span>
        </div>

        <ul className="mt-5 space-y-3 text-slate-400 text-sm leading-relaxed list-disc pl-5">
          <li>
            Designed and developed dynamic front-end pages for a sales platform
            using React and Tailwind CSS.
          </li>
          <li>
            Implemented responsive UI components with Next.js, improving page
            performance and user experience.
          </li>
          <li>
            Learned and applied React and Next.js, and gained foundational
            exposure to Flask for backend integration.
          </li>
          <li>
            Collaborated with developers to optimize performance, enhance
            usability, and ensure cross-browser compatibility.
          </li>
        </ul>
      </div>
    </div>
  );
}
