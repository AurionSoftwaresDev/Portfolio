import { PHILOSOPHY_POINTS } from "../../data/portfolioData.ts";
import {
    Layers,
    Terminal,
    Sparkles,
    Cpu,
    Globe,
    Smartphone,
} from "lucide-react";
import { motion } from "motion/react";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 border-b border-slate-200/70 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl">
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Background & Mindset
                    </div>
                    <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Engineering across the entire computing stack.
                    </h2>
                    <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        I am a 19-year-old software engineer driven by an
                        obsession with how computer systems operate under the
                        hood. While most developers remain confined to a single
                        frontend or backend silo, I enjoy traversing the
                        continuum from bare-metal hardware and assembly to fluid
                        web interfaces and cross-platform native applications.
                    </p>
                </div>

                {/* 3 Philosophy Pillars */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PHILOSOPHY_POINTS.map((point, idx) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                                    0{idx + 1}.
                                </span>
                                <span className="text-xs text-slate-400">
                                    Core Principle
                                </span>
                            </div>
                            <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                                {point.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Multi-Platform Competencies Grid */}
                <div className="mt-14 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                        <div>
                            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                                Multi-Platform Development Domains
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                How technical versatility translates into
                                practical software delivery
                            </p>
                        </div>
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            Cross-Platform · Polyglot Architecture
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                                <Globe className="h-4 w-4 text-blue-500" />
                                <span>Full-Stack Web</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Next.js, React 19, TypeScript, Express, and
                                Tailwind CSS. Crafting fluid, responsive web
                                applications with server-side rendering and
                                sub-second interactions.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                                <Smartphone className="h-4 w-4 text-emerald-500" />
                                <span>Mobile & Android</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Dart & Flutter alongside native Kotlin and
                                Android SDK channels. Developing 60-120 FPS
                                mobile interfaces with offline-first SQLite sync
                                and hardware APIs.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                                <Layers className="h-4 w-4 text-indigo-500" />
                                <span>Desktop Applications</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Flutter desktop, Avalonia (.NET XAML), Electron,
                                and JavaFX. Building cross-platform desktop work
                                environments with direct local OS integration.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                                <Cpu className="h-4 w-4 text-purple-500" />
                                <span>Systems & Low-Level</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                x86-64 assembly, C/C++, Rust, Raylib, and
                                OpenGL. Writing custom memory allocators, SIMD
                                vectorized routines, and hardware graphics
                                shaders.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                                <Terminal className="h-4 w-4 text-amber-500" />
                                <span>Backend & Distributed APIs</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                FastAPI, Django REST, Spring Boot, Node.js, and
                                PostgreSQL. Architecting high-concurrency
                                microservices, JWT token lifecycles, and Redis
                                queues.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                                <Sparkles className="h-4 w-4 text-rose-500" />
                                <span>AI, Automation & CV</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                PyTorch, OpenCV, NumPy, and agentic loop
                                systems. Building real-time computer vision
                                streams, custom tools, and automated system
                                workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
