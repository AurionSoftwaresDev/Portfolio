export type SkillCategory =
    | "languages"
    | "frontend"
    | "backend"
    | "systems"
    | "databases"
    | "ai"
    | "cloud"
    | "tools";

export type SkillLevel = "Expert" | "Proficient" | "Exploring";

export interface SkillItem {
    name: string;
    category: SkillCategory;
    icon?: string;
    badgeUrl?: string;
    level: SkillLevel;
    description: string;
    highlight?: boolean;
}

export type ProjectCategory = "ai" | "systems" | "web" | "mobile";

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    subtitle: string;
    category: ProjectCategory;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    status: string;
    githubUrl?: string;
    featured: boolean;
    architectureNotes?: string[];
    metrics?: ProjectMetric[];
}

export interface ProfileInfo {
    name: string;
    age: number;
    roles: string[];
    contactEmail: string;
    github: string;
    githubUsername: string;
    location: string;
    status: string;
    exploring: string[];
    bio: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    projectType: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    message: string;
    destinationEmail?: string;
    submissionId?: string;
    timestamp?: string;
    error?: string;
}
