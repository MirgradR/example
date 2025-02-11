import Dotenv from 'dotenv-webpack';

export default () => ({
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all', // Разделение кода для оптимизации
    },
  },
  plugins: [
    new Dotenv({
      path: `.env.test`, // Загрузка правильного .env файла
    }),
  ],
});
