<script>
	import { page } from '$app/state';
	let pathname = $derived(page.url.pathname);
</script>

<aside
	class="relative z-10 flex w-full flex-col border-gray-200 p-4 md:h-full md:w-64 md:pb-9 md:pt-9"
	style="background-color: var(--bg-sidebar)"
>
	<a href="/" class="hidden font-mono text-xs text-gray-400 hover:text-black md:block"
		>devinl.im</a
	>
	<div class="hidden flex-1 md:block"></div>
	<div class="mb-4">
		<div class="mb-6 text-center">
			<img src="/me.jpg" alt="Devin Lim" class="mx-auto mb-3 h-32 w-32 rounded-full object-cover grayscale" />
			<div class="font-mono text-xs text-black">Devin Lim</div>
			<div class="font-mono text-xs text-gray-400">aspiring sudo-scientist</div>
		</div>

		<p class="mb-3 font-mono text-xs leading-relaxed text-gray-400">
			Hi, I'm Devin — a Seattle-based engineer who likes building things end to end,
			from ML pipelines to the tooling that makes the rest of the work disappear.
			Most recently I was the founding engineer at Macfarlane; before that I spent a
			few years on Microsoft's fraud protection team and picked up a master's in data
			science along the way.
		</p>
		<p class="mb-3 font-mono text-xs leading-relaxed text-gray-400">
			Right now I'm heads-down on
			<a href="/projects/da-band" class="underline hover:text-black">da-band</a>,
			an EMG gesture-recognition wristband — muscle-sensing hardware, a real-time
			classification pipeline, and an iOS app to tie it together. I care a lot about
			open source, automation, and Unix. Away from the terminal you'll usually find me
			chasing a good high-mountain oolong, cooking, or falling over on a snowboard.
		</p>
		<p class="font-mono text-xs leading-relaxed text-gray-400">
			I'm currently looking for my next role — machine learning engineer, ML compiler
			engineer, or general software engineer. If any of that resonates,
			<a href="mailto:davay@devinl.im" class="underline hover:text-black">say hi</a>.
		</p>
	</div>

	<div class="hidden flex-1 md:block"></div>
	<nav class="mt-6 font-mono text-xs md:mt-0">
		<a href="/" class="mb-4 block hover:text-black {pathname === '/' ? 'text-black' : 'text-gray-400'}">/home</a>

		<div class="mb-4">
			<div class="mb-1 text-gray-400">writings</div>
			<a href="/blog" class="mb-1 ml-3 block hover:text-black {pathname.startsWith('/blog') ? 'text-black' : 'text-gray-400'}">/blog</a>
			<a href="/projects" class="ml-3 block hover:text-black {pathname.startsWith('/projects') ? 'text-black' : 'text-gray-400'}">/projects</a>
		</div>

		<div class="mb-4">
			<div class="mb-1 text-gray-400">links</div>
			<a href="https://linkedin.com/in/devinlim" class="mb-1 ml-3 block text-gray-400 hover:text-black">/linkedin</a>
			<a href="https://github.com/davay" class="ml-3 block text-gray-400 hover:text-black">/github</a>
		</div>

		<div>
			<div class="mb-1 text-gray-400">site</div>
			<a href="/resume.pdf" target="_blank" rel="noopener" class="mb-1 ml-3 block text-gray-400 hover:text-black">/resume</a>
			<a href="https://github.com/davay/devinl.im" class="mb-1 ml-3 block text-gray-400 hover:text-black">/source</a>
			<a href="/rss.xml" class="ml-3 block text-gray-400 hover:text-black">/rss</a>
		</div>
	</nav>
</aside>
