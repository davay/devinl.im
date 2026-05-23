<script>
  import { page } from "$app/state";
  let pathname = $derived(page.url.pathname);
</script>

<aside
  class="relative z-10 flex w-full flex-col border-gray-200 p-4 md:h-full md:w-64 md:overflow-y-auto md:pb-9 md:pt-9"
  style="background-color: var(--bg-sidebar)"
>
  <a
    href="/"
    class="hidden bg-gray-900 px-2 py-0.5 font-mono text-xs text-white md:block"
    >devinl.im</a
  >

  <!-- h limit is tuned such that the space between /rss and bottom of page is equal to space between top of page and devinl.im at 2560x1440 -->
  <div class="hidden flex-1 md:block md:max-h-[502px] md:min-h-6"></div>

  <div class="hidden md:flex md:flex-col md:gap-6">
    <div class="text-center">
      <img
        src="/me.jpg"
        alt="Devin Lim"
        class="mx-auto mb-2.5 h-36 w-36 rounded-full object-cover grayscale"
      />
      <div class="font-mono text-sm text-black">Devin Lim</div>
      <div class="font-mono text-xs text-gray-450">aspiring sudo-scientist</div>
    </div>

    <p class="font-mono text-xs leading-relaxed text-gray-450">
      Product-focused engineer with an interest in ML, BCI, product design, and compilers. Most
      recently a founding engineer; before that on Microsoft's fraud protection
      team; recent MS in data science.
    </p>

    <p class="font-mono text-xs leading-relaxed text-gray-450">
      Currently building
      <a href="/projects/da-band" class="underline hover:text-black">da-band</a>
      — EMG wristband with muscle-sensing hardware, real-time classification, and
      an iOS app. Off the terminal: tea, cats, reading, raving, traveling, 3D printing.
    </p>

    <p
      class="border border-gray-400 p-1.5 font-mono text-xs leading-relaxed text-gray-450"
    >
      Looking for my next role — ML engineering, ML compiler engineering, or
      general software engineering. If any of that resonates,
      <a href="mailto:davay@devinl.im" class="underline hover:text-black"
        >say hi</a
      >.
    </p>

    <nav class="flex flex-col gap-2.5 font-mono text-xs">
      <a
        href="/"
        class="block hover:text-black {pathname === '/'
          ? 'text-black'
          : 'text-gray-450'}">/home</a
      >

      <div>
        <div class="mb-1 text-gray-450">writings</div>
        <div class="ml-2.5 space-y-1">
          <a
            href="/blog"
            class="block hover:text-black {pathname.startsWith('/blog')
              ? 'text-black'
              : 'text-gray-450'}">/blog</a
          >
          <a
            href="/projects"
            class="block hover:text-black {pathname.startsWith('/projects')
              ? 'text-black'
              : 'text-gray-450'}">/projects</a
          >
        </div>
      </div>

      <div>
        <div class="mb-1 text-gray-450">links</div>
        <div class="ml-2.5 space-y-1">
          <a
            href="https://linkedin.com/in/devinlim"
            class="block text-gray-450 hover:text-black">/linkedin</a
          >
          <a
            href="https://github.com/davay"
            class="block text-gray-450 hover:text-black">/github</a
          >
        </div>
      </div>

      <div>
        <div class="mb-1 text-gray-450">site</div>
        <div class="ml-2.5 space-y-1">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            class="block text-gray-450 hover:text-black">/resume</a
          >
          <a
            href="https://github.com/davay/devinl.im"
            class="block text-gray-450 hover:text-black">/source</a
          >
          <a href="/rss.xml" class="block text-gray-450 hover:text-black"
            >/rss</a
          >
        </div>
      </div>
    </nav>
  </div>
</aside>
