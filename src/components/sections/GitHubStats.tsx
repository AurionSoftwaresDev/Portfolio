import { useState, useRef, useEffect } from "react";
import { Github, ExternalLink, Flame, Award } from "lucide-react";
import { OWNER_INFO } from "../../data/portfolioData.ts";

interface GitHubStatsProps {
    contactEmail: string;
}

export default function GitHubStats({ contactEmail }: GitHubStatsProps) {
    const [terminalInput, setTerminalInput] = useState("");
    const [terminalLogs, setTerminalLogs] = useState<
        Array<{ cmd: string; output: string[] }>
    >([
        {
            cmd: "hashim --info",
            output: [
                "Name: Hashim Hussain",
                "Age: 19",
                "Role: Full-Stack Developer • Web • App • Desktop • Backend • Systems",
                "Status: Active Builder & Systems Engineer",
                `Contact: ${contactEmail || OWNER_INFO.contactEmail}`,
                'Type "help" to see available commands.',
            ],
        },
    ]);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const raw = terminalInput.trim();
        if (!raw) return;

        const lower = raw.toLowerCase();
        let res: string[] = [];

        switch (lower) {
            case "help":
                res = [
                    "Available commands:",
                    "  whoami       - Display identity and age",
                    "  skills       - Print key technology stack",
                    "  exploring    - Show active language research",
                    "  contact      - Display contact email from .env",
                    "  github       - Link to GitHub profile",
                    "  clear        - Clear terminal screen",
                ];
                break;
            case "whoami":
                res = [
                    "Hashim Hussain (19 y/o)",
                    "Full-Stack Web, Android, and Systems Software Engineer.",
                    "Philosophy: Learn deeply. Build practically. Experiment freely.",
                ];
                break;
            case "skills":
                res = [
                    "Languages: C/C++, Rust, x86-64 Asm, Python, Java, TS/JS, Kotlin, Dart, C#, PHP",
                    "Frontend: Next.js, React, Flutter, Electron, Avalonia, TailwindCSS, Three.js",
                    "Backend: FastAPI, Spring Boot, Django REST, Node/Express, PostgreSQL, Redis",
                ];
                break;
            case "exploring":
                res = [
                    "Currently exploring and prototyping with:",
                    "  -> Go (Golang) - High-throughput microservices & network primitives",
                    "  -> Ruby - Expressive DSLs and dynamic metaprogramming",
                ];
                break;
            case "contact":
                res = [
                    `Primary extracted email: ${contactEmail || OWNER_INFO.contactEmail}`,
                    "Send an inquiry directly via the Contact section below!",
                ];
                break;
            case "github":
                res = [
                    "Opening https://github.com/AurionSoftwaresDev in new tab...",
                ];
                window.open("https://github.com/AurionSoftwaresDev", "_blank");
                break;
            case "clear":
                setTerminalLogs([]);
                setTerminalInput("");
                return;
            default:
                res = [
                    `Command not found: "${raw}". Type "help" for a list of commands.`,
                ];
        }

        setTerminalLogs((prev) => [...prev, { cmd: raw, output: res }]);
        setTerminalInput("");
    };

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [terminalLogs]);

    return (
        <section
            id="github"
            className="py-20 border-b border-slate-200/70 dark:border-slate-800/80"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/70 dark:border-slate-800/80">
                    <div>
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Open Source & Activity
                        </div>
                        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                            GitHub repository metrics & terminal.
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                            Tracking code commits, open source contributions,
                            and multi-language projects under{" "}
                            <span className="font-mono font-semibold text-slate-900 dark:text-white">
                                @AurionSoftwaresDev
                            </span>
                            .
                        </p>
                    </div>

                    <a
                        href="https://github.com/AurionSoftwaresDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                        <Github className="h-4 w-4" />
                        <span>Open GitHub Profile</span>
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                </div>

                {/* Stats & Terminal Grid */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Live GitHub Cards (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Top Stats Cards in responsive layout */}
                        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300">
                                <span className="flex items-center gap-1.5">
                                    <Flame className="h-4 w-4 text-orange-500" />
                                    GitHub Streak & Commit Activity
                                </span>
                                <span className="font-mono text-slate-400">
                                    @AurionSoftwaresDev
                                </span>
                            </div>
                            <div className="mt-4 flex flex-col items-center justify-center overflow-hidden">
                                <img
                                    src="https://streak-stats.demolab.com/?user=AurionSoftwaresDev&theme=light&hide_border=true"
                                    alt="GitHub Streak Stats"
                                    className="w-full max-w-md dark:hidden rounded-lg"
                                    loading="lazy"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLElement
                                        ).style.display = "none";
                                    }}
                                />
                                <img
                                    src="https://streak-stats.demolab.com/?user=AurionSoftwaresDev&theme=dark&hide_border=true"
                                    alt="GitHub Streak Stats"
                                    className="w-full max-w-md hidden dark:block rounded-lg"
                                    loading="lazy"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLElement
                                        ).style.display = "none";
                                    }}
                                />
                            </div>
                        </div>

                        {/* Top Languages and Overall Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4.5 shadow-xs">
                                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <span>Language Distribution</span>
                                    <span className="text-[11px] font-mono text-slate-400">
                                        Top Langs
                                    </span>
                                </div>
                                <div className="mt-3 overflow-hidden flex justify-center">
                                    <img
                                        src="https://github-readme-stats.shion.dev/api/top-langs/?username=AurionSoftwaresDev&theme=light&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
                                        alt="Top Languages"
                                        className="w-full dark:hidden"
                                        loading="lazy"
                                        onError={(e) => {
                                            (
                                                e.target as HTMLElement
                                            ).style.display = "none";
                                        }}
                                    />
                                    <img
                                        src="https://github-readme-stats.shion.dev/api/top-langs/?username=AurionSoftwaresDev&theme=dark&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
                                        alt="Top Languages"
                                        className="w-full hidden dark:block"
                                        loading="lazy"
                                        onError={(e) => {
                                            (
                                                e.target as HTMLElement
                                            ).style.display = "none";
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4.5 shadow-xs">
                                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <span>Repository Stats</span>
                                    <span className="text-[11px] font-mono text-slate-400">
                                        All Commits
                                    </span>
                                </div>
                                <div className="mt-3 overflow-hidden flex justify-center">
                                    <img
                                        src="https://github-readme-stats.shion.dev/api/top-langs/?username=AurionSoftwaresDev&theme=light&hide_border=true&include_all_commits=true&count_private=true"
                                        alt="GitHub Readme Stats"
                                        className="w-full dark:hidden"
                                        loading="lazy"
                                        onError={(e) => {
                                            (
                                                e.target as HTMLElement
                                            ).style.display = "none";
                                        }}
                                    />
                                    <img
                                        src="https://github-readme-stats.shion.dev/api/top-langs/?username=AurionSoftwaresDev&theme=dark&hide_border=true&include_all_commits=true&count_private=true"
                                        alt="GitHub Readme Stats"
                                        className="w-full hidden dark:block"
                                        loading="lazy"
                                        onError={(e) => {
                                            (
                                                e.target as HTMLElement
                                            ).style.display = "none";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Profile Trophies */}
                        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs">
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-100 dark:border-slate-800">
                                <span className="flex items-center gap-1.5">
                                    <Award className="h-4 w-4 text-amber-500" />
                                    GitHub Trophies
                                </span>
                                <span className="text-[11px] text-slate-400">
                                    Achievements
                                </span>
                            </div>
                            <div className="mt-3 overflow-x-auto py-2 flex justify-center">
                                <img
                                    src="https://github-profile-trophy.vercel.app/?username=AurionSoftwaresDev&theme=flat&no-frame=true&no-bg=true&margin-w=4"
                                    alt="GitHub Trophies"
                                    className="max-w-full h-auto"
                                    loading="lazy"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLElement
                                        ).style.display = "none";
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Developer CLI Terminal (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="flex-1 flex flex-col rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 shadow-md overflow-hidden font-mono text-xs">
                            {/* Terminal Title Bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                                    <span className="text-[11px] text-slate-400 font-semibold ml-2">
                                        hashim@aurion: ~
                                    </span>
                                </div>
                                <div className="text-[10px] text-slate-500">
                                    v1.0.4-zsh
                                </div>
                            </div>

                            {/* Terminal Logs Viewport */}
                            <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-96 min-h-[300px]">
                                {terminalLogs.map((log, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                            <span className="text-slate-500">
                                                $
                                            </span>
                                            <span>{log.cmd}</span>
                                        </div>
                                        <div className="text-slate-300 space-y-0.5 pl-3 border-l border-slate-800">
                                            {log.output.map((line, j) => (
                                                <div key={j}>{line}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div ref={terminalEndRef} />
                            </div>

                            {/* Terminal Input Form */}
                            <form
                                onSubmit={handleCommand}
                                className="flex items-center gap-2 p-3 bg-slate-900/50 border-t border-slate-800"
                            >
                                <span className="text-blue-400 font-bold">
                                    $
                                </span>
                                <input
                                    type="text"
                                    value={terminalInput}
                                    onChange={(e) =>
                                        setTerminalInput(e.target.value)
                                    }
                                    placeholder="Type 'help', 'skills', 'contact', 'clear'..."
                                    className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-600 focus:outline-hidden"
                                />
                                <button
                                    type="submit"
                                    className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
                                >
                                    Run
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
