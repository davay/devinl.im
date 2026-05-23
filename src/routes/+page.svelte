<svelte:head><title>devinl.im</title></svelte:head>

<div>
	<div class="mb-3 flex flex-wrap items-baseline gap-x-4">
		<h1 class="font-mono text-lg text-black">Resume</h1>
		<span class="font-mono text-xs text-gray-400">January 18, 2026</span>
	</div>
	<iframe
		src="/resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
		title="Resume"
		class="block"
		style="aspect-ratio: 8.5/11; width: min(100%, calc((100vh - 8.5rem) * 8.5 / 11), 52rem)"
	></iframe>
	<a href="/resume.pdf" download class="mt-2 inline-block font-mono text-xs text-gray-400 hover:text-black">↓ download pdf</a>
</div>
