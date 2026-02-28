"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

const PRACTICES = [
    { num: "01", title: "Constitutional Law", desc: "Landmark cases defending fundamental rights before the Supreme Court of India." },
    { num: "02", title: "Corporate Litigation", desc: "High-stakes commercial disputes, M&A conflicts, and board-level legal strategy." },
    { num: "03", title: "Arbitration", desc: "Domestic and international arbitration with LCIA, ICC, and SIAC frameworks." },
    { num: "04", title: "Criminal Defence", desc: "Representation in complex white-collar and economic offence proceedings." },
    { num: "05", title: "IP & Technology", desc: "Intellectual property protection, tech contracts, and emerging digital law." },
];

const STATS = [
    { value: "20+", label: "Years of Practice" },
    { value: "850+", label: "Cases Argued" },
    { value: "3", label: "High Courts" },
    { value: "94%", label: "Success Rate" },
];

export default function HeroSection() {
    const nameRef = useRef<HTMLHeadingElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(total > 0 ? window.scrollY / total : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const statsView = useInView(0.15);
    const photoView = useInView(0.1);
    const practicesView = useInView(0.05);
    const closingView = useInView(0.2);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #0C0C0A;
          --white: #F7F5F0;
          --accent: #C8102E;
          --mid:   #6B6760;
          --rule:  rgba(12,12,10,0.12);
        }

        html { scroll-behavior: smooth; background: var(--white); }
        body { background: var(--white); }

        /* ─── PROGRESS BAR ─── */
        .progress-bar {
          position: fixed;
          top: 0; left: 0;
          height: 2px;
          background: var(--black);
          z-index: 100;
          transition: width 0.1s linear;
        }

        /* ─── NAV ─── */
        .site-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 90;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.75rem clamp(1.5rem, 5vw, 4rem);
          mix-blend-mode: multiply;
        }

        .nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.14em;
          color: var(--black);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--black);
          text-decoration: none;
          opacity: 0.55;
          transition: opacity 0.2s;
        }

        .nav-links a:hover { opacity: 1; }

        /* ─── SECTION SHELL ─── */
        .section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 6rem);
          border-bottom: 1px solid var(--rule);
          position: relative;
        }

        /* ─── SECTION 1: NAME REVEAL ─── */
        .s-hero {
          background: var(--white);
          overflow: hidden;
          justify-content: flex-end;
          padding-bottom: clamp(3rem, 8vh, 7rem);
        }

        .hero-issue-line {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: clamp(2rem, 5vh, 4rem);
          animation: fadeIn 0.6s 0.2s both;
        }

        .issue-rule {
          width: 36px; height: 1px;
          background: var(--accent);
        }

        .issue-text {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .hero-name-wrap {
          overflow: hidden;
          margin-bottom: 0.06em;
        }

        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5.5rem, 20vw, 19rem);
          line-height: 0.88;
          color: var(--black);
          letter-spacing: 0.01em;
          display: block;
          animation: slideUp 1s cubic-bezier(0.16,1,0.3,1) both;
        }

        .hero-name.delay { animation-delay: 0.12s; }

        .hero-sub-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-top: clamp(1.5rem, 4vh, 3rem);
          animation: fadeIn 0.8s 0.6s both;
          flex-wrap: wrap;
        }

        .hero-title-block {}

        .hero-title {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          color: var(--mid);
          line-height: 1.4;
        }

        .hero-title strong {
          display: block;
          font-style: normal;
          font-family: 'Libre Baskerville', serif;
          font-weight: 700;
          font-size: clamp(0.75rem, 1.2vw, 0.9rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--black);
          margin-bottom: 0.3rem;
        }

        .hero-scroll-cue {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: default;
        }

        .scroll-track {
          width: 1px;
          height: 48px;
          background: var(--rule);
          position: relative;
          overflow: hidden;
        }

        .scroll-track::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--black);
          animation: scrollDrop 1.8s 1s ease-in-out infinite;
        }

        .scroll-label {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--mid);
          writing-mode: vertical-rl;
        }

        /* Big background year */
        .hero-year {
          position: absolute;
          right: clamp(1rem, 4vw, 4rem);
          bottom: clamp(2rem, 6vh, 5rem);
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(6rem, 18vw, 18rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(12,12,10,0.06);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          animation: fadeIn 1s 1s both;
        }

        /* ─── SECTION 2: PHOTO + QUOTE ─── */
        .s-photo {
          background: var(--black);
          color: var(--white);
          border-bottom-color: rgba(247,245,240,0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 0;
          align-items: stretch;
        }

        .photo-image-col {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .photo-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.2s ease, transform 1.6s cubic-bezier(0.16,1,0.3,1);
        }

        .photo-image-col.visible img {
          opacity: 1;
          transform: scale(1);
        }

        .photo-content-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 5rem);
          border-left: 1px solid rgba(247,245,240,0.08);
        }

        .photo-kicker {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s 0.2s ease;
        }

        .photo-content-col.visible .photo-kicker,
        .photo-content-col.visible .photo-quote,
        .photo-content-col.visible .photo-attribution,
        .photo-content-col.visible .photo-cta { opacity: 1; transform: translateY(0); }

        .photo-quote {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: clamp(1.6rem, 3.5vw, 2.8rem);
          line-height: 1.3;
          color: var(--white);
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s 0.35s ease;
        }

        .photo-attribution {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.78rem;
          color: rgba(247,245,240,0.4);
          letter-spacing: 0.06em;
          margin-bottom: 3.5rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s 0.5s ease;
        }

        .photo-cta {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s 0.65s ease;
        }

        .photo-cta-text {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--white);
          border-bottom: 1px solid rgba(247,245,240,0.3);
          padding-bottom: 0.15rem;
          transition: border-color 0.3s;
        }

        .photo-cta:hover .photo-cta-text { border-color: var(--white); }

        .cta-arrow {
          width: 28px; height: 1px;
          background: rgba(247,245,240,0.4);
          position: relative;
          transition: width 0.3s;
        }

        .cta-arrow::after {
          content: '';
          position: absolute;
          right: 0; top: -3px;
          width: 7px; height: 7px;
          border-right: 1px solid rgba(247,245,240,0.6);
          border-top: 1px solid rgba(247,245,240,0.6);
          transform: rotate(45deg);
        }

        .photo-cta:hover .cta-arrow { width: 40px; }

        /* ─── SECTION 3: STATS ─── */
        .s-stats {
          background: var(--white);
          padding-top: clamp(5rem, 12vh, 10rem);
          padding-bottom: clamp(5rem, 12vh, 10rem);
        }

        .stats-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: clamp(3rem, 8vh, 7rem);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .section-label {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--mid);
        }

        .section-index {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          color: rgba(12,12,10,0.2);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid var(--rule);
        }

        .stat-item {
          padding: clamp(2rem, 5vh, 4rem) clamp(1.5rem, 3vw, 3rem);
          border-right: 1px solid var(--rule);
          border-top: 1px solid var(--rule);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .stat-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-item:nth-child(1) { transition-delay: 0s; }
        .stat-item:nth-child(2) { transition-delay: 0.1s; }
        .stat-item:nth-child(3) { transition-delay: 0.2s; }
        .stat-item:nth-child(4) { transition-delay: 0.3s; }

        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 1;
          color: var(--black);
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--mid);
        }

        /* ─── SECTION 4: PRACTICES ─── */
        .s-practices {
          background: var(--white);
          padding-top: clamp(4rem, 10vh, 8rem);
          padding-bottom: clamp(4rem, 10vh, 8rem);
        }

        .practices-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: clamp(3rem, 8vh, 6rem);
          align-items: end;
        }

        .practices-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          line-height: 1.1;
          color: var(--black);
        }

        .practices-headline em {
          font-style: italic;
          color: var(--mid);
        }

        .practices-intro {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(0.85rem, 1.4vw, 1rem);
          line-height: 1.85;
          color: var(--mid);
          max-width: 38ch;
          align-self: end;
        }

        .practices-list {
          border-top: 1px solid var(--rule);
        }

        .practice-row {
          display: grid;
          grid-template-columns: 3.5rem 1fr auto;
          align-items: center;
          gap: clamp(1rem, 3vw, 2.5rem);
          padding: clamp(1.5rem, 3.5vh, 2.5rem) 0;
          border-bottom: 1px solid var(--rule);
          cursor: default;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.25s;
        }

        .practice-row.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .practice-row:nth-child(1) { transition-delay: 0s; }
        .practice-row:nth-child(2) { transition-delay: 0.08s; }
        .practice-row:nth-child(3) { transition-delay: 0.16s; }
        .practice-row:nth-child(4) { transition-delay: 0.24s; }
        .practice-row:nth-child(5) { transition-delay: 0.32s; }

        .practice-row:hover { background: rgba(12,12,10,0.025); }
        .practice-row:hover .practice-arrow { transform: translateX(6px); }

        .practice-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          color: var(--accent);
        }

        .practice-body { display: flex; flex-direction: column; gap: 0.3rem; }

        .practice-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.2rem, 2.8vw, 2rem);
          color: var(--black);
          line-height: 1.1;
        }

        .practice-desc {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(0.78rem, 1.1vw, 0.88rem);
          color: var(--mid);
          line-height: 1.65;
          max-width: 55ch;
        }

        .practice-arrow {
          width: 32px; height: 1px;
          background: var(--black);
          opacity: 0.2;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.3s;
          flex-shrink: 0;
        }

        .practice-arrow::after {
          content: '';
          position: absolute;
          right: 0; top: -3px;
          width: 7px; height: 7px;
          border-right: 1px solid var(--black);
          border-top: 1px solid var(--black);
          transform: rotate(45deg);
        }

        .practice-row:hover .practice-arrow { opacity: 0.8; }

        /* ─── SECTION 5: CLOSING CTA ─── */
        .s-close {
          background: var(--black);
          color: var(--white);
          min-height: 80vh;
          justify-content: center;
          align-items: flex-start;
          border-bottom: none;
        }

        .close-kicker {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.6s 0.1s ease;
        }

        .close-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 12vw, 10rem);
          line-height: 0.9;
          color: var(--white);
          letter-spacing: 0.02em;
          margin-bottom: clamp(2rem, 5vh, 4rem);
          max-width: 14ch;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.8s 0.2s ease;
        }

        .close-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: clamp(2.5rem, 6vh, 4rem);
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s 0.4s ease;
        }

        .contact-line {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          text-decoration: none;
        }

        .contact-type {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(247,245,240,0.35);
          width: 4rem;
          flex-shrink: 0;
        }

        .contact-value {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: clamp(0.95rem, 1.8vw, 1.2rem);
          color: rgba(247,245,240,0.8);
          transition: color 0.2s;
        }

        .contact-line:hover .contact-value { color: var(--white); }

        .close-btn {
          display: inline-flex;
          align-items: center;
          gap: 1.2rem;
          background: var(--white);
          color: var(--black);
          font-family: 'Libre Baskerville', serif;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 1rem 2rem;
          text-decoration: none;
          opacity: 0;
          transform: translateY(16px);
          transition: background 0.3s, color 0.3s, transform 0.7s 0.55s ease, opacity 0.7s 0.55s ease;
        }

        .close-btn.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .close-btn:hover {
          background: var(--accent);
          color: var(--white);
        }

        .s-close.visible .close-kicker,
        .s-close.visible .close-headline,
        .s-close.visible .close-contact { opacity: 1; transform: translateY(0); }

        /* ─── FOOTER STRIP ─── */
        .footer-strip {
          background: var(--black);
          border-top: 1px solid rgba(247,245,240,0.08);
          padding: 1.5rem clamp(1.5rem, 6vw, 6rem);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.14em;
          color: rgba(247,245,240,0.35);
        }

        .footer-note {
          font-family: 'Libre Baskerville', serif;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(247,245,240,0.2);
        }

        /* ─── KEYFRAMES ─── */
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes scrollDrop {
          0%   { top: -100%; }
          50%  { top: 0; }
          100% { top: 100%; }
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 768px) {
          .s-photo {
            grid-template-columns: 1fr;
          }

          .photo-image-col {
            min-height: 60vw;
            max-height: 70vh;
          }

          .photo-content-col {
            border-left: none;
            border-top: 1px solid rgba(247,245,240,0.08);
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .practices-header {
            grid-template-columns: 1fr;
          }

          .practice-row {
            grid-template-columns: 2.5rem 1fr;
          }

          .practice-arrow { display: none; }

          .nav-links { display: none; }
        }
      `}</style>

            {/* Progress bar */}
            <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }} />

            {/* Nav */}
            <nav className="site-nav">
                <span className="nav-logo">PRADEEP RAI</span>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#practice">Practice</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* ── SECTION 1: NAME REVEAL ── */}
            <section className="section s-hero">
                <div className="hero-issue-line">
                    <div className="issue-rule" />
                    <span className="issue-text">Advocate · Supreme Court of India · Est. 2004</span>
                </div>

                <div className="hero-name-wrap">
                    <span className="hero-name" ref={nameRef}>PRADEEP</span>
                </div>
                <div className="hero-name-wrap">
                    <span className="hero-name delay">RAI</span>
                </div>

                <div className="hero-sub-row">
                    <div className="hero-title-block">
                        <p className="hero-title">
                            <strong>Senior Advocate</strong>
                            Two decades of practice across<br />
                            <em>constitutional, corporate &amp; criminal law.</em>
                        </p>
                    </div>
                    <div className="hero-scroll-cue">
                        <div className="scroll-track" />
                        <span className="scroll-label">Scroll</span>
                    </div>
                </div>

                <div className="hero-year" aria-hidden="true">2004</div>
            </section>

            {/* ── SECTION 2: PHOTO ── */}
            <section id="about" className="section s-photo">
                <div
                    ref={photoView.ref}
                    className={`photo-image-col${photoView.inView ? " visible" : ""}`}
                >
                    <Image
                        src="/pradeep.png"
                        alt="Pradeep Rai"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                        priority
                    />
                </div>
                <div className={`photo-content-col${photoView.inView ? " visible" : ""}`}>
                    <p className="photo-kicker">Profile</p>
                    <blockquote className="photo-quote">
                        "The law is not a machine. It is a discipline of judgment — and judgment takes a lifetime to earn."
                    </blockquote>
                    <p className="photo-attribution">— Pradeep Rai, Senior Advocate</p>
                    <a href="#contact" className="photo-cta">
                        <span className="photo-cta-text">Schedule a Consultation</span>
                        <span className="cta-arrow" aria-hidden="true" />
                    </a>
                </div>
            </section>

            {/* ── SECTION 3: STATS ── */}
            <section className="section s-stats">
                <div className="stats-header">
                    <span className="section-label">By the numbers</span>
                    <span className="section-index">02 / 04</span>
                </div>
                <div
                    ref={statsView.ref}
                    className="stats-grid"
                >
                    {STATS.map((s, i) => (
                        <div
                            key={s.label}
                            className={`stat-item${statsView.inView ? " visible" : ""}`}
                        >
                            <span className="stat-value">{s.value}</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 4: PRACTICES ── */}
            <section id="practice" className="section s-practices">
                <div className="practices-header">
                    <h2 className="practices-headline">
                        Areas of<br /><em>Practice</em>
                    </h2>
                    <p className="practices-intro">
                        A focused practice built on depth, not breadth. Each matter receives
                        the full weight of two decades of legal experience.
                    </p>
                </div>

                <div ref={practicesView.ref} className="practices-list">
                    {PRACTICES.map((p) => (
                        <div
                            key={p.num}
                            className={`practice-row${practicesView.inView ? " visible" : ""}`}
                        >
                            <span className="practice-num">{p.num}</span>
                            <div className="practice-body">
                                <span className="practice-title">{p.title}</span>
                                <span className="practice-desc">{p.desc}</span>
                            </div>
                            <div className="practice-arrow" aria-hidden="true" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 5: CLOSING ── */}
            <section
                id="contact"
                className={`section s-close${closingView.inView ? " visible" : ""}`}
                ref={closingView.ref}
            >
                <p className="close-kicker">Get in Touch</p>
                <h2 className="close-headline">Let's Discuss Your Matter</h2>

                <div className="close-contact">
                    <a href="tel:+919810000000" className="contact-line">
                        <span className="contact-type">Phone</span>
                        <span className="contact-value">+91 98100 00000</span>
                    </a>
                    <a href="mailto:contact@pradeeprai.in" className="contact-line">
                        <span className="contact-type">Email</span>
                        <span className="contact-value">contact@pradeeprai.in</span>
                    </a>
                    <div className="contact-line">
                        <span className="contact-type">Office</span>
                        <span className="contact-value">Supreme Court Chambers, New Delhi</span>
                    </div>
                </div>

                <a
                    href="mailto:contact@pradeeprai.in"
                    className={`close-btn${closingView.inView ? " visible" : ""}`}
                >
                    Send an Enquiry
                    <span className="cta-arrow" style={{ background: "currentColor" }} aria-hidden="true" />
                </a>
            </section>

            {/* Footer */}
            <footer className="footer-strip">
                <span className="footer-logo">PRADEEP RAI</span>
                <span className="footer-note">© 2025 · Advocate, Supreme Court of India · All Rights Reserved</span>
            </footer>
        </>
    );
}