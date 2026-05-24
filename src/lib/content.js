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

export function loadIndex(getAll, getTags) {
	const items = getAll();
	return {
		items,
		tags: getTags(items)
	};
}
