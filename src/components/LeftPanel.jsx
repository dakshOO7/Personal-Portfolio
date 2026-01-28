import React from 'react'

export default function LeftPanel() {
  return (
          <div className="flex flex-col gap-6 w-full lg:w-80 shrink-0 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">

            {/* Profile picture (centered) */}
            <div className="flex justify-center">
              <div className="border border-white/10 bg-zinc-900 overflow-hidden w-36 h-36 rounded-full">
                <img
                  src="/profile.jpg"
                  alt="Daksh Mohan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            {/* Name + Role */}
            <div className="text-center">
              <div className="font-bold text-xl tracking-tight text-white">
                Daksh Mohan
              </div>
              <div className="text-slate-400 text-sm mt-1">
                George Mason University
              </div>
            </div>

            {/* About block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-slate-400 text-sm leading-relaxed">
              <h1 className="text-slate-300 font-semibold text-sm tracking-tight mb-2">
                About
              </h1>
              Master's student in Computer Science with a passion for learning, problem-solving, and exploring how technology
              impacts different fields. Enthusiastic about applying technical skills in collaborative environments.
            </div>

            {/* Social links */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h1 className="text-slate-300 font-semibold text-sm tracking-tight mb-3">
                Social
              </h1>

              <div className="flex gap-3">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dakshmohan7/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/40 hover:text-sky-400 transition-colors text-slate-300"
                >
                  LinkedIn
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/dakshOO7"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/40 hover:text-sky-400 transition-colors text-slate-300"
                >
                  GitHub
                </a>

                {/* Email */}
                <a
                  href="mailto:dakshmohan03@gmail.com"
                  className="p-2 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/40 hover:text-sky-400 transition-colors text-slate-300"
                >
                  Email
                </a>

              </div>
            </div>
          </div>
  )
}
