import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, FileText } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const stats = [
  { value: "3+", label: "Full-Stack Projects" },
  { value: "2+", label: "Live Deployments" },
  { value: "500+", label: "DSA Problems Solved" },
  { value: "3+", label: "Hackathons Participated" },
];

const typingTexts = [
  "Turning Ideas into Products",
  "Full-Stack MERN Developer",
  "Clean Code & System Design",
  "DSA & Problem Solving",
];
export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingTexts[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-50 mb-4 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary-light via-accent to-primary-dark bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium mb-6">
            {personalInfo.title}
          </h2>

          {/* Typing text */}
          <div className="flex items-center justify-center gap-1 mb-10">
            <span className="text-base sm:text-lg text-slate-400">I build</span>
            <span className="text-base sm:text-lg font-semibold text-primary-light typing-cursor min-w-[120px] text-left">
              {displayText}
            </span>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-slate-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
