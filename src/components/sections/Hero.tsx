import { ArrowDown, Cpu, Globe, Smartphone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import OwnerCard from "../cards/OwnerCard.tsx";

interface HeroProps {
    contactEmail: string;
    onOpenContact: () => void;
}

export default function Hero({ contactEmail, onOpenContact }: HeroProps) {
    return (
        <section
            id="top"
            className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/70 dark:border-slate-800/80"
        >
            {/* Background subtle mesh decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-3xl" />
                <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-slate-200/30 dark:bg-slate-800/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Split Grid: Typography on Left, Owner Card on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                    {/* Left Column: Typographic Hierarchy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        {/* Clean unboxed editorial kicker */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                Hashim Hussain
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>19-Year-Old Engineer</span>
                            <span aria-hidden="true">·</span>
                            <span>Web, Mobile & Systems</span>
                            <span aria-hidden="true">·</span>
                            <span>Remote Worldwide</span>
                        </div>

                        {/* Display headline */}
                        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                            Building software across all computing layers.
                        </h1>

                        {/* Lead copy */}
                        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                            I develop software across multiple platforms and
                            thrive on low-level efficiency as much as modern web
                            aesthetics. From bare-metal x86-64 assembly and C++
                            graphics to cross-platform Flutter apps and
                            distributed TypeScript services.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 rounded-xl transition-all shadow-sm whitespace-nowrap shrink-0"
                            >
                                <span>View Projects</span>
                                <ArrowDown className="h-4 w-4" />
                            </a>

                            <a
                                href="#skills"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl transition-all shadow-sm whitespace-nowrap shrink-0"
                            >
                                <span>Explore Stacks</span>
                            </a>

                            <button
                                onClick={onOpenContact}
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                            >
                                <span>Contact Direct</span>
                            </button>
                        </div>

                        {/* Specializations strip */}
                        <div className="mt-10 pt-6 border-t border-slate-200/70 dark:border-slate-800/80">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                                Core Specializations
                            </span>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-medium">
                                    <Globe className="h-3.5 w-3.5 text-blue-500" />
                                    Full-Stack Web (Next.js/React/Node)
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-medium">
                                    <Smartphone className="h-3.5 w-3.5 text-emerald-500" />
                                    Mobile & Android (Flutter/Kotlin)
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-medium">
                                    <Cpu className="h-3.5 w-3.5 text-purple-500" />
                                    Systems & Graphics (C++, Rust, x86-64)
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-medium">
                                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                                    AI & Agent Workflows (Python/FastAPI)
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Owner Card */}
                    <div className="lg:col-span-5 flex justify-center">
                        <OwnerCard
                            contactEmail={contactEmail}
                            onOpenContact={onOpenContact}
                        />
                    </div>
                </div>

                {/* Metrics Strip */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200/80 dark:border-slate-800/80 pt-10">
                    <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 p-5">
                        <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                            14+
                        </div>
                        <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                            Programming Languages
                        </div>
                        <div className="mt-1 text-[11px] text-slate-400">
                            From x86-64 Asm to Rust, TS & Dart
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 p-5">
                        <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                            6
                        </div>
                        <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                            Computing Platforms
                        </div>
                        <div className="mt-1 text-[11px] text-slate-400">
                            Web, Mobile, Desktop, Systems, Cloud, AI
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 p-5">
                        <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                            50+
                        </div>
                        <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                            Technologies & Frameworks
                        </div>
                        <div className="mt-1 text-[11px] text-slate-400">
                            End-to-end full-stack capabilities
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 p-5">
                        <div className="font-display text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                            19
                        </div>
                        <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                            Years Old
                        </div>
                        <div className="mt-1 text-[11px] text-slate-400">
                            Relentless builder with deep curiosity
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
