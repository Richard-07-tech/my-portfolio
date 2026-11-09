import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, X } from "lucide-react";
import "@/App.css";
import { about, certifications, coding, education, hackathons, projects, skills, contact } from "@/data/content";

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: [.22, 1, .36, 1] } } };

function Mark({ small = false }) { return <span className={`brand-mark ${small ? "brand-mark-small" : ""}`} aria-hidden="true"><i /><i /><i /></span>; }
function SectionLabel({ number, children }) { return <div className="section-label" data-testid={`section-label-${number}`}><span>{number}</span><b>{children}</b><em /></div>; }

// Map of slug → public image path
const PROJECT_IMAGES = {
  "canopy":           "/project-canopy.jpg",
  "finpilot":         "/project-finpilot.png",
  "teacher-studio":   "/project-teacher.jpg",
  "corridor":         "/project-corridor.jpg",
  "invoice-ai":       "/project-invoice.jpg",
  "whatsapp-poll-bot":"/project-pollbot.png",
};

function ProjectCard({ project, index, onOpen }) {
  const img = PROJECT_IMAGES[project.slug];
  const isFeatured = index === 0;

  return <motion.article
    className={`project-card project-${project.theme}${isFeatured ? " project-card--featured" : ""}`}
    variants={reveal}
    whileHover={{ y: isFeatured ? 0 : -8 }}
    data-testid={`project-card-${project.slug}`}
  >
    {/* Art / Screenshot */}
    <div className={`project-art${img ? " project-art--photo" : ""}`} aria-label={`${project.title} screenshot`}>
      {img
        ? <><img src={img} alt={project.title} className="art-photo" /><div className="art-photo-overlay" /></>
        : <><span className="art-grid" /><span className="art-orbit" /></>
      }
      <span className="art-index">0{index + 1}</span>
      {!isFeatured && <span className="art-word">{project.short}</span>}
      <button className="art-open" onClick={() => onOpen(project)} aria-label={`Open ${project.title} details`} data-testid={`project-open-${project.slug}`}><ArrowUpRight size={20} /></button>
    </div>

    {/* Body */}
    <div className="project-card-body">
      <div className="project-card-meta"><span>{project.type}</span><span>{project.year}</span></div>
      <h3>{project.title}</h3>

      {isFeatured ? (<>
        <p className="project-card-long">{project.longDetail || project.detail}</p>
        {project.stats && (
          <div className="project-stats">
            {project.stats.map(s => (
              <div className="project-stat" key={s.label}>
                <span>{s.label}</span>
                <strong>{s.value}</strong>
              </div>
            ))}
          </div>
        )}
        <div className="tag-row tag-row--wide">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="featured-links">
          {project.links.map(link => (
            <a key={link.label} href={link.url}
              className={`button ${link.label === "Live app" ? "button-primary" : "button-quiet"}`}
              target={link.url !== "#" ? "_blank" : undefined} rel="noreferrer">
              {link.label} <ArrowUpRight size={15} />
            </a>
          ))}
          <button className="text-link" onClick={() => onOpen(project)} data-testid={`project-details-${project.slug}`}>Full case notes <ArrowUpRight size={15} /></button>
        </div>
      </>) : (<>
        <p>{project.summary}</p>
        <div className="tag-row">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
        <button className="text-link" onClick={() => onOpen(project)} data-testid={`project-details-${project.slug}`}>Read case notes <ArrowUpRight size={15} /></button>
      </>)}
    </div>
  </motion.article>;
}

