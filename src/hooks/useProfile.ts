import { useState, useEffect } from "react";
import { ProfileInfo } from "../types/index.ts";
import { OWNER_INFO } from "../data/portfolioData.ts";
import { getProfileInfo } from "../services/api.ts";

export function useProfile() {
    const [profile, setProfile] = useState<ProfileInfo>(OWNER_INFO);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;
        getProfileInfo()
            .then((data) => {
                if (isMounted && data) {
                    setProfile((prev) => ({
                        ...prev,
                        ...data,
                        contactEmail: data.contactEmail || prev.contactEmail,
                    }));
                }
            })
            .catch((err) => {
                console.warn(
                    "Backend profile fetch note (using fallback):",
                    err,
                );
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return { profile, loading, contactEmail: profile.contactEmail };
}
