import { useState, useMemo } from "react";
import { SKILLS_DATA } from "../../data/portfolioData.ts";
import { Search, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
    { id: "all", label: "All Technologies" },
    { id: "languages", label: "Languages" },
    { id: "systems", label: "Systems & Graphics" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "backend", label: "Backend & APIs" },
    { id: "databases", label: "Databases" },
    { id: "ai", label: "AI & Data" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "tools", label: "Tools & Design" },
] as const;

export default function SkillsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredSkills = useMemo(() => {
        return SKILLS_DATA.filter((skill) => {
            const matchesCategory =
                selectedCategory === "all" ||
                skill.category === selectedCategory;
            const matchesSearch =
                skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                skill.category
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <section
            id="skills"
            className="py-20 border-b border-slate-200/70 dark:border-slate-800/80"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/70 dark:border-slate-800/80">
                    <div>
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Technical Capabilities
                        </div>
                        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Polyglot mastery across languages & tools.
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                            From low-level x86-64 assembly registers and C++
                            memory management to cross-platform Flutter engines
                            and distributed cloud architectures.
                        </p>
                    </div>

                    {/* Currently Exploring Callout */}
                    <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 dark:border-blue-900/50 dark:bg-blue-950/30 p-3.5 max-w-xs shrink-0">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                            <span>Actively Expanding Into</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                                Go (Golang)
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="font-semibold text-rose-600 dark:text-rose-400">
                                Ruby
                            </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                            Building concurrent network microservices and
                            expressive scripting DSLs.
                        </p>
                    </div>
                </div>

                {/* Controls: Search and Category Tabs */}
                <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200/60 dark:border-slate-800/80">
                        {CATEGORIES.map((cat) => {
                            const active = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                                        active
                                            ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white font-semibold"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search stack (e.g. rust, asm)..."
                            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 transition-colors"
                        />
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>
                        Showing {filteredSkills.length} of {SKILLS_DATA.length}{" "}
                        technologies
                    </span>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="text-blue-600 hover:underline cursor-pointer"
                        >
                            Clear search
                        </button>
                    )}
                </div>

                {/* Skills Cards Grid */}
                <motion.div
                    layout
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.2 }}
                                className={`group relative rounded-xl border p-4.5 transition-all bg-white dark:bg-slate-900 ${
                                    skill.highlight
                                        ? "border-blue-300 dark:border-blue-700 bg-blue-50/20 dark:bg-blue-950/20"
                                        : "border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                                }`}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
                                            {skill.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                            <span className="capitalize">
                                                {skill.category}
                                            </span>
                                            <span aria-hidden="true">·</span>
                                            <span
                                                className={
                                                    skill.level === "Exploring"
                                                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                                                        : ""
                                                }
                                            >
                                                {skill.level}
                                            </span>
                                        </div>
                                    </div>

                                    {skill.highlight && (
                                        <span className="px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/60 rounded">
                                            Exploring
                                        </span>
                                    )}
                                </div>

                                <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
