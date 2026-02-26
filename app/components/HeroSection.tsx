"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Cinzel:wght@400;500;600;700;900&family=Jost:wght@200;300;400;500&display=swap');

        :root {
          --navy: #0B1C2D;
          --burgundy: #6B1E1E;
          --gold: #C6A75E;
          --gold-light: #E8D5A3;
          --ivory: #F8F6F1;
          --charcoal: #1C1C1C;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          min-height: 100vh;
          background-color: var(--ivory);
          overflow: hidden;
          position: relative;
          font-family: 'Jost', sans-serif;
        }

        /* Grain texture overlay */
        .hero-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          z-index: 100;
        }

        /* Background architectural grid */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(11,28,45,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,28,45,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        /* Large decorative seal/circle */
        .bg-seal {
          position: absolute;
          right: -8vw;
          top: 50%;
          transform: translateY(-50%);
          width: 55vw;
          height: 55vw;
          max-width: 800px;
          max-height: 800px;
          border-radius: 50%;
          border: 1px solid rgba(198,167,94,0.15);
          z-index: 1;
        }
        .bg-seal::before {
          content: '';
          position: absolute;
          inset: 30px;
          border-radius: 50%;
          border: 1px solid rgba(198,167,94,0.1);
        }
        .bg-seal::after {
          content: '';
          position: absolute;
          inset: 60px;
          border-radius: 50%;
          border: 1px solid rgba(198,167,94,0.07);
          background: radial-gradient(ellipse at center, rgba(198,167,94,0.04) 0%, transparent 70%);
        }

        /* Diagonal accent line */
        .bg-diagonal {
          position: absolute;
          top: 0;
          right: 25%;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(198,167,94,0.2) 20%, rgba(198,167,94,0.2) 80%, transparent 100%);
          z-index: 1;
          transform: rotate(8deg) translateX(50%);
          transform-origin: top center;
        }

        /* NAV */
        .hero-nav {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 4rem;
          border-bottom: 1px solid rgba(11,28,45,0.08);
          animation: fadeDown 0.8s ease both;
        }
        .nav-logo {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          color: var(--navy);
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--charcoal);
          text-decoration: none;
          opacity: 0.65;
          transition: opacity 0.3s, color 0.3s;
        }
        .nav-links a:hover { opacity: 1; color: var(--burgundy); }
        .nav-cta {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--gold);
          text-decoration: none;
          border: 1px solid var(--gold);
          padding: 0.6rem 1.5rem;
          text-transform: uppercase;
          transition: all 0.3s;
        }
        .nav-cta:hover {
          background: var(--gold);
          color: var(--ivory);
        }

        /* HERO CONTENT */
        .hero-content {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 80px);
          align-items: center;
          padding: 0 4rem;
          gap: 4rem;
        }

        /* LEFT COLUMN */
        .hero-left {
          padding: 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          animation: fadeUp 0.9s 0.2s ease both;
        }
        .eyebrow-line {
          width: 40px;
          height: 1px;
          background: var(--gold);
        }
        .eyebrow-text {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          color: var(--burgundy);
          text-transform: uppercase;
          font-weight: 400;
        }

        .hero-name-block {
          margin-bottom: 0.5rem;
          animation: fadeUp 0.9s 0.35s ease both;
        }
        .hero-prefix {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.5vw, 1.3rem);
          font-weight: 300;
          font-style: italic;
          color: var(--navy);
          opacity: 0.6;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.25rem;
        }
        .hero-name {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
          letter-spacing: -0.01em;
          display: block;
          text-transform: uppercase;
        }
        .hero-name-second {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 400;
          color: var(--burgundy);
          line-height: 1;
          letter-spacing: -0.01em;
          display: block;
          text-transform: uppercase;
        }

        .designation-block {
          margin: 1.5rem 0 2.5rem;
          animation: fadeUp 0.9s 0.5s ease both;
          position: relative;
          padding-left: 1.5rem;
          border-left: 3px solid var(--gold);
        }
        .designation-primary {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.8vw, 1.4rem);
          font-weight: 500;
          color: var(--charcoal);
          letter-spacing: 0.02em;
          line-height: 1.3;
        }
        .designation-secondary {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: var(--navy);
          opacity: 0.55;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }

        .hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: 300;
          font-style: italic;
          color: var(--charcoal);
          opacity: 0.7;
          line-height: 1.7;
          max-width: 460px;
          margin-bottom: 3rem;
          animation: fadeUp 0.9s 0.65s ease both;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          animation: fadeUp 0.9s 0.8s ease both;
        }
        .btn-primary {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--ivory);
          background: var(--navy);
          padding: 1rem 2.5rem;
          border: 1px solid var(--navy);
          transition: all 0.35s;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: inline-block;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--burgundy);
          transform: translateX(-101%);
          transition: transform 0.35s ease;
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary span { position: relative; z-index: 1; }
        .btn-secondary {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.3s, color 0.3s;
        }
        .btn-secondary:hover { gap: 0.9rem; color: var(--burgundy); }
        .btn-secondary .arrow { font-size: 1rem; }

        /* Stats strip */
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-top: 4rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(11,28,45,0.1);
          animation: fadeUp 0.9s 1s ease both;
        }
        .stat-item { display: flex; flex-direction: column; gap: 0.2rem; }
        .stat-number {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
        }
        .stat-number span {
          font-size: 1rem;
          color: var(--gold);
        }
        .stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--charcoal);
          opacity: 0.5;
        }

        /* RIGHT COLUMN — Portrait + decorative frame */
        .hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 100%;
          animation: fadeIn 1.2s 0.4s ease both;
        }

        .portrait-frame {
          position: relative;
          width: 420px;
          height: 540px;
        }

        /* Decorative corner brackets */
        .portrait-frame::before {
          content: '';
          position: absolute;
          top: -15px; left: -15px;
          width: 60px; height: 60px;
          border-top: 2px solid var(--gold);
          border-left: 2px solid var(--gold);
          z-index: 3;
        }
        .portrait-frame::after {
          content: '';
          position: absolute;
          bottom: -15px; right: -15px;
          width: 60px; height: 60px;
          border-bottom: 2px solid var(--gold);
          border-right: 2px solid var(--gold);
          z-index: 3;
        }

        .portrait-offset {
          position: absolute;
          inset: 15px -15px -15px 15px;
          background: var(--navy);
          opacity: 0.08;
          z-index: 0;
        }

        .portrait-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 2;
          background: var(--navy);
        }

        .portrait-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(160deg, #142336 0%, #0B1C2D 60%, #1a0a0a 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .portrait-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(198,167,94,0.03) 30px,
            rgba(198,167,94,0.03) 31px
          );
        }

        .silhouette-svg {
          width: 75%;
          height: auto;
          position: relative;
          z-index: 2;
          opacity: 0.85;
          filter: drop-shadow(0 0 30px rgba(198,167,94,0.1));
        }

        .portrait-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 60%, rgba(198,167,94,0.07) 100%);
          z-index: 3;
          pointer-events: none;
        }

        /* Floating credential badge */
        .credential-badge {
          position: absolute;
          bottom: -20px;
          left: -40px;
          background: var(--ivory);
          border: 1px solid rgba(198,167,94,0.3);
          padding: 1.2rem 1.5rem;
          box-shadow: 0 20px 60px rgba(11,28,45,0.12);
          z-index: 10;
          animation: floatUp 0.9s 1.1s ease both;
          max-width: 220px;
        }
        .badge-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        .badge-title {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 0.25rem;
        }
        .badge-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          font-style: italic;
          color: var(--navy);
          line-height: 1.3;
        }

        /* Floating year badge */
        .year-badge {
          position: absolute;
          top: 30px;
          right: -30px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--burgundy);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: floatUp 0.9s 1.3s ease both;
        }
        .year-since {
          font-family: 'Jost', sans-serif;
          font-size: 0.5rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.6);
        }
        .year-number {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1;
        }

        /* Bottom marquee strip */
        .hero-marquee-strip {
          position: relative;
          z-index: 10;
          background: var(--navy);
          overflow: hidden;
          padding: 0.75rem 0;
          border-top: 1px solid rgba(198,167,94,0.2);
        }
        .marquee-track {
          display: flex;
          gap: 0;
          animation: marqueeScroll 30s linear infinite;
          width: max-content;
        }
        .marquee-item {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(198,167,94,0.6);
          white-space: nowrap;
          padding: 0 3rem;
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero-nav { padding: 1.5rem 2rem; }
          .nav-links { display: none; }
          .hero-content {
            grid-template-columns: 1fr;
            padding: 2rem;
            min-height: auto;
          }
          .hero-right { order: -1; justify-content: center; }
          .portrait-frame { width: 280px; height: 360px; }
          .credential-badge { left: 0; bottom: -10px; }
          .year-badge { right: 0; }
          .hero-stats { flex-wrap: wrap; gap: 2rem; }
        }
      `}</style>

            <section className="hero-root" ref={sectionRef}>
                <div className="bg-grid" />
                <div className="bg-seal" />
                <div className="bg-diagonal" />

                {/* NAV */}
                <nav className="hero-nav">
                    <span className="nav-logo">Adv. Rajan Mehta</span>
                    <ul className="nav-links">
                        {["Practice", "Cases", "Publications", "Chambers", "Contact"].map((item) => (
                            <li key={item}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="nav-cta">Consult Now</a>
                </nav>

                {/* MAIN HERO */}
                <div className="hero-content">
                    {/* LEFT */}
                    <div className="hero-left">
                        <div className="hero-eyebrow">
                            <div className="eyebrow-line" />
                            <span className="eyebrow-text">Senior Advocate · Supreme Court of India</span>
                        </div>

                        <div className="hero-name-block">
                            <span className="hero-prefix">The Honourable</span>
                            <span className="hero-name">Rajan</span>
                            <span className="hero-name-second">Mehta</span>
                        </div>

                        <div className="designation-block">
                            <p className="designation-primary">Designated Senior Advocate</p>
                            <p className="designation-secondary">Supreme Court of India · Bar Council of India</p>
                        </div>

                        <p className="hero-tagline">
                            "Four decades of unwavering pursuit of justice — from High Courts to the apex bench,
                            championing constitutional rights and corporate law with rare precision."
                        </p>

                        <div className="hero-actions">
                            <a href="#" className="btn-primary">
                                <span>View Practice Areas</span>
                            </a>
                            <a href="#" className="btn-secondary">
                                Read my story <span className="arrow">→</span>
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                <span className="stat-number">
                  40<span>+</span>
                </span>
                                <span className="stat-label">Years at Bar</span>
                            </div>
                            <div className="stat-item">
                <span className="stat-number">
                  1200<span>+</span>
                </span>
                                <span className="stat-label">Cases Argued</span>
                            </div>
                            <div className="stat-item">
                <span className="stat-number">
                  85<span>%</span>
                </span>
                                <span className="stat-label">Success Rate</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Portrait */}
                    <div className="hero-right">
                        <div className="portrait-frame">
                            <div className="portrait-offset" />
                            <div className="portrait-img-wrap">
                                {/*
                  Replace this placeholder with your actual image:
                  <Image src="/portrait.jpg" alt="Adv. Rajan Mehta" fill style={{ objectFit: 'cover' }} />
                */}
                                <div className="portrait-placeholder">
                                    <svg
                                        className="silhouette-svg"
                                        viewBox="0 0 300 400"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* Head */}
                                        <ellipse cx="150" cy="80" rx="55" ry="62" fill="#2a4a66" />
                                        {/* Body / gown */}
                                        <path
                                            d="M60 400 C60 250 80 200 150 185 C220 200 240 250 240 400Z"
                                            fill="#2a4a66"
                                        />
                                        {/* Gown overlay */}
                                        <path
                                            d="M70 220 L50 380 L150 370 L250 380 L230 220Z"
                                            fill="#1e3a52"
                                            opacity="0.6"
                                        />
                                        {/* Collar detail */}
                                        <path
                                            d="M110 190 L90 230 L150 210 L210 230 L190 190 L150 200Z"
                                            fill="#3a5a76"
                                        />
                                        {/* Gold band decoration */}
                                        <rect x="115" y="195" width="70" height="4" rx="2" fill="rgba(198,167,94,0.4)" />
                                        <rect x="120" y="205" width="60" height="3" rx="1.5" fill="rgba(198,167,94,0.25)" />
                                    </svg>
                                </div>
                                <div className="portrait-shimmer" />
                            </div>

                            {/* Credential badge */}
                            <div className="credential-badge">
                                <span className="badge-icon">⚖️</span>
                                <span className="badge-title">Designation</span>
                                <span className="badge-desc">Senior Advocate, conferred 1998</span>
                            </div>

                            {/* Year badge */}
                            <div className="year-badge">
                                <span className="year-since">Est.</span>
                                <span className="year-number">1984</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MARQUEE STRIP */}
                <div className="hero-marquee-strip">
                    <div className="marquee-track">
                        {[...Array(2)].flatMap((_, i) =>
                                [
                                    "Constitutional Law",
                                    "⬥",
                                    "Corporate Litigation",
                                    "⬥",
                                    "Criminal Appeals",
                                    "⬥",
                                    "Arbitration & ADR",
                                    "⬥",
                                    "Public Interest Litigation",
                                    "⬥",
                                    "Intellectual Property",
                                    "⬥",
                                    "Tax & Revenue",
                                    "⬥",
                                    "Environmental Law",
                                    "⬥",
                                ].map((item, j) => (
                                    <span key={`${i}-${j}`} className="marquee-item">
                  {item}
                </span>
                                ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}