import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experiences, education } from "../data/portfolio";
import { Building2, GraduationCap, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../utils/cn";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
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
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Professional Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A track record of building projects,coding and Data Structure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {i < experiences.length - 1 && (
                    <div className="absolute left-[19px] top-14 bottom-0 w-px bg-slate-800" />
                  )}

                  <div
                    className={cn(
                      "relative flex gap-4 p-5 rounded-xl border transition-all duration-300 cursor-pointer",
                      expandedJob === i
                        ? "bg-slate-900/80 border-primary/30"
                        : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                    )}
                    onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 mt-1">
                      <div className={cn(
                        "w-[38px] h-[38px] rounded-lg flex items-center justify-center border transition-colors",
                        expandedJob === i
                          ? "bg-primary/15 border-primary/40"
                          : "bg-slate-800 border-slate-700"
                      )}>
                        <Building2 className="w-4 h-4 text-primary-light" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="font-semibold text-slate-100 text-lg">
                            {exp.role}
                          </h3>
                          <div className="text-sm text-primary-light font-medium">
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-xs text-slate-500 font-medium whitespace-nowrap">
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400 font-medium">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-sm text-slate-400 leading-relaxed mb-3">
                        {exp.description}
                      </p>

                      {/* Expandable bullets */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedJob === i ? "auto" : 0,
                          opacity: expandedJob === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mb-3">
                          {exp.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-primary-light transition-colors font-medium">
                        {expandedJob === i ? (
                          <>
                            Show Less <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            Show Details <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Sidebar */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-light" />
                Education
              </h3>
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                {education.map((edu, i) => (
                  <div key={i}>
                    <div className="font-semibold text-slate-100">{edu.institution}</div>
                    <div className="text-sm text-primary-light font-medium mt-1">{edu.degree}</div>
                    <div className="text-xs text-slate-500 mt-1">
                      {edu.period} &middot; GPA: {edu.gpa}
                    </div>
                    <div className="mt-4">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Key Coursework
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-1 rounded-md bg-slate-800/80 text-xs text-slate-400 font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Facts */}
        <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <h3 className="text-lg font-semibold text-slate-100 mb-4">
    Highlights
  </h3>
  <div className="space-y-3">
    {[
      { label: "Projects Built", value: "3+" },
      { label: "DSA Problems Solved", value: "500+" },
      { label: "Technologies Used", value: "8+" },
      { label: "Hackathons Participated", value: "3+" },
    ].map((fact, i) => (
      <div
        key={i}
        className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"
      >
        <span className="text-sm text-slate-400">{fact.label}</span>
        <span className="text-sm font-bold text-slate-200 font-mono">
          {fact.value}
        </span>
      </div>
    ))}
  </div>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
