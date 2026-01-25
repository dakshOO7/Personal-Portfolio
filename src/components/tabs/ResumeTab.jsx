import React from 'react'

export default function ResumeTab() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h2 className="text-white text-2xl font-bold tracking-tight">Resume</h2>
                    <p className="text-slate-400 text-sm mt-1">
                        View inline or download the PDF.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <a
                        href="/Daksh_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm text-slate-200 hover:border-sky-500/40 hover:text-white transition-colors"
                    >
                        Open in new tab
                    </a>

                    <a
                        href="/Daksh_Resume.pdf"
                        download
                        className="px-4 py-2 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sm text-sky-200 hover:border-sky-500/50 hover:text-white transition-colors"
                    >
                        Download PDF
                    </a>
                </div>
            </div>

            {/* Inline PDF Viewer */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <iframe
                    title="Resume PDF"
                    src="/Daksh_Resume.pdf"
                    className="w-full h-[70vh]"
                />
            </div>
        </div>
    )
}
