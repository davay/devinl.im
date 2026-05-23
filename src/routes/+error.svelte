<script>
  import { page } from '$app/state';
</script>

<svelte:head><title>{page.status} — devinl.im</title></svelte:head>

<div class="max-w-2xl font-mono text-xs">
  <h1 class="font-mono text-lg text-black mb-2">{page.status}</h1>
  <p class="text-gray-450 mb-6">
    {#if page.status === 404}that page doesn't exist.{:else}{page.error?.message ?? 'something went wrong.'}{/if}
  </p>
  <a href="/blog" class="text-gray-450 hover:text-black underline">/blog</a>
</div>
