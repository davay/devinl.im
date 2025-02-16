import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import type { Content } from "$lib/types";

export async function getContent(
  type: "posts" | "projects",
): Promise<Content[]> {
  const dir = join(process.cwd(), "content", type);
  const files = await readdir(dir);

  const contents = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const { data, content } = matter(
          await readFile(join(dir, file), "utf-8")
        );
        return {
          ...data,
          slug: file.replace(".md", ""),
          content,
        } as Content;
      })
  );

  return contents.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
