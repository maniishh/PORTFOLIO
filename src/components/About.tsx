import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, MapPin, BookOpen, Lightbulb, Zap } from "lucide-react";
import { personalInfo, certifications, achievements } from "../data/portfolio";
import { cn } from "../utils/cn";

const cards = [
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimizing systems for scale - from caching strategies to database query optimization and load balancing.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Breaking down complex engineering challenges into elegant, maintainable solutions with clean architecture.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Staying ahead with new technologies, contributing to open-source, and sharing knowledge through mentoring.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32">
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Get to know me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A passion-driven engineer who thrives on building products that make a real impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - Detailed about */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Info cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: MapPin, label: "Location", value: personalInfo.location },
                { icon: Calendar, label: "Experience", value: "4+ Years" },
                { icon: Award, label: "Status", value: "" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80"
                >
                  <item.icon className="w-4 h-4 text-primary-light mb-2" />
                  <div className="text-xs text-slate-500 font-medium mb-0.5">{item.label}</div>
                  <div className="text-sm text-slate-200 font-semibold flex items-center gap-1.5">
                    {item.label === "Status" ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                        Available
                      </>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio paragraphs */}
        <div className="space-y-4">
  <p className="text-slate-300 leading-relaxed">
    I&apos;m a <span className="text-slate-100 font-medium">Full-Stack Developer</span> skilled in building scalable MERN applications with a strong foundation in data structures and system design.
  </p>
  <p className="text-slate-300 leading-relaxed">
    I have developed and deployed full-stack projects involving authentication, media streaming, and RESTful APIs, focusing on performance, clean architecture, and real-world usability.
  </p>
  <p className="text-slate-300 leading-relaxed">
    I continuously improve my skills through DSA practice, project development, and exploring modern backend and system design concepts.
  </p>
</div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary-light" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200">{cert.name}</div>
                      <div className="text-xs text-slate-500">{cert.issuer} &middot; {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="text-center lg:text-left mb-2">
              <h3 className="text-lg font-semibold text-slate-100">What I Bring</h3>
            </div>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={cn(
                  "p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 card-glow transition-all duration-300 hover:border-primary/30 group"
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-5 h-5 text-primary-light" />
                </div>
                <h4 className="font-semibold text-slate-100 mb-2">{card.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-100 mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80"
                  >
                    <div className="text-xs text-primary-light font-semibold mb-1">{ach.year}</div>
                    <div className="text-sm font-semibold text-slate-200 mb-1">{ach.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{ach.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
