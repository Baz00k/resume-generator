<script lang="ts">
	import { languageTag, availableLanguageTags } from '$lib/translations/runtime';
	import type { AvailableLanguageTag } from '$lib/translations/runtime';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const handleLanguageChange = (event: Event) => {
		const select = event.target as HTMLSelectElement;
		const newLanguageTag = select.value as AvailableLanguageTag;

		goto(i18n.resolveRoute(i18n.route($page.url.pathname), newLanguageTag));
	};

	const getLanguageDisplayName = (tag: AvailableLanguageTag) => {
		return new Intl.DisplayNames([languageTag()], { type: 'language' }).of(tag.toUpperCase());
	};
</script>

{#if availableLanguageTags.length > 1}
	<select
		class="flex rounded-full border-none bg-gray-200 py-2 pl-4 pr-10 capitalize outline-none ring-inset transition-colors duration-300 ease-in-out hover:bg-gray-300 focus-visible:ring-2 focus-visible:ring-gray-500 dark:bg-gray-100/10 dark:hover:bg-gray-100/20"
		value={languageTag()}
		on:change={handleLanguageChange}
	>
		{#each availableLanguageTags as tag}
			<option value={tag}>
				{getLanguageDisplayName(tag)}
			</option>
		{/each}
	</select>
{/if}
