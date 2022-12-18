/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '960px',
        'msm': { 'max': '639px' },
        'mmd': { 'max': '767px' },
        'short': { 'raw': '(max-height:300px) , (max-width: 390px)' },
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'Roboto': ['Roboto'],
      'Railway': ['Railway'],
    },
    plugins: [],
  }
}
