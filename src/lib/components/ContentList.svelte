<script>
	let { items, tags, activeTag, basePath } = $props();
	const fmt = (d) =>
		new Date(d).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		});
</script>

<div class="max-w-2xl font-mono text-xs">
	<div class="mb-6 flex flex-wrap gap-2">
		<a href={basePath} class="hover:text-black {!activeTag ? 'text-black' : 'text-gray-400'}">#all</a>
		{#each tags as tag (tag)}
			<a href="{basePath}?tag={tag}" class="hover:text-black {activeTag === tag ? 'text-black' : 'text-gray-400'}">#{tag}</a>
		{/each}
	</div>

	{#each items as item (item.slug)}
		<a href="{basePath}/{item.slug}" class="group mb-4 block">
			<div class="flex items-baseline justify-between gap-8">
				<span class="text-black">{item.title ?? item.slug}</span>
				<span class="shrink-0 text-gray-400">{fmt(item.date)}</span>
			</div>
			{#if item.description}
				<div class="mt-1 text-gray-400">{item.description}</div>
			{/if}
		</a>
	{/each}
</div>
