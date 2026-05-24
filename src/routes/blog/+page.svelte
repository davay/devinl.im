<script>
	import ContentList from '$lib/components/ContentList.svelte';
	let { data } = $props();
</script>

<svelte:head><title>blog — devinl.im</title></svelte:head>
<div>
	<div class="mb-4 flex flex-wrap items-baseline gap-x-4">
		<h1 class="font-mono text-lg text-black">Blog</h1>
	</div>
	<ContentList items={data.items} tags={data.tags} basePath="/blog" />
</div>
