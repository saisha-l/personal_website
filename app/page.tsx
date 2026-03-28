"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
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
  posterNote?: ReactNode;
  typeCoverDek?: string;
  /** Wider cell in asymmetric grid */
  featured?: boolean;
};

const projects: ProjectData[] = [
  {
    id: "fred-hutch",
    index: "01",
    featured: true,
    images: fhImages,
    imageAlt: "Fred Hutch research",
    tag: "Bioinformatics",
    date: "Aug 2024 – Present · Seattle, WA",
    title: "RNA-seq pipelines & reproducible analysis",
    org: "Fred Hutchinson Cancer Center — Research intern",
    typeCoverDek:
      "Python/R pipelines, quality control, and modular tooling at scale.",
    bullets: [
      <>
        Engineered <strong>reproducible Python/R pipelines</strong> for 500+ RNA-seq datasets with environment isolation, version control, and automated quality checks.
      </>,
      <>
        Implemented <strong>preprocessing, normalization, and feature extraction</strong> using vectorized and parallelized workflows.
      </>,
      <>
        Integrated <strong>unit tests and regression tests</strong> to validate statistical correctness and prevent silent failures.
      </>,
      <>
        <strong>Refactored monolithic scripts</strong> into modular components to improve maintainability and reuse.
      </>,
    ],
  },
  {
    id: "ubi-lab",
    index: "02",
    images: ubiImages,
    imageAlt: "Ubiquitous Computing Lab",
    tag: "Research assistant",
    date: "Jun 2025 – Present · Seattle, WA",
    title: "Accessibility tools & geometry pipelines",
    org: "Ubiquitous Computing Lab, University of Washington",
    typeCoverDek:
      "3D-printable tooling, containers, Slurm, and Trimesh at scale.",
    bullets: [
      <>
        <strong>Architected modular Python systems</strong> for 3D-printable accessibility tools using layered abstractions, configuration management, and reproducible environments.
      </>,
      <>
        Built <strong>containerized ML and geometry-processing pipelines</strong> (Docker, Singularity) with dependency isolation, version pinning, and automated builds.
      </>,
      <>
        <strong>Deployed parallel workloads on Slurm clusters</strong>, tuning resource allocation, job scheduling, and retry logic to improve throughput and fault tolerance.
      </>,
      <>
        Designed scalable algorithms in <strong>Trimesh</strong> for mesh segmentation, collision detection, and parametric joint generation over large datasets.
      </>,
    ],
  },
  {
    id: "atc",
    index: "03",
    images: [],
    imageAlt: "",
    tag: "Leadership",
    date: "May 2025 – Present · Seattle, WA",
    title: "Recruitment & competitions",
    org: "UW Algorithmic Trading Club — Vice President",
    typeCoverDek:
      "Evaluation systems, problem authoring, and workshops for 200+ applicants.",
    bullets: [
      <>
        Developed <strong>automated evaluation systems for 200+ applicants</strong>, including test harnesses for time complexity, memory usage, and edge-case handling.
      </>,
      <>
        <strong>Authored algorithmic and systems-design problems</strong> covering caching, concurrency, and API design fundamentals.
      </>,
      <>
        Led workshops on <strong>debugging, profiling, and maintainable, test-driven code</strong>.
      </>,
    ],
  },
  {
    id: "studywell",
    index: "04",
    images: [],
    imageAlt: "",
    tag: "Technical project",
    date: "StudyWell",
    title: "AI-assisted productivity platform",
    org: "Next.js · TypeScript · AWS",
    typeCoverDek:
      "Multi-tier architecture, auth, CI/CD, and production observability.",
    bullets: [
      <>
        Designed a <strong>multi-tier architecture</strong> (Next.js, TypeScript, AWS) with clearly defined service boundaries and RESTful APIs.
      </>,
      <>
        Implemented <strong>authentication, authorization, and input validation</strong> to mitigate common security vulnerabilities.
      </>,
      <>
        Built <strong>CI/CD pipelines (GitHub Actions)</strong> with linting, unit tests, integration tests, and staged deployments.
      </>,
      <>
        Added <strong>monitoring and error-reporting hooks</strong> to diagnose production issues.
      </>,
    ],
  },
  {
    id: "pokerbot",
    index: "05",
    images: [],
    imageAlt: "",
    tag: "Technical project",
    date: "Husky Hold’em",
    title: "PokerBot competition engine",
    org: "Monte Carlo simulation · Optimization",
    typeCoverDek:
      "Modular evaluation, caching, and benchmarks over 10k+ games.",
    bullets: [
      <>
        Implemented <strong>Monte Carlo simulation</strong> and modular evaluation functions using object-oriented and functional design patterns.
      </>,
      <>
        <strong>Optimized state representation and caching</strong> to reduce runtime and memory overhead.
      </>,
      <>
        Created <strong>reproducible benchmarks and stress tests</strong> over 10,000+ randomized games.
      </>,
    ],
  },
  {
    id: "portfolio-site",
    index: "06",
    images: [],
    imageAlt: "",
    tag: "Technical project",
    date: "Portfolio",
    title: "Personal portfolio platform",
    org: "API design · Testing · Reliability",
    typeCoverDek:
      "Typed interfaces, logging, rate limiting, and automated tests.",
    bullets: [
      <>
        Built <strong>backend services with typed interfaces and API contracts</strong> to ensure correctness between frontend and backend.
      </>,
      <>
        Implemented <strong>centralized logging, error handling, and rate limiting</strong> for reliability and security.
      </>,
      <>
        Wrote <strong>automated API and end-to-end tests</strong> to validate feature stability.
      </>,
    ],
  },
  {
    id: "curie",
    index: "07",
    images: curieImages,
    imageAlt: "CURIE Academy",
    tag: "Earlier research",
    date: "Jul 2023 · Ithaca, NY",
    title: "Ex-ovo cardiac perfusion system",
    org: "CURIE Academy Scholar — Cornell University",
    typeCoverDek: "Fluidics, CAD, and microcontrollers for tissue support.",
    bullets: [
      <>
        Developed a <strong>fluidic system</strong> for ex-ovo chick hearts under physiologically relevant conditions (temperature, pressure, shear).
      </>,
      <>
        Used <strong>CAD and microcontroller programming</strong> for custom perfusion components.
      </>,
      <>
        Iterative testing and optimization, <strong>reducing failure rates by 40%</strong>.
      </>,
    ],
  },
];

