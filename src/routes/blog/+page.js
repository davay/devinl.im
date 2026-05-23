import { getAllPosts, getAllTags } from '$lib/blog';
import { loadIndex } from '$lib/content';

export const load = ({ url }) => loadIndex(getAllPosts, getAllTags, url);
