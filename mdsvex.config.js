import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.mdx', '.svx'],

	smartypants: {
		dashes: 'oldschool',
		ellipses: true,
		quotes: true
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: {
		basic: '/src/layouts/basic/basic.svelte',
		tokyo: '/src/layouts/tokyo/tokyo.svelte',
		_: '/src/layouts/basic/basic.svelte'
	}
});

export default config;
