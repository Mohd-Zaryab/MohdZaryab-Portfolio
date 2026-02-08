import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import SectionReveal from './SectionReveal';

const ExperienceItem = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative pl-12 group">
            {/* Pulsing Dot */}
            <div
                style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 15px var(--accent)' }}
                className="absolute left-[-5px] top-6 w-3 h-3 rounded-full z-10 animate-pulse"
            />

            <SectionReveal>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ borderColor: 'var(--border)' }}
                    className={`glass p-8 md:p-10 cursor-pointer transition-all duration-500 overflow-hidden ${isOpen ? 'border-neon-teal/40' : 'hover:border-neon-teal/20'}`}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <span className="text-neon-teal font-mono text-xs tracking-[0.2em] mb-2 block opacity-70">
                                {item.period}
                            </span>
                            <h3 style={{ color: 'var(--text-hero)' }} className="text-3xl font-black italic tracking-tighter uppercase italic">
                                {item.role}
                            </h3>
                            <p className="text-neon-teal/80 text-sm font-bold uppercase tracking-widest mt-1">
                                {item.headline}
                            </p>
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="text-white/20"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="pt-6 border-t border-white/5 space-y-4">
                                    <ul className="space-y-3">
                                        {item.bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-4 text-white/60 text-sm leading-relaxed">
                                                <span className="text-neon-teal mt-1">▹</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {item.skills.map((skill, i) => (
                                            <span key={i} className="text-[10px] bg-neon-teal/10 text-neon-teal px-3 py-1 rounded-full border border-neon-teal/20 font-bold uppercase tracking-widest">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </SectionReveal>
        </div>
    );
};

const Timeline = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            role: "Subject Matter Expert @ EXL Service",
            period: "Sep 2021 – Present | 4.5 Years",
            headline: "Team Lead - 21 Members (Hybrid)",
            bullets: [
                "Manage a team of 21 members ensuring efficient processing and 100% timely delivery.",
                "Monitor team performance against strict SLAs and KPIs to exceed quality standards.",
                "Primary point of contact for international clients, managing high-level communication and conflict resolution.",
                "Oversee email correspondence and generate detailed management reports."
            ],
            skills: ["Knowledge Sharing", "Auditing", "Strategic Leadership"],
            isActive: true
        },
        {
            role: "Senior Executive @ EXL",
            period: "Oct 2023 – Mar 2024",
            headline: "Team Lead - 12 Members",
            bullets: [
                "Managed 12 members with a focus on Quality Improvement and operational efficiency.",
                "Monitored SLAs/KPIs and maintained accurate records for management review."
            ],
            skills: ["Quality Improvement", "SLA Governance", "Reporting"],
            isActive: false
        },
        {
            role: "Executive @ EXL",
            period: "Sep 2021 – Oct 2023",
            headline: "Operational Foundation",
            bullets: [
                "Focused on Service Excellence, Knowledge Sharing, and Auditing within U.S. P&C Insurance workflows."
            ],
            skills: ["Service Excellence", "Insurance Ops", "Auditing"],
            isActive: false
        }
    ];

    return (
        <section className="py-32 container mx-auto px-6 relative overflow-hidden">
            <SectionReveal>
                <div className="mb-24">
                    <h2
                        style={{ color: 'var(--text-hero)' }}
                        className="text-5xl md:text-8xl font-black mb-4 tracking-tighter opacity-10 italic"
                    >
                        JOURNEY
                    </h2>
                    <h3 className="text-xl font-bold tracking-[0.4em] text-neon-teal uppercase -mt-12 ml-2">
                        Professional Journey
                    </h3>
                </div>
            </SectionReveal>

            <div className="relative max-w-5xl mx-auto">
                {/* Glowing Connector Line */}
                <motion.div
                    className="absolute left-0 top-0 w-[2px] h-full origin-top z-0"
                    style={{
                        scaleY,
                        backgroundColor: 'var(--accent)',
                        boxShadow: '0 0 20px var(--accent)'
                    }}
                />
                <div
                    style={{ backgroundColor: 'var(--border)' }}
                    className="absolute left-0 top-0 w-[2px] h-full z-[-1] opacity-20"
                />

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} item={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