const heroFloats: { src: string; className: string }[] = [
  { src: "/curie1.jpg", className: "hero-float hero-float--a" },
  { src: "/FH1.jpeg", className: "hero-float hero-float--b" },
  { src: "/curie2.jpeg", className: "hero-float hero-float--c" },
  { src: "/FH2.jpeg", className: "hero-float hero-float--d" },
  { src: "/curie3.jpeg", className: "hero-float hero-float--e" },
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="carousel-wrap">
      <div className="carousel-img-container">
        <Image
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          style={{ objectFit: "cover" }}
          className="carousel-img"
        />
        <div className="carousel-overlay" />
      </div>
      {images.length > 1 && (
        <>
          <div className="carousel-nav">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((c) => (c - 1 + images.length) % images.length);
              }}
              className="nav-btn"
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <span className="nav-count">
              {current + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((c) => (c + 1) % images.length);
              }}
              className="nav-btn"
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`dot ${i === current ? "dot-active" : ""}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectFlipCard({ project }: { project: ProjectData }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = useCallback(() => setFlipped((f) => !f), []);
  const hasPhotos = project.images.length > 0;

  return (
    <div
      className={`flip-scene ${project.featured ? "flip-scene--featured" : ""}`}
    >
      <div className={`flip-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="flip-face flip-front">
          <div className="film-frame">
            {hasPhotos ? (
              <div className="project-images">
                <ImageCarousel
                  images={project.images}
                  alt={project.imageAlt}
                />
              </div>
            ) : (
              <div className="type-front">
                <div className="type-front-inner">
                  <span className="card-index">
                    {project.index} · {project.tag}
                  </span>
                  <div className="type-front-rule" />
                  <h3 className="type-front-title">{project.title}</h3>
                  <p className="type-front-org">{project.org}</p>
                  {project.typeCoverDek && (
                    <p className="type-front-dek">{project.typeCoverDek}</p>
                  )}
                </div>
              </div>
            )}
            {hasPhotos && (
              <div className="film-caption">
                <span className="card-index card-index--light">
                  {project.index} · {project.tag}
                </span>
                <h3 className="film-title">{project.title}</h3>
                <p className="film-org">{project.org}</p>
              </div>
            )}
          </div>
          <button
            type="button"
            className="flip-cta"
            onClick={toggle}
            aria-expanded={flipped}
          >
            Details <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="flip-face flip-back">
          <div className="flip-back-inner">
            <div className="back-masthead">
              <span className="card-index">{project.index}</span>
              <h3 className="back-title">{project.title}</h3>
              <p className="back-meta">
                {project.date} · {project.org}
              </p>
            </div>
            <ul className="project-bullets">
              {project.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {project.posterNote && (
              <div className="poster-note">{project.posterNote}</div>
            )}
          </div>
          <button
            type="button"
            className="flip-cta flip-cta-back"
            onClick={toggle}
            aria-expanded={flipped}
          >
            <span aria-hidden="true">←</span>{" "}
            {hasPhotos ? "Back to image" : "Back"}
          </button>
        </div>
      </div>
    </div>
  );
}

