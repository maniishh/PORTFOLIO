import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolio";
import {
  ExternalLink,
  GitBranch,
  ChevronRight,
  X,
  Layers,
} from "lucide-react";
import { cn } from "../utils/cn";

const tagColors: Record<string, string> = {
  Go: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Redis: "bg-red-500/10 text-red-400 border-red-500/20",
  Docker: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  gRPC: "bg-green-500/10 text-green-400 border-green-500/20",
  Prometheus: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  React: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  WebSocket: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  PostgreSQL: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Java: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Spring Boot": "bg-green-500/10 text-green-400 border-green-500/20",
  Kafka: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  AWS: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Kubernetes: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  FastAPI: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "OpenAI API": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  MongoDB: "bg-green-500/10 text-green-400 border-green-500/20",
  GraphQL: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  D3: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "D3.js": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  ClickHouse: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "AWS Lambda": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  S3: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  CloudFront: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Terraform: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Express: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  "React Native": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Tailwind CSS": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  CSS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  SQL: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "C++": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Vue: "bg-green-500/10 text-green-400 border-green-500/20",
  "Vue.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "GitHub Actions": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  "System Design": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Agile / Scrum": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Testing (Jest, Cypress)": "bg-red-500/10 text-red-400 border-red-500/20",
  Git: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "GitHub": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  "CI/CD": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of production-grade systems and applications I&apos;ve architected and built.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              onClick={() => setSelectedProject(i)}
              className={cn(
                "group relative p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 cursor-pointer card-glow transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 flex flex-col"
              )}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Layers className="w-5 h-5 text-primary-light" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-slate-100 text-lg mb-2 group-hover:text-primary-light transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "px-2 py-0.5 rounded-md text-[10px] font-medium border",
                      tagColors[tag] || "bg-slate-800 text-slate-400 border-slate-700"
                    )}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-slate-500">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* View button */}
              <div className="flex items-center gap-1 text-xs font-semibold text-primary-light opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
                <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl"
              >
                <div className="p-6 sm:p-8">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Layers className="w-6 h-6 text-primary-light" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-2">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {projects[selectedProject].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs font-medium border",
                          tagColors[tag] || "bg-slate-800 text-slate-400 border-slate-700"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                      Source Code
                    </a>
                    {projects[selectedProject].demo && (
                      <a
                        href={projects[selectedProject].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold hover:bg-slate-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
