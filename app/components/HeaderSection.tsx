"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
    { label: "About",    href: "#about"    },
    { label: "Practice", href: "#practice" },
    { label: "Cases",    href: "#cases"    },
    { label: "Contact",  href: "#contact"  },
];

export default function HeaderSection() {
    const [scrolled,    setScrolled]    = useState(false);
    const [menuOpen,    setMenuOpen]    = useState(false);
    const [activeLink,  setActiveLink]  = useState("");
    const [mounted,     setMounted]     = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    /* ── Mount fade-in ── */
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 60);
        return () => clearTimeout(t);
    }, []);

    /* ── Scroll detection ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 48);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ── Active section tracking ── */
    useEffect(() => {
        const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveLink(`#${e.target.id}`);
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    /* ── Lock body scroll when mobile menu is open ── */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes headerDrop {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0);     }
        }
        @keyframes menuSlide {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes menuReveal {
          from { clip-path: inset(0 0 100% 0); }
          to   { clip-path: inset(0 0 0% 0);   }
        }
        @keyframes burgerTop-open {
          0%   { transform: translateY(0)   rotate(0deg);   }
          50%  { transform: translateY(6px) rotate(0deg);   }
          100% { transform: translateY(6px) rotate(45deg);  }
        }
        @keyframes burgerTop-close {
          0%   { transform: translateY(6px) rotate(45deg); }
          50%  { transform: translateY(6px) rotate(0deg);  }
          100% { transform: translateY(0)   rotate(0deg);  }
        }
        @keyframes burgerBot-open {
          0%   { transform: translateY(0)    rotate(0deg);  }
          50%  { transform: translateY(-6px) rotate(0deg);  }
          100% { transform: translateY(-6px) rotate(-45deg);}
        }
        @keyframes burgerBot-close {
          0%   { transform: translateY(-6px) rotate(-45deg);}
          50%  { transform: translateY(-6px) rotate(0deg);  }
          100% { transform: translateY(0)    rotate(0deg);  }
        }

        .burger-top { animation: burgerTop-close 0.38s cubic-bezier(0.22,1,0.36,1) forwards; }
        .burger-bot { animation: burgerBot-close 0.38s cubic-bezier(0.22,1,0.36,1) forwards; }
        .burger-mid { transition: opacity 0.18s ease; }

        .menu-open .burger-top { animation: burgerTop-open 0.38s cubic-bezier(0.22,1,0.36,1) forwards; }
        .menu-open .burger-bot { animation: burgerBot-open 0.38s cubic-bezier(0.22,1,0.36,1) forwards; }
        .menu-open .burger-mid { opacity: 0; }

        .nav-link-line::after {
          content: '';
          display: block;
          height: 1px;
          background: #C8102E;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
          margin-top: 2px;
        }
        .nav-link-line:hover::after,
        .nav-link-line.active::after {
          transform: scaleX(1);
        }
      `}</style>

            {/* ════════════════════════════
          HEADER
      ════════════════════════════ */}
            <header
                ref={headerRef}
                className="fixed top-0 left-0 right-0 z-[100]"
                style={{
                    animation: mounted ? "headerDrop 0.7s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
                    opacity: mounted ? undefined : 0,
                }}
            >
                {/* Glass/blur backdrop that intensifies on scroll */}
                <div
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                        background: scrolled
                            ? "rgba(8,8,6,0.92)"
                            : "linear-gradient(to bottom, rgba(8,8,6,0.78) 0%, rgba(8,8,6,0) 100%)",
                        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "blur(0px)",
                        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "blur(0px)",
                        borderBottom: scrolled ? "1px solid rgba(247,245,240,0.07)" : "1px solid transparent",
                    }}
                />

                <div className="relative flex items-center justify-between h-[70px] px-[clamp(1.5rem,6vw,5.5rem)]">

                    {/* ── LOGO ── */}
                    <a
                        href="#about"
                        className="flex items-center gap-[0.8rem] no-underline group"
                        aria-label="Pradeep Rai — Home"
                    >
                        {/* Crimson monogram block */}
                        <div className="relative w-[34px] h-[34px] bg-[#C8102E] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.06]">
              <span
                  className="text-[#F7F5F0] leading-none select-none"
                  style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.15rem",
                      letterSpacing: "0.05em",
                  }}
              >
                PR
              </span>
                        </div>

                        {/* Wordmark */}
                        <div className="hidden sm:flex flex-col leading-none">
              <span
                  style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.15rem",
                      letterSpacing: "0.12em",
                      color: "#F7F5F0",
                      lineHeight: 1,
                  }}
              >
                PRADEEP RAI
              </span>
                            <span
                                style={{
                                    fontFamily: "'Libre Baskerville', serif",
                                    fontSize: "0.52rem",
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "rgba(247,245,240,0.38)",
                                    lineHeight: 1,
                                    marginTop: "4px",
                                }}
                            >
                Senior Advocate · Supreme Court
              </span>
                        </div>
                    </a>

                    {/* ── DESKTOP NAV ── */}
                    <nav className="hidden md:flex items-center gap-[clamp(1.8rem,3.5vw,3rem)]" aria-label="Primary">
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`nav-link-line no-underline transition-colors duration-200 ${
                                    activeLink === link.href ? "active" : ""
                                }`}
                                style={{
                                    fontFamily: "'Libre Baskerville', serif",
                                    fontSize: "0.67rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: activeLink === link.href
                                        ? "rgba(247,245,240,0.9)"
                                        : "rgba(247,245,240,0.46)",
                                    animationDelay: `${120 + i * 60}ms`,
                                }}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* CTA button */}
                        <a
                            href="mailto:contact@pradeeprai.in"
                            className="group relative overflow-hidden no-underline"
                            style={{
                                fontFamily: "'Libre Baskerville', serif",
                                fontSize: "0.62rem",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "#080806",
                                background: "#F7F5F0",
                                padding: "0.58rem 1.3rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.7rem",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "#F7F5F0";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "#080806";
                            }}
                        >
                            {/* Crimson fill on hover */}
                            <span
                                className="absolute inset-0 bg-[#C8102E]"
                                style={{
                                    transform: "scaleX(0)",
                                    transformOrigin: "left center",
                                    transition: "transform 0.32s cubic-bezier(0.22,1,0.36,1)",
                                }}
                                aria-hidden="true"
                                ref={(el) => {
                                    if (!el) return;
                                    const parent = el.parentElement!;
                                    parent.addEventListener("mouseenter", () => { el.style.transform = "scaleX(1)"; });
                                    parent.addEventListener("mouseleave", () => { el.style.transform = "scaleX(0)"; });
                                }}
                            />
                            <span className="relative">Brief Me</span>
                            <span className="relative shrink-0 w-[20px] h-[1px] bg-current inline-block" aria-hidden="true">
                <span className="absolute right-0 top-[-3px] w-[6px] h-[6px] border-r border-t border-current rotate-45" />
              </span>
                        </a>
                    </nav>

                    {/* ── MOBILE HAMBURGER ── */}
                    <button
                        className={`md:hidden flex flex-col justify-center items-center w-[44px] h-[44px] shrink-0 ${menuOpen ? "menu-open" : ""}`}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
            <span
                className="burger-top block w-[22px] h-[1.5px] bg-[#F7F5F0] origin-center"
                style={{ marginBottom: "4px" }}
            />
                        <span
                            className="burger-mid block w-[22px] h-[1.5px] bg-[#F7F5F0] origin-center"
                            style={{ marginBottom: "4px" }}
                        />
                        <span
                            className="burger-bot block w-[22px] h-[1.5px] bg-[#F7F5F0] origin-center"
                        />
                    </button>
                </div>
            </header>

            {/* ════════════════════════════
          MOBILE FULLSCREEN MENU
      ════════════════════════════ */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-[90] flex flex-col"
                    style={{
                        background: "#080806",
                        animation: "menuReveal 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
                    }}
                >
                    {/* Top gradient */}
                    <div className="h-[70px] shrink-0" />

                    {/* Decorative background letter */}
                    <div
                        aria-hidden="true"
                        className="absolute right-[-2vw] bottom-[-4vh] pointer-events-none select-none leading-none"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(12rem,40vw,22rem)",
                            color: "transparent",
                            WebkitTextStroke: "1px rgba(247,245,240,0.04)",
                        }}
                    >
                        R
                    </div>

                    {/* Eyebrow line */}
                    <div className="px-[clamp(1.5rem,6vw,5.5rem)] pt-[clamp(2.5rem,8vh,5rem)] mb-[3rem]">
                        <div className="flex items-center gap-[0.9rem]">
                            <div className="w-[28px] h-[1px] bg-[#C8102E] shrink-0" />
                            <span
                                style={{
                                    fontFamily: "'Libre Baskerville', serif",
                                    fontSize: "0.62rem",
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "#C8102E",
                                }}
                            >
                Navigation
              </span>
                        </div>
                    </div>

                    {/* Nav links */}
                    <nav className="flex-1 flex flex-col justify-start px-[clamp(1.5rem,6vw,5.5rem)]" aria-label="Mobile primary">
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="no-underline border-b border-[#F7F5F0]/10 py-[clamp(1.1rem,3vh,1.8rem)] flex items-center justify-between group"
                                style={{
                                    animation: `menuSlide 0.5s cubic-bezier(0.22,1,0.36,1) ${120 + i * 70}ms both`,
                                }}
                            >
                <span
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(2.5rem,10vw,4rem)",
                        letterSpacing: "0.04em",
                        color: activeLink === link.href ? "#F7F5F0" : "rgba(247,245,240,0.42)",
                        lineHeight: 1,
                        transition: "color 0.2s ease",
                    }}
                >
                  {link.label}
                </span>
                                {/* Arrow */}
                                <span
                                    className="shrink-0 w-[32px] h-[1px] bg-[#F7F5F0]/20 relative transition-all duration-300 group-hover:translate-x-[6px] group-hover:bg-[#C8102E]/70"
                                    aria-hidden="true"
                                >
                  <span className="absolute right-0 top-[-3.5px] w-[8px] h-[8px] border-r border-t border-current rotate-45" />
                </span>
                            </a>
                        ))}
                    </nav>

                    {/* Bottom contact strip */}
                    <div
                        className="px-[clamp(1.5rem,6vw,5.5rem)] pb-[clamp(2rem,6vh,4rem)] pt-[2rem] border-t border-[#F7F5F0]/10"
                        style={{ animation: "menuSlide 0.5s cubic-bezier(0.22,1,0.36,1) 420ms both" }}
                    >
                        <a
                            href="mailto:contact@pradeeprai.in"
                            onClick={() => setMenuOpen(false)}
                            className="no-underline group inline-flex items-center gap-[1rem]"
                        >
                            <div className="w-[34px] h-[34px] bg-[#C8102E] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                    <path d="M1 3L7 8.5L13 3" stroke="#F7F5F0" strokeWidth="1.2" strokeLinecap="round"/>
                                    <rect x="1" y="3" width="12" height="9" rx="0.5" stroke="#F7F5F0" strokeWidth="1.2"/>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                <span
                    style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "0.59rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(247,245,240,0.3)",
                    }}
                >
                  Email
                </span>
                                <span
                                    style={{
                                        fontFamily: "'DM Serif Display', serif",
                                        fontStyle: "italic",
                                        fontSize: "clamp(0.9rem,3.5vw,1.05rem)",
                                        color: "rgba(247,245,240,0.7)",
                                        transition: "color 0.2s ease",
                                    }}
                                    className="group-hover:!text-[#F7F5F0]"
                                >
                  contact@pradeeprai.in
                </span>
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}