function SlashRule() {
  return (
    <div className="slash-rule" aria-hidden="true">
      {Array.from({ length: 48 }).map((_, i) => (
        <span key={i}>/</span>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        :root {
          --paper: #f5f2ed;
          --paper-2: #efeae2;
          --ink: #111111;
          --ink-muted: #5c5c5c;
          --line: rgba(17, 17, 17, 0.22);
          --line-strong: rgba(17, 17, 17, 0.55);
        }

        main {
          min-height: 100vh;
        }

        .shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 22px 120px;
        }

        /* ── Top bar ── */
        .top-bar {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 22px 0 18px;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        .top-bar-center {
          font-family: 'Bodoni Moda', serif;
          font-size: 11px;
          letter-spacing: 0.35em;
          color: var(--ink);
          text-align: center;
        }

        .menu-btn {
          justify-self: end;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 10px 22px;
          border: 1px solid var(--ink);
          background: transparent;
          color: var(--ink);
          cursor: pointer;
          border-radius: 999px;
          transition: background 0.2s, color 0.2s;
        }

        .menu-btn:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .slash-rule {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0 10px;
          font-size: 11px;
          color: var(--line-strong);
          user-select: none;
          line-height: 1;
          padding: 6px 0 28px;
          opacity: 0.65;
        }

        /* ── Hero collage ── */
        .hero {
          position: relative;
          min-height: min(72vh, 640px);
          padding: 20px 0 56px;
        }

        .hero-title-block {
          position: relative;
          z-index: 10;
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          pointer-events: none;
        }

        .hero-title-block span {
          pointer-events: auto;
        }

        .hero-line {
          font-family: 'Bodoni Moda', serif;
          font-weight: 500;
          font-size: clamp(2.4rem, 9.5vw, 5.75rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: var(--ink);
          display: block;
        }

        .hero-line--muted {
          color: var(--ink-muted);
          font-weight: 400;
          font-style: italic;
        }

        .hero-dek {
          margin-top: 28px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          font-size: 14px;
          line-height: 1.75;
          color: var(--ink-muted);
          font-weight: 400;
        }

        .hero-dek strong {
          color: var(--ink);
          font-weight: 500;
        }

        .hero-float {
          position: absolute;
          z-index: 2;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          border: 1px solid var(--line-strong);
          background: #fff;
          overflow: hidden;
        }

        .hero-float--a {
          width: min(200px, 26vw);
          aspect-ratio: 4/5;
          top: 4%;
          left: 2%;
          transform: rotate(-6deg);
        }

        .hero-float--b {
          width: min(160px, 22vw);
          aspect-ratio: 1;
          top: 18%;
          right: 4%;
          transform: rotate(4deg);
        }

        .hero-float--c {
          width: min(140px, 20vw);
          aspect-ratio: 3/4;
          bottom: 8%;
          left: 8%;
          transform: rotate(5deg);
        }

        .hero-float--d {
          width: min(130px, 18vw);
          aspect-ratio: 4/3;
          bottom: 14%;
          right: 10%;
          transform: rotate(-3deg);
        }

        .hero-float--e {
          width: min(110px, 16vw);
          aspect-ratio: 3/4;
          top: 42%;
          left: 18%;
          transform: rotate(-8deg);
        }

        .hero-float .hero-img {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* ── About + arch ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px 56px;
          align-items: start;
          padding: 48px 0 64px;
          border-top: 1px solid var(--line);
        }

        .about-name {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .about-tagline {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          font-style: italic;
          font-weight: 400;
          color: var(--ink-muted);
          margin-bottom: 22px;
          line-height: 1.35;
        }

        .about-body p {
          font-size: 14px;
          line-height: 1.8;
          color: var(--ink-muted);
          margin-bottom: 1em;
          text-align: justify;
          hyphens: auto;
        }

        .about-body h4 {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink);
          margin: 28px 0 12px;
          font-weight: 600;
        }

        .about-body .coursework {
          font-size: 12px;
          line-height: 1.65;
          color: var(--ink-muted);
        }

        .arch-wrap {
          position: relative;
          justify-self: end;
          width: 100%;
          max-width: 340px;
        }

        .arch-frame {
          border-radius: 50% 50% 12px 12px / 38% 38% 12px 12px;
          overflow: hidden;
          aspect-ratio: 3/4;
          border: 1px solid var(--line-strong);
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        .arch-img {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* ── Skills strip ── */
        .skills-block {
          padding: 36px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          margin-bottom: 48px;
        }

        .skills-block h3 {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          margin-bottom: 16px;
          color: var(--ink);
          font-weight: 600;
        }

        .skills-cols {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px 32px;
          font-size: 12px;
          line-height: 1.65;
          color: var(--ink-muted);
        }

        .skills-cols strong {
          color: var(--ink);
          font-weight: 600;
        }

        /* ── Work grid ── */
        .work-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .work-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(1.75rem, 3vw, 2.35rem);
          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .work-sub {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        .work-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        @media (min-width: 720px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .flip-scene--featured {
            grid-column: span 2;
          }
        }

        @media (min-width: 1024px) {
          .work-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .flip-scene--featured {
            grid-column: span 2;
          }
        }

        .card-index {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        .card-index--light {
          color: rgba(245, 242, 233, 0.65);
        }

        .flip-scene {
          perspective: 1400px;
        }

        .flip-inner {
          position: relative;
          min-height: 420px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-scene--featured .flip-inner {
          min-height: 460px;
        }

        .flip-inner.is-flipped {
          transform: rotateY(180deg);
        }

        .flip-inner.is-flipped .flip-front {
          pointer-events: none;
        }

        .flip-inner:not(.is-flipped) .flip-back {
          pointer-events: none;
        }

        .flip-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border: 1px solid var(--line-strong);
          background: var(--paper);
        }

        .flip-front {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
        }

        .flip-back {
          position: absolute;
          inset: 0;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
        }

        .film-frame {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          background: #0a0a0a;
        }

        .type-front {
          flex: 1;
          min-height: 280px;
          background: linear-gradient(165deg, #f0ebe3 0%, #e8e2da 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px 22px;
        }

        .type-front-inner {
          text-align: left;
          width: 100%;
          max-width: 360px;
        }

        .type-front-rule {
          width: 100%;
          height: 1px;
          background: var(--line-strong);
          margin: 14px 0 16px;
          opacity: 0.5;
        }

        .type-front-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(1.15rem, 2.2vw, 1.45rem);
          font-weight: 600;
          color: var(--ink);
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .type-front-org {
          font-size: 11px;
          color: var(--ink-muted);
          letter-spacing: 0.04em;
          margin-bottom: 10px;
        }

        .type-front-dek {
          font-size: 12px;
          line-height: 1.55;
          color: var(--ink-muted);
        }

        .project-images {
          position: relative;
          flex: 1;
          min-height: 280px;
        }

        .film-caption {
          padding: 16px 18px 14px;
          background: #111;
          border-top: 1px solid #2a2a2a;
        }

        .film-title {
          font-family: 'Bodoni Moda', serif;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #f5f2ed;
          line-height: 1.2;
          margin-top: 8px;
          margin-bottom: 4px;
        }

        .film-org {
          font-size: 10px;
          color: #9a9590;
          letter-spacing: 0.05em;
        }

        .flip-cta {
          flex-shrink: 0;
          padding: 12px 16px;
          border: none;
          border-top: 1px solid var(--line);
          background: var(--paper-2);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink);
          cursor: pointer;
          transition: background 0.2s;
        }

        .flip-cta:hover {
          background: var(--paper);
        }

        .flip-cta-back {
          background: var(--paper);
        }

        .flip-back-inner {
          flex: 1;
          overflow-y: auto;
          padding: 22px 20px 16px;
        }

        .back-masthead {
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--line);
        }

        .back-title {
          font-family: 'Bodoni Moda', serif;
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 10px;
          line-height: 1.25;
          color: var(--ink);
        }

        .back-meta {
          font-size: 11px;
          color: var(--ink-muted);
          margin-top: 8px;
          line-height: 1.45;
        }

        .project-bullets {
          list-style: none;
        }

        .project-bullets li {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-muted);
          padding-left: 14px;
          position: relative;
          margin-bottom: 10px;
          text-align: justify;
          hyphens: auto;
        }

        .project-bullets li::before {
          content: '·';
          position: absolute;
          left: 0;
          color: var(--ink);
          font-weight: 700;
        }

        .project-bullets li strong {
          color: var(--ink);
          font-weight: 600;
        }

        .poster-note {
          margin-top: 14px;
          padding: 12px 14px;
          border: 1px solid var(--line);
          font-size: 12px;
          color: var(--ink-muted);
          line-height: 1.6;
          font-style: italic;
        }

        .carousel-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 280px;
        }

        .carousel-img-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .carousel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 42%);
        }

        .carousel-dots {
          position: absolute;
          bottom: 88px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .dot-active {
          background: #fff;
        }

        .carousel-nav {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
          background: rgba(0,0,0,0.45);
          padding: 5px 12px;
        }

        .nav-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 14px;
          opacity: 0.9;
        }

        .nav-count {
          font-size: 10px;
          color: #ccc;
          letter-spacing: 0.06em;
          min-width: 34px;
          text-align: center;
        }

        /* ── Menu overlay ── */
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(245, 242, 237, 0.97);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 40px;
        }

        .menu-overlay a {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          color: var(--ink);
          text-decoration: none;
          padding: 8px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s, opacity 0.2s;
        }

        .menu-overlay a:hover {
          border-bottom-color: var(--ink);
        }

        .menu-close {
          position: absolute;
          top: 24px;
          right: 22px;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: none;
          border: 1px solid var(--ink);
          padding: 10px 18px;
          cursor: pointer;
          border-radius: 999px;
        }

        .site-footer {
          margin-top: 72px;
          padding-top: 32px;
          border-top: 1px solid var(--line);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
          justify-content: space-between;
        }

        .site-footer a {
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--line);
        }

        .site-footer a:hover {
          border-bottom-color: var(--ink);
        }

        @media (prefers-reduced-motion: reduce) {
          .flip-inner { transition: none; }
          .hero-float--a, .hero-float--b, .hero-float--c, .hero-float--d, .hero-float--e {
            transform: none;
          }
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .arch-wrap {
            justify-self: center;
            max-width: 280px;
          }
          .hero-float--e { display: none; }
          .hero-float--a { width: min(140px, 28vw); left: 0; }
          .hero-float--b { width: min(120px, 24vw); }
        }

        @media (max-width: 640px) {
          .top-bar {
            grid-template-columns: 1fr;
            gap: 12px;
            text-align: center;
          }
          .menu-btn { justify-self: center; }
          .flip-inner { min-height: 480px; }
          .flip-scene--featured .flip-inner { min-height: 520px; }
        }
      `}</style>

      <main>
        <div className="shell">
          <header className="top-bar">
            <span>© 2026</span>
            <span className="top-bar-center">Saisha Lakkoju</span>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
            >
              Menu
            </button>
          </header>

          <SlashRule />

          <section className="hero" aria-label="Introduction">
            {heroFloats.map((f) => (
              <div key={f.src} className={f.className}>
                <div className="hero-img">
                  <Image
                    src={f.src}
                    alt=""
                    fill
                    sizes="200px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
            <div className="hero-title-block">
              <span className="hero-line">Research,</span>
              <span className="hero-line hero-line--muted">systems,</span>
              <span className="hero-line">&amp; infrastructure</span>
              <p className="hero-dek">
                <strong>B.S. Computer Science</strong> (minor: Business
                Administration), University of Washington — expected{" "}
                <strong>June 2028</strong>. Seattle-based; building reliable
                pipelines, tooling, and products across bioinformatics, ML, and
                full-stack engineering.
              </p>
            </div>
          </section>

          <SlashRule />

          <section id="about" className="about-grid">
            <div>
              <h2 className="about-name">Saisha Lakkoju</h2>
              <p className="about-tagline">
                Seattle · UW · reproducible software at the boundary of research
                and product
              </p>
              <div className="about-body">
                <p>
                  Coursework spans data structures and algorithms, probability,
                  foundations of computing, hardware/software interface,
                  parallelism, and linear algebra — with a focus on turning
                  theory into shippable systems.
                </p>
                <h4>Education</h4>
                <p>
                  <strong>University of Washington</strong> — B.S. Computer
                  Science; minor in Business Administration (expected June
                  2028).
                </p>
                <p className="coursework">
                  Relevant coursework: Data Structures &amp; Algorithms;
                  Probability for CS; Foundations of Computing;
                  Hardware/Software Interface; Parallelism; Linear Algebra.
                </p>
              </div>
            </div>
            <div className="arch-wrap">
              <div className="arch-frame">
                <div className="arch-img">
                  <Image
                    src="/FH1.jpeg"
                    alt="Portrait"
                    fill
                    sizes="340px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="skills-block" id="skills">
            <h3>Technical skills</h3>
            <div className="skills-cols">
              <p>
                <strong>Languages.</strong> Python, Java, Swift, Objective-C,
                TypeScript, JavaScript, R, HTML/CSS
              </p>
              <p>
                <strong>Software engineering.</strong> OOP, data structures,
                algorithms, design patterns, code review, test-driven
                development
              </p>
              <p>
                <strong>Systems &amp; security.</strong> Linux, networking
                basics, secure coding, authentication, authorization, logging,
                monitoring
              </p>
              <p>
                <strong>Machine learning.</strong> PyTorch, TensorFlow,
                scikit-learn, Core ML, Hugging Face
              </p>
              <p>
                <strong>Cloud &amp; infrastructure.</strong> AWS (Lambda, API
                Gateway, S3), Docker, Kubernetes, Singularity, Slurm, CI/CD
                (GitHub Actions)
              </p>
              <p>
                <strong>Data &amp; distributed computing.</strong> Apache Spark,
                Hadoop, parallel processing, caching, fault tolerance
              </p>
            </div>
          </div>

          <section id="work">
            <div className="work-head">
              <h2 className="work-title">Selected work</h2>
              <span className="work-sub">Flip for resume detail</span>
            </div>
            <div className="work-grid">
              {projects.map((p) => (
                <ProjectFlipCard key={p.id} project={p} />
              ))}
            </div>
          </section>

          <footer className="site-footer" id="contact">
            <span>Contact</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${TEL}`}>{TEL_DISPLAY}</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </footer>
        </div>

        {menuOpen && (
          <div
            className="menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <button
              type="button"
              className="menu-close"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </main>
    </>
  );
}
