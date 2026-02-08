import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SectionReveal from './SectionReveal';

const EducationCard = ({ item }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-[480px] w-full glass rounded-3xl p-10 group cursor-default transition-all duration-300 hover:border-neon-teal/50"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="h-full flex flex-col"
            >
                <div
                    style={{ transform: "translateZ(40px)" }}
                    className="mb-8 w-14 h-14 bg-neon-teal/10 rounded-2xl flex items-center justify-center border border-neon-teal/20 group-hover:bg-neon-teal group-hover:text-background transition-all"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </div>

                <div style={{ transform: "translateZ(50px)" }} className="mb-2">
                    <span className="text-neon-teal font-mono text-xs font-bold uppercase tracking-[0.3em]">
                        {item.year}
                    </span>
                    <h3 style={{ color: 'var(--text-hero)' }} className="text-3xl font-black italic uppercase leading-none mt-2 mb-4 tracking-tighter">
                        {item.degree}
                    </h3>
                </div>

                <p style={{ transform: "translateZ(30px)" }} className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-neon-teal pl-4">
                    {item.institution}
                </p>

                <div style={{ transform: "translateZ(40px)" }} className="mt-auto space-y-4">
                    <p className="text-white/60 text-sm font-medium">
                        {item.specialization}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {item.highlights.map((h, i) => (
                            <span key={i} className="text-[10px] bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase font-black tracking-widest">
                                {h}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/0 to-neon-teal/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
            <div className="absolute -inset-1 bg-neon-teal/10 blur-xl opacity-0 group-hover:opacity-40 transition-opacity rounded-3xl pointer-events-none" />
        </motion.div>
    );
};

const Education = () => {
    const academicStages = [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Amity University Online",
            year: "2024 – 2026",
            specialization: "Specialization: Machine Learning & Artificial Intelligence.",
            highlights: ["ADMS", "Core Java", "Advanced AI logic"]
        },
        {
            degree: "Bachelor of Science (B.Sc)",
            institution: "P.P.N. P.G. COLLEGE",
            year: "2022 – 2024",
            specialization: "Specialization: Biology, General.",
            highlights: ["Leadership", "Foundational Science"]
        },
        {
            degree: "12th Grade",
            institution: "Halim Muslim English School",
            year: "2020 – 2021",
            specialization: "Higher Secondary Education.",
            highlights: ["English", "Core Sciences"]
        }
    ];

    return (
        <section className="py-32 container mx-auto px-6 overflow-hidden">
            <SectionReveal>
                <div className="mb-24 flex flex-col items-center text-center">
                    <h2
                        style={{ color: 'var(--text-hero)' }}
                        className="text-5xl md:text-8xl font-black mb-4 tracking-tighter opacity-10 italic"
                    >
                        ACADEMIA
                    </h2>
                    <h3 className="text-xl font-bold tracking-[0.4em] text-neon-teal uppercase -mt-12">
                        Academic Foundation
                    </h3>
                </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {academicStages.map((stage, index) => (
                    <SectionReveal key={index}>
                        <EducationCard item={stage} />
                    </SectionReveal>
                ))}
            </div>
        </section>
    );
};

export default Education;
