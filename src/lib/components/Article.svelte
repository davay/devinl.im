<script>
	import { fmtDate } from '$lib/fmtDate.js';
	let { content, meta, basePath } = $props();
	const Content = $derived(content);

	const posted = $derived(fmtDate(meta.date));
	const updated = $derived(meta.updated ? fmtDate(meta.updated) : null);
	const dateStr = $derived(updated ? `${posted} (edited ${updated})` : posted);
</script>

<svelte:head><title>{meta.title} — devinl.im</title></svelte:head>

<article class="max-w-2xl">
	<a href={basePath} class="mb-6 block font-mono text-xs text-gray-450 hover:text-black">← {basePath}</a>
	<div class="mb-2 flex items-baseline justify-between gap-8">
		<h1 class="font-mono text-lg text-black">{meta.title}</h1>
		<span class="shrink-0 font-mono text-xs text-gray-450">{dateStr}</span>
	</div>
	<div class="mb-8 font-mono text-xs text-gray-450">
		{#each meta.tags ?? [] as tag}
			<a href="{basePath}?tag={tag}" class="mr-3 hover:text-black">#{tag}</a>
		{/each}
	</div>
	<div class="prose-post font-mono text-xs leading-relaxed text-black"><Content /></div>
</article>
