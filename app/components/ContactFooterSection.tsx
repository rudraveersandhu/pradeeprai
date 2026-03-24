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

const OFFICES = [
    {
        city: "Delhi",
        pincode: "110001",
        lines: ["2-C/D, White House", "10 Bhagwan Das Road"],
    },
    {
        city: "Noida",
        pincode: "201301",
        lines: ["A-9, Sector 68"],
    },
    {
        city: "Mumbai",
        pincode: "400061",
        lines: [
            "Sr. Adv. Pradeep Kumar Rai",
            "B-003/004 Arshie Complex",
            "Off Yari Road, Panchmarg",
            "Varsova, Andheri West",
        ],
    },
];

const REACH = [
    {
        label: "Email",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
        value: "office@pradeeprai.com",
        href: "mailto:office@pradeeprai.com",
    },
    {
        label: "Phone I",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.67 5.67l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        value: "011-23389998",
        href: "tel:01123389998",
    },
    {
        label: "Phone II",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.67 5.67l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        value: "011-23389505",
        href: "tel:23389505",
    },
];

export default function ContactFooterSection() {
    const headView = useInView(0.1);
    const officesView = useInView(0.06);
    const reachView = useInView(0.08);
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

                {/* ── TOP ROW: Name block + Reach (email & phones) ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,7vw,6rem)] mb-[clamp(3.5rem,8vh,6rem)]">

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

                    {/* Right: Email + Phones */}
                    <div ref={reachView.ref} className="md:col-span-7 md:border-l border-[#F7F5F0]/[0.08] md:pl-[clamp(2.5rem,5vw,5rem)] flex flex-col justify-center">
                        <p className={`font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.2em] uppercase text-[#F7F5F0]/25 mb-[1.6rem] transition-all duration-700 ease-out ${reachView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[12px]"}`}>
                            Get in Touch
                        </p>
                        <div className="border-t border-[#F7F5F0]/[0.08]">
                            {REACH.map((item, i) => (
                                <div
                                    key={item.label}
                                    className={`group grid grid-cols-[5.5rem_1fr] items-center gap-[1.5rem] py-[clamp(1.2rem,3vh,1.8rem)] border-b border-[#F7F5F0]/[0.08] transition-all duration-600 ease-out ${reachView.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[18px]"}`}
                                    style={{ transitionDelay: `${i * 110}ms` }}
                                >
                                    <div className="flex items-center gap-[0.55rem]">
                                        <span className="text-[#C8102E]/60 group-hover:text-[#C8102E] transition-colors duration-200">
                                            {item.icon}
                                        </span>
                                        <span className="font-['Libre_Baskerville',serif] text-[0.58rem] tracking-[0.16em] uppercase text-[#F7F5F0]/22">
                                            {item.label}
                                        </span>
                                    </div>
                                    <a
                                        href={item.href}
                                        className="font-['DM_Serif_Display',serif] italic text-[clamp(1rem,2vw,1.3rem)] text-[#F7F5F0]/55 hover:text-[#F7F5F0] transition-colors duration-200 no-underline leading-[1.4] break-all"
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <p className={`mt-[1.6rem] font-['Libre_Baskerville',serif] text-[0.7rem] leading-[1.75] text-[#F7F5F0]/20 transition-all duration-700 delay-[400ms] ease-out ${reachView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"}`}>
                            All communications are subject to applicable professional regulations governing advocates in India.
                        </p>
                    </div>
                </div>

                {/* ── BOTTOM ROW: Three Office Addresses ── */}
                <div ref={officesView.ref}>
                    {/* Divider with label */}
                    <div className={`flex items-center gap-[1.2rem] mb-[clamp(2rem,5vh,3.5rem)] transition-all duration-700 ease-out ${officesView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[12px]"}`}>
                        <div className="w-[32px] h-[1px] bg-[#C8102E]/50 shrink-0" />
                        <span className="font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.2em] uppercase text-[#F7F5F0]/25">
                            Offices
                        </span>
                        <div className="flex-1 h-[1px] bg-[#F7F5F0]/[0.06]" />
                    </div>

                    {/* 3-column office cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-[#F7F5F0]/[0.07] rounded-[2px] overflow-hidden">
                        {OFFICES.map((office, i) => (
                            <div
                                key={office.city}
                                className={`bg-[#080806] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1.8rem,4vh,2.8rem)] flex flex-col gap-[1.2rem] group hover:bg-[#0f0f0c] transition-colors duration-300 ${officesView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
                                style={{ transitionDelay: `${120 + i * 130}ms`, transitionDuration: "700ms", transitionTimingFunction: "ease-out" }}
                            >
                                {/* City name */}
                                <div className="flex items-baseline justify-between">
                                    <span className="font-['Bebas_Neue',sans-serif] text-[clamp(1.6rem,4vw,2.4rem)] tracking-[0.04em] text-[#F7F5F0]/80 leading-none group-hover:text-[#F7F5F0] transition-colors duration-300">
                                        {office.city}
                                    </span>
                                    {/* City index number */}
                                    <span className="font-['Libre_Baskerville',serif] text-[0.55rem] tracking-[0.14em] text-[#C8102E]/50 tabular-nums">
                                        0{i + 1}
                                    </span>
                                </div>

                                {/* Thin red rule */}
                                <div className="w-[28px] h-[1px] bg-[#C8102E]/40 group-hover:w-[44px] group-hover:bg-[#C8102E]/70 transition-all duration-400 ease-out" />

                                {/* Address lines */}
                                <address className="not-italic flex flex-col gap-[0.3rem]">
                                    {office.lines.map((line, j) => (
                                        <span
                                            key={j}
                                            className="font-['DM_Serif_Display',serif] italic text-[clamp(0.82rem,1.4vw,1rem)] text-[#F7F5F0]/42 leading-[1.55] group-hover:text-[#F7F5F0]/60 transition-colors duration-300"
                                        >
                                            {line}
                                        </span>
                                    ))}
                                </address>

                                {/* Pincode badge */}
                                <div className="mt-auto pt-[0.8rem] border-t border-[#F7F5F0]/[0.06]">
                                    <span className="font-['Libre_Baskerville',serif] text-[0.6rem] tracking-[0.16em] text-[#F7F5F0]/18">
                                        PIN — {office.pincode}
                                    </span>
                                </div>
                            </div>
                        ))}
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
                        {[
                            { label: "Home", href: "#about" },
                            { label: "Mentorship", href: "#mentorship" },
                            { label: "Gallery", href: "#gallery" },
                            { label: "Contact", href: "#contact" }
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-['Libre_Baskerville',serif] text-[0.58rem] tracking-[0.12em] uppercase text-[#F7F5F0]/20 hover:text-[#F7F5F0]/50 transition-colors duration-200 no-underline"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}