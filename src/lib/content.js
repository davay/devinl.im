function slugFromPath(path) {
	return path.replace('/index.md', '').replace(/\.md$/, '').split('/').pop();
}

export function collect(folderGlob, flatGlob) {
	const all = { ...folderGlob, ...flatGlob };
	return Object.entries(all)
		.map(([path, mod]) => ({ slug: slugFromPath(path), ...mod.metadata }))
		.filter((item) => !item.draft)
		.sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0));
}

export function getTags(items) {
	return [...new Set(items.flatMap((p) => p.tags ?? []))].sort();
}

export function loadIndex(getAll, getTags, url) {
	const items = getAll();
	const tag = url.searchParams.get('tag');
	return {
		items: tag ? items.filter((p) => p.tags?.includes(tag)) : items,
		tags: getTags(items),
		activeTag: tag
	};
}
