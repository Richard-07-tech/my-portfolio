// TODO: Replace placeholder # URLs for project repositories and demos when the resume owner supplies direct links.
export const about = "Information Technology undergraduate seeking an AI / ML or software engineering internship. I build full applications end to end: backend APIs, LLM and agent workflows, data pipelines and deployed front ends.";
export const contact = { email: "esth.allen@gmail.com", location: "Chennai, Tamil Nadu, India", linkedin: "https://www.linkedin.com/in/richard-allen-doss-180a9a381/" };
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
  { slug: "canopy", title: "Canopy", short: "CANOPY", type: "ML / GEOSPATIAL", year: "2024—25", theme: "canopy", featured: true,
    summary: "Forest biomass and carbon-stock mapping for the Nilgiri Biosphere Reserve.",
    detail: "Pairs GEDI L4A biomass with Sentinel-1/2, NASADEM and ESA WorldCover to build an ML training dataset for above-ground biomass estimation. The deployed FastAPI + React/Leaflet app shows biomass, carbon stock and CO₂e on a 250 m grid.",
    longDetail: "Forest biomass and carbon-stock mapping at scale. The pipeline fuses GEDI L4A LiDAR-derived biomass footprints with Sentinel-1 SAR backscatter, Sentinel-2 spectral bands, NASADEM elevation data and ESA WorldCover land-use labels to build a rich ML training dataset. A Random Forest model (v4) estimates Above-Ground Biomass at 250 m resolution across the entire Nilgiri Biosphere Reserve — one of India's largest protected forest ecosystems. The FastAPI backend computes carbon stock (AGB × 0.47) and CO₂ equivalent (Carbon × 3.67) on the fly. The React / Leaflet front-end renders a live biomass heatmap, toggleable satellite base layer and per-pixel point detail panel.",
    stats: [
      { label: "Grid resolution", value: "250 m" },
      { label: "Data sources",   value: "GEDI · S1 · S2 · NASADEM · ESA" },
      { label: "Model",          value: "Random Forest v4" },
      { label: "Deployment",     value: "Vercel + FastAPI" },
    ],
    tags: ["FastAPI", "React / Leaflet", "GEDI L4A", "Sentinel-1/2", "NASADEM", "ESA WorldCover", "Random Forest", "Vercel"],
    links: [{ label: "GitHub", url: "#" }, { label: "Live app", url: "https://canopy-prototype-ht5j.vercel.app/" }] },
  { slug: "finpilot", title: "FinPilot", short: "FP", type: "AI AGENT", year: "2025", theme: "finpilot",
    summary: "An AI personal finance decision-support agent that keeps numbers grounded in real data.",
    detail: "Built the data and agent core: a Gemini tool-calling orchestrator whose tools query real database functions, so the model never computes numbers itself. FastAPI backend with React/Vite UI; 65 ingestion tests and 16/16 analysis-layer tests passing.",
    stats: [
      { label: "Tests passing", value: "65 ingestion · 16 analysis" },
      { label: "Core LLM",      value: "Gemini Function Calling" },
    ],
    tags: ["Gemini", "FastAPI", "React / Vite", "Tool-Calling", "65 tests"],
    links: [{ label: "GitHub", url: "#" }] },
  { slug: "teacher-studio", title: "AI Teacher Studio", short: "TS", type: "GENERATIVE AI", year: "2025", theme: "teacher",
    summary: "An adaptive AI teacher that turns lesson plans into multilingual, visual learning.",
    detail: "Generates lesson plans, multilingual speech and AI teacher videos. The video pipeline renders Manim scenes over teacher narration, driven by an AI planner that outputs topic JSON.",
    stats: [
      { label: "Pipeline", value: "Manim + Multilingual TTS" },
      { label: "Planner",  value: "Structured JSON Output" },
    ],
    tags: ["AI planner", "Manim", "Multilingual speech", "Video Pipeline"],
    links: [{ label: "GitHub", url: "#" }] },
  { slug: "corridor", title: "Corridor", short: "CR", type: "FINTECH / WEB3", year: "2024", theme: "corridor",
    summary: "A blockchain-based cross-border remittance platform for simpler transfers.",
    detail: "Team of three. Owned the Supabase account layer, UI and core backend: Node/Express API with Supabase JWT, transfer state machine, mock KYC, AML rules engine, FX quotes and audit log.",
    stats: [
      { label: "Architecture", value: "State Machine + AML Engine" },
      { label: "Security",     value: "Supabase JWT + Audit Log" },
    ],
    tags: ["Node / Express", "Supabase", "AML rules", "Web3 / FX"],
    links: [{ label: "GitHub", url: "#" }, { label: "Live demo", url: "#" }] },
  { slug: "invoice-ai", title: "Invoice AI", short: "IA", type: "AI / PRODUCTIVITY", year: "2024", theme: "invoice",
    summary: "An invoice tracker with AI-drafted emails for a share market trader.",
    detail: "A Supabase-backed dashboard and multi-step form where the AI drafts an email for review before sending. Uses a small OpenRouter model with a template fallback and a 10-case evaluation harness.",
    stats: [
      { label: "Evaluation", value: "10-case prompt harness" },
      { label: "Fallback",   value: "Rule-based templating" },
    ],
    tags: ["Supabase", "OpenRouter", "Evaluation harness", "Next.js"],
    links: [{ label: "GitHub", url: "#" }] },
  { slug: "whatsapp-poll-bot", title: "WhatsApp Poll Bot", short: "WPB", type: "AUTOMATION", year: "2024", theme: "whatsapp",
    summary: "Group poll automation for a 65-member class group, hosted on AWS EC2.",
    detail: "Built with whatsapp-web.js. !pending lists students who have not voted, !votes lists voters per option, and teachers are managed by tagging them in chat.",
    stats: [
      { label: "Scale",   value: "65 members · 24/7 uptime" },
      { label: "Hosting", value: "AWS EC2 Ubuntu" },
    ],
    tags: ["whatsapp-web.js", "AWS EC2", "Node.js", "Puppeteer"],
    links: [{ label: "GitHub", url: "#" }] },
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