// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
        colors: {
            slate: {
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            },
            blue: {
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            800: '#1e40af',
            900: '#1e3a8a',
            },
            cyan: {
            400: '#22d3ee',
            600: '#0891b2',
            }
        }
        }
    },
    plugins: [],
}
