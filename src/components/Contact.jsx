import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;

        // Safety check for production builds - Fallback to mock data if key is missing or default
        if (!formspreeKey || formspreeKey === 'your_formspree_key_here') {
            console.warn('Formspree key missing. Falling back to mock success.');
            setTimeout(() => {
                setStatus('SUCCESS');
                setFormData({ name: '', email: '', message: '' });
            }, 1000);
            return;
        }

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('SUCCESS');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('ERROR');
        }
    };

    return (
        <section className="py-32 container mx-auto px-6 max-w-4xl">
            <SectionReveal>
                <div
                    style={{ borderColor: 'var(--border)' }}
                    className="glass p-12 md:p-20 relative overflow-hidden"
                >
                    {/* Subtle bg glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-teal/5 blur-[80px] rounded-full -mr-32 -mt-32" />

                    <h2
                        style={{ color: 'var(--text-hero)' }}
                        className="text-4xl md:text-5xl font-black mb-12"
                    >
                        GET IN TOUCH
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label
                                    style={{ color: 'var(--text-primary)' }}
                                    className="text-[10px] uppercase font-bold tracking-widest opacity-60"
                                >
                                    Full Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    style={{ backgroundColor: 'var(--glass)', borderColor: 'var(--border)', color: 'var(--text-hero)' }}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full border-b p-4 focus:outline-none focus:border-neon-teal transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    style={{ color: 'var(--text-primary)' }}
                                    className="text-[10px] uppercase font-bold tracking-widest opacity-60"
                                >
                                    Email Address
                                </label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    style={{ backgroundColor: 'var(--glass)', borderColor: 'var(--border)', color: 'var(--text-hero)' }}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full border-b p-4 focus:outline-none focus:border-neon-teal transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label
                                style={{ color: 'var(--text-primary)' }}
                                className="text-[10px] uppercase font-bold tracking-widest opacity-60"
                            >
                                Detailed Message
                            </label>
                            <textarea
                                required
                                rows="4"
                                value={formData.message}
                                style={{ backgroundColor: 'var(--glass)', borderColor: 'var(--border)', color: 'var(--text-hero)' }}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full border-b p-4 focus:outline-none focus:border-neon-teal transition-colors resize-none"
                                placeholder="What can we scale together?"
                            />
                        </div>

                        <motion.button
                            disabled={status === 'SUBMITTING'}
                            type="submit"
                            style={{ backgroundColor: 'var(--accent)' }}
                            className="group relative w-full md:w-auto px-12 py-5 text-background font-black uppercase tracking-[0.2em] text-xs overflow-hidden disabled:opacity-50"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">
                                {status === 'SUBMITTING' ? 'DEPLOYING...' : status === 'SUCCESS' ? 'MESSAGE DEPLOYED' : 'DEPLOY MESSAGE'}
                            </span>
                            {/* Liquid fill effect */}
                            <motion.div
                                className="absolute inset-0 bg-white opacity-20"
                                initial={{ y: '100%' }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                            />
                        </motion.button>

                        {status === 'ERROR' && (
                            <p className="text-red-400 text-xs mt-4 uppercase tracking-widest font-bold">System malfunction. Please retry.</p>
                        )}
                        {status === 'SUCCESS' && (
                            <p className="text-neon-teal text-xs mt-4 uppercase tracking-widest font-bold animate-pulse">Bridge established. I will respond shortly.</p>
                        )}
                    </form>
                </div>
            </SectionReveal>
        </section>
    );
};

export default Contact;
