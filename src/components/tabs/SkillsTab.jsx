import React from "react";

export default function SkillsTab() {
  const pillClass =
    "px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full " +
    "text-[11px] sm:text-sm text-slate-300 hover:border-sky-500/40 hover:text-white transition-colors";

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
          Technical Skills
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Languages, frameworks, tools, and CS foundations.
        </p>
      </div>

      {/* Category: Languages */}
      <div className="space-y-3">
        <h3 className="text-slate-300 font-semibold text-sm tracking-tight">
          Languages
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["Python", "Java", "C", "JavaScript", "SQL"].map((s) => (
            <span key={s} className={pillClass}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Category: Frontend */}
      <div className="space-y-3">
        <h3 className="text-slate-300 font-semibold text-sm tracking-tight">
          Frontend
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["HTML", "CSS", "React", "Next.js", "Tailwind CSS"].map((s) => (
            <span key={s} className={pillClass}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Category: Backend / Tools */}
      <div className="space-y-3">
        <h3 className="text-slate-300 font-semibold text-sm tracking-tight">
          Backend & Tools
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["MySQL", "Git", "Version Control"].map((s) => (
            <span key={s} className={pillClass}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Category: Core CS */}
      <div className="space-y-3">
        <h3 className="text-slate-300 font-semibold text-sm tracking-tight">
          Core CS
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Front-End Development",
          ].map((s) => (
            <span key={s} className={pillClass}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
