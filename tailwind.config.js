/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './resources/**/*.blade.php',
      './resources/**/*.vue',
  ],
  theme: {
    extend: {
        flex: {
            '2': '2',
            '3': '3',
        }
    },
  },
  plugins: [],
}

