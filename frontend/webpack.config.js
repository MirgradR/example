import { merge } from 'webpack-merge';
import common from './configs/webpack/common.js';
import devConfig from './configs/webpack/dev.js';
import prodConfig from './configs/webpack/prod.js';
import testConfig from './configs/webpack/test.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Получаем __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Определяем базовые пути
const PATHS = {
  src: resolve(__dirname, 'src'), // Путь к исходникам
  dist: resolve(__dirname, 'dist'), // Путь к папке сборки
  public: resolve(__dirname, 'public'), // Путь к статическим файлам (если есть)
  configs: resolve(__dirname, 'configs/webpack'), // Путь к конфигам
  directory: resolve(__dirname, './'), 
};

export default (env) => {
  const configMap = {
    development: devConfig(PATHS),
    production: prodConfig(PATHS),
    test: testConfig(PATHS),
  };

  console.log('Mode:', env.mode);
  return merge(common(PATHS), configMap[env.mode]);
};