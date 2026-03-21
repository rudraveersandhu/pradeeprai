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

const CONTACT_FIELDS = [
    { label: "Address", value: "[Office Address]", href: undefined },
    { label: "Email", value: "[Email Address]", href: "mailto:" },
    { label: "Phone", value: "[Office Contact Number]", href: "tel:" },
];

export default function ContactFooterSection() {
    const headView = useInView(0.1);
    const detailsView = useInView(0.08);
    const noticeView = useInView(0.1);

    return (
        <>
            {/* ══════════════════════════════════════
                CONTACT
            ══════════════════════════════════════ */}
            <section
                id="contact"
                className="bg-[#080806] py-[clamp(5rem,12vh,10rem)] px-[clamp(1.5rem,6vw,5.5rem)] border-b border-[#F7F5F0]/[0.08] overflow-hidden relative"
            >
                {/* Ghost background word */}
                <div
                    aria-hidden="true"
                    className="absolute right-[-2vw] bottom-[-6vh] font-['Bebas_Neue',sans-serif] text-[clamp(10rem,24vw,22rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(247,245,240,0.03)] select-none pointer-events-none"
                >
                    CONTACT
                </div>

                {/* Section header */}
                <div className="flex items-baseline justify-between mb-[clamp(4rem,10vh,8rem)] flex-wrap gap-[1rem]">
                    <div className="flex items-center gap-[0.9rem]">
                        <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                        <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#F7F5F0]/40">
                            Contact
                        </span>
                    </div>
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,7vw,6rem)]">

                    {/* Left: heading block */}
                    <div ref={headView.ref} className="md:col-span-5 flex flex-col justify-between gap-[3rem]">
                        <div>
                            <p className={`font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#F7F5F0]/30 mb-[1.2rem] transition-all duration-700 ease-out ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}>
                                Office of
                            </p>
                            <h2 className={`font-['Bebas_Neue',sans-serif] text-[clamp(3rem,9vw,7.5rem)] leading-[0.88] tracking-[0.02em] text-[#F7F5F0] transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
                                Dr.<br />Pradeep<br />Rai
                            </h2>
                            <div className={`mt-[1.4rem] flex items-center gap-[0.8rem] transition-all duration-700 delay-[250ms] ease-out ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                                <div className="w-[2px] h-[2.2rem] bg-[#C8102E] shrink-0" />
                                <span className="font-['DM_Serif_Display',serif] italic text-[clamp(0.9rem,1.6vw,1.1rem)] text-[#F7F5F0]/45 leading-[1.4]">
                                    Senior Advocate<br />Supreme Court of India
                                </span>
                            </div>
                        </div>

                        {/* Internship notice */}
                        <div className={`border-t border-[#F7F5F0]/[0.08] pt-[2rem] transition-all duration-700 delay-[380ms] ease-out ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                            <p className="font-['Libre_Baskerville',serif] text-[clamp(0.78rem,1.1vw,0.88rem)] leading-[1.85] text-[#F7F5F0]/30">
                                For internship-related correspondence, applications may be directed to the above address with appropriate academic details and writing samples.
                            </p>
                        </div>
                    </div>

                    {/* Right: contact fields */}
                    <div ref={detailsView.ref} className="md:col-span-7 md:border-l border-[#F7F5F0]/[0.08] md:pl-[clamp(2.5rem,5vw,5rem)] flex flex-col justify-center">
                        <div className="border-t border-[#F7F5F0]/[0.08]">
                            {CONTACT_FIELDS.map((field, i) => (
                                <div
                                    key={field.label}
                                    className={`group grid grid-cols-[5rem_1fr] items-start gap-[1.5rem] py-[clamp(1.4rem,3.5vh,2.2rem)] border-b border-[#F7F5F0]/[0.08] transition-all duration-600 ease-out ${detailsView.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[18px]"}`}
                                    style={{ transitionDelay: `${i * 110}ms` }}
                                >
                                    <span className="font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.18em] uppercase text-[#F7F5F0]/25 mt-[0.35rem]">
                                        {field.label}
                                    </span>
                                    {field.href !== undefined ? (
                                        <a
                                            href={field.href}
                                            className="font-['DM_Serif_Display',serif] italic text-[clamp(1rem,2vw,1.35rem)] text-[#F7F5F0]/55 hover:text-[#F7F5F0] transition-colors duration-200 no-underline leading-[1.4]"
                                        >
                                            {field.value}
                                        </a>
                                    ) : (
                                        <span className="font-['DM_Serif_Display',serif] italic text-[clamp(1rem,2vw,1.35rem)] text-[#F7F5F0]/55 leading-[1.4]">
                                            {field.value}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Professional regulations notice */}
                        <p className={`mt-[2rem] font-['Libre_Baskerville',serif] text-[0.72rem] leading-[1.75] text-[#F7F5F0]/20 transition-all duration-700 delay-[400ms] ease-out ${detailsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"}`}>
                            All communications are subject to applicable professional regulations governing advocates in India.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                FOOTER
            ══════════════════════════════════════ */}
            <footer className="bg-[#080806] border-t border-[#F7F5F0]/[0.06]">

                {/* Upper footer */}
                <div ref={noticeView.ref} className="px-[clamp(1.5rem,6vw,5.5rem)] py-[clamp(3rem,7vh,5rem)] grid grid-cols-1 md:grid-cols-12 gap-[clamp(2rem,4vw,3.5rem)] border-b border-[#F7F5F0]/[0.06]">

                    {/* Wordmark */}
                    <div className={`md:col-span-4 transition-all duration-700 ease-out ${noticeView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        <span className="font-['Bebas_Neue',sans-serif] text-[clamp(1.4rem,3vw,2rem)] tracking-[0.08em] text-[#F7F5F0]/70 block leading-none mb-[0.5rem]">
                            Pradeep Rai
                        </span>
                        <span className="font-['DM_Serif_Display',serif] italic text-[0.8rem] text-[#F7F5F0]/30 block leading-[1.5]">
                            Senior Advocate<br />Supreme Court of India
                        </span>
                    </div>

                    {/* Separator line — desktop only */}
                    <div className="hidden md:block md:col-span-1 border-l border-[#F7F5F0]/[0.06] h-full" />

                    {/* Disclaimer */}
                    <div className={`md:col-span-7 transition-all duration-700 delay-[150ms] ease-out ${noticeView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}>
                        <p className="font-['Libre_Baskerville',serif] text-[0.72rem] leading-[1.85] text-[#F7F5F0]/22">
                            This website is intended solely for informational purposes and does not constitute solicitation or advertisement. The contents are provided in compliance with professional standards governing advocates in India.
                        </p>
                    </div>
                </div>

                {/* Lower footer bar */}
                <div className="px-[clamp(1.5rem,6vw,5.5rem)] py-[1.3rem] flex items-center justify-between flex-wrap gap-[1rem]">
                    <span className="font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.1em] text-[#F7F5F0]/15">
                        © {new Date().getFullYear()} · Advocate, Supreme Court of India · All Rights Reserved
                    </span>
                    <div className="flex items-center gap-[1.4rem]">
                        {["About", "Practice", "Offices", "Internships", "Contact"].map((link, i) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="font-['Libre_Baskerville',serif] text-[0.58rem] tracking-[0.12em] uppercase text-[#F7F5F0]/20 hover:text-[#F7F5F0]/50 transition-colors duration-200 no-underline"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}