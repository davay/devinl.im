import { collect, getTags } from './content';

const folder = import.meta.glob('./content/projects/**/index.md', { eager: true });
const flat = import.meta.glob('./content/projects/*.md', { eager: true });

export const getAllProjects = () => collect(folder, flat);
export const getAllTags = getTags;
