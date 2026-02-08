import React from 'react';
import { motion } from 'framer-motion';

const SectionReveal = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                duration: 0.8
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal;
