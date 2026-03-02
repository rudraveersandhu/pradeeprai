"use client";

import { useRef, useEffect, useState } from "react";

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

const LECTURE_THEMES = [
    { id: "01", label: "Constitutional Interpretation" },
    { id: "02", label: "Institutional Reform" },
    { id: "03", label: "Regulatory Structures" },
    { id: "04", label: "Governance Accountability" },
];

export default function WritingAddressesSection() {
    const headView = useInView(0.1);
    const pubView = useInView(0.08);
    const lectureView = useInView(0.08);

    return (
        <section
            id="writing-addresses"
            className="bg-[#F7F5F0] py-[clamp(5rem,12vh,10rem)] px-[clamp(1.5rem,6vw,5.5rem)] border-b border-[#0c0c0a]/[0.12] overflow-hidden relative"
        >
            {/* Ghost watermark */}
            <div
                aria-hidden="true"
                className="absolute right-[-1vw] top-[8%] font-['Bebas_Neue',sans-serif] text-[clamp(8rem,18vw,16rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(12,12,10,0.04)] select-none pointer-events-none"
            >
                W&amp;A
            </div>

            {/* Section Header */}
            <div className="flex items-baseline justify-between mb-[clamp(4rem,10vh,8rem)] flex-wrap gap-[1rem]">
                <div className="flex items-center gap-[0.9rem]">
                    <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                    <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#6B6760]">
                        Writing &amp; Addresses
                    </span>
                </div>
            </div>

            {/* Hero title */}
            <div ref={headView.ref} className="mb-[clamp(5rem,12vh,9rem)]">
                <div className="overflow-hidden mb-[0.1em]">
                    <h2 className={`font-['Bebas_Neue',sans-serif] text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.88] tracking-[0.02em] text-[#080806] transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[110%]"}`}>
                        Writing
                    </h2>
                </div>
                <div className="overflow-hidden flex items-baseline gap-[clamp(1rem,3vw,2.5rem)]">
                    <h2 className={`font-['Bebas_Neue',sans-serif] text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.88] tracking-[0.02em] text-[#080806] transition-all duration-[1000ms] delay-[100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[110%]"}`}>
                        &amp;
                    </h2>
                    <h2 className={`font-['DM_Serif_Display',serif] italic text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-[#C8102E] transition-all duration-[1000ms] delay-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[110%]"}`}>
                        Addresses
                    </h2>
                </div>
            </div>

            {/* Publications & Contributions */}
            <div ref={pubView.ref} className="mb-[clamp(5rem,12vh,9rem)] pb-[clamp(5rem,12vh,9rem)] border-b border-[#0c0c0a]/[0.12]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(2rem,5vw,4rem)]">

                    {/* Label col */}
                    <div className="md:col-span-3">
                        <span className={`font-['Libre_Baskerville',serif] text-[0.62rem] tracking-[0.22em] uppercase text-[#6B6760] block transition-all duration-700 ease-out ${pubView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                            Publications &amp; Contributions
                        </span>
                    </div>

                    {/* Content col */}
                    <div className="md:col-span-9 md:border-l border-[#0c0c0a]/[0.12] md:pl-[clamp(2rem,4vw,4rem)]">
                        <p className={`font-['DM_Serif_Display',serif] italic text-[clamp(1rem,2vw,1.35rem)] leading-[1.7] text-[#080806] mb-[2.5rem] transition-all duration-700 delay-[100ms] ease-out ${pubView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                            Dr. Rai has contributed to legal commentary and structured public discourse through institutional platforms and professional forums.
                        </p>

                        {/* Archive placeholder */}
                        <div className={`border border-dashed border-[#0c0c0a]/[0.15] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2rem,5vh,3.5rem)] transition-all duration-700 delay-[200ms] ease-out ${pubView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                            <div className="flex items-center justify-between mb-[1.5rem] flex-wrap gap-[0.8rem]">
                                <span className="font-['Bebas_Neue',sans-serif] text-[0.72rem] tracking-[0.1em] text-[#0c0c0a]/20">
                                    CHRONOLOGICAL LISTING
                                </span>
                                <div className="flex items-center gap-[0.5rem]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#C8102E]/30" />
                                    <span className="font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.14em] uppercase text-[#6B6760]/50">
                                        Forthcoming
                                    </span>
                                </div>
                            </div>
                            {/* Skeleton rows */}
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex items-center gap-[1.5rem] py-[1rem] border-t border-[#0c0c0a]/[0.07]">
                                    <div className="w-[3rem] h-[0.5rem] rounded-sm bg-[#0c0c0a]/[0.07] shrink-0" />
                                    <div className="flex-1 h-[0.5rem] rounded-sm bg-[#0c0c0a]/[0.05]" style={{ maxWidth: `${60 + i * 12}%` }} />
                                </div>
                            ))}
                            <p className="mt-[1.5rem] font-['Libre_Baskerville',serif] italic text-[0.72rem] text-[#6B6760]/40">
                                A chronological listing may be placed here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lectures & Public Addresses */}
            <div ref={lectureView.ref} className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(2rem,5vw,4rem)]">

                {/* Label col */}
                <div className="md:col-span-3">
                    <span className={`font-['Libre_Baskerville',serif] text-[0.62rem] tracking-[0.22em] uppercase text-[#6B6760] block transition-all duration-700 ease-out ${lectureView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        Lectures &amp; Public Addresses
                    </span>
                </div>

                {/* Content col */}
                <div className="md:col-span-9 md:border-l border-[#0c0c0a]/[0.12] md:pl-[clamp(2rem,4vw,4rem)]">
                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.85] text-[#6B6760] mb-[2.5rem] transition-all duration-700 delay-[100ms] ease-out ${lectureView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        Lectures and panel discussions have engaged themes including:
                    </p>

                    {/* Themes */}
                    <div className="border-t border-[#0c0c0a]/[0.12] mb-[3rem]">
                        {LECTURE_THEMES.map((theme, i) => (
                            <div
                                key={theme.id}
                                className={`group flex items-center gap-[1.4rem] py-[clamp(1.1rem,2.4vh,1.6rem)] border-b border-[#0c0c0a]/[0.12] cursor-default hover:bg-[#0c0c0a]/[0.03] transition-all duration-500 ease-out ${lectureView.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[14px]"}`}
                                style={{ transitionDelay: `${120 + i * 80}ms` }}
                            >
                                <span className="font-['Bebas_Neue',sans-serif] text-[0.72rem] tracking-[0.06em] text-[#C8102E] shrink-0 w-[2rem]">
                                    {theme.id}
                                </span>
                                <span className="font-['DM_Serif_Display',serif] text-[clamp(1.05rem,2vw,1.4rem)] text-[#080806] flex-1 leading-[1.2]">
                                    {theme.label}
                                </span>
                                <div
                                    className="hidden md:block w-[22px] h-[1px] bg-[#080806] opacity-15 shrink-0 relative transition-all duration-300 group-hover:translate-x-[5px] group-hover:opacity-60"
                                    aria-hidden="true"
                                >
                                    <div className="absolute right-0 top-[-3px] w-[6px] h-[6px] border-r border-t border-[#080806] rotate-45" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Archive placeholder */}
                    <div className={`border border-dashed border-[#0c0c0a]/[0.15] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2rem,5vh,3.5rem)] transition-all duration-700 delay-[480ms] ease-out ${lectureView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        <div className="flex items-center justify-between mb-[1.5rem] flex-wrap gap-[0.8rem]">
                            <span className="font-['Bebas_Neue',sans-serif] text-[0.72rem] tracking-[0.1em] text-[#0c0c0a]/20">
                                CHRONOLOGICAL ARCHIVE
                            </span>
                            <div className="flex items-center gap-[0.5rem]">
                                <span className="w-[6px] h-[6px] rounded-full bg-[#C8102E]/30" />
                                <span className="font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.14em] uppercase text-[#6B6760]/50">
                                    Forthcoming
                                </span>
                            </div>
                        </div>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-[1.5rem] py-[1rem] border-t border-[#0c0c0a]/[0.07]">
                                <div className="w-[3rem] h-[0.5rem] rounded-sm bg-[#0c0c0a]/[0.07] shrink-0" />
                                <div className="flex-1 h-[0.5rem] rounded-sm bg-[#0c0c0a]/[0.05]" style={{ maxWidth: `${55 + i * 14}%` }} />
                            </div>
                        ))}
                        <p className="mt-[1.5rem] font-['Libre_Baskerville',serif] italic text-[0.72rem] text-[#6B6760]/40">
                            A chronological archive may be displayed here.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}