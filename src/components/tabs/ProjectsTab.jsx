import React from 'react'

export default function ProjectsTab() {
    return (
        <div className="space-y-6">

            {/* Header */}
            <div>
                <h2 className="text-white text-2xl font-bold tracking-tight">
                    Projects
                </h2>
                {/* <p className="text-slate-400 text-sm mt-1">
                      Selected work demonstrating frontend development and problem-solving.
                    </p> */}
            </div>

            {/* Featured Project Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">

                {/* Project Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-white text-xl font-semibold tracking-tight">
                            Personal Portfolio Website
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                            React • Tailwind CSS • Responsive UI
                        </p>
                    </div>
                    
                    {/* github link */}
                    <a
                        href="https://github.com/dakshOO7/YOUR_PORTFOLIO_REPO"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-sky-500/40 hover:text-sky-400 transition"
                    >
                        View on GitHub
                    </a>
                </div>


                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mt-5 max-w-3xl">
                    Built a personal portfolio website using React and Tailwind CSS to present academic background, skills,
                    and experience in a structured and interactive way. The site uses a tab-based layout to switch between
                    sections without full page reloads.
                </p>

                {/* Bullet Highlights */}
                <ul className="mt-4 space-y-2 text-slate-400 text-sm list-disc pl-5">
                    <li>
                        Implemented a multi-section layout with reusable React components for maintainability.
                    </li>
                    <li>
                        Used React state to manage tab navigation and dynamically render content.
                    </li>
                    <li>
                        Designed a clean dark-themed interface with Tailwind CSS utility classes.
                    </li>
                    <li>
                        Ensured the layout remains responsive across different screen sizes using Flexbox.
                    </li>
                </ul>

                {/* Tech Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-3">
                    {["React", "Tailwind CSS", "JavaScript", "Flexbox", "Vite"].map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 hover:border-sky-500/40 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* second project  */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                    {/* Left side: Title */}
                    <div>
                        <h3 className="text-white text-xl font-semibold tracking-tight">
                            Web GIS Application for Land Parcel Measurement
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                            Research Paper • Web GIS • Data Storage
                        </p>
                    </div>

                    {/* Right side: Badge + GitHub link  */}
                    <div className="flex flex-col items-start sm:items-end gap-2">

                        <span className="font-mono text-xs text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full w-fit">
                            Presented • ICACTEA-2025
                        </span>

                        <a
                            href="https://github.com/dakshOO7/GIS-project.git"
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-sky-500/40 hover:text-sky-400 transition w-fit"
                        >
                            View on GitHub
                        </a>

                    </div>

                </div>


                <p className="text-slate-400 text-sm leading-relaxed mt-5 max-w-3xl">
                    Research work focused on developing a web-based GIS application to accurately
                    measure land parcel areas and store structured GIS information. The paper was
                    presented at the International Conference on Algorithms and Computational
                    Theory for Engineering Applications (ICACTEA-2025), Aditya University.
                </p>

                <ul className="mt-4 space-y-2 text-slate-400 text-sm list-disc pl-5">
                    <li>
                        Built a web application to calculate and visualize land parcel area using GIS data.
                    </li>
                    <li>
                        Designed a structured approach for storing and retrieving geographic information.
                    </li>
                    <li>
                        Presented research findings in an academic conference setting.
                    </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                    {["GIS", "Web Application", "Land Parcel Data", "Research Paper", "Conference Presentation"].map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 hover:border-sky-500/40 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>


        </div>
    )
}
