// Rewrites relative image paths in markdown to Svelte imports so Vite processes and hashes them.
import { visit } from 'unist-util-visit';

export function remarkImages() {
    return (tree) => {
        const imports = [];
        let count = 0;

        visit(tree, 'image', (node) => {
            if (!node.url.startsWith('./') && !node.url.startsWith('../')) return;
            const varName = `__img${count++}__`;
            imports.push(`import ${varName} from '${node.url}';`);
            node.type = 'html';
            node.value = `<img src={${varName}} alt="${node.alt ?? ''}" />`;
        });

        if (imports.length > 0) {
            tree.children.unshift({
                type: 'html',
                value: `<script>\n${imports.join('\n')}\n</script>`
            });
        }
    };
}
