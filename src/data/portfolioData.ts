import { SkillItem, ProjectItem, ProfileInfo } from "../types.ts";

export const OWNER_INFO: ProfileInfo = {
    name: "Hashim Hussain",
    age: 19,
    roles: [
        "Full-Stack Web Development",
        "UI/UX Design",
        "Android Development",
        "Software & Systems Development",
    ],
    contactEmail: "jakirbhai421@gmail.com",
    github: "https://github.com/AurionSoftwaresDev",
    githubUsername: "AurionSoftwaresDev",
    location: "Remote / Global",
    status: "Open to High-Impact Engineering Roles & Collaborations",
    exploring: ["Go", "Ruby"],
    bio: "I build software across multiple platforms and enjoy working with different technologies rather than staying limited to one stack. Learn deeply. Build practically. Experiment freely.",
};

export const SKILLS_DATA: SkillItem[] = [
    // Core Languages
    {
        name: "C/C++",
        category: "languages",
        level: "Expert",
        description:
            "Systems software, memory allocators, performance optimization & graphics pipelines.",
    },
    {
        name: "Rust",
        category: "languages",
        level: "Expert",
        description:
            "Memory-safe systems programming, concurrency, CLI tools & embedded runtimes.",
    },
    {
        name: "x86-64 Assembly",
        category: "languages",
        level: "Proficient",
        description:
            "Low-level CPU registers, SIMD vectorization, hardware interactions & reverse engineering.",
    },
    {
        name: "TypeScript",
        category: "languages",
        level: "Expert",
        description:
            "Type-safe full-stack web architectures, enterprise schemas & Node.js backends.",
    },
    {
        name: "JavaScript",
        category: "languages",
        level: "Expert",
        description:
            "Modern ESNext, asynchronous runtimes, DOM orchestration & event loops.",
    },
    {
        name: "Python",
        category: "languages",
        level: "Expert",
        description:
            "FastAPI backends, PyTorch ML models, automation scripting & data pipelines.",
    },
    {
        name: "Java",
        category: "languages",
        level: "Proficient",
        description:
            "Spring Boot enterprise microservices, OOP design patterns & JavaFX desktop apps.",
    },
    {
        name: "Kotlin",
        category: "languages",
        level: "Proficient",
        description:
            "Modern native Android development, coroutines, Jetpack Compose & Android SDK.",
    },
    {
        name: "Dart",
        category: "languages",
        level: "Expert",
        description:
            "Cross-platform mobile and desktop application development with Flutter.",
    },
    {
        name: "C#",
        category: "languages",
        level: "Proficient",
        description:
            ".NET ecosystem, Avalonia cross-platform desktop UI & async tasks.",
    },
    {
        name: "AssemblyScript",
        category: "languages",
        level: "Proficient",
        description:
            "Compiling TypeScript-like syntax to high-performance WebAssembly (Wasm).",
    },
    {
        name: "PHP",
        category: "languages",
        level: "Proficient",
        description:
            "Server-side web scripting, REST API backends & database integration.",
    },
    {
        name: "HTML5 & CSS3",
        category: "languages",
        level: "Expert",
        description:
            "Semantic markup, accessibility, modern CSS grids & responsive layouts.",
    },
    {
        name: "Go (Golang)",
        category: "languages",
        level: "Exploring",
        description:
            "Currently exploring: lightweight goroutines, network microservices & fast compilers.",
        highlight: true,
    },
    {
        name: "Ruby",
        category: "languages",
        level: "Exploring",
        description:
            "Currently exploring: expressive scripting, DSLs, Rails architecture & metaprogramming.",
        highlight: true,
    },

    // Frontend & UI/UX
    {
        name: "React",
        category: "frontend",
        level: "Expert",
        description:
            "Component-driven architectures, custom hooks & high-performance rendering.",
    },
    {
        name: "Next.js",
        category: "frontend",
        level: "Expert",
        description:
            "Server-side rendering, hybrid static generation & modern web applications.",
    },
    {
        name: "Flutter",
        category: "frontend",
        level: "Expert",
        description:
            "Multi-platform desktop, iOS & Android UI with smooth 60/120fps graphics.",
    },
    {
        name: "TailwindCSS",
        category: "frontend",
        level: "Expert",
        description:
            "Utility-first modern styling, responsive viewports & clean design systems.",
    },
    {
        name: "Electron",
        category: "frontend",
        level: "Proficient",
        description:
            "Cross-platform native desktop shell packaging with web technologies.",
    },
    {
        name: "Avalonia",
        category: "frontend",
        level: "Proficient",
        description:
            "Cross-platform XAML .NET UI framework for Linux, Windows & macOS desktop.",
    },
    {
        name: "Three.js",
        category: "frontend",
        level: "Proficient",
        description:
            "WebGL 3D interactive graphics, camera controls & shader integration in browsers.",
    },
    {
        name: "JavaFX",
        category: "frontend",
        level: "Proficient",
        description:
            "Enterprise desktop graphical user interfaces with custom scene graphs.",
    },
    {
        name: "Vite",
        category: "frontend",
        level: "Expert",
        description:
            "Next-generation lightning fast build tooling & ESM development workflows.",
    },
    {
        name: "Sass / SCSS",
        category: "frontend",
        level: "Proficient",
        description:
            "Modular nested stylesheets, mixins & structured CSS architecture.",
    },

    // Backend & APIs
    {
        name: "FastAPI",
        category: "backend",
        level: "Expert",
        description:
            "High-performance asynchronous Python API services with OpenAPI docs.",
    },
    {
        name: "Node.js & Express",
        category: "backend",
        level: "Expert",
        description:
            "Scalable backend web servers, middleware pipelines & microservices.",
    },
    {
        name: "Django & REST",
        category: "backend",
        level: "Proficient",
        description:
            "Production-ready Python MVC web applications, ORM & secure auth.",
    },
    {
        name: "Spring Boot",
        category: "backend",
        level: "Proficient",
        description:
            "Enterprise Java backend services, dependency injection & transaction control.",
    },
    {
        name: "NestJS",
        category: "backend",
        level: "Proficient",
        description:
            "Modular TypeScript server framework inspired by Angular architecture.",
    },
    {
        name: "Flask",
        category: "backend",
        level: "Proficient",
        description:
            "Lightweight Python microservices, rapid prototyping & edge webhooks.",
    },
    {
        name: "Socket.io",
        category: "backend",
        level: "Expert",
        description:
            "Bi-directional real-time event streaming & WebSocket communication.",
    },
    {
        name: "JWT & OAuth",
        category: "backend",
        level: "Expert",
        description:
            "Secure token authentication, RBAC authorization & session security.",
    },

    // Systems & Graphics
    {
        name: "OpenGL",
        category: "systems",
        level: "Proficient",
        description:
            "Direct GPU graphics pipeline programming, GLSL shaders & matrix math.",
    },
    {
        name: "Raylib",
        category: "systems",
        level: "Expert",
        description:
            "Lightweight game programming, graphics rendering & audio in C/C++.",
    },
    {
        name: ".NET Core",
        category: "systems",
        level: "Proficient",
        description:
            "High-throughput runtime, memory management & cross-platform services.",
    },
    {
        name: "Low-Level Sockets",
        category: "systems",
        level: "Expert",
        description:
            "TCP/UDP socket programming, packet serialization & networking protocols.",
    },
    {
        name: "NVIDIA Tooling",
        category: "systems",
        level: "Proficient",
        description: "CUDA GPU acceleration & graphics driver profiling.",
    },

    // Databases
    {
        name: "PostgreSQL",
        category: "databases",
        level: "Expert",
        description:
            "Relational data modeling, ACID transactions, complex indexing & JSONB.",
    },
    {
        name: "MySQL",
        category: "databases",
        level: "Proficient",
        description:
            "Structured SQL databases, queries, foreign keys & performance replication.",
    },
    {
        name: "MongoDB",
        category: "databases",
        level: "Proficient",
        description:
            "NoSQL document stores, aggregation pipelines & dynamic schemas.",
    },
    {
        name: "SQLite",
        category: "databases",
        level: "Expert",
        description:
            "Embedded zero-config database engine for desktop & mobile apps.",
    },
    {
        name: "Redis",
        category: "databases",
        level: "Proficient",
        description:
            "In-memory key-value caching, Pub/Sub channels & session store.",
    },

    // AI & Data
    {
        name: "PyTorch",
        category: "ai",
        level: "Proficient",
        description:
            "Deep learning neural networks, tensor computations & model training.",
    },
    {
        name: "TensorFlow",
        category: "ai",
        level: "Proficient",
        description:
            "Machine learning production pipelines & graph-based model inference.",
    },
    {
        name: "OpenCV",
        category: "ai",
        level: "Proficient",
        description:
            "Real-time computer vision, object detection, filtering & image transformations.",
    },
    {
        name: "NumPy & Pandas",
        category: "ai",
        level: "Expert",
        description:
            "Vectorized scientific calculations, data wrangling & time-series analysis.",
    },
    {
        name: "Matplotlib",
        category: "ai",
        level: "Proficient",
        description:
            "Scientific visualization, data distribution charts & telemetry plots.",
    },

    // Cloud & DevOps
    {
        name: "Docker",
        category: "cloud",
        level: "Expert",
        description:
            "Multi-stage containerization, Docker Compose & reproducible environments.",
    },
    {
        name: "AWS & GCP",
        category: "cloud",
        level: "Proficient",
        description:
            "Cloud compute, S3 buckets, Cloud Run microservices & IAM security.",
    },
    {
        name: "Nginx",
        category: "cloud",
        level: "Proficient",
        description:
            "Reverse proxying, SSL termination, load balancing & web caching.",
    },
    {
        name: "Firebase",
        category: "cloud",
        level: "Expert",
        description:
            "Firestore real-time databases, cloud functions, auth & mobile push notifications.",
    },
    {
        name: "CI/CD Actions",
        category: "cloud",
        level: "Proficient",
        description:
            "GitHub Actions & GitLab CI automated test matrices & deployments.",
    },

    // Tools & Creative
    {
        name: "Git & GitHub",
        category: "tools",
        level: "Expert",
        description:
            "Advanced version control, branching workflows, pull requests & OSS management.",
    },
    {
        name: "Figma",
        category: "tools",
        level: "Expert",
        description:
            "UI/UX design systems, component auto-layout, wireframes & developer handoff.",
    },
    {
        name: "Postman",
        category: "tools",
        level: "Expert",
        description:
            "API contract testing, mock servers & automated endpoint suites.",
    },
    {
        name: "Bash & PowerShell",
        category: "tools",
        level: "Expert",
        description:
            "Unix shell scripting, terminal automation & Windows command line.",
    },
    {
        name: "Photoshop & Illustrator",
        category: "tools",
        level: "Proficient",
        description:
            "Vector iconography, asset preparation & digital branding graphics.",
    },
];

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: "galaxy-ai-agent",
        title: "Galaxy AI Agent",
        subtitle: "Cross-Platform Desktop AI Automation & Workflow Suite",
        category: "ai",
        description:
            "A cross-platform desktop AI agent focused on automation, system interaction, APIs, tools and intelligent workflows.",
        longDescription:
            "Galaxy AI Agent is a cross-platform desktop AI agent focused on automation, system interaction, APIs, tools and intelligent workflows. Built with Flutter for a fast, responsive desktop interface and Python with FastAPI for backend system interactions and agent execution.",
        technologies: ["Flutter", "Python", "FastAPI", "AI/Agent Systems"],
        image: "/src/assets/images/galaxy_ai_agent_1793987156999.jpg",
        status: "Currently in Private Development",
        githubUrl: "https://github.com/AurionSoftwaresDev",
        featured: true,
        architectureNotes: [
            "Cross-platform desktop application designed for automation and system interaction.",
            "Modular agent tool execution pipeline powered by Python and FastAPI.",
            "Responsive native desktop user interface engineered with Flutter.",
        ],
        metrics: [
            { label: "Platform", value: "Desktop Cross-Platform" },
            { label: "Stack", value: "Flutter • Python • FastAPI" },
            { label: "Status", value: "In Private Development" },
        ],
    },
];

export const PHILOSOPHY_POINTS = [
    {
        title: "Learn deeply",
        desc: "Understanding the machine from registers and memory allocators up to distributed web services. Low-level clarity makes high-level engineering effortless.",
    },
    {
        title: "Build practically",
        desc: "Code is meant to ship and solve real problems. Clean interfaces, dependable APIs, and production-tested performance beat endless theory.",
    },
    {
        title: "Experiment freely",
        desc: "Continuously adopting new paradigms—from x86-64 assembly routines to modern AI agentic loops, Dart/Flutter mobile apps, and exploring Go & Ruby.",
    },
];