function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("work");
  const [selected, setSelected] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, .4], [0, 180]);
  const orbYSpring = useSpring(orbY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.body.classList.toggle("dark", dark);
  }, [dark]);
  useEffect(() => { const lenis = new Lenis({ lerp: .08, smoothWheel: true }); let raf; const loop = t => { lenis.raf(t); raf = requestAnimationFrame(loop); }; raf = requestAnimationFrame(loop); return () => { cancelAnimationFrame(raf); lenis.destroy(); }; }, []);
  useEffect(() => { const ids = ["about", "skills", "work", "leadership", "education", "contact"]; const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-35% 0px -55%" }); ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); }); return () => observer.disconnect(); }, []);

  const jump = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return <div className={`site-shell${dark ? " dark" : ""}`} ref={heroRef}>
    <header className="topbar"><a className="brand" href="#top" data-testid="brand-home"><Mark /><span>RICHARD<span className="brand-dot">.</span>DOSS</span></a><nav className="desktop-nav" aria-label="Primary navigation">{[["about","About"],["skills","Stack"],["work","Work"],["contact","Contact"]].map(([id,label]) => <a className={active === id ? "active" : ""} href={`#${id}`} key={id} data-testid={`nav-${id}`}>{label}</a>)}</nav><div className="topbar-actions"><a href="https://github.com/Richard-07-tech" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="nav-github"><Github size={17} /></a><a href="https://www.linkedin.com/in/richard-allen-doss-180a9a381/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="nav-linkedin"><Linkedin size={17} /></a><button onClick={() => setDark(!dark)} aria-label="Toggle color theme" data-testid="theme-toggle">{dark ? <Sun size={17} /> : <Moon size={17} />}</button></div></header>

    <main id="top">
      <section className="hero" data-testid="hero-section"><div className="hero-noise" /><motion.div className="hero-orb" style={{ y: orbYSpring }} /><div className="hero-copy"><motion.div initial="hidden" animate="show" variants={reveal} className="eyebrow"><span className="pulse" /> Available for AI/ML & software engineering internships</motion.div><motion.h1 initial="hidden" animate="show" transition={{ delay: .12 }} variants={reveal}>Building systems<br /><span>that think</span><i> &amp; ship.</i></motion.h1><motion.p initial="hidden" animate="show" transition={{ delay: .22 }} variants={reveal}>I’m Richard Allen Doss — an IT undergraduate building full applications end to end: backend APIs, LLM workflows, data pipelines and deployed front ends.</motion.p><motion.div className="hero-actions" initial="hidden" animate="show" transition={{ delay: .3 }} variants={reveal}><a className="button button-primary" href="#work" data-testid="hero-view-projects">View selected work <ArrowDownRight size={18} /></a><a className="button button-quiet" href="/resume.pdf" download data-testid="hero-download-resume">Download resume <ArrowUpRight size={17} /></a></motion.div></div><div className="hero-side"><span>CHENNAI / INDIA</span><span className="vertical-line" /><span>B.TECH 2025–2029</span></div><motion.div className="hero-scribble" initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .7, duration: .8 }}>RA<span>↘</span></motion.div></section>
      <div className="marquee" aria-label="Areas of practice" data-testid="practice-marquee"><div>AI / ML <b>✦</b> FULL-STACK SYSTEMS <b>✦</b> DATA PIPELINES <b>✦</b> HUMAN-CENTERED TOOLS <b>✦</b> AI / ML <b>✦</b> FULL-STACK SYSTEMS <b>✦</b></div></div>

      <motion.section id="about" className="section about-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={reveal}><SectionLabel number="01">The short version</SectionLabel><div className="about-grid"><h2>Not just models.<br /><span>Working products.</span></h2><div><p className="large-copy">{about}</p><div className="fact-grid">{[["STUDYING","B.Tech Information Technology"],["COLLEGE","Sri Sairam Engineering College"],["CGPA","9.35 / 10"],["BASED IN","Chennai, Tamil Nadu"]].map(([label,value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></div></motion.section>

      <motion.section id="skills" className="section skills-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} variants={reveal}><SectionLabel number="02">The working stack</SectionLabel><div className="skills-head"><h2>Tools for the<br /><span>whole arc.</span></h2><p>From first schema to final screen. The tools change; the care stays.</p></div><div className="skills-grid">{skills.map((group, i) => <div className={`skill-group skill-${i}`} key={group.name}><span className="skill-number">0{i + 1}</span><h3>{group.name}</h3><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></motion.section>

      <section id="work" className="section work-section"><div className="work-heading"><SectionLabel number="03">Selected work</SectionLabel><div className="work-title-row"><h2>Built to be<br /><span>used.</span></h2><p>Six projects shipped or prototyped. Each one starts with a real problem and ends closer to someone’s hands.</p></div></div><motion.div className="projects-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: .08 }} variants={{ show: { transition: { staggerChildren: .08 } } }}>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} onOpen={setSelected} />)}</motion.div></section>

      <motion.section id="leadership" className="section leadership-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={reveal}><SectionLabel number="04">Outside the repo</SectionLabel><div className="leadership-grid"><div><h2>Lead the room.<br /><span>Share the work.</span></h2><p>Four national-level hackathons. Four chances to turn a rough idea into a team’s direction.</p></div><div className="timeline">{hackathons.map((item, i) => <div className="timeline-item" key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}</div></div></motion.section>

      <motion.section id="education" className="section education-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} variants={reveal}><SectionLabel number="05">Proof of practice</SectionLabel><div className="education-grid"><div><h2>Learn it.<br /><span>Then apply it.</span></h2><div className="education-card"><span>2025 — 2029</span><h3>{education.degree}</h3><p>{education.school}</p><strong>{education.cgpa}</strong></div><div className="school-scores"><div><span>CLASS XII</span><b>91.6%</b></div><div><span>CLASS X</span><b>90.8%</b></div></div></div><div className="cert-list"><div className="cert-heading"><span>NPTEL / CERTIFICATIONS</span><span>SCORE</span></div>{certifications.map(cert => <div className="cert-row" key={cert.name}><span>{cert.name}</span><b>{cert.score}</b></div>)}</div></div></motion.section>

      <motion.section className="section coding-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: .18 }} variants={reveal}><div className="coding-panel"><span className="panel-kicker">CODING PRACTICE / SKILLRACK</span><h2>Keep the<br /><span>fundamentals</span><br />sharp.</h2><p>{coding}</p><div className="code-languages"><span>PYTHON</span><span>JAVA</span><span>C</span><span>DSA</span></div></div></motion.section>

      <section id="contact" className="contact-section"><div className="contact-inner"><SectionLabel number="06">Start a conversation</SectionLabel><h2>Have a hard<br /><span>problem?</span></h2><a className="contact-email" href={`mailto:${contact.email}`} data-testid="contact-email">{contact.email} <ArrowUpRight /></a><div className="contact-links"><a href="https://github.com/Richard-07-tech" target="_blank" rel="noreferrer" data-testid="contact-github"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/richard-allen-doss-180a9a381/" target="_blank" rel="noreferrer" data-testid="contact-linkedin"><Linkedin size={17} /> LinkedIn</a><span data-testid="contact-location">{contact.location}</span></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#top" data-testid="footer-home"><Mark small /><span>RICHARD<span className="brand-dot">.</span>DOSS</span></a><span>© {new Date().getFullYear()} / BUILT WITH CURIOSITY</span><a href="#top" data-testid="back-to-top">Back to top ↑</a></footer>
    <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.div className="project-modal" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" data-testid="project-modal"><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details" data-testid="project-modal-close"><X /></button><div className={`modal-art project-${selected.theme}${PROJECT_IMAGES[selected.slug] ? " modal-art--photo" : ""}`}>{PROJECT_IMAGES[selected.slug] ? <img src={PROJECT_IMAGES[selected.slug]} alt={selected.title} className="modal-art-photo" /> : <span>{selected.short}</span>}</div><span className="modal-kicker">{selected.type} / {selected.year}</span><h2>{selected.title}</h2><p>{selected.longDetail || selected.detail}</p>{selected.stats && (<div className="project-stats" style={{ margin: "20px 0" }}>{selected.stats.map(s => (<div className="project-stat" key={s.label}><span>{s.label}</span><strong>{s.value}</strong></div>))}</div>)}<div className="tag-row">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-links">{selected.links.map(link => <a href={link.url} key={link.label} target={link.url !== "#" ? "_blank" : undefined} rel="noreferrer" data-testid={`modal-link-${link.label.toLowerCase().replace(" ", "-")}`}>{link.label} <ArrowUpRight size={16} /></a>)}</div></motion.div></motion.div>}</AnimatePresence>
  </div>;
}
export default App;