// TODO: Replace placeholder # URLs for project repositories and demos when the resume owner supplies direct links.
export const about = "Information Technology undergraduate seeking an AI / ML or software engineering internship. I build full applications end to end: backend APIs, LLM and agent workflows, data pipelines and deployed front ends.";
export const contact = { email: "esth.allen@gmail.com", location: "Chennai, Tamil Nadu, India" };
export const skills = [
  { name: "Languages", items: ["Python", "Java", "C", "SQL"] },
  { name: "AI & Generative AI", items: ["LLM integration", "Gemini API", "Tool-calling agents", "RAG", "Agentic workflows", "OpenRouter", "Ollama"] },
  { name: "Backend", items: ["FastAPI", "Spring Boot", "REST APIs"] },
  { name: "Frontend", items: ["React", "Vite"] },
  { name: "Data & Databases", items: ["PostgreSQL", "MySQL", "Supabase", "Google Earth Engine"] },
  { name: "Cloud & Tools", items: ["AWS EC2", "Vercel", "Git", "GitHub", "Postman"] },
  { name: "AI-Assisted Development", items: ["Architecture", "Task-scoped prompts", "Code review", "Testing"] },
];
export const projects = [
  { slug: "canopy", title: "Canopy", short: "CANOPY", type: "ML / GEOSPATIAL", year: "2024—25", theme: "canopy", summary: "Forest biomass and carbon-stock mapping for the Nilgiri Biosphere Reserve.", detail: "Pairs GEDI L4A biomass with Sentinel-1/2, NASADEM and ESA WorldCover to build an ML training dataset for above-ground biomass estimation. The deployed FastAPI + React/Leaflet app shows biomass, carbon stock and CO₂e on a 250 m grid.", tags: ["FastAPI", "React / Leaflet", "GEDI + Sentinel", "Vercel"], links: [{ label: "GitHub", url: "#" }, { label: "Live app", url: "#" }] },
  { slug: "finpilot", title: "FinPilot", short: "FP", type: "AI AGENT", year: "2025", theme: "finpilot", summary: "An AI personal finance decision-support agent that keeps numbers grounded in real data.", detail: "Built the data and agent core: a Gemini tool-calling orchestrator whose tools query real database functions, so the model never computes numbers itself. FastAPI backend with React/Vite UI; 65 ingestion tests and 16/16 analysis-layer tests passing.", tags: ["Gemini", "FastAPI", "React / Vite", "65 tests"], links: [{ label: "GitHub", url: "#" }] },
  { slug: "teacher-studio", title: "AI Teacher Studio", short: "TS", type: "GENERATIVE AI", year: "2025", theme: "teacher", summary: "An adaptive AI teacher that turns lesson plans into multilingual, visual learning.", detail: "Generates lesson plans, multilingual speech and AI teacher videos. The video pipeline renders Manim scenes over teacher narration, driven by an AI planner that outputs topic JSON.", tags: ["AI planner", "Manim", "Multilingual speech"], links: [{ label: "GitHub", url: "#" }] },
  { slug: "corridor", title: "Corridor", short: "CR", type: "FINTECH / WEB3", year: "2024", theme: "corridor", summary: "A blockchain-based cross-border remittance platform for simpler transfers.", detail: "Team of three. Owned the Supabase account layer, UI and core backend: Node/Express API with Supabase JWT, transfer state machine, mock KYC, AML rules engine, FX quotes and audit log.", tags: ["Node / Express", "Supabase", "AML rules"], links: [{ label: "GitHub", url: "#" }, { label: "Live demo", url: "#" }] },
  { slug: "invoice-ai", title: "Invoice AI", short: "IA", type: "AI / PRODUCTIVITY", year: "2024", theme: "invoice", summary: "An invoice tracker with AI-drafted emails for a share market trader.", detail: "A Supabase-backed dashboard and multi-step form where the AI drafts an email for review before sending. Uses a small OpenRouter model with a template fallback and a 10-case evaluation harness.", tags: ["Supabase", "OpenRouter", "10-case harness"], links: [{ label: "GitHub", url: "#" }] },
  { slug: "whatsapp-poll-bot", title: "WhatsApp Poll Bot", short: "WPB", type: "AUTOMATION", year: "2024", theme: "whatsapp", summary: "Group poll automation for a 65-member class group, hosted on AWS EC2.", detail: "Built with whatsapp-web.js. !pending lists students who have not voted, !votes lists voters per option, and teachers are managed by tagging them in chat.", tags: ["whatsapp-web.js", "AWS EC2", "Automation"], links: [{ label: "GitHub", url: "#" }] },
];
export const hackathons = [
  { title: "AI Agent Hackathon / ProductSpace", detail: "Team Lead · National level" },
  { title: "Bharat Academix hackathon", detail: "Team Lead · National level" },
  { title: "Orion 1.0 / Sathyabama Institute", detail: "Team Lead · National level" },
  { title: "Hack for Social Cause / MY Bharat", detail: "Team Lead · Canopy biomass idea" },
];
export const education = { degree: "B.Tech — Information Technology", school: "Sri Sairam Engineering College, Chennai", cgpa: "CGPA 9.35 / 10" };
export const certifications = [
  { name: "Joy of Computing Using Python", score: "90% · GOLD" }, { name: "Programming in Java", score: "92% · GOLD" }, { name: "Developing Soft Skills & Personality", score: "93% · GOLD" }, { name: "UN Sustainable Development Goals", score: "94% · GOLD · TOP 1%" }, { name: "Computer Architecture & Organization", score: "71% · ELITE" }, { name: "Ethics in Engineering Practice", score: "73% · ELITE" },
];
export const coding = "Regular practice on SkillRack in Python, Java and C. Coverage includes arrays, strings, linked lists, stacks, queues, trees, graphs, hashing, sorting, recursion, dynamic programming and BFS.";