import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionReveal from './SectionReveal';

const Timeline = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const milestones = [
        {
            role: "SME @ EXL",
            period: "Present",
            details: "Managing 21 members, primary client contact, KPI monitoring."
        },
        {
            role: "Senior Executive",
            period: "2022 - 2023",
            details: "Team of 12, Quality Compliance Lead."
        },
        {
            role: "Executive",
            period: "2020 - 2022",
            details: "Service Excellence & Foundational Operations."
        }
    ];

    return (
        <section className="py-32 container mx-auto px-6 relative">
            <SectionReveal>
                <h2
                    style={{ color: 'var(--text-hero)' }}
                    className="text-5xl md:text-7xl font-bold mb-24 opacity-20"
                >
                    THE JOURNEY
                </h2>
            </SectionReveal>

            <div className="relative max-w-4xl mx-auto">
                {/* Glow Line */}
                <motion.div
                    className="absolute left-0 top-0 w-[2px] h-full origin-top z-0"
                    style={{ scaleY, backgroundColor: 'var(--accent)' }}
                />
                <div
                    style={{ backgroundColor: 'var(--border)' }}
                    className="absolute left-0 top-0 w-[2px] h-full z-[-1]"
                />

                <div className="space-y-32">
                    {milestones.map((item, index) => (
                        <div key={index} className="relative pl-12">
                            {/* Dot */}
                            <div
                                style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }}
                                className="absolute left-[-5px] top-2 w-3 h-3 rounded-full"
                            />

                            <SectionReveal>
                                <div
                                    style={{ borderColor: 'var(--border)' }}
                                    className="glass p-8 md:p-12 group hover:border-neon-teal/30 transition-colors"
                                >
                                    <span className="text-neon-teal/60 font-mono text-sm mb-2 block">{item.period}</span>
                                    <h3
                                        style={{ color: 'var(--text-hero)' }}
                                        className="text-3xl font-bold mb-4"
                                    >
                                        {item.role}
                                    </h3>
                                    <p
                                        style={{ color: 'var(--text-primary)' }}
                                        className="text-lg leading-relaxed"
                                    >
                                        {item.details}
                                    </p>
                                </div>
                            </SectionReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
