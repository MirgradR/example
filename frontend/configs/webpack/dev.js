import { fileURLToPath } from 'url';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import { getLoaders } from './loaders.js';
import { getPlugins } from './plugins.js';

const __filename = fileURLToPath(import.meta.url);

const smp = new SpeedMeasurePlugin();

export default (PATHS) =>
  smp.wrap({
    mode: 'development',
    devtool: 'inline-source-map',
    cache: {
      type: 'filesystem', // Кэширование на диске
      buildDependencies: {
        config: [__filename], // Отслеживание изменений в конфиге
      },
    },
    devServer: {
      static: PATHS.dist,
      open: true,
      hot: true,
      port: 8080,
      historyApiFallback: true, // Для корректной работы React Router
      compress: true, // Включаем gzip
      client: {
        overlay: true, // Показывать ошибки в браузере
        progress: true, // Показывать прогресс
      },
    },
    stats: 'errors-only', // Скрываем ненужную информацию
    plugins: getPlugins(true, PATHS),
    module: {
      rules: getLoaders(true),
    },
  });
