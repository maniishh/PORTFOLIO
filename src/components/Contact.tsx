import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { cn } from "../utils/cn";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      action: () => handleCopy(personalInfo.email, "email"),
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      action: () => handleCopy(personalInfo.phone, "phone"),
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
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
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating or have an opportunity? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80",
                    info.action && "cursor-pointer hover:border-slate-700 transition-colors"
                  )}
                  onClick={info.action}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4.5 h-4.5 text-primary-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 font-medium">{info.label}</div>
                    <div className="text-sm text-slate-200 font-medium truncate">{info.value}</div>
                  </div>
                  {info.action && (
                    <button className="flex-shrink-0 p-1.5 rounded-md text-slate-500 hover:text-primary-light transition-colors">
                      {copied === (info.label === "Email" ? "email" : "phone") ? (
                        <Check className="w-4 h-4 text-success" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                Find Me Online
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-primary/30 hover:text-slate-100 transition-all duration-200 flex-1"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-primary/30 hover:text-slate-100 transition-all duration-200 flex-1"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-semibold text-slate-200">Currently Available</span>
              </div>
            <p className="text-xs text-slate-500 leading-relaxed">
  Actively seeking Software Development Engineer (SDE) and Full-Stack (MERN) roles where I can build scalable applications and grow as a developer. Open to internships and entry-level opportunities.
</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <MessageSquare className="w-5 h-5 text-primary-light" />
                    <h3 className="text-lg font-semibold text-slate-100">Send a Message</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="Job opportunity / Collaboration"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
