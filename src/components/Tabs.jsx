export default function Tabs({ activeTab, setActiveTab, tabClass }) {
  return (
    <div className="flex justify-evenly bg-white/5 border border-white/10 rounded-2xl p-2">

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
  );
}
