// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // not strictly needed at the moment, but eh
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// mdsvex needs to know which extensions to treat as components
	extensions: ['.svelte', '.md'],

	// run vitePreprocess (TS/PostCSS/etc) AND mdsvex (markdown) on files
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},

	kit: {
		adapter: adapter()
	}
};

export default config;
