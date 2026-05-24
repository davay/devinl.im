import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex'; // editor type hinting and etc
import { codeToHtml } from 'shiki';
import { remarkImages } from './src/lib/remark-images.js';

const config = defineConfig({
	extensions: ['.md'],
	smartypants: true,
	remarkPlugins: [remarkImages],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(await codeToHtml(code, { lang, theme: 'github-light' })); // so we don't have to define a list of langs and download all of those grammars -- just grabs it from the info string (lang identifier e.g., ```python')

			return `{@html \`${html}\`}`;
		}
	}
});

export default config;
