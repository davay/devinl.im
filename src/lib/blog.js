import { collect, getTags } from './content';

const folder = import.meta.glob('./content/blog/**/index.md', { eager: true });
const flat = import.meta.glob('./content/blog/*.md', { eager: true });

export const getAllPosts = () => collect(folder, flat);
export const getAllTags = getTags;
