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

const FOUNDATIONS = [
    { label: "Professional Discipline", roman: "I" },
    { label: "Procedural Integrity", roman: "II" },
    { label: "Structured Reasoning", roman: "III" },
];

const WORK_AREAS = [
    "Constitutional Analysis",
    "Statutory Interpretation",
    "Regulatory Frameworks",
    "Preparation for Oral Advocacy",
];

export default function OfficeSection() {
    const headView = useInView(0.1);
    const bodyView = useInView(0.08);
    const foundView = useInView(0.1);

    return (
        <section
            id="office"
            className="bg-[#F7F5F0] py-[clamp(5rem,12vh,10rem)] px-[clamp(1.5rem,6vw,5.5rem)] border-b border-[#0c0c0a]/[0.12] overflow-hidden relative"
        >
            {/* Faint background word */}
            <div
                aria-hidden="true"
                className="absolute right-[-2vw] top-[50%] -translate-y-1/2 font-['Bebas_Neue',sans-serif] text-[clamp(10rem,24vw,22rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(12,12,10,0.04)] select-none pointer-events-none"
            >
                OFFICE
            </div>

            {/* Section Header */}
            <div className="flex items-baseline justify-between mb-[clamp(4rem,10vh,8rem)] flex-wrap gap-[1rem]">
                <div className="flex items-center gap-[0.9rem]">
                    <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                    <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#6B6760]">
                        OFFICE
                    </span>
                </div>
                <span className="font-['Bebas_Neue',sans-serif] text-[0.9rem] tracking-[0.1em] text-[#0c0c0a]/20">
                    04 / 04
                </span>
            </div>

            {/* Hero text block */}
            <div ref={headView.ref} className="mb-[clamp(4rem,10vh,8rem)]">
                <h2 className={`font-['Bebas_Neue',sans-serif] text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-[0.02em] text-[#080806] max-w-[18ch] transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
                    An Active<br />
                    <em className="font-['DM_Serif_Display',serif] not-italic italic text-[#C8102E]">Litigation</em><br />
                    Practice
                </h2>
            </div>

            {/* Main content grid */}
            <div ref={bodyView.ref} className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,6vw,5rem)] mb-[clamp(4rem,10vh,8rem)]">

                {/* Left: paragraphs */}
                <div className="md:col-span-6 flex flex-col gap-[1.8rem]">
                    <p className={`font-['DM_Serif_Display',serif] italic text-[clamp(1.1rem,2.2vw,1.5rem)] leading-[1.65] text-[#080806] transition-all duration-700 ease-out ${bodyView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
                        The office of Dr. Pradeep Rai function as an active litigation practice before the Supreme Court of India.
                    </p>
                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#6B6760] transition-all duration-700 delay-[120ms] ease-out ${bodyView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
                        Work within the office is organised around constitutional analysis, statutory interpretation, regulatory frameworks, and preparation for oral advocacy.
                    </p>
                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#6B6760] transition-all duration-700 delay-[220ms] ease-out ${bodyView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
                        Professional discipline, procedural integrity, and structured reasoning form the foundation of the practice.
                    </p>
                </div>

                {/* Right: Work areas list */}
                <div className={`md:col-span-6 md:border-l border-[#0c0c0a]/[0.12] md:pl-[clamp(2rem,4vw,4rem)] transition-all duration-700 delay-[180ms] ease-out ${bodyView.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[18px]"}`}>
                    <span className="font-['Libre_Baskerville',serif] text-[0.62rem] tracking-[0.22em] uppercase text-[#6B6760] block mb-[1.8rem]">
                        Work is Organised Around
                    </span>
                    <div className="border-t border-[#0c0c0a]/[0.12]">
                        {WORK_AREAS.map((area, i) => (
                            <div
                                key={area}
                                className="group flex items-center gap-[1.2rem] py-[clamp(1rem,2.2vh,1.5rem)] border-b border-[#0c0c0a]/[0.12] cursor-default hover:bg-[#0c0c0a]/[0.03] transition-colors duration-200"
                                style={{ transitionDelay: `${240 + i * 70}ms` }}
                            >
                                <span className="font-['Bebas_Neue',sans-serif] text-[0.72rem] tracking-[0.06em] text-[#C8102E] w-[1.6rem] shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-['DM_Serif_Display',serif] text-[clamp(1rem,1.8vw,1.25rem)] text-[#080806] flex-1">
                                    {area}
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
                </div>
            </div>

            {/* Foundations — dark inset band */}
            <div
                ref={foundView.ref}
                className={`bg-[#080806] px-[clamp(1.5rem,4vw,3.5rem)] py-[clamp(2.5rem,6vh,4.5rem)] transition-all duration-700 ease-out ${foundView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
            >
                <span className="font-['Libre_Baskerville',serif] text-[0.62rem] tracking-[0.22em] uppercase text-[#F7F5F0]/30 block mb-[2rem]">
                    Foundation of the Practice
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F7F5F0]/[0.08]">
                    {FOUNDATIONS.map((f, i) => (
                        <div
                            key={f.roman}
                            className="flex items-start gap-[1.4rem] py-[1.5rem] sm:py-0 sm:px-[clamp(1.2rem,3vw,2.5rem)] first:pl-0 last:pr-0"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <span className="font-['Bebas_Neue',sans-serif] text-[0.7rem] tracking-[0.1em] text-[#C8102E] shrink-0 mt-[0.2rem]">
                                {f.roman}
                            </span>
                            <span className="font-['DM_Serif_Display',serif] text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.3] text-[#F7F5F0]">
                                {f.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}