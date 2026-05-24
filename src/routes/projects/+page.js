import { getAllProjects, getAllTags } from '$lib/projects';
import { loadIndex } from '$lib/content';

export const load = () => loadIndex(getAllProjects, getAllTags);
