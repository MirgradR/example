import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getLoaders = (isDev) => [
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  },
  {
    test: /\.ts(x)?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
  {
    test: /\.css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  },
  {
    test: /\.scss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name].[hash][ext]', // Путь для изображений
    },
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name].[hash][ext]',
    },
  },
];
