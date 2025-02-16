<script lang="ts">
  import { currentContent, selectedTag, currentSection } from "$lib/stores";
  import type { Content } from "$lib/types";

  export let items: Content[] = [];

  $: allTags = [...new Set(items.flatMap((item) => item.tags))].sort();
  $: filteredItems = items.filter((item) =>
    typeof $selectedTag === "string" ? item.tags.includes($selectedTag) : true,
  );
  $: showContent = $currentSection !== "home";
</script>

<div
  class="w-64 min-w-[16rem] max-w-[16rem] border-r border-gray-200 shadow-lg relative z-10 h-screen"
  style="background-color: #f7f5f3"
>
  <div class="p-4 flex flex-col h-full">
    <!-- Header -->
    <div class="mb-8 font-mono text-[11px] text-[#9ca3af] font-light">
      devinl.im
    </div>

    <!-- Flex container for content and navigation -->
    <div class="flex flex-col flex-grow justify-between">
      <!-- Content section -->
      <div class="w-full">
        {#if showContent}
          <div class="mb-8">
            <div class="text-[#9ca3af] font-mono text-[11px] mb-2">
              /{$currentSection}
            </div>
            {#each filteredItems as item}
              <button
                on:click={() => {
                  $currentContent = item;
                  window.history.pushState({}, '', `/${$currentSection}/${item.slug}`);
                }}
                class="text-[#9ca3af] hover:text-black mb-1 font-mono text-[11px] block w-full text-left pl-4 font-light appearance-none bg-transparent border-0 truncate"
                class:text-black={$currentContent?.slug === item.slug}
                class:font-normal={$currentContent?.slug === item.slug}
              >
                /{item.slug}
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Navigation section -->
      <div class="w-full font-mono text-[11px]">
        {#if showContent}
          <!-- Tags -->
          <div class="mb-8">
            <button
              on:click={() => ($selectedTag = null)}
              class="inline-block mr-2 mb-[2px] hover:text-black font-light appearance-none bg-transparent border-0 {!$selectedTag
                ? 'text-black'
                : 'text-[#9ca3af]'}"
            >
              #all
            </button>
            {#each allTags as tag}
              <button
                on:click={() => ($selectedTag = tag)}
                class="inline-block mr-2 mb-[2px] hover:text-black font-light appearance-none bg-transparent border-0 {$selectedTag ===
                tag
                  ? 'text-black'
                  : 'text-[#9ca3af]'}"
              >
                #{tag}
              </button>
            {/each}
          </div>
        {/if}

        <!-- Group 1: Main navigation -->
        <div class="space-y-[2px] mb-8">
          <button
            on:click={() => {
              $currentSection = "home";
              $currentContent = null;
              $selectedTag = null;
              window.history.pushState({}, '', '/home');
            }}
            class="block hover:text-black text-left w-full font-light appearance-none bg-transparent border-0 {$currentSection ===
            'home'
              ? 'text-black'
              : 'text-[#9ca3af]'}"
          >
            /home
          </button>
          <button
            on:click={() => {
              $currentSection = "blog";
              $currentContent = null;
              $selectedTag = null;
              window.history.pushState({}, '', '/blog');
            }}
            class="block hover:text-black text-left w-full font-light appearance-none bg-transparent border-0 {$currentSection ===
            'blog'
              ? 'text-black'
              : 'text-[#9ca3af]'}"
          >
            /blog
          </button>
          <button
            on:click={() => {
              $currentSection = "projects";
              $currentContent = null;
              $selectedTag = null;
              window.history.pushState({}, '', '/projects');
            }}
            class="block hover:text-black text-left w-full font-light appearance-none bg-transparent border-0 {$currentSection ===
            'projects'
              ? 'text-black'
              : 'text-[#9ca3af]'}"
          >
            /projects
          </button>
        </div>

        <!-- Group 2: External links -->
        <div class="space-y-[2px] mb-8">
          <a
            href="/resume"
            class="block hover:text-black text-[#9ca3af] font-light">/resume</a
          >
          <a
            href="https://github.com"
            class="block hover:text-black text-[#9ca3af] font-light">/github</a
          >
          <a
            href="https://linkedin.com"
            class="block hover:text-black text-[#9ca3af] font-light"
            >/linkedin</a
          >
        </div>

        <!-- Group 3: RSS -->
        <div class="mb-8">
          <a
            href="/rss.xml"
            class="block hover:text-black text-[#9ca3af] font-light">/rss</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
