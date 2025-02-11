import TerserPlugin from 'terser-webpack-plugin';
import { getLoaders } from './loaders.js';
import { getPlugins } from './plugins.js';

export default (PATHS) => ({
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all', // Разделение кода для оптимизации
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Удаляем console.log в продакшн
          },
        },
      }),
    ],
  },
  plugins: getPlugins(false, PATHS),
  module: {
    rules: getLoaders(false),
  },
});
