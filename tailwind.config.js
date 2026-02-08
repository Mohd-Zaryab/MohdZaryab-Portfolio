export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                "midnight-slate": "#0F172A",
                "neon-teal": "#2DD4BF",
                steel: "#94A3B8",
            },
            animation: {
                'orbit-outer': 'orbit 20s linear infinite',
                'orbit-inner': 'orbit 15s linear infinite reverse',
                'grain': 'grain 8s steps(10) infinite',
            },
            keyframes: {
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
                },
                grain: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -10%)' },
                    '20%': { transform: 'translate(-15%, 5%)' },
                    '30%': { transform: 'translate(7%, -25%)' },
                    '40%': { transform: 'translate(-5%, 25%)' },
                    '50%': { transform: 'translate(-15%, 10%)' },
                    '60%': { transform: 'translate(15%, 0%)' },
                    '70%': { transform: 'translate(0%, 15%)' },
                    '80%': { transform: 'translate(3%, 35%)' },
                    '90%': { transform: 'translate(-10%, 10%)' },
                }
            }
        },
    },
    plugins: [],
}
