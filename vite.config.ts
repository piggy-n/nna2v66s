import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        createSvgIconsPlugin({
            // 配置svg存放的文件夹，默认为src/packages/assets/icons
            iconDirs: [path.resolve(process.cwd(), 'src/packages/assets/icons')],
            // 配置symbolId格式，默认为ws+名字
            symbolId: 'ws-[name]',
        }),
    ],
});
