import { useState } from "react";
import {
    Header,
    Hero,
    About,
    SkillsSection,
    ProjectsSection,
    GitHubStats,
    ContactSection,
    ResumeModal,
    Footer,
} from "./components/index.ts";
import { useProfile } from "./hooks/useProfile.ts";
import { scrollToSection } from "./utils/formatters.ts";

export default function App() {
    const { contactEmail } = useProfile();
    const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
            {/* Navigation Header */}
            <Header onOpenResume={() => setIsResumeOpen(true)} />

            {/* Main Content Layout */}
            <main>
                {/* Split Hero Section */}
                <Hero
                    contactEmail={contactEmail}
                    onOpenContact={() => scrollToSection("contact")}
                />

                {/* Engineering Philosophy & Mindset */}
                <About />

                {/* Searchable Skills Matrix */}
                <SkillsSection />

                {/* Flagship Works & Active Development */}
                <ProjectsSection />

                {/* GitHub Metrics & Interactive CLI Terminal */}
                <GitHubStats contactEmail={contactEmail} />

                {/* Contact Form & Direct Email Channel */}
                <ContactSection contactEmail={contactEmail} />
            </main>

            {/* Quiet Footer */}
            <Footer contactEmail={contactEmail} />

            {/* Executive Curriculum Vitae Lightbox */}
            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
                contactEmail={contactEmail}
            />
        </div>
    );
}
