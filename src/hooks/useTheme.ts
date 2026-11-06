import { useState, useEffect, useCallback } from "react";

export function useTheme() {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setIsDark((prev) => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return next;
        });
    }, []);

    return { isDark, toggleTheme };
}
