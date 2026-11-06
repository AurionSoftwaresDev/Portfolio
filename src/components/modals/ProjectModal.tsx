import { useEffect } from "react";
import { X, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem } from "../../types/index.ts";

interface ProjectModalProps {
    project: ProjectItem | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (project) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900 z-10"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        aria-label="Close project modal"
                        className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    {/* Project Preview Image */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                    "/images/owner_image.png";
                            }}
                        />
                    </div>

                    {/* Header Info */}
                    <div className="mt-6">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                {project.category}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{project.status}</span>
                        </div>

                        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {project.title}
                        </h2>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Metrics if available */}
                    {project.metrics && project.metrics.length > 0 && (
                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-y border-slate-100 dark:border-slate-800 py-4">
                            {project.metrics.map((m) => (
                                <div key={m.label} className="space-y-0.5">
                                    <span className="text-[11px] text-slate-400 block">
                                        {m.label}
                                    </span>
                                    <span className="font-mono text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                                        {m.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Description */}
                    <div className="mt-6 space-y-4">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                            System Architecture & Overview
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {project.longDescription}
                        </p>

                        {project.architectureNotes &&
                            project.architectureNotes.length > 0 && (
                                <div className="space-y-2 pt-2">
                                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                                        Key Technical Invariants &
                                        Implementation:
                                    </span>
                                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                                        {project.architectureNotes.map(
                                            (note, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <span className="text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                                                        0{i + 1}.
                                                    </span>
                                                    <span>{note}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            )}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                            Engineered With
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((t) => (
                                <span
                                    key={t}
                                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-8 flex items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                            Author:{" "}
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                                Hashim Hussain
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                >
                                    <Github className="h-3.5 w-3.5" />
                                    <span>GitHub Profile</span>
                                </a>
                            )}
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
