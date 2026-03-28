"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";

const GITHUB = "https://github.com/saisha-l";
const LINKEDIN = "https://www.linkedin.com/in/saisha-l";
const EMAIL = "slakkoju@uw.edu";
const TEL = "+19713252586";
const TEL_DISPLAY = "(971) 325-2586";

const curieImages = ["/curie1.jpg", "/curie2.jpeg", "/curie3.jpeg"];
const fhImages = ["/FH1.jpeg", "/FH2.jpeg"];
const ubiImages = ["/curie2.jpeg", "/FH2.jpeg"];

type ProjectData = {
  id: string;
  index: string;
  images: string[];
  imageAlt: string;
  tag: string;
  date: string;
  title: string;
  org: string;
  bullets: ReactNode[];
  typeCoverDek?: string;
  featured?: boolean;
};

const projects: ProjectData[] = [
  {
    id: "fred-hutch", index: "01", featured: true, images: fhImages, imageAlt: "Fred Hutch research",
    tag: "Bioinformatics", date: "Aug 2024 – Present · Seattle, WA",
    title: "RNA-seq pipelines & reproducible analysis", org: "Fred Hutchinson Cancer Center — Research intern",
    typeCoverDek: "Python/R pipelines, quality control, and modular tooling at scale.",
    bullets: [
      <>Engineered <strong>reproducible Python/R pipelines</strong> for 500+ RNA-seq datasets with environment isolation, version control, and automated quality checks.</>,
      <>Implemented <strong>preprocessing, normalization, and feature extraction</strong> using vectorized and parallelized workflows.</>,
      <>Integrated <strong>unit tests and regression tests</strong> to validate statistical correctness and prevent silent failures.</>,
      <><strong>Refactored monolithic scripts</strong> into modular components to improve maintainability and reuse.</>,
    ],
  },
  {
    id: "ubi-lab", index: "02", images: ubiImages, imageAlt: "Ubiquitous Computing Lab",
    tag: "Research assistant", date: "Jun 2025 – Present · Seattle, WA",
    title: "Accessibility tools & geometry pipelines", org: "Ubiquitous Computing Lab, University of Washington",
    typeCoverDek: "3D-printable tooling, containers, Slurm, and Trimesh at scale.",
    bullets: [
      <><strong>Architected modular Python systems</strong> for 3D-printable accessibility tools using layered abstractions, configuration management, and reproducible environments.</>,
      <>Built <strong>containerized ML and geometry-processing pipelines</strong> (Docker, Singularity) with dependency isolation, version pinning, and automated builds.</>,
      <><strong>Deployed parallel workloads on Slurm clusters</strong>, tuning resource allocation, job scheduling, and retry logic to improve throughput and fault tolerance.</>,
      <>Designed scalable algorithms in <strong>Trimesh</strong> for mesh segmentation, collision detection, and parametric joint generation over large datasets.</>,
    ],
  },
  {
    id: "atc", index: "03", images: [], imageAlt: "", tag: "Leadership",
    date: "May 2025 – Present · Seattle, WA", title: "Recruitment & competitions",
    org: "UW Algorithmic Trading Club — Vice President",
    typeCoverDek: "Evaluation systems, problem authoring, and workshops for 200+ applicants.",
    bullets: [
      <>Developed <strong>automated evaluation systems for 200+ applicants</strong>, including test harnesses for time complexity, memory usage, and edge-case handling.</>,
      <><strong>Authored algorithmic and systems-design problems</strong> covering caching, concurrency, and API design fundamentals.</>,
      <>Led workshops on <strong>debugging, profiling, and maintainable, test-driven code</strong>.</>,
    ],
  },
  {
    id: "studywell", index: "04", images: [], imageAlt: "", tag: "Technical project",
    date: "StudyWell", title: "AI-assisted productivity platform", org: "Next.js · TypeScript · AWS",
    typeCoverDek: "Multi-tier architecture, auth, CI/CD, and production observability.",
    bullets: [
      <>Designed a <strong>multi-tier architecture</strong> (Next.js, TypeScript, AWS) with clearly defined service boundaries and RESTful APIs.</>,
      <>Implemented <strong>authentication, authorization, and input validation</strong> to mitigate common security vulnerabilities.</>,
      <>Built <strong>CI/CD pipelines (GitHub Actions)</strong> with linting, unit tests, integration tests, and staged deployments.</>,
      <>Added <strong>monitoring and error-reporting hooks</strong> to diagnose production issues.</>,
    ],
  },
  {
    id: "pokerbot", index: "05", images: [], imageAlt: "", tag: "Technical project",
    date: "Husky Hold'em", title: "PokerBot competition engine", org: "Monte Carlo simulation · Optimization",
    typeCoverDek: "Modular evaluation, caching, and benchmarks over 10k+ games.",
    bullets: [
      <>Implemented <strong>Monte Carlo simulation</strong> and modular evaluation functions using object-oriented and functional design patterns.</>,
      <><strong>Optimized state representation and caching</strong> to reduce runtime and memory overhead.</>,
      <>Created <strong>reproducible benchmarks and stress tests</strong> over 10,000+ randomized games.</>,
    ],
  },
  {
    id: "curie", index: "06", images: curieImages, imageAlt: "CURIE Academy",
    tag: "Earlier research", date: "Jul 2023 · Ithaca, NY",
    title: "Ex-ovo cardiac perfusion system", org: "CURIE Academy Scholar — Cornell University",
    typeCoverDek: "Fluidics, CAD, and microcontrollers for tissue support.",
    bullets: [
      <>Developed a <strong>fluidic system</strong> for ex-ovo chick hearts under physiologically relevant conditions (temperature, pressure, shear).</>,
      <>Used <strong>CAD and microcontroller programming</strong> for custom perfusion components.</>,
      <>Iterative testing and optimization, <strong>reducing failure rates by 40%</strong>.</>,
    ],
  },
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Image src={images[current]} alt={`${alt} ${current + 1}`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      </div>
      {images.length > 1 && (
        <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 10, background: "rgba(0,0,0,0.55)", padding: "4px 12px" }}>
          <button type="button" onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); }} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 14 }}>←</button>
          <span style={{ color: "#ccc", fontSize: 10, letterSpacing: "0.06em", minWidth: 32, textAlign: "center", lineHeight: "1.8" }}>{current + 1}/{images.length}</span>
          <button type="button" onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); }} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 14 }}>→</button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  const [open, setOpen] = useState(false);
  const hasPhotos = project.images.length > 0;
  return (
    <div className={`proj-card${project.featured ? " proj-featured" : ""}`}>
      {!open ? (
        <>
          <div className="proj-media">
            {hasPhotos ? <ImageCarousel images={project.images} alt={project.imageAlt} /> : (
              <div className="proj-type-cover">
                <span className="proj-tag">{project.index} — {project.tag}</span>
                <div className="proj-divider" />
                <h3 className="proj-cover-title">{project.title}</h3>
                <p className="proj-cover-org">{project.org}</p>
                {project.typeCoverDek && <p className="proj-cover-dek">{project.typeCoverDek}</p>}
              </div>
            )}
          </div>
          {hasPhotos && (
            <div className="proj-caption">
              <span className="proj-tag" style={{ color: "#888" }}>{project.index} — {project.tag}</span>
              <h3 className="proj-caption-title">{project.title}</h3>
              <p className="proj-caption-org">{project.org}</p>
            </div>
          )}
          <button type="button" className="proj-btn" onClick={() => setOpen(true)}>Details →</button>
        </>
      ) : (
        <div className="proj-detail">
          <div className="proj-detail-head">
            <span className="proj-tag">{project.index}</span>
            <h3 className="proj-detail-title">{project.title}</h3>
            <p className="proj-detail-meta">{project.date}</p>
            <p className="proj-detail-meta">{project.org}</p>
          </div>
          <ul className="proj-bullets">
            {project.bullets.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <button type="button" className="proj-btn" style={{ marginTop: "auto" }} onClick={() => setOpen(false)}>← Back</button>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--w:#ffffff;--b:#0a0a0a;--g:#6b6b6b;--l:#f2f2f0;--r:#d8d8d8}
        html,body{background:var(--w)}
        body{color:var(--b);font-family:'Barlow',system-ui,sans-serif;font-size:14px;line-height:1.6}

        .nav{display:flex;align-items:center;justify-content:space-between;padding:18px 40px;border-bottom:1px solid var(--r);position:sticky;top:0;background:var(--w);z-index:50}
        .nav-logo{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:15px;letter-spacing:.18em;text-transform:uppercase;color:var(--b)}
        .nav-links{display:flex;gap:36px;list-style:none}
        .nav-links a{font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--b);text-decoration:none;transition:color .15s}
        .nav-links a:hover{color:var(--g)}
        .nav-contact{font-size:11px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--b);text-decoration:none;padding:8px 20px;border:1.5px solid var(--b);transition:background .15s,color .15s}
        .nav-contact:hover{background:var(--b);color:var(--w)}

        .hero{display:grid;grid-template-columns:1fr 1fr;min-height:88vh;border-bottom:1px solid var(--r)}
        .hero-left{display:flex;flex-direction:column;justify-content:flex-end;padding:48px 40px 56px;border-right:1px solid var(--r)}
        .hero-loc{font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--g);margin-bottom:20px}
        .hero-name{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(5rem,11vw,9rem);line-height:.88;letter-spacing:-.02em;text-transform:uppercase;color:var(--b);margin-bottom:36px}
        .hero-dek{font-size:14px;line-height:1.75;color:var(--g);max-width:400px;margin-bottom:40px}
        .hero-dek strong{color:var(--b);font-weight:600}
        .hero-meta{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--r);padding-top:28px}
        .hero-meta-item{padding-right:24px}
        .hero-meta-item:last-child{padding-right:0;border-left:1px solid var(--r);padding-left:24px}
        .hero-meta-label{font-size:9px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--g);display:block;margin-bottom:6px}
        .hero-meta-val{font-size:13px;font-weight:500;color:var(--b)}
        .hero-right{position:relative;overflow:hidden;background:var(--l)}
        .hero-collage{position:absolute;inset:0;display:grid;grid-template-rows:60% 40%}
        .hero-main{position:relative;border-bottom:1px solid var(--r);overflow:hidden}
        .hero-row{display:grid;grid-template-columns:1fr 1fr}
        .hero-sm{position:relative;overflow:hidden}
        .hero-sm:first-child{border-right:1px solid var(--r)}

        .about{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--r)}
        .about-left{padding:64px 40px;border-right:1px solid var(--r)}
        .sec-label{font-size:9px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:var(--g);margin-bottom:32px;display:flex;align-items:center;gap:12px}
        .sec-label::after{content:'';flex:1;height:1px;background:var(--r)}
        .about-hed{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(2.5rem,5vw,4.5rem);line-height:.92;text-transform:uppercase;letter-spacing:-.01em;margin-bottom:32px}
        .about-hed em{font-style:italic;font-weight:700;color:var(--g)}
        .about-body{font-size:14px;line-height:1.8;color:var(--g);max-width:480px}
        .about-body p{margin-bottom:1em}
        .about-body h4{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--b);font-weight:700;margin:28px 0 12px}
        .about-right{position:relative;overflow:hidden;background:var(--l);min-height:400px}

        .skills{border-bottom:1px solid var(--r)}
        .skills-inner{padding:48px 40px}
        .skills-grid{display:grid;grid-template-columns:repeat(3,1fr)}
        .skill-item{padding:28px 32px 28px 0;border-right:1px solid var(--r);margin-right:32px}
        .skill-item:nth-child(3n){border-right:none;margin-right:0;padding-right:0}
        .skill-cat{font-size:9px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--b);margin-bottom:8px}
        .skill-list{font-size:13px;color:var(--g);line-height:1.65}

        .work-hdr{display:flex;align-items:baseline;justify-content:space-between;padding:48px 40px 28px;border-bottom:1px solid var(--r)}
        .work-hed{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(2.5rem,5vw,4rem);text-transform:uppercase;letter-spacing:-.01em}
        .work-hint{font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--g)}
        .work-grid{display:grid;grid-template-columns:repeat(3,1fr)}

        .proj-card{border-right:1px solid var(--r);border-bottom:1px solid var(--r);display:flex;flex-direction:column;min-height:460px}
        .proj-card:nth-child(3n){border-right:none}
        .proj-featured{grid-column:span 2}
        .proj-media{flex:1;position:relative;min-height:280px;background:var(--l);overflow:hidden}
        .proj-type-cover{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:32px 28px;background:var(--l)}
        .proj-tag{font-size:9px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--g)}
        .proj-divider{width:40px;height:2px;background:var(--b);margin:16px 0}
        .proj-cover-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(1.4rem,2.8vw,2.2rem);line-height:1;text-transform:uppercase;letter-spacing:-.01em;color:var(--b);margin-bottom:10px}
        .proj-cover-org{font-size:11px;color:var(--g);letter-spacing:.02em;margin-bottom:12px}
        .proj-cover-dek{font-size:12px;color:var(--g);line-height:1.6}
        .proj-caption{padding:16px 20px 12px;border-top:1px solid var(--r);background:var(--w)}
        .proj-caption-title{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:1.15rem;text-transform:uppercase;letter-spacing:.01em;margin:6px 0 4px}
        .proj-caption-org{font-size:11px;color:var(--g)}
        .proj-btn{flex-shrink:0;padding:13px 20px;border:none;border-top:1px solid var(--r);background:var(--l);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--b);cursor:pointer;text-align:left;transition:background .15s,color .15s;font-family:'Barlow',sans-serif;width:100%}
        .proj-btn:hover{background:var(--b);color:var(--w)}
        .proj-detail{display:flex;flex-direction:column;flex:1;padding:28px 24px 0;overflow-y:auto}
        .proj-detail-head{border-bottom:1px solid var(--r);padding-bottom:16px;margin-bottom:18px}
        .proj-detail-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.35rem;text-transform:uppercase;line-height:1.1;margin:8px 0 6px}
        .proj-detail-meta{font-size:11px;color:var(--g);line-height:1.5}
        .proj-bullets{list-style:none;flex:1}
        .proj-bullets li{font-size:12.5px;line-height:1.65;color:var(--g);padding:8px 0 8px 16px;border-bottom:1px solid var(--r);position:relative}
        .proj-bullets li::before{content:'—';position:absolute;left:0;color:var(--b);font-weight:700;font-size:10px}
        .proj-bullets li strong{color:var(--b);font-weight:600}

        .footer{border-top:1px solid var(--r);padding:40px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px}
        .footer-name{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:2rem;text-transform:uppercase;letter-spacing:-.01em}
        .footer-links{display:flex;gap:32px;flex-wrap:wrap}
        .footer-links a{font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--b);text-decoration:none;transition:color .15s}
        .footer-links a:hover{color:var(--g)}
        .footer-copy{grid-column:1/-1;font-size:11px;color:var(--g);padding-top:24px;border-top:1px solid var(--r);display:flex;justify-content:space-between}

        .menu-overlay{position:fixed;inset:0;z-index:200;background:var(--b);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:64px;gap:4px}
        .menu-overlay a{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(3rem,8vw,6rem);text-transform:uppercase;letter-spacing:-.02em;line-height:1;color:var(--w);text-decoration:none;transition:color .2s}
        .menu-overlay a:hover{color:var(--g)}
        .menu-close{position:absolute;top:28px;right:40px;background:none;border:1.5px solid rgba(255,255,255,.3);color:var(--w);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:10px 20px;cursor:pointer;font-family:'Barlow',sans-serif;transition:border-color .2s}
        .menu-close:hover{border-color:var(--w)}

        @media(max-width:900px){
          .nav{padding:16px 24px}.nav-links{display:none}
          .hero{grid-template-columns:1fr;min-height:auto}.hero-left{padding:36px 24px 40px;border-right:none}.hero-right{height:60vw;border-top:1px solid var(--r)}.hero-name{font-size:clamp(4rem,18vw,7rem)}
          .about{grid-template-columns:1fr}.about-left{padding:40px 24px;border-right:none;border-bottom:1px solid var(--r)}.about-right{min-height:280px}
          .skills-inner{padding:36px 24px}.skills-grid{grid-template-columns:1fr 1fr}.skill-item:nth-child(3n){border-right:1px solid var(--r);margin-right:32px;padding-right:28px}.skill-item:nth-child(2n){border-right:none;margin-right:0;padding-right:0}
          .work-hdr{padding:36px 24px 20px}.work-grid{grid-template-columns:1fr}.proj-card{border-right:none}.proj-featured{grid-column:span 1}
          .footer{padding:32px 24px;grid-template-columns:1fr}.footer-links{gap:16px}
          .menu-overlay{padding:40px 24px}.menu-close{right:24px}
        }
        @media(min-width:901px) and (max-width:1100px){
          .work-grid{grid-template-columns:1fr 1fr}.proj-card:nth-child(2n){border-right:none}.proj-card:nth-child(3n){border-right:1px solid var(--r)}.proj-featured{grid-column:span 2}
        }
      `}</style>

      <nav className="nav">
        <span className="nav-logo">Saisha Lakkoju</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
        </ul>
        <a href={`mailto:${EMAIL}`} className="nav-contact">Contact</a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-left">
            <p className="hero-loc">Seattle, Washington · UW · 2028</p>
            <h1 className="hero-name">SAISHA<br />LAKKOJU</h1>
            <p className="hero-dek">
              <strong>B.S. Computer Science</strong> (minor: Business Administration), University of Washington.
              Building reliable pipelines, tooling, and products across <strong>bioinformatics, ML,</strong> and <strong>full-stack engineering</strong>.
            </p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-label">Status</span>
                <span className="hero-meta-val">Research intern · VP ATC</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Available</span>
                <span className="hero-meta-val">Summer 2026 internships</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-collage">
              <div className="hero-main">
                <Image src="/FH1.jpeg" alt="Fred Hutch research" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
              </div>
              <div className="hero-row">
                <div className="hero-sm"><Image src="/curie1.jpg" alt="CURIE Academy" fill style={{ objectFit: "cover" }} /></div>
                <div className="hero-sm"><Image src="/curie2.jpeg" alt="Research" fill style={{ objectFit: "cover" }} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-left">
            <p className="sec-label">About</p>
            <h2 className="about-hed">FROM THE<br /><em>boundary</em><br />OF RESEARCH<br />&amp; PRODUCT</h2>
            <div className="about-body">
              <p>Coursework spans data structures and algorithms, probability, foundations of computing, hardware/software interface, parallelism, and linear algebra — with a focus on turning theory into shippable systems.</p>
              <h4>Education</h4>
              <p><strong>University of Washington</strong> — B.S. Computer Science; minor in Business Administration (expected June 2028).</p>
              <p style={{ fontSize: 12, lineHeight: 1.7 }}>Relevant coursework: Data Structures &amp; Algorithms · Probability for CS · Foundations of Computing · Hardware/Software Interface · Parallelism · Linear Algebra</p>
            </div>
          </div>
          <div className="about-right">
            <Image src="/FH2.jpeg" alt="Saisha Lakkoju" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="skills-inner">
            <p className="sec-label">Technical skills</p>
            <div className="skills-grid">
              <div className="skill-item"><p className="skill-cat">Languages</p><p className="skill-list">Python, Java, Swift, Objective-C, TypeScript, JavaScript, R, HTML/CSS</p></div>
              <div className="skill-item"><p className="skill-cat">Software Engineering</p><p className="skill-list">OOP, data structures, algorithms, design patterns, code review, TDD</p></div>
              <div className="skill-item"><p className="skill-cat">Systems &amp; Security</p><p className="skill-list">Linux, networking, secure coding, auth, logging, monitoring</p></div>
              <div className="skill-item"><p className="skill-cat">Machine Learning</p><p className="skill-list">PyTorch, TensorFlow, scikit-learn, Core ML, Hugging Face</p></div>
              <div className="skill-item"><p className="skill-cat">Cloud &amp; Infrastructure</p><p className="skill-list">AWS (Lambda, API Gateway, S3), Docker, Kubernetes, Singularity, Slurm, GitHub Actions</p></div>
              <div className="skill-item"><p className="skill-cat">Data &amp; Distributed</p><p className="skill-list">Apache Spark, Hadoop, parallel processing, caching, fault tolerance</p></div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="work-hdr">
            <h2 className="work-hed">Selected Work</h2>
            <span className="work-hint">Click for details</span>
          </div>
          <div className="work-grid">
            {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        <footer className="footer" id="contact">
          <div className="footer-name">Saisha Lakkoju</div>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${TEL}`}>{TEL_DISPLAY}</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="footer-copy">
            <span>© 2026 Saisha Lakkoju</span>
            <span>Seattle · University of Washington · Computer Science</span>
          </div>
        </footer>
      </main>

      {menuOpen && (
        <div className="menu-overlay" role="dialog" aria-modal="true">
          <button type="button" className="menu-close" onClick={() => setMenuOpen(false)}>Close</button>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
}