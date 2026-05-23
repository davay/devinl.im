<script>
	import ContentList from '$lib/components/ContentList.svelte';
	let { data } = $props();
</script>

<svelte:head><title>blog — devinl.im</title></svelte:head>
<ContentList items={data.items} tags={data.tags} activeTag={data.activeTag} basePath="/blog" />
