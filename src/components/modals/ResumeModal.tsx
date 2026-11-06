import { useState, useEffect } from "react";
import {
    X,
    Printer,
    Mail,
    Github,
    MapPin,
    Check,
    Copy,
    Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { OWNER_INFO } from "../../data/portfolioData.ts";
import { useClipboard } from "../../hooks/useClipboard.ts";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    contactEmail: string;
}

export default function ResumeModal({
    isOpen,
    onClose,
    contactEmail,
}: ResumeModalProps) {
    const effectiveEmail = contactEmail || OWNER_INFO.contactEmail;
    const { copied: copiedText, copy: copyClipboard } = useClipboard();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    const plainTextResume = `HASHIM HUSSAIN
Software Engineer — Full-Stack & Systems Architecture
Email: ${effectiveEmail} | GitHub: github.com/AurionSoftwaresDev | Location: Remote / Worldwide

PROFESSIONAL SUMMARY
Polyglot Software Engineer (Age 19) actively engineering production-grade full-stack web and cross-platform applications with rigorous weekly bug triage, continuous deployment, and performance optimization. Long-term trajectory focused on Systems-Level Software, Game Engine Development, Graphics Pipelines, and Low-Level Computing (leveraging C/C++, Rust, x86-64 assembly, Raylib, and OpenGL). Known for rapid prototyping, deep machine comprehension, and shipping stable, scalable software across Web, Mobile, Desktop, and Backend.

CORE TECHNICAL SKILLS
- Programming Languages: C/C++, Rust, x86-64 Assembly, TypeScript, JavaScript, Python, Java, Kotlin, Dart, C#, PHP, HTML5/CSS3. Exploring: Go, Ruby.
- Full-Stack Web (Present Focus): React, Next.js, Node.js, Express, FastAPI, Django REST, Spring Boot, Tailwind CSS, REST APIs, WebSockets, JWT/OAuth.
- Mobile & Desktop: Flutter, Android Native SDK (Kotlin), Electron, Avalonia (.NET XAML), JavaFX.
- Systems, Graphics & Game Dev (Future Focus): OpenGL, Raylib, SIMD AVX2 vectorization, low-level socket programming, memory management & arena allocators, 3D coordinate math.
- Databases & Infrastructure: PostgreSQL, MySQL, SQLite, Redis, MongoDB, Docker, Git, GitHub Actions CI/CD, Linux/Unix, Bash.

PRODUCTION ENGINEERING EXPERIENCE
Independent Software Engineer & Lead Developer | 2023 - Present
- Architect and maintain production-grade full-stack web and cross-platform applications with end-to-end responsiveness and sub-100ms API response times.
- Implement continuous weekly and daily maintenance cycles: triaging user-reported issues, fixing performance bottlenecks, resolving memory leaks, and optimizing query indexing.
- Enforce clean architectural patterns (Domain-Driven Design, Repository Pattern, MVC/Clean Architecture) across multi-language codebases.
- Engineer cross-platform mobile apps with offline-first SQLite sync and hardware API integration.

FEATURED ENGINEERING PROJECTS
Galaxy AI Agent — Cross-Platform Desktop AI Automation Suite (Active Development)
- Engineered a multi-platform desktop automation agent utilizing Flutter for a 120 FPS responsive UI and Python/FastAPI for an asynchronous background daemon.
- Implemented local IPC / Unix domain socket communication to orchestrate file operations, process monitoring, and developer tool chains with sub-40ms latency.
- Designed an extensible tool registry with sandboxed execution safeguards and local vector indexing for context-aware code analysis.

Systems & Game Engine Engineering Research (Ongoing Focus)
- Prototyping custom 2D/3D graphics pipelines and game loop engines in C++ and Raylib/OpenGL, focusing on zero-allocation frame loops and arena memory pools.
- Experimenting with x86-64 assembly for hand-tuned SIMD vector transforms and studying CPU cache hierarchy, instruction pipelining, and bare-metal abstractions.

ENGINEERING PHILOSOPHY
"Learn deeply. Build practically. Experiment freely."
Relentless focus on iterative software delivery: shipping production code today while mastering the low-level foundation for tomorrow's systems and game engines.`;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs"
                />

                {/* Modal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 12 }}
                    className="relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 sm:p-10 shadow-2xl dark:border-slate-800 dark:bg-slate-950 z-10"
                >
                    {/* Top Control Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-800 print:hidden">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium text-xs">
                                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                                Industry Standard Format
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                Optimized for Tech Recruiters & ATS
                            </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                onClick={() => copyClipboard(plainTextResume)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                            >
                                {copiedText ? (
                                    <>
                                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                                        <span>Copied Text</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-3.5 w-3.5" />
                                        <span>Copy Plaintext</span>
                                    </>
                                )}
                            </button>

                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-xs"
                            >
                                <Printer className="h-3.5 w-3.5" />
                                <span>Print / Save PDF</span>
                            </button>

                            <button
                                onClick={onClose}
                                aria-label="Close resume preview"
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Printable Resume Document Canvas */}
                    <div className="mt-6 space-y-6 text-slate-900 dark:text-slate-100 font-sans print:m-0 print:p-0">
                        {/* Header Block */}
                        <div className="text-center pb-5 border-b border-slate-300 dark:border-slate-800">
                            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
                                Hashim Hussain
                            </h1>
                            <p className="mt-1 font-display text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
                                Software Engineer — Full-Stack & Systems
                                Architecture
                            </p>

                            {/* Contact line */}
                            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-mono">
                                <span className="flex items-center gap-1">
                                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                                    <span>{effectiveEmail}</span>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="text-slate-300 dark:text-slate-700"
                                >
                                    |
                                </span>
                                <a
                                    href="https://github.com/AurionSoftwaresDev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    <Github className="h-3.5 w-3.5 text-slate-400" />
                                    <span>github.com/AurionSoftwaresDev</span>
                                </a>
                                <span
                                    aria-hidden="true"
                                    className="text-slate-300 dark:text-slate-700"
                                >
                                    |
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                    <span>Remote / Worldwide</span>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="text-slate-300 dark:text-slate-700"
                                >
                                    |
                                </span>
                                <span>Age: 19</span>
                            </div>
                        </div>

                        {/* Section 1: Professional Summary */}
                        <div className="space-y-2">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-800">
                                Professional Summary
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                                Polyglot Software Engineer (Age 19) actively
                                engineering production-grade full-stack web and
                                cross-platform applications with rigorous weekly
                                bug triage, continuous deployment, and
                                performance optimization. Long-term technical
                                trajectory focused on{" "}
                                <span className="font-semibold text-slate-900 dark:text-white">
                                    Systems-Level Software, Game Engine
                                    Development, Graphics Pipelines, and
                                    Low-Level Computing
                                </span>{" "}
                                (leveraging C/C++, Rust, x86-64 assembly,
                                Raylib, and OpenGL). Known for rapid
                                prototyping, deep low-level machine
                                comprehension, and shipping stable, scalable
                                software across Web, Mobile, Desktop, and
                                Backend.
                            </p>
                        </div>

                        {/* Section 2: Core Technical Proficiencies */}
                        <div className="space-y-2.5">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-800">
                                Core Technical Proficiencies
                            </h2>
                            <div className="space-y-2 text-xs sm:text-sm">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2">
                                    <span className="md:col-span-3 font-semibold text-slate-900 dark:text-white">
                                        Languages:
                                    </span>
                                    <span className="md:col-span-9 text-slate-700 dark:text-slate-300 font-mono text-xs">
                                        C/C++, Rust, x86-64 Assembly,
                                        TypeScript, JavaScript, Python, Java,
                                        Kotlin, Dart, C#, PHP, HTML5/CSS3 ·{" "}
                                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                            Exploring: Go, Ruby
                                        </span>
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2">
                                    <span className="md:col-span-3 font-semibold text-slate-900 dark:text-white">
                                        Full-Stack Web & Mobile (Present):
                                    </span>
                                    <span className="md:col-span-9 text-slate-700 dark:text-slate-300">
                                        React 19, Next.js, Flutter, Android SDK
                                        (Kotlin), Electron, Node.js, Express,
                                        FastAPI, Django REST, Spring Boot,
                                        Tailwind CSS, REST APIs, WebSockets,
                                        JWT/OAuth.
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2">
                                    <span className="md:col-span-3 font-semibold text-slate-900 dark:text-white">
                                        Systems & Game Dev (Future Focus):
                                    </span>
                                    <span className="md:col-span-9 text-slate-700 dark:text-slate-300">
                                        OpenGL, Raylib, SIMD AVX2 vectorization,
                                        low-level socket programming, memory
                                        management & arena allocators, 3D
                                        coordinate math, shader pipelines.
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2">
                                    <span className="md:col-span-3 font-semibold text-slate-900 dark:text-white">
                                        Databases & DevOps:
                                    </span>
                                    <span className="md:col-span-9 text-slate-700 dark:text-slate-300">
                                        PostgreSQL, MySQL, SQLite, Redis,
                                        MongoDB, Docker, Git/GitHub Actions
                                        CI/CD, Linux/Unix, Bash, Nginx.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Engineering Experience & Production Delivery */}
                        <div className="space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-800">
                                Engineering Experience & Production Delivery
                            </h2>

                            <div className="space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                                    <div>
                                        <span className="font-bold text-slate-900 dark:text-white">
                                            Full-Stack & Mobile Software
                                            Engineering
                                        </span>
                                        <span className="text-slate-500 dark:text-slate-400">
                                            {" "}
                                            — Independent Developer
                                        </span>
                                    </div>
                                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                                        2023 – Present · Continuous Iteration
                                    </span>
                                </div>

                                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc marker:text-blue-500">
                                    <li>
                                        <strong className="text-slate-900 dark:text-white">
                                            Production-Grade Multi-Platform
                                            Development:
                                        </strong>{" "}
                                        Architect and deploy web applications
                                        and mobile clients with full responsive
                                        parity, sub-100ms API response budgets,
                                        and high frame-rate mobile rendering.
                                    </li>
                                    <li>
                                        <strong className="text-slate-900 dark:text-white">
                                            Continuous Issue Resolution &
                                            Maintenance:
                                        </strong>{" "}
                                        Systematically triage bugs and refactor
                                        bottlenecks on a daily and weekly basis,
                                        improving memory consumption, network
                                        payloads, and UI consistency across
                                        releases.
                                    </li>
                                    <li>
                                        <strong className="text-slate-900 dark:text-white">
                                            Architecture & Code Quality:
                                        </strong>{" "}
                                        Enforce clean separation of concerns
                                        using Domain-Driven Design, clean
                                        repository patterns, and strict typing
                                        across TypeScript, Python, and Dart
                                        stacks.
                                    </li>
                                    <li>
                                        <strong className="text-slate-900 dark:text-white">
                                            API & State Design:
                                        </strong>{" "}
                                        Construct resilient backend endpoints
                                        with automated input sanitization, JWT
                                        authorization schemas, and real-time
                                        WebSocket state propagation.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4: Featured Systems & AI Development */}
                        <div className="space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-800">
                                Featured Engineering & Systems Architecture
                            </h2>

                            <div className="space-y-1.5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        Galaxy AI Agent — Cross-Platform Desktop
                                        Automation Suite
                                    </span>
                                    <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">
                                        Flutter · Python · FastAPI · IPC
                                    </span>
                                </div>
                                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc marker:text-blue-500">
                                    <li>
                                        Engineered dual-process architecture
                                        combining a Flutter native desktop
                                        front-end with an asynchronous FastAPI
                                        background daemon over local Unix Domain
                                        Sockets / IPC.
                                    </li>
                                    <li>
                                        Built an extensible tool execution
                                        sandbox with automated terminal
                                        interaction, file system manipulation,
                                        and system telemetry monitoring.
                                    </li>
                                    <li>
                                        Designed vector memory indexing to grant
                                        the agent contextual awareness of local
                                        project repositories for automated
                                        multi-step workflows.
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-1.5 pt-2">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        Systems, Game Engines & Low-Level
                                        Computing Research
                                    </span>
                                    <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-semibold">
                                        C/C++ · Raylib · OpenGL · x86-64 Asm ·
                                        Rust
                                    </span>
                                </div>
                                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc marker:text-blue-500">
                                    <li>
                                        Building game loop engines and 3D
                                        rendering pipelines using C++ and
                                        Raylib/OpenGL, emphasizing custom arena
                                        allocators and zero-allocation per-frame
                                        loops.
                                    </li>
                                    <li>
                                        Implementing x86-64 assembly routines
                                        for AVX2 SIMD matrix operations,
                                        studying CPU register allocation, cache
                                        line optimization, and memory alignment.
                                    </li>
                                    <li>
                                        Targeting advanced systems software,
                                        custom game engines, and low-latency
                                        network architectures as long-term
                                        engineering focus.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5: Engineering Methodology & Philosophy */}
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                            <div>
                                <span className="font-bold uppercase tracking-wider text-slate-400 mr-2">
                                    Development Philosophy:
                                </span>
                                <span className="italic text-slate-700 dark:text-slate-300">
                                    "Learn deeply. Build practically. Experiment
                                    freely."
                                </span>
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                                Open-Source Profile: @AurionSoftwaresDev
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
