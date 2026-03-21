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

const INITIATIVES = [
    {
        id: "01",
        title: "India Legal Aid Centre",
        subtitle: "Platform for Legal Aid",
        body: "India Legal Aid Centre serves as a platform to provide pro bono legal advice to those in need . It provides space for contributions from the mentees, associates and legal practitioners.",
        tag: "Documentation & Commentary",
    },
    {
        id: "02",
        title: "India Legal Research Foundation",
        subtitle: "ILRF",
        body: "The India Legal Research Foundation supports research initiatives and policy examination relating to constitutional law, regulatory frameworks, and institutional reform. Its work reflects an interest in strengthening the intellectual foundation of litigation and governance discourse.",
        tag: "Research & Policy",
    },
    {
        id: "03",
        title: "Academic & Public Engagement",
        subtitle: "Institutions & Forums",
        body: "Dr. Rai has addressed academic institutions and professional forums on issues relating to constitutional law, governance, and public policy — contributing to structured dialogue between the Bar, the Bench, academia, and policy institutions.",
        tag: "Discourse & Dialogue",
    },
];

const PILLARS = ["The Bar", "Academia", "Policy Institutions", "Judicial Process"];

export default function InstitutionalEngagementSection() {
    const overviewView = useInView(0.1);
    const initiativesView = useInView(0.05);
    const pillarsView = useInView(0.1);

    return (
        <section
            id="institutional-engagement"
            className="bg-[#080806] py-[clamp(5rem,12vh,10rem)] px-[clamp(1.5rem,6vw,5.5rem)] border-b border-[#F7F5F0]/[0.08] overflow-hidden"
        >
            {/* Section Header */}
            <div className="flex items-baseline justify-between mb-[clamp(4rem,10vh,8rem)] flex-wrap gap-[1rem]">
                <div className="flex items-center gap-[0.9rem]">
                    <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                    <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#F7F5F0]/40">
                        Overview
                    </span>
                </div>
                <span className="font-['Bebas_Neue',sans-serif] text-[0.9rem] tracking-[0.1em] text-[#F7F5F0]/15">
                    03 / 04
                </span>
            </div>

            {/* Overview Row */}
            <div ref={overviewView.ref} className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(2rem,5vw,4rem)] mb-[clamp(4rem,10vh,8rem)] pb-[clamp(4rem,10vh,8rem)] border-b border-[#F7F5F0]/[0.08]">
                <div className="md:col-span-4">
                    <h2 className={`font-['DM_Serif_Display',serif] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-[#F7F5F0] transition-all duration-700 ease-out ${overviewView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"}`}>
                        Institutional Engagement
                    </h2>
                </div>
                <div className="md:col-span-8 md:border-l border-[#F7F5F0]/[0.08] md:pl-[clamp(2rem,4vw,4rem)] flex flex-col gap-[1.4rem]">
                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#F7F5F0]/55 transition-all duration-700 delay-[100ms] ease-out ${overviewView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        In addition to litigation, Dr. Rai has been associated with initiatives that strengthen legal discourse, research, and structured engagement with public law and governance.
                    </p>
                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.85] text-[#F7F5F0]/55 transition-all duration-700 delay-[200ms] ease-out ${overviewView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        These initiatives are directed toward fostering dialogue between the Bar, the Bench, academia, and policy institutions.
                    </p>

                    {/* Pillars row */}
                    <div ref={pillarsView.ref} className={`mt-[1.5rem] flex flex-wrap gap-[0] border border-[#F7F5F0]/[0.1] transition-all duration-700 delay-[300ms] ease-out ${pillarsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        {PILLARS.map((p, i) => (
                            <div
                                key={p}
                                className="group flex items-center gap-[0.7rem] px-[1.4rem] py-[0.9rem] border-r border-[#F7F5F0]/[0.1] last:border-r-0 transition-colors duration-200 hover:bg-[#F7F5F0]/[0.04] cursor-default"
                                style={{ transitionDelay: `${350 + i * 60}ms` }}
                            >
                                <span className="w-[5px] h-[5px] rounded-full bg-[#C8102E] shrink-0 opacity-60" />
                                <span className="font-['Libre_Baskerville',serif] text-[0.68rem] tracking-[0.14em] uppercase text-[#F7F5F0]/40 group-hover:text-[#F7F5F0]/70 transition-colors duration-200 whitespace-nowrap">
                                    {p}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Initiatives */}
            <div ref={initiativesView.ref} className="grid grid-cols-1 md:grid-cols-3 border-l border-[#F7F5F0]/[0.08]">
                {INITIATIVES.map((item, i) => (
                    <div
                        key={item.id}
                        className={`group relative border-r border-[#F7F5F0]/[0.08] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2rem,5vh,3.5rem)] transition-all duration-700 ease-out hover:bg-[#F7F5F0]/[0.03] cursor-default ${initiativesView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[28px]"}`}
                        style={{ transitionDelay: `${i * 120}ms` }}
                    >
                        {/* Top: number + tag */}
                        <div className="flex items-start justify-between mb-[2rem]">
                            <span className="font-['Bebas_Neue',sans-serif] text-[0.78rem] tracking-[0.08em] text-[#C8102E]">
                                {item.id}
                            </span>
                            <span className="font-['Libre_Baskerville',serif] text-[0.58rem] tracking-[0.16em] uppercase text-[#F7F5F0]/20 text-right">
                                {item.tag}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-['DM_Serif_Display',serif] text-[clamp(1.1rem,2.2vw,1.5rem)] leading-[1.2] text-[#F7F5F0] mb-[0.4rem]">
                            {item.title}
                        </h3>
                        <span className="font-['Libre_Baskerville',serif] italic text-[0.75rem] tracking-[0.06em] text-[#C8102E]/70 block mb-[1.4rem]">
                            {item.subtitle}
                        </span>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#F7F5F0]/[0.08] mb-[1.4rem]" />

                        {/* Body */}
                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.8rem,1.2vw,0.9rem)] leading-[1.8] text-[#F7F5F0]/45">
                            {item.body}
                        </p>

                        {/* Hover arrow */}
                        <div className="mt-[2rem] flex items-center gap-[0.6rem] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-[4px]">
                            <div className="w-[20px] h-[1px] bg-[#F7F5F0]/40 relative">
                                <div className="absolute right-0 top-[-3px] w-[6px] h-[6px] border-r border-t border-[#F7F5F0]/40 rotate-45" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom decorative strip */}
            <div className="mt-[clamp(4rem,10vh,8rem)] border-t border-[#F7F5F0]/[0.08] pt-[clamp(2rem,5vh,3.5rem)] flex items-center justify-between flex-wrap gap-[1rem]">
                <div
                    aria-hidden="true"
                    className="font-['Bebas_Neue',sans-serif] text-[clamp(3rem,8vw,7rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(247,245,240,0.05)] select-none"
                >
                    ILRF
                </div>
                <p className="font-['DM_Serif_Display',serif] italic text-[clamp(0.9rem,1.6vw,1.1rem)] leading-[1.6] text-[#F7F5F0]/30 max-w-[42ch] text-right">
                    Strengthening the intellectual foundation of litigation and governance discourse.
                </p>
            </div>
        </section>
    );
}