import React from "react";

export default function ProjectsTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
          Projects
        </h2>
      </div>

      {/* Project 1 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-white/20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight leading-snug">
              Personal Portfolio Website
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              React • Tailwind CSS • Responsive UI
            </p>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/dakshOO7/Personal-Portfolio.git"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 w-fit text-xs px-3 py-1 rounded-xl
                       bg-white/5 border border-white/10 text-slate-300
                       hover:border-sky-500/40 hover:text-sky-400 transition"
          >
            View on GitHub
          </a>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mt-5">
          Built a personal portfolio website using React and Tailwind CSS to present academic background, skills,
          and experience in a structured and interactive way. The site uses a tab-based layout to switch between
          sections without full page reloads.
        </p>

        <ul className="mt-5 space-y-3 text-slate-400 text-sm leading-relaxed list-disc pl-5">
          <li>Implemented a multi-section layout with reusable React components for maintainability.</li>
          <li>Used React state to manage tab navigation and dynamically render content.</li>
          <li>Designed a clean dark-themed interface with Tailwind CSS utility classes.</li>
          <li>Ensured the layout remains responsive across different screen sizes using Flexbox.</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
          {["React", "Tailwind CSS", "JavaScript", "Flexbox", "Vite"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full
                         text-[11px] sm:text-xs text-slate-300 hover:border-sky-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-white/20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          {/* Left side */}
          <div className="min-w-0">
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight leading-snug">
              Web GIS Application for Land Parcel Measurement
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Research Paper • Web GIS • Data Storage
            </p>

            {/* badge on mobile under the title */}
            <span
              className="sm:hidden inline-flex mt-3 shrink-0 whitespace-nowrap
                         font-mono text-[11px] text-slate-300
                         bg-white/5 border border-white/10
                         px-3 py-1 rounded-full"
            >
              Presented • ICACTEA-2025
            </span>
          </div>

          {/* Right side (desktop) */}
          <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
            <span
              className="whitespace-nowrap font-mono text-xs text-slate-300
                         bg-white/5 border border-white/10 px-3 py-1 rounded-full"
            >
              Presented • ICACTEA-2025
            </span>

            <a
              href="https://github.com/dakshOO7/GIS-project"
              target="_blank"
              rel="noreferrer"
              className="w-fit text-xs px-3 py-1 rounded-xl
                         bg-white/5 border border-white/10 text-slate-300
                         hover:border-sky-500/40 hover:text-sky-400 transition"
            >
              View on GitHub
            </a>
          </div>

          {/* GitHub link on mobile (below badge) */}
          <a
            href="https://github.com/dakshOO7/GIS-project"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden w-fit text-xs px-3 py-1 rounded-xl
                       bg-white/5 border border-white/10 text-slate-300
                       hover:border-sky-500/40 hover:text-sky-400 transition"
          >
            View on GitHub
          </a>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mt-5">
          Research work focused on developing a web-based GIS application to accurately measure land parcel areas and
          store structured GIS information. The paper was presented at the International Conference on Algorithms and
          Computational Theory for Engineering Applications (ICACTEA-2025), Aditya University.
        </p>

        <ul className="mt-5 space-y-3 text-slate-400 text-sm leading-relaxed list-disc pl-5">
          <li>Built a web application to calculate and visualize land parcel area using GIS data.</li>
          <li>Designed a structured approach for storing and retrieving geographic information.</li>
          <li>Presented research findings in an academic conference setting.</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
          {["GIS", "Web Application", "Land Parcel Data", "Research Paper", "Conference Presentation"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full
                         text-[11px] sm:text-xs text-slate-300 hover:border-sky-500/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
