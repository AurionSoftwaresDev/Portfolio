import { useState, useMemo } from "react";
import { PROJECTS_DATA } from "../../data/portfolioData.ts";
import { ProjectItem } from "../../types/index.ts";
import ProjectModal from "../modals/ProjectModal.tsx";
import { ArrowUpRight, Sparkles, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FILTER_TABS = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & Agents" },
    { id: "systems", label: "Systems & Low-Level" },
    { id: "web", label: "Full-Stack Web" },
    { id: "mobile", label: "Mobile & Android" },
] as const;

export default function ProjectsSection() {
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [activeProject, setActiveProject] = useState<ProjectItem | null>(
        null,
    );

    const filteredProjects = useMemo(() => {
        if (selectedFilter === "all") return PROJECTS_DATA;
        return PROJECTS_DATA.filter((p) => p.category === selectedFilter);
    }, [selectedFilter]);

    const secondaryProjects = useMemo(() => {
        return filteredProjects.filter((p) => p.id !== "galaxy-ai-agent");
    }, [filteredProjects]);

    return (
        <section
            id="projects"
            className="py-20 border-b border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/70 dark:border-slate-800/80">
                    <div>
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Works & Active Development
                        </div>
                        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Projects & Engineering Workflows
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                            Authentic software built for multi-platform
                            environments. Inspect active projects and track code
                            releases on GitHub.
                        </p>
                    </div>

                    {/* Interactive filter tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/70 dark:border-slate-800">
                        {FILTER_TABS.map((tab) => {
                            const active = selectedFilter === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedFilter(tab.id)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                                        active
                                            ? "bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs font-semibold"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Flagship Card: Galaxy AI Agent (Real project from README) */}
                {(selectedFilter === "all" || selectedFilter === "ai") &&
                    PROJECTS_DATA.length > 0 && (
                        <div className="mt-10">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                Currently Building · Active Development
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                onClick={() =>
                                    setActiveProject(PROJECTS_DATA[0])
                                }
                                className="group cursor-pointer rounded-2xl border border-blue-200/90 dark:border-blue-900/60 bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    <div className="lg:col-span-7 space-y-4">
                                        <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                                            <Sparkles className="h-4 w-4 text-amber-500" />
                                            <span>
                                                Cross-Platform AI Automation
                                            </span>
                                            <span aria-hidden="true">·</span>
                                            <span>Flutter & Python</span>
                                        </div>

                                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            Galaxy AI Agent
                                        </h3>

                                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            A cross-platform desktop AI agent
                                            focused on automation, system
                                            interaction, APIs, tools and
                                            intelligent workflows. Built with a
                                            dual-process architecture combining
                                            Flutter for a high-frame-rate UI and
                                            FastAPI/Python for low-latency
                                            system actions.
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {PROJECTS_DATA[0].technologies.map(
                                                (t) => (
                                                    <span
                                                        key={t}
                                                        className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-200 border border-blue-100 dark:border-blue-900/50"
                                                    >
                                                        {t}
                                                    </span>
                                                ),
                                            )}
                                        </div>

                                        <div className="pt-4 flex items-center gap-4 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                            <span className="flex items-center gap-1">
                                                <span>
                                                    Inspect Architecture &
                                                    Details
                                                </span>
                                                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </span>
                                            <span className="text-slate-400">
                                                ·
                                            </span>
                                            <span className="text-slate-500 dark:text-slate-400 font-normal">
                                                Private Development
                                            </span>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5">
                                        <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-inner">
                                            <img
                                                src={PROJECTS_DATA[0].image}
                                                alt="Galaxy AI Agent"
                                                className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                {/* Secondary Projects Grid (or GitHub Repo Placeholder) */}
                {secondaryProjects.length > 0 ? (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {secondaryProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{
                                        delay: idx * 0.05,
                                        duration: 0.3,
                                    }}
                                    onClick={() => setActiveProject(project)}
                                    className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all cursor-pointer"
                                >
                                    <div>
                                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-500"
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>

                                        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                            <span className="uppercase font-semibold tracking-wider text-blue-600 dark:text-blue-400">
                                                {project.category}
                                            </span>
                                            <span>{project.status}</span>
                                        </div>

                                        <h4 className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h4>

                                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {project.technologies
                                                .slice(0, 3)
                                                .map((t) => (
                                                    <span
                                                        key={t}
                                                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                        </div>

                                        <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                            <span>View Specifications</span>
                                            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    /* Clean Upcoming / GitHub Publishing Hub Card */
                    <div className="mt-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-8 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                            <Github className="h-6 w-6" />
                        </div>

                        <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                            GitHub Repositories & Upcoming Work
                        </h3>

                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                            New open-source repositories and cross-platform
                            projects are being added directly under{" "}
                            <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                                @AurionSoftwaresDev
                            </span>
                            . You can follow and star new releases on GitHub.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <a
                                href="https://github.com/AurionSoftwaresDev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-colors shadow-sm"
                            >
                                <Github className="h-4 w-4" />
                                <span>Visit GitHub Profile</span>
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox / Architecture Modal */}
            <ProjectModal
                project={activeProject}
                onClose={() => setActiveProject(null)}
            />
        </section>
    );
}
