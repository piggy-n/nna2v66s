import path from 'path';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import libCss from 'vite-plugin-libcss';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [
        react(),
        libCss(),
        vanillaExtractPlugin(),
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
        target: 'es2015',
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
            plugins: [
                typescript({
                    tslib: path.resolve(process.cwd(), './node_modules/typescript'),
                    outDir: path.resolve(process.cwd(), './dist'),
                }),
            ],
        },
    },
});
