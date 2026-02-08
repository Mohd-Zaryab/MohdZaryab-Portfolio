import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-8 right-8 z-[100] w-12 h-12 glass rounded-full flex items-center justify-center group overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {theme === 'dark' ? (
                        <Moon size={20} className="text-neon-teal" />
                    ) : (
                        <Sun size={20} className="text-neon-teal" />
                    )}
                </motion.div>
            </AnimatePresence>
            <motion.div
                className="absolute inset-0 bg-neon-teal/10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
        </motion.button>
    );
};

export default ThemeToggle;
