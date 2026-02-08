import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Planet = ({ orbitRadius, speed, size, color = "neon-teal", label }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Orbital Animation
    return (
        <motion.div
            className="absolute top-1/2 left-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            style={{ width: orbitRadius * 2, height: orbitRadius * 2, marginLeft: -orbitRadius, marginTop: -orbitRadius }}
        >
            {/* Orbit Ring */}
            <div
                style={{ borderColor: 'var(--border)' }}
                className="absolute inset-0 rounded-full border pointer-events-none"
            />

            {/* Planet Body */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-crosshair"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.5 }}
                style={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    backgroundColor: isHovered ? 'var(--accent)' : 'rgba(45, 212, 191, 0.2)',
                    boxShadow: isHovered ? "0 0 20px var(--accent)" : "none",
                    transition: "background-color 0.3s ease, box-shadow 0.3s ease"
                }}
            >
                {/* Planet Label */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ backgroundColor: 'var(--background)', borderColor: 'var(--accent)', color: 'var(--accent)' }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold whitespace-nowrap tracking-widest px-2 py-1 rounded border opacity-90"
                    >
                        {label}
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    const resumeLink = "https://drive.google.com/uc?export=view&id=1IMExyetrKwav-_bDTt4cNG6nfcdpk_Xo";

    const planets = [
        { orbitRadius: 180, speed: 15, size: 8, label: "STRATEGY" },
        { orbitRadius: 260, speed: 25, size: 12, label: "OPERATIONS" },
        { orbitRadius: 350, speed: 40, size: 10, label: "ARCHITECTURE" },
        { orbitRadius: 450, speed: 60, size: 6, label: "SCALABILITY" },
    ];

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Cosmic Center (Gravitational Source) */}
            <div className="relative z-10 text-center">
                {planets.map((planet, idx) => (
                    <Planet key={idx} {...planet} />
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative px-12 py-8"
                >
                    <div className="absolute inset-0 bg-neon-teal/5 blur-[120px] rounded-full" />
                    <h1
                        style={{ color: 'var(--text-hero)' }}
                        className="text-7xl md:text-9xl font-black relative z-10 leading-[0.9] tracking-tighter hover:text-neon-teal transition-colors duration-500 cursor-default"
                    >
                        MOHAMMAD<br />ZARYAB
                    </h1>

                    <div className="flex flex-wrap justify-center gap-4 mt-8 relative z-10">
                        <div
                            style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                            className="px-4 py-1.5 glass text-[10px] font-bold tracking-[0.2em] uppercase"
                        >
                            Operations Leader // Strategic Architect
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Primary Action */}
            <motion.div
                className="mt-20 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-10 py-5 bg-neon-teal text-background font-black uppercase tracking-[0.3em] text-xs overflow-hidden inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: 'var(--accent)' }}
                >
                    <span className="relative z-10">[DEPLOY CV]</span>
                    <motion.div
                        className="absolute inset-0 bg-white opacity-20"
                        initial={{ x: '-101%' }}
                        whileHover={{ x: '101%' }}
                        transition={{ duration: 0.6, ease: "circIn" }}
                    />
                </motion.a>
            </motion.div>

            {/* Ambient particles or starfield could go here if needed, but keeping it clean as per request */}

            {/* Decorative vertical reveal indicators */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-px h-20 bg-gradient-to-b from-neon-teal to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
