<script lang="ts">
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import Content from "$lib/components/Content/Content.svelte";
  import { currentSection, currentContent } from "$lib/stores";
  import type { Content as ContentType } from "$lib/types";
  import { onMount } from 'svelte';

  interface PageData {
    posts: ContentType[];
    projects: ContentType[];
    item?: ContentType;
    section?: string;
  }

  export let data: PageData;

  $: items = $currentSection === "blog" 
    ? data.posts 
    : $currentSection === "projects" 
      ? data.projects 
      : [];

  onMount(() => {
    if (data.item) {
      $currentContent = data.item;
      $currentSection = data.section;
    }
  });
</script>

<div class="flex min-h-screen min-w-full bg-white">
  <Sidebar {items} />
  <Content />
</div>
