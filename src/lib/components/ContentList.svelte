<script>
	import { fmtDate } from '$lib/fmtDate.js';
	let { items, tags, activeTag, basePath } = $props();
</script>

<div class="max-w-2xl font-mono text-xs">
	<div class="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-gray-250 pb-4">
		<span class="text-gray-450">filter:</span>
		<a href={basePath} class="hover:text-black active:text-black {!activeTag ? 'text-black' : 'text-gray-450'}">{!activeTag ? '[all]' : 'all'}</a>
		{#each tags as tag (tag)}
			<a href="{basePath}?tag={tag}" class="hover:text-black active:text-black {activeTag === tag ? 'text-black' : 'text-gray-450'}">{activeTag === tag ? `[#${tag}]` : `#${tag}`}</a>
		{/each}
	</div>

	{#each items as item (item.slug)}
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
