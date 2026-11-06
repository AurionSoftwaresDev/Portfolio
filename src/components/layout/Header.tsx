import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../hooks/useTheme.ts";

interface HeaderProps {
    onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/90">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
                {/* Zone 1: Single text element wordmark */}
                <a
                    href="#top"
                    className="font-display text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400 whitespace-nowrap shrink-0"
                >
                    Hashim Hussain
                </a>

                {/* Zone 2: 4-5 clean single-line text navigation links */}
                <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <a
                        href="#about"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                        Skills & Stacks
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                        Projects
                    </a>
                    <a
                        href="#github"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                        GitHub Activity
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                        Contact
                    </a>
                </nav>

                {/* Zone 3: 1 primary action (+ Theme toggle) */}
                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle visual theme"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-white cursor-pointer"
                    >
                        {isDark ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                    </button>

                    <button
                        onClick={onOpenResume}
                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                        View Resume
                    </button>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                        <span>Get in Touch</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </header>
    );
}
