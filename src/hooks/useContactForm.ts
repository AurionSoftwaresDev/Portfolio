import { useState, useCallback } from "react";
import { ContactFormData, ContactResponse } from "../types/index.ts";
import { submitContactForm } from "../services/api.ts";
import { isValidEmail } from "../utils/formatters.ts";

const INITIAL_FORM: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    projectType: "Full-Stack Web Development",
    message: "",
};

export function useContactForm(effectiveEmail: string) {
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [successResponse, setSuccessResponse] =
        useState<ContactResponse | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const updateField = useCallback(
        (field: keyof ContactFormData, value: string) => {
            setFormData((prev) => ({ ...prev, [field]: value }));
        },
        [],
    );

    const resetForm = useCallback(() => {
        setFormData(INITIAL_FORM);
        setSuccessResponse(null);
        setErrorMessage(null);
    }, []);

    const submit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            setErrorMessage(null);

            if (!formData.name.trim()) {
                setErrorMessage("Please enter your name.");
                return;
            }
            if (!isValidEmail(formData.email)) {
                setErrorMessage("Please provide a valid email address.");
                return;
            }
            if (
                !formData.message.trim() ||
                formData.message.trim().length < 5
            ) {
                setErrorMessage("Message must be at least 5 characters long.");
                return;
            }

            setIsSubmitting(true);

            try {
                const response = await submitContactForm(formData);
                setSuccessResponse(response);
                setFormData(INITIAL_FORM);
            } catch (err: unknown) {
                const msg =
                    err instanceof Error
                        ? err.message
                        : "Failed to deliver message.";
                setErrorMessage(msg);
            } finally {
                setIsSubmitting(false);
            }
        },
        [formData],
    );

    return {
        formData,
        isSubmitting,
        successResponse,
        errorMessage,
        updateField,
        resetForm,
        submit,
    };
}
