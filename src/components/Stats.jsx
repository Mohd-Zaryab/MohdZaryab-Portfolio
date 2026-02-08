import React from 'react';
import SectionReveal from './SectionReveal';

const Stats = () => {
    const stats = [
        {
            id: "01.",
            title: "4.5+ YEARS",
            desc: "Specialized in U.S. P&C Insurance Ops."
        },
        {
            id: "02.",
            title: "23+ FTE TEAM",
            desc: "Leadership, Training, and SLA Governance."
        },
        {
            id: "03.",
            title: "RPA EXCEPTION",
            desc: "Strategic process optimization & management."
        }
    ];

    return (
        <section className="py-32 container mx-auto px-6">
            <SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative group">
                            <span className="text-neon-teal font-mono text-sm tracking-tighter block mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                {stat.id}
                            </span>
                            <h3
                                style={{ color: 'var(--text-hero)' }}
                                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                            >
                                {stat.title}
                            </h3>
                            <p
                                style={{ color: 'var(--text-primary)' }}
                                className="text-lg max-w-[280px]"
                            >
                                {stat.desc}
                            </p>
                            <div
                                style={{ backgroundColor: 'var(--accent)' }}
                                className="absolute -bottom-8 left-0 w-12 h-0.5 opacity-20 group-hover:w-full transition-all duration-700"
                            />
                        </div>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
};

export default Stats;
