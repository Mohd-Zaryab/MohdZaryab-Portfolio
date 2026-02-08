import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SectionReveal from './SectionReveal';

const TiltCard = ({ project }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
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
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-[450px] w-full glass group cursor-none overflow-hidden"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 p-10 flex flex-col justify-end"
            >
                <div
                    style={{ transform: "translateZ(30px)" }}
                    className="mb-4 text-neon-teal font-mono text-sm uppercase tracking-widest"
                >
                    {project.category}
                </div>
                <h3
                    style={{ transform: "translateZ(60px)", color: 'var(--text-hero)' }}
                    className="text-4xl font-black mb-4 group-hover:text-neon-teal transition-colors"
                >
                    {project.title}
                </h3>
                <p
                    style={{ transform: "translateZ(40px)", color: 'var(--text-primary)' }}
                    className="max-w-sm"
                >
                    {project.desc}
                </p>
            </div>

            {/* Decorative background element */}
            <div
                style={{ transform: "translateZ(-20px)", color: 'var(--text-hero)' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black opacity-[0.02] select-none whitespace-nowrap"
            >
                {project.title}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "SwiftBill POS",
            category: "Flutter / Firebase",
            desc: "Retail Command Center for seamless business operations and billing management."
        },
        {
            title: "RickSetGo",
            category: "Mobility Ops",
            desc: "Advanced mobility operations platform with live tracking and logistics logic."
        },
        {
            title: "UrbanSetGo",
            category: "Inventory",
            desc: "Sophisticated inventory orchestration logic for urban supply chain management."
        },
        {
            title: "Goal Getter",
            category: "Fin-Psych Engine",
            desc: "A financial psychology engine designed to optimize goal-oriented savings."
        }
    ];

    return (
        <section className="py-32 container mx-auto px-6">
            <SectionReveal>
                <div className="flex items-baseline gap-4 mb-24">
                    <h2
                        style={{ color: 'var(--text-hero)' }}
                        className="text-5xl md:text-7xl font-bold"
                    >
                        DIGITAL FORGE
                    </h2>
                    <span className="text-neon-teal font-mono">/ SELECTED PROJECTS</span>
                </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <SectionReveal key={index}>
                        <TiltCard project={project} />
                    </SectionReveal>
                ))}
            </div>
        </section>
    );
};

export default Projects;
