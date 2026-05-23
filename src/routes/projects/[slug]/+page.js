import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const proj = await import(`../../../lib/content/projects/${params.slug}/index.md`);
		return { content: proj.default, meta: proj.metadata };
	} catch {
		try {
			const proj = await import(`../../../lib/content/projects/${params.slug}.md`);
			return { content: proj.default, meta: proj.metadata };
		} catch {
			throw error(404, `Project not found: ${params.slug}`);
		}
	}
}
