import { ArrowUp, Github } from "lucide-react";
import { OWNER_INFO } from "../../data/portfolioData.ts";
import { scrollToSection } from "../../utils/formatters.ts";

interface FooterProps {
    contactEmail: string;
}

export default function Footer({ contactEmail }: FooterProps) {
    const effectiveEmail = contactEmail || OWNER_INFO.contactEmail;

    return (
        <footer className="w-full border-t border-slate-200/80 bg-white py-12 transition-colors dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
                    <div>
                        <div className="font-display text-lg font-bold text-slate-900 dark:text-white">
                            Hashim Hussain
                        </div>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Full-Stack, Android & Systems Software Engineer ·
                            Age 19
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
                        <a
                            href="#about"
                            className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#github"
                            className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                        <a
                            href="https://github.com/AurionSoftwaresDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            <Github className="h-3.5 w-3.5" />
                            <span>@AurionSoftwaresDev</span>
                        </a>
                    </div>

                    <button
                        onClick={() => scrollToSection("top")}
                        aria-label="Scroll to top"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        <span>Top</span>
                        <ArrowUp className="h-3.5 w-3.5" />
                    </button>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                    <div>
                        © {new Date().getFullYear()} Hashim Hussain. All rights
                        reserved.
                    </div>
                    <div className="font-mono text-[11px]">
                        {effectiveEmail}
                    </div>
                </div>
            </div>
        </footer>
    );
}
