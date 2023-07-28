import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],

	theme: {
		extend: {
			colors: {
				dark: '#0f172a'
			}
		}
	},

	plugins: [typography]
};

module.exports = config;
