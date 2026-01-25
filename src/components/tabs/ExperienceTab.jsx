import React from 'react'

export default function ExperienceTab() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-white text-2xl font-bold tracking-tight">
                    Experience
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                    Professional experience and real-world engineering work.
                </p>
            </div>

            {/* ZeroCAC Internship */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-white font-semibold text-lg tracking-tight">
                            Front-End Intern
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                            ZeroCAC • Hyderabad, India
                        </p>
                    </div>

                    <span className="font-mono text-xs text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">
                        May 2024 – June 2024
                    </span>
                </div>

                <ul className="mt-4 space-y-2 text-slate-400 text-sm leading-relaxed list-disc pl-5">
                    <li>
                        Designed and developed dynamic front-end pages for a sales platform using React and Tailwind CSS.
                    </li>
                    <li>
                        Implemented responsive UI components with Next.js, improving page performance and user experience.
                    </li>
                    <li>
                        Learned and applied React, Next.js, and gained foundational experience with Flask for backend integration.
                    </li>
                    <li>
                        Collaborated with developers to optimize performance, enhance usability, and ensure cross-browser compatibility.
                    </li>
                </ul>
            </div>
        </div>
    )
}
