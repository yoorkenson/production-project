import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import fs from 'fs';

const WRONG_CODE = 'import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";';
export function reactVirtualized(): Plugin {
    return {
        name: 'flat:react-virtualized',
        // @ts-ignore
        configResolved() {
            const file = require
                .resolve('react-virtualized')
                .replace(
                    path.join('dist', 'commonjs', 'index.js'),
                    path.join('dist', 'es', 'WindowScroller', 'utils', 'onScroll.js'),
                );
            const code = fs.readFileSync(file, 'utf-8');
            const modified = code.replace(WRONG_CODE, '');
            fs.writeFileSync(file, modified);
        },
    };
}

export default defineConfig({
    plugins: [
        svgr({ exportAsDefault: true }),
        react(),
        reactVirtualized(),
    ],
    css: {
        modules: {
            generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        },
        preprocessorOptions: {
            scss: {
                api: 'modern',
                silenceDeprecations: ['mixed-decls'],
            },
        },
    },
    resolve: {
        alias: [
            {
                find: '@', replacement: '/src',
            },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
