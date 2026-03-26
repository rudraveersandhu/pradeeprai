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

const TABS = [
    { id: "tab1", label: "Media and Events " },
    { id: "tab2", label: "Mentorship and Engagements" },
];

const GALLERY_IMAGES = {
    tab1: [
        "/gallery/events/a.jpg",
        "/gallery/events/b.jpg",
        "/gallery/events/c.jpeg",
        "/gallery/events/d.jpg",
        "/gallery/events/e.jpg",
        "/gallery/events/f.jpg",
        "/gallery/events/g.jpg",
        "/gallery/events/h.jpg",
        "/gallery/events/i.jpg",
        "/gallery/events/j.jpg",
        "/gallery/events/k.jpg",
        "/gallery/events/l.jpg",
        "/gallery/events/m.jpg",
        "/gallery/events/n.jpg",
        "/gallery/events/o.jpg",
        "/gallery/events/p.jpg",
        "/gallery/events/q.jpg",
    ],
    tab2: [
        "/gallery/appearance/a.jpg",
        "/gallery/appearance/b.png",
        "/gallery/appearance/c.png",
        "/gallery/appearance/d.png",
        "/gallery/appearance/e.png",
        "/gallery/appearance/f.png",
        "/gallery/appearance/g.png",
    ],
};

const ITEMS_PER_PAGE = 4;

export default function GallerySection() {
    const headView = useInView(0.1);
    const bodyView = useInView(0.08);

    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const activeImages = GALLERY_IMAGES[activeTab as keyof typeof GALLERY_IMAGES];
    const totalPages = Math.ceil(activeImages.length / ITEMS_PER_PAGE);
    const currentImages = activeImages.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    // Reset pagination when tab changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    // Close lightbox on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <section
            id="gallery"
            className="bg-[#F7F5F0] py-[clamp(5rem,12vh,10rem)] px-[clamp(1.5rem,6vw,5.5rem)] border-b border-[#0c0c0a]/[0.12] overflow-hidden relative"
        >
            {/* Faint background word */}
            <div
                aria-hidden="true"
                className="absolute right-[-2vw] top-[50%] -translate-y-1/2 font-['Bebas_Neue',sans-serif] text-[clamp(10rem,24vw,22rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(12,12,10,0.04)] select-none pointer-events-none"
            >
                GALLERY
            </div>

            {/* Section Header */}
            <div className="flex items-baseline justify-between mb-[clamp(4rem,10vh,8rem)] flex-wrap gap-[1rem]">
                <div className="flex items-center gap-[0.9rem]">
                    <div className="w-[32px] h-[1px] bg-[#C8102E] shrink-0" />
                    <span className="font-['Libre_Baskerville',serif] text-[0.65rem] tracking-[0.22em] uppercase text-[#6B6760]">
                        GALLERY
                    </span>
                </div>
            </div>

            {/* Hero text block */}
            <div ref={headView.ref} className="mb-[clamp(3rem,8vh,6rem)] relative z-10">
                <h2 className={`font-['Bebas_Neue',sans-serif] text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-[0.02em] text-[#080806] max-w-[15ch] transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
                    Visual<br />
                    <em className="font-['DM_Serif_Display',serif] not-italic italic text-[#C8102E]">Chronicles</em>
                </h2>
            </div>

            {/* Tabs */}
            <div className={`mb-[clamp(2rem,5vh,4rem)] flex gap-8 border-b border-[#0c0c0a]/[0.12] pb-4 transition-all duration-700 delay-200 relative z-10 ${headView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative font-['Bebas_Neue',sans-serif] text-[clamp(1.2rem,2vw,1.5rem)] tracking-[0.05em] uppercase transition-colors duration-300 ${activeTab === tab.id ? "text-[#C8102E]" : "text-[#080806]/40 hover:text-[#080806]"
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-[#C8102E]"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div ref={bodyView.ref} className="relative z-10">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-[clamp(1rem,3vw,2rem)] transition-all duration-700 delay-[300ms] ease-out ${bodyView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
                    {currentImages.map((src, idx) => (
                        <div
                            key={`${activeTab}-${currentPage}-${idx}`}
                            className="group relative w-full h-[clamp(300px,40vh,500px)] overflow-hidden bg-[#0c0c0a]/[0.05] shadow-sm transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
                            onClick={() => setSelectedImage(src)}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover filter grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Overlay frame effect */}
                            <div className="absolute inset-0 border-[0.5px] border-[#080806]/10 pointer-events-none mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-[#080806]/[0.02] group-hover:bg-[#0c0c0a]/30 transition-colors duration-500 pointer-events-none flex items-center justify-center">
                                {/* Hover View Text */}
                                <span className="opacity-0 group-hover:opacity-100 bg-[#C8102E] text-white font-['Bebas_Neue',sans-serif] text-[1.2rem] px-6 py-2 tracking-[0.08em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    Expand
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Bottom Bar */}
                {totalPages > 1 && (
                    <div className="mt-[clamp(3rem,6vh,5rem)] flex justify-center items-center gap-[clamp(1rem,3vw,3rem)] border-t border-[#0c0c0a]/[0.08] pt-8">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className={`font-['Bebas_Neue',sans-serif] text-[1.2rem] tracking-[0.1em] transition-all duration-300 ${currentPage === 1 ? "text-[#080806]/30 cursor-not-allowed" : "text-[#080806] hover:text-[#C8102E]"
                                }`}
                        >
                            PREV
                        </button>

                        <div className="flex gap-4">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`relative w-12 h-1 group`}
                                    aria-label={`Page ${i + 1}`}
                                >
                                    {/* Unactive state baseline */}
                                    <div className="absolute inset-0 bg-[#080806]/20 transition-all group-hover:bg-[#080806]/40" />
                                    {/* Active state indicator */}
                                    {currentPage === i + 1 && (
                                        <div className="absolute inset-0 bg-[#C8102E] shadow-[0_0_8px_rgba(200,16,46,0.5)] transition-all duration-300" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className={`font-['Bebas_Neue',sans-serif] text-[1.2rem] tracking-[0.1em] transition-all duration-300 ${currentPage === totalPages ? "text-[#080806]/30 cursor-not-allowed" : "text-[#080806] hover:text-[#C8102E]"
                                }`}
                        >
                            NEXT
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-[#0c0c0a]/98 backdrop-blur p-[clamp(1rem,4vw,3rem)] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${selectedImage ? "opacity-100 pointer-events-auto visibility-visible" : "opacity-0 pointer-events-none visibility-hidden"
                    }`}
                onClick={() => setSelectedImage(null)}
            >
                {/* Close Button */}
                <button
                    className="absolute top-[clamp(1.5rem,4vw,3rem)] right-[clamp(1.5rem,4vw,3rem)] text-[#F7F5F0] font-['Bebas_Neue',sans-serif] text-2xl tracking-[0.15em] hover:text-[#C8102E] transition-colors z-[110] flex items-center gap-2"
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                >
                    CLOSE
                    <div className="w-[30px] h-[1px] bg-current" />
                </button>

                {selectedImage && (
                    <div className="relative max-w-7xl w-full h-full flex justify-center items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={selectedImage}
                            alt="Fullscreen view"
                            className="max-w-full max-h-full object-contain shadow-2xl animate-[scaleIn_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                            onClick={(e) => e.stopPropagation()} // Prevent click from closing
                        />
                    </div>
                )}
            </div>

            {/* Custom Animation Keyframes for Lightbox Image */}
            <style jsx global>{`
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
}
