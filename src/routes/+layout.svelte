<script>
	import './layout.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let open = $state(true);
	// afterNavigate(() => {
	// 	open = false;
	// }); // close menu on navigation
</script>

<svelte:head><link rel="icon" type="image/png" href="/favicon.png" /></svelte:head>

<!-- Mobile top bar -->
<div
	class="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 p-4 md:hidden"
	style="background-color: var(--bg-sidebar)"
>
	<a href="/" class="font-mono text-xs text-gray-400 hover:text-black">devinl.im</a>
	<button
		onclick={() => (open = !open)}
		class="font-mono text-sm text-gray-400 hover:text-black"
		aria-label="Toggle menu"
	>
		{open ? '✕' : '☰'}
	</button>
</div>

<div class="flex min-h-screen flex-col bg-white md:flex-row">
	<div
		class="{open ? 'block' : 'hidden'} md:sticky md:top-0 md:h-screen md:self-start md:border-r md:border-gray-200"
		style="background-color: var(--bg-sidebar)"
	>
		<Sidebar />
	</div>
	<main class="flex-1 p-6 md:px-8 md:pb-8 md:pt-9" style="background-color: var(--bg-content)">
		{@render children()}
	</main>
</div>
