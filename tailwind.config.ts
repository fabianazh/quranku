import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                Gray: {
                    50: '#FEFFFE',
                    100: '#F1F1EF',
                    200: '#ECF0F3',
                },
                Green: {
                    100: '#E6FFFA',
                    200: '#B9F7DA',
                    300: '#7CC695',
                    400: '#3AB6AA',
                    500: '#185D61',
                },
            },
        },
    },
    plugins: [],
}
export default config
