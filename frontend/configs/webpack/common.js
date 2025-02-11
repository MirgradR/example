import { resolve } from 'path';

export default (PATHS) => ({
  entry: resolve(PATHS.src, 'index.tsx'), // Главная точка входа
  output: {
    filename: '[name].[contenthash].js', // Уникальные имена файлов
    path: PATHS.dist, // Папка для сборки
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'], // Разрешать JS и JSX
    alias: {
      '@': PATHS.src, // Алиас для src
    },
  },
});
