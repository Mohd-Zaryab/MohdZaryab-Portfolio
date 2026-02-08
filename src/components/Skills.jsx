import React from 'react';
import SectionReveal from './SectionReveal';

const Skills = () => {
    const skills = {
        OPS: [
            "Agile (HP Cert)",
            "Team Leadership",
            "Process Optimization",
            "Lean Six Sigma",
            "SLA Governance",
            "Risk Management"
        ],
        TECH: [
            "Java",
            "JavaScript (HackerRank)",
            "SQL",
            "React",
            "Flutter",
            "Python (AI/ML)",
            "Node.js",
            "Oracle DB"
        ]
    };

    return (
        <section className="py-32 container mx-auto px-6">
            <SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {/* OPS category */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div
                                style={{ backgroundColor: 'var(--accent)' }}
                                className="w-12 h-px"
                            />
                            <h2
                                style={{ color: 'var(--text-hero)' }}
                                className="text-2xl font-bold tracking-[0.2em]"
                            >
                                OPERATIONAL
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {skills.OPS.map((skill, i) => (
                                <div
                                    key={i}
                                    className="px-6 py-3 glass-teal text-neon-teal font-medium border-neon-teal/10 hover:bg-neon-teal hover:text-background transition-all duration-300"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TECH category */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div
                                style={{ backgroundColor: 'var(--border)' }}
                                className="w-12 h-px"
                            />
                            <h2
                                style={{ color: 'var(--text-hero)' }}
                                className="text-2xl font-bold tracking-[0.2em]"
                            >
                                TECHNICAL
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {skills.TECH.map((skill, i) => (
                                <div
                                    key={i}
                                    style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                                    className="px-6 py-3 glass hover:border-white/20 hover:text-white transition-all duration-300"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
};

export default Skills;
