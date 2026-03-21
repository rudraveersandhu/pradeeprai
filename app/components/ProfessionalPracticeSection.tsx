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

const STATS = [
    { value: "30K+", label: "Legal Professionals Mentored" },
    { value: "25+", label: "Years of Practice" },
    { value: "20+", label: "Domains of law" },
    { value: "94%", label: "Success Rate" },
];


export default function ProfessionalPracticeSection() {
    const overviewView = useInView(0.1);
    const approachView = useInView(0.1);
    const statsView = useInView(0.15);


    return (
        <section
            id="professional-practice"
            className="bg-[#F7F5F0] py-[clamp(2rem,12vh,4rem)] px-[clamp(1.5rem,6vw,5.5rem)]  overflow-hidden"
        >
            {/* Section Header */}
            <div className="flex items-baseline justify-between mb-[clamp(4rem,10vh,8rem)] flex-wrap gap-[1rem]">
                <div className="flex items-center gap-[0.9rem]">
                    <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                    <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#6B6760]">
                        Professional Practice
                    </span>
                </div>
                <span className="font-['Bebas_Neue',sans-serif] text-[0.9rem] tracking-[0.1em] text-[#0c0c0a]/20">
                    02 / 04
                </span>
            </div>

            {/* Overview — Full Width */}
            <div
                ref={overviewView.ref}
                className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(2rem,5vw,4rem)] items-start"
            >
                {/* Label col */}
                <div className="md:col-span-3">
                    <h2 className={`font-['DM_Serif_Display',serif] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-[#080806] transition-all duration-700 ease-out ${overviewView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}>
                        Overview
                    </h2>
                </div>

                {/* Content col */}
                <div className="md:col-span-9 md:border-l border-[#0c0c0a]/[0.12] md:pl-[clamp(2rem,4vw,4rem)] flex flex-col gap-[2rem]">
                    <div className={`space-y-[1.4rem] transition-all duration-700 delay-[120ms] ease-out ${overviewView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}>
                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#6B6760]">
                            Dr. Pradeep Rai is a Designated Senior Advocate practising before the Supreme Court of India and constitutional courts across the country. His work engages constitutional interpretation, statutory construction, regulatory systems, commercial disputes, and institutional governance.</p>
                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#6B6760]">
                            Alongside active litigation, he has been associated with initiatives contributing to legal scholarship, structured research, and public discourse on questions of law and policy.
                        </p>
                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#6B6760]">
                            His professional engagement reflects a sustained interaction with the institutional framework of law in India.
                        </p>
                    </div>

                    {/* Vertical accent line */}
                    <div className={`mt-[1rem] flex items-stretch gap-[1.5rem] transition-all duration-700 delay-[240ms] ease-out ${overviewView.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[14px]"}`}>
                        <div className="w-[2px] bg-[#C8102E] shrink-0 self-stretch" />
                        <p className="font-['DM_Serif_Display',serif] italic text-[clamp(1rem,1.8vw,1.2rem)] leading-[1.6] text-[#080806]/60">
                            A practice shaped by constitutional discipline, institutional consequence, and the weight of judicial process.
                        </p>
                    </div>
                </div>
            </div>

            {/* Approach to Advocacy — Full Width */}
            <div
                ref={approachView.ref}
                className="mt-[clamp(5rem,12vh,9rem)] grid grid-cols-1 md:grid-cols-12 gap-[clamp(2rem,5vw,4rem)] items-start"
            >
                {/* Label col */}
                <div className="md:col-span-3">
                    <div className={`transition-all duration-700 ease-out ${approachView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}>
                        <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#6B6760]">
                            Approach to Advocacy
                        </span>
                        {/* Decorative Bebas letter */}
                        <div
                            aria-hidden="true"
                            className="font-['Bebas_Neue',sans-serif] text-[clamp(6rem,12vw,10rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(12,12,10,0.06)] select-none mt-[1rem]"
                        >
                            A
                        </div>
                    </div>
                </div>

                {/* Content col */}
                <div className="md:col-span-9 md:border-l border-[#0c0c0a]/[0.12] md:pl-[clamp(2rem,4vw,4rem)]">
                    <div className={`space-y-[1.6rem] transition-all duration-700 delay-[150ms] ease-out ${approachView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}>
                        <p className="font-['DM_Serif_Display',serif] italic text-[clamp(1.15rem,2.2vw,1.55rem)] leading-[1.65] text-[#080806]">
                            Advocacy is approached as both representation and responsibility. Matters are examined within the broader framework of statutory design, constitutional discipline, and institutional consequence.
                        </p>
                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#6B6760]">
                            Courtroom engagement is guided by clarity in interpretation, structural analysis, and respect for judicial process.
                        </p>
                    </div>

                    {/* Three-col pillars */}
                    <div className={`mt-[3rem] grid grid-cols-1 sm:grid-cols-3 gap-[0] border-t border-[#0c0c0a]/[0.12] transition-all duration-700 delay-[280ms] ease-out ${approachView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}>
                        {[
                            { num: "I", label: "Clarity in\nInterpretation" },
                            { num: "II", label: "Structural\nAnalysis" },
                            { num: "III", label: "Respect for\nJudicial Process" },
                        ].map((pillar, i) => (
                            <div
                                key={i}
                                className="py-[1.8rem] pr-[2rem] border-b sm:border-b-0 sm:border-r border-[#0c0c0a]/[0.12] last:border-r-0"
                            >
                                <span className="font-['Bebas_Neue',sans-serif] text-[0.7rem] tracking-[0.1em] text-[#C8102E] block mb-[0.5rem]">
                                    {pillar.num}
                                </span>
                                <span className="font-['DM_Serif_Display',serif] text-[clamp(1rem,1.6vw,1.15rem)] text-[#080806] leading-[1.3] whitespace-pre-line">
                                    {pillar.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* ══════════════════════════════════════
                                       STATS
                    ══════════════════════════════════════ */}

                    <div className={`mt-[3rem] grid grid-cols-2 md:grid-cols-4 border-t border-[#0c0c0a]/[0.10] transition-all duration-700 delay-[280ms] ease-out ${statsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"}`}>
                        {STATS.map((s, i) => {
                            const [num, suffix] = s.value.match(/^(\d+)([+%]?)$/)?.slice(1) ?? [s.value, ""];
                            return (
                                <div
                                    key={s.label}
                                    className={`py-[3.5rem] border-r border-[#0c0c0a]/[0.10] last:border-r-0 flex flex-col gap-[0.75rem] transition-all duration-700 ease-out ${i === 0 ? "pr-[2.5rem]" : "px-[2.5rem]"} ${statsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"}`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <div className="flex items-start gap-[3px]">
          <span className="font-['Bebas_Neue',sans-serif] text-[clamp(3.5rem,7vw,5rem)] leading-none text-[#080806]">
            {num}
          </span>
                                        {suffix && (
                                            <span className="font-['Bebas_Neue',sans-serif] text-[clamp(1.5rem,3vw,2.2rem)] leading-none text-[#C8102E] mt-[0.4rem]">
              {suffix}
            </span>
                                        )}
                                    </div>
                                    <div className="w-[20px] h-[1px] bg-[#C8102E]" />
                                    <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.18em] uppercase text-[#6B6760] leading-[1.7]">
          {s.label.replace(" ", "\n")}
        </span>
                                </div>
                            );
                        })}
                    </div>

                     </div>
            </div>
        </section>
    );
}