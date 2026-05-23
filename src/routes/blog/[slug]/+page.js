import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/content/blog/${params.slug}/index.md`);
		return { content: post.default, meta: post.metadata };
	} catch {
		try {
			const post = await import(`../../../lib/content/blog/${params.slug}.md`);
			return { content: post.default, meta: post.metadata };
		} catch {
			throw error(404, `Post not found: ${params.slug}`);
		}
	}
}
