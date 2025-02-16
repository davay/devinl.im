import { getContent } from "$lib/server/content"; // We'll move content.ts to server/
import type { Content } from "$lib/types";

export const load = async () => {
  const [posts, projects] = await Promise.all([
    getContent("posts"),
    getContent("projects"),
  ]);

  return {
    posts,
    projects,
  };
};
