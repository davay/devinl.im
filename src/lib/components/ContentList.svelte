<script>
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { fmtDate } from '$lib/fmtDate.js';
	let { items, tags, basePath } = $props();
	let activeTag = $derived(browser ? page.url.searchParams.get('tag') : null);
	let filteredItems = $derived(activeTag ? items.filter((p) => p.tags?.includes(activeTag)) : items);
</script>

<div class="max-w-2xl font-mono text-xs">
	<div class="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-gray-250 pb-4">
		<span class="text-gray-450">filter:</span>
		<a href={basePath} class="hover:text-black active:text-black {!activeTag ? 'text-black' : 'text-gray-450'}">{!activeTag ? '[all]' : 'all'}</a>
		{#each tags as tag (tag)}
			<a href="{basePath}?tag={tag}" class="hover:text-black active:text-black {activeTag === tag ? 'text-black' : 'text-gray-450'}">{activeTag === tag ? `[#${tag}]` : `#${tag}`}</a>
		{/each}
	</div>

	{#each filteredItems as item (item.slug)}
		<a href="{basePath}/{item.slug}" class="group mb-4 block">
			<div class="flex items-baseline justify-between gap-8">
				<span class="text-sm text-black group-hover:underline group-active:underline">{item.title ?? item.slug}</span>
				<span class="shrink-0 text-gray-450 transition-colors group-hover:text-black group-active:text-black">{fmtDate(item.date)}</span>
			</div>
			{#if item.description}
				<div class="mt-1 text-gray-450 transition-colors group-hover:text-black group-active:text-black">{item.description}</div>
			{/if}
		</a>
	{/each}
</div>
