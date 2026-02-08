import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            {/* Grain Overlay */}
            <div className="grain-overlay animate-grain" />

            {/* Subtle Gradients that adapt to background */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-teal/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-teal/5 blur-[120px] rounded-full" />
        </div>
    );
};

export default Background;
