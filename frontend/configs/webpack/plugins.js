import { resolve } from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import Dotenv from 'dotenv-webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import WebpackBar from 'webpackbar';

export const getPlugins = (isDev, PATHS) => [
  new HtmlWebpackPlugin({
    template: resolve(PATHS.src, 'index.html'), // Путь к шаблону HTML
  }),
  new Dotenv({
    path: isDev
      ? resolve(PATHS.directory, '.env.development')
      : resolve(PATHS.directory, '.env.production'),
  }),
  new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  }),
  new StylelintPlugin({
    files: '**/*.{css,scss}',
    fix: true,
  }),
  ...(isDev
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBar({
          name: 'Development Build',
          color: '#61dafb',
        }),
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
        }),
        new ReactRefreshWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
          async: false,
        }),
        new CircularDependencyPlugin({
          failOnError: true,
          exclude: /node_modules/,
          include: /src/,
        }),
      ]
    : [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
        new WebpackManifestPlugin(),
      ]),
];
