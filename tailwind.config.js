/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Poppins"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Poppins"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Poppins"', 'Helvetica Neue', 'Helvetica', 'Arial', 'serif'],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '2rem',
          xl: '1rem',
          '2xl': '1rem',
        },
      },
      screens: {
        'sm': '600px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024.98px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1280px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
