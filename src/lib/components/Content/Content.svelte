<script lang="ts">
  import { currentContent, selectedTag } from "$lib/stores";
</script>

<div class="flex-1 p-8" style="background-color: #fdfcfa">
  {#if $currentContent}
    <div class="max-w-2xl">
      <h1 class="font-mono text-[16px] mb-2 text-black font-normal">{$currentContent.title}</h1>
      <div class="font-mono mb-6 flex items-center gap-3">
        {#if $currentContent.date}
          <span class="text-[11px] text-gray-400 font-light">{$currentContent.date}</span>
        {/if}
        <div class="text-[11px] text-gray-400">
          {#each $currentContent.tags as tag}
            <button
              on:click={() => ($selectedTag = tag)}
              class="hover:text-black mr-3 font-light"
            >
              #{tag}
            </button>
          {/each}
        </div>
      </div>
      <div class="font-mono text-[11px] leading-relaxed text-black whitespace-pre-wrap markdown-content font-light">
        {@html $currentContent.content}
      </div>
    </div>
  {:else}
    <div class="text-gray-400 font-mono text-[11px] font-light">Select something to read...</div>
  {/if}
</div>
