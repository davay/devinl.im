import { getAllProjects, getAllTags } from '$lib/projects';
import { loadIndex } from '$lib/content';

export const load = ({ url }) => loadIndex(getAllProjects, getAllTags, url);
