import { Code2, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary-light" />
            </div>
            <span className="font-bold text-sm text-slate-200">
              Manish<span className="text-primary-light">.dev</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs text-slate-500">
            Built with
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            and React &middot; {new Date().getFullYear()}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary-light transition-colors font-medium"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
