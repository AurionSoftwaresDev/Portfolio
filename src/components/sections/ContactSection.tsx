import {
    Mail,
    Send,
    CheckCircle2,
    Copy,
    Check,
    ExternalLink,
    AlertCircle,
    ChevronDown,
} from "lucide-react";
import { motion } from "motion/react";
import { OWNER_INFO } from "../../data/portfolioData.ts";
import { useContactForm } from "../../hooks/useContactForm.ts";
import { useClipboard } from "../../hooks/useClipboard.ts";
import { createMailtoLink } from "../../utils/formatters.ts";

interface ContactSectionProps {
    contactEmail: string;
}

export default function ContactSection({ contactEmail }: ContactSectionProps) {
    const effectiveEmail = contactEmail || OWNER_INFO.contactEmail;
    const { copied, copy } = useClipboard();

    const {
        formData,
        isSubmitting,
        successResponse,
        errorMessage,
        updateField,
        resetForm,
        submit,
    } = useContactForm(effectiveEmail);

    const mailtoHref = createMailtoLink(
        effectiveEmail,
        formData.subject || "Portfolio Inquiry for Hashim Hussain",
        `Hello Hashim,\n\nName: ${formData.name}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`,
    );

    return (
        <section
            id="contact"
            className="py-20 border-b border-slate-200/70 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/40"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
                    {/* Left Column: Context & Contact Metadata */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                Initiate Collaboration
                            </div>
                            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Let's build something exceptional.
                            </h2>
                            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                Whether you need high-performance systems
                                engineering, a responsive full-stack web
                                application, an Android/Flutter mobile client,
                                or an automated AI agent workflow, my inbox is
                                open.
                            </p>
                        </div>

                        {/* Direct Email Card with Extracted .env email */}
                        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                                Primary Contact Channel (Extracted from .env)
                            </span>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2.5 min-w-0">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xs text-slate-500 dark:text-slate-400">
                                            Direct Inquiries
                                        </div>
                                        <div className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                                            {effectiveEmail}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        onClick={() => copy(effectiveEmail)}
                                        title="Copy email to clipboard"
                                        className="flex h-8 items-center gap-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="h-3.5 w-3.5 text-emerald-500" />
                                                <span>Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="h-3.5 w-3.5" />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>

                                    <a
                                        href={mailtoHref}
                                        title="Open mail application"
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Invariants */}
                        <div className="space-y-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs text-xs">
                            <div className="font-semibold text-slate-900 dark:text-white">
                                Engagement Terms & Availability
                            </div>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-500 font-bold">
                                        ✓
                                    </span>
                                    <span>
                                        Full-Stack Web (Next.js, React, Node,
                                        Express, PostgreSQL)
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-500 font-bold">
                                        ✓
                                    </span>
                                    <span>
                                        Android & Cross-Platform Mobile
                                        (Flutter, Dart, Kotlin)
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-500 font-bold">
                                        ✓
                                    </span>
                                    <span>
                                        Systems Software (C/C++, Rust, x86-64
                                        Assembly, Graphics)
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-500 font-bold">
                                        ✓
                                    </span>
                                    <span>
                                        Response time: Typically within 12–24
                                        business hours
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
                            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                                    Send a Message
                                </h3>
                                <span className="text-xs text-slate-400 font-mono">
                                    Routes to Hashim
                                </span>
                            </div>

                            {/* Success Notification */}
                            {successResponse ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/70 dark:border-emerald-900/60 dark:bg-emerald-950/30 p-6 text-center"
                                >
                                    <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                                    <h4 className="mt-3 font-display text-lg font-bold text-slate-900 dark:text-white">
                                        Message Dispatched Successfully!
                                    </h4>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                                        {successResponse.message}
                                    </p>
                                    {successResponse.submissionId && (
                                        <div className="mt-3 text-[11px] font-mono text-slate-500">
                                            Tracking ID:{" "}
                                            {successResponse.submissionId}
                                        </div>
                                    )}
                                    <button
                                        onClick={resetForm}
                                        className="mt-5 px-4 py-2 text-xs font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                                    >
                                        Send Another Note
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={submit}
                                    className="mt-6 space-y-4"
                                >
                                    {errorMessage && (
                                        <div className="flex items-center gap-2 p-3 rounded-lg border border-rose-200 bg-rose-50 text-xs text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300">
                                            <AlertCircle className="h-4 w-4 shrink-0" />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    updateField(
                                                        "name",
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="e.g. Alex Mercer"
                                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                                Your Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    updateField(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="alex@example.com"
                                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                                Project Scope / Category
                                            </label>
                                            <div className="relative">
                                                <select
                                                    value={formData.projectType}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "projectType",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3.5 pr-10 text-xs text-slate-900 focus:border-blue-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 cursor-pointer transition-colors"
                                                >
                                                    <option
                                                        value="Full-Stack Web Development"
                                                        className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 py-1.5"
                                                    >
                                                        Full-Stack Web
                                                        Development
                                                    </option>
                                                    <option
                                                        value="Android & Mobile App"
                                                        className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 py-1.5"
                                                    >
                                                        Android & Mobile App
                                                        (Flutter/Kotlin)
                                                    </option>
                                                    <option
                                                        value="Systems & Low-Level / C++"
                                                        className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 py-1.5"
                                                    >
                                                        Systems & Low-Level /
                                                        C++ / Asm
                                                    </option>
                                                    <option
                                                        value="AI & Agent Automation"
                                                        className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 py-1.5"
                                                    >
                                                        AI & Agent Automation
                                                        Systems
                                                    </option>
                                                    <option
                                                        value="Desktop Application"
                                                        className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 py-1.5"
                                                    >
                                                        Desktop Application
                                                    </option>
                                                    <option
                                                        value="Consultation / Engineering Role"
                                                        className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 py-1.5"
                                                    >
                                                        Consultation /
                                                        Engineering Role
                                                    </option>
                                                </select>
                                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) =>
                                                    updateField(
                                                        "subject",
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Project discussion / Role opportunity"
                                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) =>
                                                updateField(
                                                    "message",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Describe your project, timelines, or specifications..."
                                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 resize-none transition-colors"
                                        />
                                    </div>

                                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                            Destination:{" "}
                                            <span className="font-mono font-medium">
                                                {effectiveEmail}
                                            </span>
                                        </span>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all disabled:opacity-60 cursor-pointer shadow-sm"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                    <span>
                                                        Sending to Hashim...
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-3.5 w-3.5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
