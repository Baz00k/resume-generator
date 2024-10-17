<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.css';
	import Header from '$components/Header.svelte';
</script>

<ParaglideJS {i18n}>
	<Header />
	<main class="w-full px-2 py-4 print:p-0">
		<div
			class="mx-auto h-full min-h-[29.7cm] w-full min-w-min max-w-[21cm] overflow-clip rounded-lg bg-gray-50 dark:bg-gray-100/10 print:absolute print:left-0 print:top-0 print:m-0 print:w-full print:rounded-none"
			id="resume"
		>
			<slot />
		</div>
	</main>
</ParaglideJS>
