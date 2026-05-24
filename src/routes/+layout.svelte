<script>
	import './layout.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let { children } = $props();
	let open = $state(false);
	let activeDropdown = $state(null);
	let pathname = $derived(page.url.pathname);

	afterNavigate(() => {
		window.scrollTo(0, 0);
		open = false;
		activeDropdown = null;
	});

	function toggle(name) {
		activeDropdown = activeDropdown === name ? null : name;
	}
</script>

<svelte:head><link rel="icon" type="image/png" href="/favicon.png" /></svelte:head>

<!-- Mobile top bar -->
<div
	class="sticky top-0 z-10 md:hidden"
	style="background-color: var(--bg-sidebar)"
>
	<div class="flex items-center gap-3 border-b border-gray-250 px-4 py-2">
		<a href="/" class="shrink-0 bg-gray-900 px-2 py-0.5 font-mono text-sm text-white">devinl.im</a>
		<nav class="flex flex-1 items-center gap-3 font-mono text-xs">
			<div class="relative shrink-0">
				<button
					onclick={() => toggle('writings')}
					class="hover:text-black {activeDropdown === 'writings' ? 'text-black underline underline-offset-2' : 'text-gray-450 underline decoration-dotted underline-offset-2'}"
				>{activeDropdown === 'writings' ? '[writings]' : 'writings'}</button>
				{#if activeDropdown === 'writings'}
					<div class="absolute left-0 top-full z-20 flex flex-col divide-y divide-gray-250 border border-gray-250" style="background-color: var(--bg-sidebar)">
						<a href="/blog" class="block px-3 py-1 text-gray-450 transition-colors hover:bg-[#eeecea] hover:text-black active:bg-[#eeecea] active:text-black">/blog</a>
						<a href="/projects" class="block px-3 py-1 text-gray-450 transition-colors hover:bg-[#eeecea] hover:text-black active:bg-[#eeecea] active:text-black">/projects</a>
					</div>
				{/if}
			</div>

			<div class="relative shrink-0">
				<button
					onclick={() => toggle('links')}
					class="hover:text-black {activeDropdown === 'links' ? 'text-black underline underline-offset-2' : 'text-gray-450 underline decoration-dotted underline-offset-2'}"
				>{activeDropdown === 'links' ? '[links]' : 'links'}</button>
				{#if activeDropdown === 'links'}
					<div class="absolute left-0 top-full z-20 flex flex-col divide-y divide-gray-250 border border-gray-250" style="background-color: var(--bg-sidebar)">
						<a href="https://linkedin.com/in/devinlim" target="_blank" rel="noopener" class="block px-3 py-1 text-gray-450 transition-colors hover:bg-[#eeecea] hover:text-black active:bg-[#eeecea] active:text-black">/linkedin</a>
						<a href="https://github.com/davay" target="_blank" rel="noopener" class="block px-3 py-1 text-gray-450 transition-colors hover:bg-[#eeecea] hover:text-black active:bg-[#eeecea] active:text-black">/github</a>
					</div>
				{/if}
			</div>

			<div class="relative shrink-0">
				<button
					onclick={() => toggle('site')}
					class="hover:text-black {activeDropdown === 'site' ? 'text-black underline underline-offset-2' : 'text-gray-450 underline decoration-dotted underline-offset-2'}"
				>{activeDropdown === 'site' ? '[site]' : 'site'}</button>
				{#if activeDropdown === 'site'}
					<div class="absolute left-0 top-full z-20 flex flex-col divide-y divide-gray-250 border border-gray-250" style="background-color: var(--bg-sidebar)">
						<a href="/resume.pdf" target="_blank" rel="noopener" class="block px-3 py-1 text-gray-450 transition-colors hover:bg-[#eeecea] hover:text-black active:bg-[#eeecea] active:text-black">/resume</a>
						<a href="https://github.com/davay/devinl.im" target="_blank" rel="noopener" class="block px-3 py-1 text-gray-450 transition-colors hover:bg-[#eeecea] hover:text-black active:bg-[#eeecea] active:text-black">/source</a>
						<a href="/rss.xml" class="block px-3 py-1 text-gray-450 transition-colors hover:bg-[#eeecea] hover:text-black active:bg-[#eeecea] active:text-black">/rss</a>
					</div>
				{/if}
			</div>
		</nav>
		<button
			onclick={() => (open = !open)}
			class="shrink-0 font-mono text-sm text-gray-450 hover:text-black"
			aria-label="Toggle bio"
		>{open ? '✕' : '☰'}</button>
	</div>
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
