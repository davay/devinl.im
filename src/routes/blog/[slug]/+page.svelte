<script>
	import Article from '$lib/components/Article.svelte';
	let { data } = $props();
</script>

<Article content={data.content} meta={data.meta} basePath="/blog" />
