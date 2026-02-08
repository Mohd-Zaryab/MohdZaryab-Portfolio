import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Copy, Check } from 'lucide-react';

const Tooltip = ({ text, isVisible }) => (
    <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? -40 : 10,
            scale: isVisible ? 1 : 0.8
        }}
        style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap rounded"
    >
        {text}
        <div
            style={{ borderTopColor: 'var(--accent)' }}
            className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
        />
    </motion.div>
);

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const copyEmail = () => {
        const email = import.meta.env.VITE_EMAIL_ID || "zaryabansari98@gmail.com";
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="relative mt-32 border-t border-transparent overflow-hidden">
            {/* Top Border Gradient */}
            <div
                style={{ backgroundColor: 'var(--border)' }}
                className="absolute top-0 left-0 w-full h-px opacity-20"
            />

            <div className="container mx-auto px-6 pt-24 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <motion.h2
                            style={{ color: 'var(--text-hero)' }}
                            className="text-4xl md:text-6xl font-black mb-8 transition-all hover:text-neon-teal hover:drop-shadow-[0_0_15px_rgba(45,212,191,0.5)] cursor-default inline-block"
                        >
                            MOHAMMAD ZARYAB
                        </motion.h2>
                        <p
                            style={{ color: 'var(--text-primary)' }}
                            className="tracking-[0.3em] font-medium text-xs uppercase mb-12"
                        >
                            ENGINEERING SYSTEMS, SCALING TEAMS, DEPLOYING EXCELLENCE.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div
                                className="flex items-center gap-4 group cursor-pointer w-fit relative"
                                onMouseEnter={() => setHoveredItem('email')}
                                onMouseLeave={() => setHoveredItem(null)}
                                onClick={copyEmail}
                            >
                                <Tooltip text="SEND AN EMAIL" isVisible={hoveredItem === 'email'} />
                                <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-neon-teal/20 transition-colors">
                                    <Mail size={18} className="text-steel group-hover:text-neon-teal" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Email Me</div>
                                    <div
                                        style={{ color: 'var(--text-hero)' }}
                                        className="font-mono flex items-center gap-2"
                                    >
                                        {import.meta.env.VITE_EMAIL_ID || "zaryabansari98@gmail.com"}
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            {copied ? <Check size={14} className="text-neon-teal" /> : <Copy size={14} className="text-steel" />}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex items-center gap-4 group w-fit relative"
                                onMouseEnter={() => setHoveredItem('phone')}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Tooltip text="WANT TO CALL?" isVisible={hoveredItem === 'phone'} />
                                <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-neon-teal/20 transition-colors">
                                    <Phone size={18} className="text-steel group-hover:text-neon-teal" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Call Me</div>
                                    <div
                                        style={{ color: 'var(--text-hero)' }}
                                        className="font-mono"
                                    >
                                        {import.meta.env.VITE_PHONE_NUMBER || "+91 9889544077"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:items-end justify-center gap-8">
                        <div className="flex gap-6">
                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                className="w-16 h-16 glass rounded-full flex items-center justify-center group relative"
                                onMouseEnter={() => setHoveredItem('github')}
                                onMouseLeave={() => setHoveredItem(null)}
                                whileHover={{ y: -5, scale: 1.1 }}
                            >
                                <Tooltip text="VIEW SOURCE CODE" isVisible={hoveredItem === 'github'} />
                                <Github size={24} className="text-steel group-hover:text-neon-teal transition-colors" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/mohammad-zaryab/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 glass rounded-full flex items-center justify-center group relative"
                                onMouseEnter={() => setHoveredItem('linkedin')}
                                onMouseLeave={() => setHoveredItem(null)}
                                whileHover={{ y: -5, scale: 1.1 }}
                            >
                                <Tooltip text="LET’S CONNECT" isVisible={hoveredItem === 'linkedin'} />
                                <Linkedin size={24} className="text-steel group-hover:text-neon-teal transition-colors" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div
                    style={{ borderTopColor: 'var(--border)' }}
                    className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4"
                >
                    <p className="text-[10px] text-slate-500 tracking-[0.2em] font-bold">
                        © 2026 MOHAMMAD ZARYAB. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] text-slate-500 hover:text-neon-teal transition-colors tracking-widest">PRIVACY POLICY</a>
                        <a href="#" className="text-[10px] text-slate-500 hover:text-neon-teal transition-colors tracking-widest">TERMS OF SERVICE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
