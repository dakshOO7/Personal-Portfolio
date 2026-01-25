import './App.css'
import LeftPanel from "./components/LeftPanel";
import Tabs from "./components/Tabs";
import EducationTab from "./components/tabs/EducationTab";
import ExperienceTab from "./components/tabs/ExperienceTab";
import SkillsTab from "./components/tabs/SkillsTab";
import ProjectsTab from "./components/tabs/ProjectsTab";
import ResumeTab from "./components/tabs/ResumeTab";








import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState("Education");

  // checking whihc tab is active
  const tabClass = (tabName) =>
    `text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-xl border transition-colors ${
    // checking if the selected tab is active or not
    activeTab === tabName
      ? "text-white bg-sky-500/10 border-sky-500/30"
      : "text-slate-400 border-transparent hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-black text-slate-200">
      <div className="w-full  mx-auto px-8 py-12">

        {/* Flex Row: Left Panel + Right Panel */}
        <div className="flex  gap-8">

          {/* Left Panel */}
          <LeftPanel />

          {/* Right Panel */}
          <div className="flex-1 flex flex-col gap-6 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 ">
            <Tabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabClass={tabClass}
            />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-[65vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20 transition">

              {/* Tabs */}

              {/* Education tab */}
              {activeTab === "Education" && <EducationTab />}

              {/* Experience */}
              {activeTab === "Experience" && <ExperienceTab />}

              {/* Skills Section */}
              {activeTab === "Skills" && <SkillsTab />}


              {/* Projects */}
              {activeTab === "Projects" && <ProjectsTab />}


              {/* Resume */}
              {activeTab === "Resume" && <ResumeTab />}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


