import {
    ProfileInfo,
    ContactFormData,
    ContactResponse,
} from "../types/index.ts";

const API_BASE = "/api";

/**
 * Fetches owner profile data and extracted .env email from the backend
 */
export async function getProfileInfo(): Promise<ProfileInfo> {
    const response = await fetch(`${API_BASE}/info`);
    if (!response.ok) {
        throw new Error(
            `Failed to load profile data (status: ${response.status})`,
        );
    }
    return response.json();
}

/**
 * Submits contact form inquiry to backend route
 */
export async function submitContactForm(
    formData: ContactFormData,
): Promise<ContactResponse> {
    const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || "Failed to dispatch contact message.");
    }

    return data;
}
