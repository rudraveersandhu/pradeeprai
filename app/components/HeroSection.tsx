"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProfessionalPracticeSection from "@/app/components/ProfessionalPracticeSection";

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



const TICKER_ITEMS = [
    "Supreme Court of India", "Senior Advocate", "Est. 1999",
    "Constitutional Law", "Criminal law", "Corporate Litigation",
    "Two Decades of Practice", "Arbitration & Mediation",
];

export default function HeroSection() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const triggerLoad = () => {
            timeoutId = setTimeout(() => setIsLoaded(true), 80);
        };

        if (localStorage.getItem('disclaimerAgreed')) {
            triggerLoad();
        } else {
            const handleAgree = () => triggerLoad();
            window.addEventListener('disclaimerAgreed', handleAgree);
            return () => {
                window.removeEventListener('disclaimerAgreed', handleAgree);
                clearTimeout(timeoutId);
            };
        }
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(total > 0 ? window.scrollY / total : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // const statsView = useInView(0.15);
    const practicesView = useInView(0.05);
    const closingView = useInView(0.2);

    const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="bg-[#080806] min-h-screen font-sans">
            {/* Minimal style tag strictly for external imports and keyframes */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap');
                
                html { scroll-behavior: smooth; }
                body { background: #080806; margin: 0; padding: 0; }

                @keyframes scrollDrop {
                    0%   { top: -100%; }
                    50%  { top: 0; }
                    100% { top: 100%; }
                }
                @keyframes ticker {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-33.333%); }
                }
            `}</style>

            {/* Progress bar */}
            <div
                className="fixed top-0 left-0 h-[2px] bg-[#F7F5F0] z-[200] transition-[width] duration-100 ease-linear"
                style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* ══════════════════════════════════════
                HERO — CINEMATIC DARK SPLIT
            ══════════════════════════════════════ */}
            <section className="relative bg-[#080806] min-h-screen overflow-hidden flex flex-col" id="about">

                {/* Photo Overlay logic (Gradients converted to standard absolute divs) */}
                <div className="absolute right-0 top-0 bottom-0 w-full md:w-[clamp(320px,52%,780px)] pointer-events-none z-[1]">
                    <Image
                        src="/pradeep_rai.png"
                        alt="Pradeep Rai, Senior Advocate"
                        fill
                        className={`object-cover object-top transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            }`}
                        priority
                    />
                    {/* Left-side gradient: photo fades seamlessly into black */}
                    {/*<div className="absolute inset-0 z-[2] max-md:bg-[linear-gradient(to_right,#080806_0%,rgba(8,8,6,0.82)_100%)] md:bg-[linear-gradient(to_right,#080806_0%,rgba(8,8,6,0.6)_32%,rgba(8,8,6,0.15)_58%,transparent_75%)]" />*/}
                    {/* Bottom vignette */}
                    <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_top,#080806_0%,transparent_30%)]" />
                </div>

                {/* Left content col */}
                <div className="relative z-10 flex-1 flex flex-col justify-end pt-[clamp(7.5rem,14vh,11rem)] px-[clamp(1.5rem,6vw,5.5rem)] pb-0 w-full md:max-w-[62%]">

                    {/* Eyebrow */}
                    <div className={`flex items-center gap-[0.9rem] mb-[clamp(2rem,4.5vh,3.5rem)] transition-all duration-700 delay-200 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                        <span className="font-['Libre_Baskerville',serif] text-[0.67rem] tracking-[0.22em] uppercase text-[#C8102E]">
                             Senior Advocate · Supreme Court of India · Est. 1999
                        </span>
                    </div>

                    {/* PRADEEP */}
                    <span className="overflow-hidden block">
                        <span className={`font-['Bebas_Neue',sans-serif] text-[clamp(5.8rem,18vw,17.5rem)] leading-[0.86] tracking-[0.01em] text-[#F7F5F0] block transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-[106%] opacity-0"}`}>
                            PRADEEP
                        </span>
                    </span>

                    {/* RAI + red stripe */}
                    <div className="flex items-stretch">
                        <span className="overflow-hidden block">
                            <span className={`font-['Bebas_Neue',sans-serif] text-[clamp(5.8rem,19vw,17.5rem)] leading-[0.86] tracking-[0.01em] text-[#F7F5F0] block transition-all duration-[1100ms] delay-[130ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-[106%] opacity-0"}`}>
                                RAI
                            </span>
                        </span>
                        <div className={`shrink-0 self-stretch bg-[#C8102E] w-[clamp(2.6rem,5vw,4.2rem)] flex items-center justify-center transition-opacity duration-700 delay-[520ms] ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                            <span className="[writing-mode:vertical-rl] font-['Libre_Baskerville',serif] text-[0.48rem] tracking-[0.28em] uppercase text-[#F7F5F0]/60">
                                SR · ADV
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer row: title | mini stats | scroll cue */}
                <div className={`relative z-10 flex items-end justify-between gap-[2rem] flex-wrap pt-[clamp(1.4rem,3vh,2.4rem)] px-[clamp(1.5rem,6vw,5.5rem)] pb-0 border-t border-[#F7F5F0]/10 mt-[clamp(1.5rem,3vh,2.5rem)] transition-all duration-800 delay-[680ms] ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                    <div>
                        <span className="font-['Libre_Baskerville',serif] font-bold text-[clamp(0.68rem,1.1vw,0.82rem)] tracking-[0.12em] uppercase text-[#F7F5F0]/55 block mb-[0.35rem]">
                            Senior Advocate
                        </span>
                        <span className="font-['DM_Serif_Display',serif] italic text-[clamp(0.95rem,1.8vw,1.22rem)] text-[#F7F5F0]/45 leading-[1.45] block">
                            Engaged in constitutional adjudication, regulatory frameworks,<br />
                            institutional dimensions of governance and more.
                        </span>
                    </div>

                    <div className="hidden md:flex gap-[clamp(2rem,4vw,3.5rem)] items-end">
                        {[
                            { v: "30K+", l: "Legal Professionals Mentored" },
                            { v: "25+", l: "Years of Practice" },
                            { v: "20+", l: "Domains of law" },
                        ].map((s) => (
                            <div key={s.l}>
                                <span className="font-['Bebas_Neue',sans-serif] text-[clamp(1.9rem,3.5vw,2.5rem)] leading-none text-[#F7F5F0] block">
                                    {s.v}
                                </span>
                                <span className="font-['Libre_Baskerville',serif] text-[0.57rem] tracking-[0.13em] uppercase text-[#F7F5F0]/30 block mt-[0.2rem]">
                                    {s.l}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-[0.7rem]">
                        <div className="w-[1px] h-[44px] bg-[#F7F5F0]/10 relative overflow-hidden">
                            <div
                                className="absolute top-[-100%] left-0 w-full h-full bg-[#F7F5F0]/60"
                                style={{ animation: "scrollDrop 1.8s ease-in-out infinite 1.3s" }}
                            />
                        </div>
                        <span className="[writing-mode:vertical-rl] font-['Libre_Baskerville',serif] text-[0.59rem] tracking-[0.2em] uppercase text-[#F7F5F0]/30">
                            Scroll
                        </span>
                    </div>
                </div>

                {/* Ticker */}
                <div className="relative z-10 overflow-hidden border-t border-[#F7F5F0]/10 py-[0.85rem] mt-[clamp(2rem,4.5vh,3.5rem)] bg-[#F7F5F0]/[0.02]">
                    <div
                        className="flex w-max hover:[animation-play-state:paused]"
                        style={{ animation: "ticker 32s linear infinite" }}
                    >
                        {tickerContent.map((item, i) => (
                            <span key={i} className="contents">
                                <span className="font-['Bebas_Neue',sans-serif] text-[0.77rem] tracking-[0.2em] uppercase text-[#F7F5F0]/30 px-[1.8rem] shrink-0 transition-colors duration-200 hover:text-[#F7F5F0]/60">
                                    {item}
                                </span>
                                <span className="w-[4px] h-[4px] rounded-full bg-[#C8102E] opacity-45 shrink-0 self-center" />
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                STATS
            ══════════════════════════════════════ */}

            {/*<section className="bg-[#F7F5F0] pb-[clamp(9rem,12vh,14rem)] px-[clamp(1.5rem,6vw,5.5rem)] border-b border-[#0c0c0a]/[0.12]">*/}
            {/*    <div className="flex items-baseline justify-between mb-[clamp(3rem,8vh,6rem)] flex-wrap gap-[1rem]">*/}
            {/*        <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#6B6760]">*/}
            {/*            By the numbers*/}
            {/*        </span>*/}
            {/*        <span className="font-['Bebas_Neue',sans-serif] text-[0.9rem] tracking-[0.1em] text-[#0c0c0a]/20">*/}
            {/*            01 / 04*/}
            {/*        </span>*/}
            {/*    </div>*/}
            {/*    <div ref={statsView.ref} className="grid grid-cols-2 md:grid-cols-4 border-l border-[#0c0c0a]/[0.12]">*/}
            {/*        {STATS.map((s, i) => (*/}
            {/*            <div*/}
            {/*                key={s.label}*/}
            {/*                className={`p-[clamp(2rem,5vh,3.5rem)_clamp(1.5rem,3vw,2.5rem)] border-r border-t border-[#0c0c0a]/[0.12] transition-all duration-700 ease-out ${statsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"}`}*/}
            {/*                style={{ transitionDelay: `${i * 100}ms` }}*/}
            {/*            >*/}
            {/*                <span className="font-['Bebas_Neue',sans-serif] text-[clamp(3rem,7vw,5.5rem)] leading-none text-[#080806] block mb-[0.45rem]">*/}
            {/*                    {s.value}*/}
            {/*                </span>*/}
            {/*                <span className="font-['Libre_Baskerville',serif] text-[0.7rem] tracking-[0.1em] uppercase text-[#6B6760]">*/}
            {/*                    {s.label}*/}
            {/*                </span>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</section>*/}




        </div>
    );
}