import { useState } from "react";
import {
    Mail,
    Check,
    Copy,
    ExternalLink,
    Sparkles,
    MapPin,
    ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { OWNER_INFO } from "../../data/portfolioData.ts";
import { useClipboard } from "../../hooks/useClipboard.ts";

interface OwnerCardProps {
    contactEmail: string;
    onOpenContact: () => void;
}

export default function OwnerCard({
    contactEmail,
    onOpenContact,
}: OwnerCardProps) {
    const [imgError, setImgError] = useState(false);
    const effectiveEmail = contactEmail || OWNER_INFO.contactEmail;
    const { copied, copy } = useClipboard();

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900"
        >
            {/* Top Header Badge Row */}
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Verified Engineer · Age 14</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Remote Worldwide</span>
                </div>
            </div>

            {/* Main Identity Area */}
            <div className="mt-5 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative shrink-0">
                    <div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800">
                        {!imgError ? (
                            <img
                                src="/images/owner_image.png"
                                alt="Hashim Hussain"
                                onError={() => setImgError(true)}
                                className="h-full w-full object-cover object-top"
                                loading="eager"
                            />
                        ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold text-2xl">
                                HH
                            </div>
                        )}
                    </div>
                    <div
                        className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm ring-2 ring-white dark:ring-slate-900"
                        title="14 Years Old"
                    >
                        <span className="text-[10px] font-bold">14</span>
                    </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Hashim Hussain
                            </h2>
                            <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                                Full-Stack • Android • Systems • Low-Level
                                Engineer
                            </p>
                        </div>
                        <a
                            href="https://github.com/AurionSoftwaresDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        >
                            <span>@AurionSoftwaresDev</span>
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>

                    <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Multi-platform builder bridging low-level systems
                        (x86-64 assembly, C/C++, Rust) with modern mobile
                        (Flutter, Kotlin) and full-stack web applications.
                    </p>
                </div>
            </div>

            {/* Core Disciplines List */}
            <div className="mt-5 space-y-1.5 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/60">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Core Disciplines
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
                    <div className="flex items-center gap-1.5">
                        <span className="text-blue-500">✦</span>
                        <span>Full-Stack Web Dev</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-blue-500">✦</span>
                        <span>UI/UX Interface Design</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-blue-500">✦</span>
                        <span>Android Native / Mobile</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-blue-500">✦</span>
                        <span>Systems & Software Dev</span>
                    </div>
                </div>
            </div>

            {/* Technologies Row */}
            <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-medium">Key Technologies:</span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                        9 Core Engines
                    </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {[
                        "Dart",
                        "Kotlin",
                        "TypeScript",
                        "JavaScript",
                        "Python",
                        "Java",
                        "x86-64 Asm",
                        "C/C++",
                        "Rust",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Currently Exploring */}
            <div className="mt-3.5 flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                    <span>Currently Exploring:</span>
                </span>
                <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">
                    Go (Golang)
                </span>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <span className="font-mono font-semibold text-red-500 dark:text-red-400">
                    Ruby
                </span>
            </div>

            {/* Email & Actions */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 max-w-full">
                    <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="truncate font-mono">{effectiveEmail}</span>
                    <button
                        onClick={() => copy(effectiveEmail)}
                        title="Copy email to clipboard"
                        className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                    >
                        {copied ? (
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                            <Copy className="h-3.5 w-3.5" />
                        )}
                    </button>
                </div>

                <button
                    onClick={onOpenContact}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer text-center whitespace-nowrap shrink-0"
                >
                    Send Hashim an Email
                </button>
            </div>
        </motion.div>
    );
}
