import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolio";
import { cn } from "../utils/cn";
import {
  Terminal,
  Layout,
  Server,
  Wrench,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Terminal,
  Frontend: Layout,
  "Backend & Cloud": Server,
  "Tools & Practices": Wrench,
};

const categoryColors = [
  "border-amber-500/30 bg-amber-500/5",
  "border-sky-500/30 bg-sky-500/5",
  "border-emerald-500/30 bg-emerald-500/5",
  "border-violet-500/30 bg-violet-500/5",
];

const barColors = [
  "bg-amber-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-violet-500",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-light text-xs font-semibold uppercase tracking-wider mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            My Tech Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build scalable full-stack applications and solve real-world problems.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skills.map((skill, i) => {
            const Icon = categoryIcons[skill.category] || Terminal;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border",
                  activeTab === i
                    ? `${categoryColors[i]} text-slate-200 border-opacity-60`
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-300 hover:border-slate-700"
                )}
              >
                <Icon className="w-4 h-4" />
                {skill.category}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {skills[activeTab].items.map((skill, i) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-200">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "h-full rounded-full skill-bar-fill",
                    barColors[activeTab]
                  )}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* All skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Complete Skill Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.flatMap((cat) =>
              cat.items.map((skill) => (
                <span
                  key={skill.name}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200",
                    "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-primary/40 hover:text-primary-light cursor-default"
                  )}
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
