import { useRef } from "react";

export default function Tabs({ activeTab, setActiveTab, tabClass }) {
  const scrollerRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* scroll buttons (mobile only) */}
      <button
        type="button"
        onClick={() => scrollByAmount(-180)}
        className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10
                   h-7 w-7 rounded-full bg-black/40 border border-white/10
                   text-slate-200 flex items-center justify-center"
        aria-label="Scroll tabs left"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollByAmount(180)}
        className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10
                   h-7 w-7 rounded-full bg-black/40 border border-white/10
                   text-slate-200 flex items-center justify-center"
        aria-label="Scroll tabs right"
      >
        ›
      </button>

      {/* scrollable tabs row */}
      <div
        ref={scrollerRef}
        className="flex gap-2 
   overflow-x-auto whitespace-nowrap scroll-smooth 
   sm:overflow-visible sm:justify-evenly sm:w-full
   bg-white/5 border border-white/10 rounded-2xl p-2
    px-3 sm:px-2
    [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {/* Hide scrollbar in WebKit (Chrome/Safari) */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        <button onClick={() => setActiveTab("Education")} className={tabClass("Education")}>
          Education
        </button>
        <button onClick={() => setActiveTab("Experience")} className={tabClass("Experience")}>
          Experience
        </button>
        <button onClick={() => setActiveTab("Skills")} className={tabClass("Skills")}>
          Skills
        </button>
        <button onClick={() => setActiveTab("Projects")} className={tabClass("Projects")}>
          Projects
        </button>
        <button onClick={() => setActiveTab("Resume")} className={tabClass("Resume")}>
          Resume
        </button>
      </div>

      {/* stronger fade hints */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 rounded-l-2xl bg-gradient-to-r from-[#0a0a0a] to-transparent sm:hidden" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 rounded-r-2xl bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      {/* mobile hint text */}
      <div className="sm:hidden text-[10px] text-slate-500 text-right mt-2">
        Swipe →
      </div>
    </div>
  );
}
