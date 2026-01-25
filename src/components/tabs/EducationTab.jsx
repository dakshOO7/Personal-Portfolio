import React from 'react'

export default function EducationTab() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-white text-2xl font-bold tracking-tight">
                    Academic Journey
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                    MS Computer Science @ George Mason University • GPA 3.78/4
                </p>
            </div>

            {/* MS Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-white font-semibold text-lg tracking-tight">
                            Master’s in Computer Science
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                            George Mason University
                        </p>
                    </div>
                    <span className="font-mono text-xs text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">
                        Aug 2025 – May 2027
                    </span>
                </div>

                <div className="mt-4">
                    <p className="text-slate-400 text-sm">
                        <span className="text-slate-300 font-medium">GPA:</span> 3.78 / 4.0
                    </p>
                </div>
            </div>

            {/* Undergrad Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-white font-semibold text-lg tracking-tight">
                            Bachelor of Technology in Computer Science
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                            GITAM University • Hyderabad
                        </p>
                    </div>
                    <span className="font-mono text-xs text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">
                        Oct 2021 – Apr 2025
                    </span>
                </div>

                {/* <div className="mt-3">
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Strong foundation in core CS subjects, programming, and problem-solving through coursework and projects.
                      </p>
                    </div> */}

                <div className="mt-4">
                    <p className="text-slate-400 text-sm">
                        <span className="text-slate-300 font-medium">CGPA:</span> 7.68 / 10
                    </p>
                </div>
            </div>
        </div>
    )
}
