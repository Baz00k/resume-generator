import typography from '@tailwindcss/typography';


/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'ebony': {
					'50': '#eef8ff',
					'100': '#e0f2ff',
					'200': '#c7e6fe',
					'300': '#a5d3fc',
					'400': '#81b7f8',
					'500': '#6399f1',
					'600': '#4575e6',
					'700': '#3861ca',
					'800': '#3052a3',
					'900': '#2e4981',
					'950': '#0f172a',
				},
			}
		}
	},

	plugins: [typography]
};

module.exports = config;
