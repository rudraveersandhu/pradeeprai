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

const NATURE_OF_WORK = [
    "Legal research relating to constitutional and statutory questions",
    "Preparation of case notes and briefing materials",
    "Review of pleadings and written submissions",
    "Assistance in matter-specific background analysis",
    "Observational exposure to court proceedings",
];

const SELECTION_CRITERIA = [
    { label: "Academic Engagement", id: "01" },
    { label: "Demonstrated Interest in Litigation", id: "02" },
    { label: "Writing Ability", id: "03" },
];

export default function MentorshipSection() {
    const headView = useInView(0.1);
    const workView = useInView(0.05);
    const frameworkView = useInView(0.1);
    const processView = useInView(0.1);

    return (
        <section
            id="mentorship"
            className="bg-[#080806] py-[clamp(5rem,12vh,10rem)] px-[clamp(1.5rem,6vw,5.5rem)] border-b border-[#F7F5F0]/[0.08] overflow-hidden relative"
        >
            {/* Ghost background letter */}
            <div
                aria-hidden="true"
                className="absolute left-[-3vw] bottom-[-4vh] font-['Bebas_Neue',sans-serif] text-[clamp(12rem,28vw,26rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(247,245,240,0.03)] select-none pointer-events-none"
            >
                I
            </div>

            {/* Section Header */}
            <div className="flex items-baseline justify-between mb-[clamp(4rem,10vh,8rem)] flex-wrap gap-[1rem]">
                <div className="flex items-center gap-[0.9rem]">
                    <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                    <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#F7F5F0]/40">
                        Mentorship
                    </span>
                </div>
            </div>

            {/* Overview */}
            <div ref={headView.ref} className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,6vw,5rem)] mb-[clamp(5rem,12vh,9rem)] pb-[clamp(5rem,12vh,9rem)] border-b border-[#F7F5F0]/[0.08]">
                <div className="md:col-span-5">
                    <h2 className={`font-['Bebas_Neue',sans-serif] text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.88] tracking-[0.02em] text-[#F7F5F0] transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
                        Mentor<br />
                        <span className="text-[#C8102E]">—</span>SHIP
                    </h2>
                </div>
                <div className="md:col-span-7 md:border-l border-[#F7F5F0]/[0.08] md:pl-[clamp(2rem,4vw,4rem)] flex flex-col gap-[1.4rem] justify-center">
                    <p className={`font-['DM_Serif_Display',serif] italic text-[clamp(1rem,2vw,1.35rem)] leading-[1.7] text-[#F7F5F0]/80 transition-all duration-700 delay-[100ms] ease-out ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        Rai hosts structured mentorship programmes for law students and legal professionals seeking exposure to constitutional and higher court litigation.
                    </p>
                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.85] text-[#F7F5F0]/40 transition-all duration-700 delay-[200ms] ease-out ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        The Mentorship is designed to provide disciplined engagement with live matters, research methodology, drafting processes, and courtroom preparation.
                    </p>
                </div>
            </div>

            {/* Nature of Work + Learning Framework — side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[0] mb-[clamp(5rem,12vh,9rem)]">

                {/* Nature of Work */}
                <div ref={workView.ref} className="md:border-r border-[#F7F5F0]/[0.08] md:pr-[clamp(2rem,5vw,4.5rem)] pb-[clamp(3rem,7vh,5rem)] md:pb-0">
                    <span className={`font-['Libre_Baskerville',serif] text-[0.62rem] tracking-[0.22em] uppercase text-[#F7F5F0]/30 block mb-[2rem] transition-all duration-700 ease-out ${workView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        Nature of Work
                    </span>
                    <div className="border-t border-[#F7F5F0]/[0.08]">
                        {NATURE_OF_WORK.map((item, i) => (
                            <div
                                key={i}
                                className={`group flex items-start gap-[1.2rem] py-[clamp(1rem,2.2vh,1.5rem)] border-b border-[#F7F5F0]/[0.08] cursor-default hover:bg-[#F7F5F0]/[0.02] transition-all duration-500 ease-out ${workView.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[14px]"}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <span className="font-['Bebas_Neue',sans-serif] text-[0.7rem] tracking-[0.06em] text-[#C8102E] shrink-0 mt-[0.25rem]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.7] text-[#F7F5F0]/55">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className={`mt-[1.8rem] font-['Libre_Baskerville',serif] italic text-[0.78rem] leading-[1.7] text-[#F7F5F0]/25 transition-all duration-700 delay-[500ms] ease-out ${workView.inView ? "opacity-100" : "opacity-0"}`}>
                        Assignments are determined by the nature of ongoing matters and the requirements of the Office.
                    </p>
                </div>

                {/* Learning Framework */}
                <div ref={frameworkView.ref} className="md:pl-[clamp(2rem,5vw,4.5rem)] border-t border-[#F7F5F0]/[0.08] pt-[clamp(3rem,7vh,5rem)] md:border-t-0 md:pt-0 flex flex-col gap-[2rem]">
                    <span className={`font-['Libre_Baskerville',serif] text-[0.62rem] tracking-[0.22em] uppercase text-[#F7F5F0]/30 block transition-all duration-700 ease-out ${frameworkView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        Learning Framework
                    </span>

                    <p className={`font-['DM_Serif_Display',serif] italic text-[clamp(1rem,2vw,1.3rem)] leading-[1.65] text-[#F7F5F0]/75 transition-all duration-700 delay-[100ms] ease-out ${frameworkView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        The Mentorship is conducted within a structured professional environment.
                    </p>

                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.85] text-[#F7F5F0]/40 transition-all duration-700 delay-[180ms] ease-out ${frameworkView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        Emphasis is placed on clarity of research, analytical precision, and adherence to ethical standards.
                    </p>

                    <p className={`font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.85] text-[#F7F5F0]/40 transition-all duration-700 delay-[260ms] ease-out ${frameworkView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"}`}>
                        The objective is to provide meaningful exposure to higher court litigation while cultivating disciplined legal reasoning.
                    </p>

                    {/* Three emphasis words */}
                    <div className={`mt-auto pt-[2rem] border-t border-[#F7F5F0]/[0.08] grid grid-cols-3 divide-x divide-[#F7F5F0]/[0.08] transition-all duration-700 delay-[340ms] ease-out ${frameworkView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        {["Clarity", "Precision", "Ethics"].map((word, i) => (
                            <div key={word} className="px-[1rem] first:pl-0 last:pr-0 py-[1.2rem]">
                                <span className="font-['Bebas_Neue',sans-serif] text-[0.68rem] tracking-[0.08em] text-[#C8102E] block mb-[0.3rem]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-['DM_Serif_Display',serif] italic text-[clamp(0.9rem,1.5vw,1.05rem)] text-[#F7F5F0]/50">
                                    {word}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Duration & Process — full-width dark-bordered block */}
            <div ref={processView.ref} className={`border border-[#F7F5F0]/[0.08] transition-all duration-700 ease-out ${processView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
                <div className="border-b border-[#F7F5F0]/[0.08] px-[clamp(1.5rem,3vw,2.5rem)] py-[1rem] flex items-center justify-between">
                    <span className="font-['Libre_Baskerville',serif] text-[0.62rem] tracking-[0.22em] uppercase text-[#F7F5F0]/30">
                        Duration & Process
                    </span>
                    <span className="font-['Bebas_Neue',sans-serif] text-[0.7rem] tracking-[0.1em] text-[#C8102E]/50">
                        PROCEDURAL
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#F7F5F0]/[0.08]">
                    {/* Left: duration text */}
                    <div className="px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2rem,5vh,3.5rem)]">
                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.85] text-[#F7F5F0]/45 mb-[1.2rem]">
                            Mentorship duration and intake cycles are determined by the requirements of the office.
                        </p>

                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.85] text-[#F7F5F0]/45">
                            For mentorship-related correspondence, applications may be directed to the following form with appropriate academic details and writing samples.
                        </p>
                        <p className="font-['Libre_Baskerville',serif] text-[clamp(0.82rem,1.3vw,0.95rem)] leading-[1.85] text-[#F7F5F0]/45">
                            Applications may be submitted through this google form : https://forms.gle/ydNaSBS9YGYqCpf78
                        </p>
                    </div>

                    {/* Right: selection criteria */}
                    <div className="px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(2rem,5vh,3.5rem)]">
                        <span className="font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.18em] uppercase text-[#F7F5F0]/25 block mb-[1.5rem]">
                            Selection is based on
                        </span>
                        <div className="flex flex-col gap-[0.8rem]">
                            {SELECTION_CRITERIA.map((c, i) => (
                                <div key={c.id} className="flex items-center gap-[1rem]">
                                    <span className="font-['Bebas_Neue',sans-serif] text-[0.68rem] tracking-[0.06em] text-[#C8102E] shrink-0">
                                        {c.id}
                                    </span>
                                    <span className="font-['DM_Serif_Display',serif] text-[clamp(0.9rem,1.6vw,1.1rem)] text-[#F7F5F0]/60">
                                        {c.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}