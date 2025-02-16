import { writable } from "svelte/store";
import type { Content } from "$lib/types";

export const currentContent = writable<Content | null>(null);
export const selectedTag = writable<string | null>(null);

export const currentSection = writable<"home" | "blog" | "projects">("blog");