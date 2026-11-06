/**
 * Helper to validate email format with standard regex
 */
export function isValidEmail(email: string): boolean {
    if (!email || typeof email !== "string") return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Constructs a clean mailto URI with encoded query parameters
 */
export function createMailtoLink(
    email: string,
    subject: string,
    body: string,
): string {
    const encSubject = encodeURIComponent(subject);
    const encBody = encodeURIComponent(body);
    return `mailto:${email}?subject=${encSubject}&body=${encBody}`;
}

/**
 * Smoothly scrolls to an element by its ID
 */
export function scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
