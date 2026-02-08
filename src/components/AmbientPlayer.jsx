import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AmbientPlayer = () => {
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    // Deep Space Ambient Track (Royalty Free)
    const audioUrl = "https://cdn.pixabay.com/audio/2021/11/25/audio_1947b74bd4.mp3";

    const toggleMute = () => {
        if (isMuted) {
            audioRef.current.play().catch(err => console.log("User interaction required"));
        } else {
            audioRef.current.pause();
        }
        setIsMuted(!isMuted);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">
            <AnimatePresence>
                {!isMuted && (
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="text-[10px] tracking-widest text-neon-teal/60 uppercase font-bold"
                    >
                        Deep Space Ambience
                    </motion.span>
                )}
            </AnimatePresence>
            <motion.button
                onClick={toggleMute}
                className="w-10 h-10 glass rounded-full flex items-center justify-center group relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isMuted ? (
                    <VolumeX size={16} className="text-steel" />
                ) : (
                    <Volume2 size={16} className="text-neon-teal" />
                )}
                <audio ref={audioRef} src={audioUrl} loop />
            </motion.button>
        </div>
    );
};

export default AmbientPlayer;
