import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglide({ project: './translations/settings.inlang', outdir: './src/lib/translations' }),
		sveltekit()
	]
});
