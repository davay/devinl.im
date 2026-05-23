<script>
	import './layout.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let open = $state(true);
	afterNavigate((navigation) => {
		window.scrollTo(0, 0);
		if (navigation.from) open = false;
	});
</script>

<svelte:head><link rel="icon" type="image/png" href="/favicon.png" /></svelte:head>

<!-- Mobile top bar -->
<div
	class="sticky top-0 flex items-center justify-between p-4 md:hidden {open ? '' : 'border-b border-gray-250'}"
	style="background-color: var(--bg-sidebar)"
>
	<a href="/" class="bg-gray-900 px-2 py-0.5 font-mono text-sm text-white">devinl.im</a>
	<button
		onclick={() => (open = !open)}
		class="font-mono text-sm text-gray-450 hover:text-black"
		aria-label="Toggle menu"
	>
		{open ? '✕' : '☰'}
	</button>
</div>

<div class="halftone" style="transform: rotate(75deg);"></div>
<div class="halftone" style="transform: rotate(45deg);"></div>
<div class="flex min-h-screen flex-col bg-white md:flex-row">
	<div
		class="{open ? 'block' : 'hidden'} border-b border-gray-250 md:block md:border-b-0 md:sticky md:top-0 md:h-screen md:self-start md:border-r"
		style="background-color: var(--bg-sidebar)"
	>
		<Sidebar />
	</div>
	<main class="flex-1 p-6 md:px-8 md:pb-8 md:pt-9" style="background-color: var(--bg-content)">
		{@render children()}
	</main>
</div>
