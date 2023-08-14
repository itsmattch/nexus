/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.vue',
    ],
    safelist: [
        {
            pattern: /(bg|text|border)-(slate|red|amber|green|sky)/,
        }
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

