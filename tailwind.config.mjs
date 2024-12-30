// tailwind.config.mjs
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Matches all files in the src folder
    './src/app/**/*.{js,ts,jsx,tsx}', // Matches files specifically in src/app
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#f252a2',
          600: '#e84398',
        },
      },
    },
  },
  plugins: [],
};
