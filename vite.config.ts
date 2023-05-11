import path from 'path';
import react from '@vitejs/plugin-react';
import libCss from 'vite-plugin-libcss';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig(
    ({ command }) => ({
        plugins: [
            react(),
            libCss(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), './src/packages/assets/icons')],
                symbolId: 'ws-[name]',
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(process.cwd(), './src'),
            },
        },
        build: {
            target: command === 'serve' ? 'esnext' : 'es2015',
            lib: {
                entry: path.resolve(process.cwd(), './src/packages/index.ts'),
                name: 'index',
                fileName: format => `index.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        'react': 'React',
                        'react-dom': 'ReactDOM',
                    },
                },
            },
        },
    }),
);
