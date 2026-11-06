import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = "0.0.0.0";

// Contact email extracted from .env or fallback
const CONTACT_EMAIL =
    process.env.CONTACT_EMAIL ||
    process.env.VITE_CONTACT_EMAIL ||
    "jakirbhai421@gmail.com";

app.use(express.json());

interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    projectType: string;
    timestamp: string;
}

const contactSubmissions: ContactSubmission[] = [];

// Profile and environment info endpoint
app.get("/api/info", (_req, res) => {
    res.json({
        name: "Hashim Hussain",
        age: 14,
        roles: [
            "Full-Stack Web Development",
            "UI/UX Design",
            "Android Development",
            "Software & Systems Development",
            "Low-Level & High-Performance Computing",
        ],
        contactEmail: CONTACT_EMAIL,
        github: "https://github.com/AurionSoftwaresDev",
        githubUsername: "AurionSoftwaresDev",
        location: "Remote Worldwide",
        status: "Open to High-Impact Opportunities",
        exploring: ["Go", "Ruby"],
        bio: "I build software across multiple platforms and enjoy working with different technologies rather than staying limited to one stack. Learn deeply. Build practically. Experiment freely.",
    });
});

// Contact message endpoint
app.post("/api/contact", (req, res) => {
    try {
        const { name, email, subject, message, projectType } = req.body;

        if (!name || typeof name !== "string" || name.trim().length === 0) {
            return res.status(400).json({ error: "Please provide your name." });
        }

        if (
            !email ||
            typeof email !== "string" ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ) {
            return res
                .status(400)
                .json({ error: "Please provide a valid email address." });
        }

        if (
            !message ||
            typeof message !== "string" ||
            message.trim().length < 5
        ) {
            return res
                .status(400)
                .json({ error: "Message must be at least 5 characters long." });
        }

        const submission: ContactSubmission = {
            id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            name: name.trim(),
            email: email.trim(),
            subject:
                subject && typeof subject === "string"
                    ? subject.trim()
                    : "Portfolio Inquiry",
            projectType:
                projectType && typeof projectType === "string"
                    ? projectType.trim()
                    : "General Inquiry",
            message: message.trim(),
            timestamp: new Date().toISOString(),
        };

        contactSubmissions.push(submission);

        console.log(
            `[Contact Form Received] From: ${submission.name} <${submission.email}> to ${CONTACT_EMAIL}`,
        );
        console.log(
            `[Subject]: ${submission.subject} | [Type]: ${submission.projectType}`,
        );
        console.log(`[Message]: ${submission.message}`);

        return res.json({
            success: true,
            message: `Thank you! Your message has been sent to Hashim (${CONTACT_EMAIL}).`,
            destinationEmail: CONTACT_EMAIL,
            submissionId: submission.id,
            timestamp: submission.timestamp,
        });
    } catch (err: unknown) {
        console.error("Error handling contact form:", err);
        return res.status(500).json({
            error: "An unexpected error occurred while sending your message.",
        });
    }
});

// Quick debug endpoint to see recent messages (last 10)
app.get("/api/contact/recent", (_req, res) => {
    res.json({
        count: contactSubmissions.length,
        recent: contactSubmissions.slice(-10).reverse(),
    });
});

async function startServer() {
    const isProduction = process.env.NODE_ENV === "production";

    if (!isProduction) {
        const { createServer: createViteServer } = await import("vite");
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "spa",
        });
        app.use(vite.middlewares);
    } else {
        const distPath = path.resolve(__dirname, "dist");
        app.use(express.static(distPath));
        app.get("*", (_req, res) => {
            res.sendFile(path.resolve(distPath, "index.html"));
        });
    }

    app.listen(PORT, HOST, () => {
        console.log(
            `Portfolio server running on http://${HOST}:${PORT} (extracted email: ${CONTACT_EMAIL})`,
        );
    });
}

startServer().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});
